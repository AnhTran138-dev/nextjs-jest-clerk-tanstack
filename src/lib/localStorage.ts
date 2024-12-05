export const setItem = (key: string, value: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    throw new Error(`LocalStorage Error: ${error}`)
  }
}

export const getItem = (key: string) => {
  try {
    const item = window.localStorage.getItem(key)

    return item ? JSON.parse(item) : undefined
  } catch (error) {
    throw new Error(`LocalStorage Error: ${error}`)
  }
}

export const removeItem = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    throw new Error(`LocalStorage Error: ${error}`)
  }
}
