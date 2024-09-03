import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import ui from "@headlessui/tailwindcss";

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        focused: colors.gray[200],
        unfocused: colors.gray[500],
      },
    },
  },
  plugins: [ui({ prefix: "ui" })],
} satisfies Config;
