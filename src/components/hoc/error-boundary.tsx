import React, { Component, ErrorInfo } from "react"

interface State {
  hasError: boolean
  error: Error | null
}

const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  debounceTime: number = 300
) => {
  return class ErrorBoundary extends Component<P, State> {
    private debounceTimer: ReturnType<typeof setTimeout> | null = null

    constructor(props: P) {
      super(props)
      this.state = {
        hasError: false,
        error: null,
      }
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error("Error caught by ErrorBoundary:", error, errorInfo)
    }

    componentDidUpdate(_prevProps: P, prevState: State) {
      if (this.state.hasError && !prevState.hasError) {
        if (this.debounceTimer) {
          clearTimeout(this.debounceTimer)
        }
        this.debounceTimer = setTimeout(() => {
          this.setState({ hasError: false, error: null })
        }, debounceTime)
      }
    }

    componentWillUnmount() {
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer)
      }
    }

    render() {
      if (this.state.hasError) {
        return <div>Something went wrong.</div>
      }

      return <WrappedComponent {...this.props} />
    }
  }
}

export default withErrorBoundary
