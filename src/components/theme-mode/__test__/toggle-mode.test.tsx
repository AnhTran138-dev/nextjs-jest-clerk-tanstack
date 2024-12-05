import * as React from "react";
import { render, screen } from "@testing-library/react";
import { useTheme } from "next-themes";
import { ThemeProvider } from "@/components/theme-mode/theme-provider";
import { ModeToggle } from "@/components/theme-mode/toggle-mode";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

const setThemeMock = jest.fn();

(useTheme as jest.Mock).mockReturnValue({
  setTheme: setThemeMock,
});

describe("ModeToggle", () => {
  beforeEach(() => {
    setThemeMock.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ModeToggle />
      </ThemeProvider>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
