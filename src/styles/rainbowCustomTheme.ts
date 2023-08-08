import merge from "lodash/merge";
import {
  darkTheme as rainbowDarkTheme,
  lightTheme as rainbowLightTheme,
  Theme,
} from "@rainbow-me/rainbowkit";

const common: Partial<Theme> = {
  colors: {
    accentColor: "rgb(var(--c-primary-600))",
    accentColorForeground: "rgb(var(--c-neutral-50))",
  },
  radii: {
    connectButton: "9999px",
  },
} as Theme;

const darkTheme = merge(rainbowDarkTheme(), common, {
  colors: {
    connectButtonBackground: "rgba(0,0,0,0.2)",
    connectButtonInnerBackground: "rgba(0,0,0,0.2)",
    connectButtonText: "rgb(var(--c-neutral-200))",
    modalBackground: "rgb(var(--c-neutral-900))",
    profileForeground: "rgb(var(--c-neutral-900))",
    profileAction: "rgba(0,0,0,0.2)",
    profileActionHover: "rgba(0,0,0,0.3)",
    closeButton: "rgb(var(--c-neutral-200))",
    closeButtonBackground: "rgba(0,0,0,0.3)",
  },
} as Theme);

const lightTheme = merge(rainbowLightTheme(), common, {
  colors: {
    connectButtonBackground: "rgba(var(--c-neutral-100), 0.8)",
    connectButtonInnerBackground: "rgba(var(--c-neutral-100), 0.8)",
    connectButtonText: "rgb(var(--c-neutral-900))",
    modalBackground: "#ffffff",
    profileForeground: "#ffffff",
    profileAction: "rgba(var(--c-neutral-100), 0.8)",
    profileActionHover: "rgba(var(--c-neutral-100), 0.9)",
    closeButton: "rgb(var(--c-neutral-900))",
    closeButtonBackground: "rgba(var(--c-neutral-100), 0.9)",
  },
} as Theme);

export const customThemes = {
  lightTheme,
  darkTheme,
};
