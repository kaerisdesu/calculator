export const theme = {
  backgroud: "#000000",
  display: {
    primary: "#ffffff",
    expression: "#9c9c9c",
  },
  button: {
    number: { bg: "#333333", fg: "#ffffff" },
    operator: { bg: "#ff9f0a", fg: "#ffffff" },
    function: { bg: "#a5a5a5", fg: "#000000" },
    error: { bg: "#7a1f1f", fg: "#ffffff" },
  },
  spacing: 6,
} as const;

export type ButtonVariant = keyof typeof theme.button;
