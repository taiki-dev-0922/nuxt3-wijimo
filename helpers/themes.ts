import { ThemeDefinition } from "vuetify";

// テーマ名
export const MAIN_THEME = "mainTheme";
// Light mode theme
export const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#E8F5E9",
    appBar: "#4CAF50",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

// Dark モードのテーマ名
export const MAIN_DARK_THEME = "mainDarkTheme";
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#0C111B",
    surface: "#1f2937",
    appBar: "#1f2937",
    primary: "#6366f1",
    secondary: "#9333ea",
    error: "#ef4444",
    info: "#3b82f6",
    success: "#22c55e",
    warning: "#f59e0b",
  },
};
