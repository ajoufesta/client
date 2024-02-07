import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        footer: "10.4rem",
        whole_width: "37.5rem",
        whole_height: "81.2rem",
        icon: "3.263rem",
      },
      backgroundImage: {
        "skyBlue-gradient":
          "radial-gradient( circle at 70% -20%, rgba(4, 127, 254, 0.6) 15%, rgba(0, 208, 236, 0.3) 15%, transparent 40%);",
      },

      colors: {
        lightBlue: {
          100: "rgb(0, 91, 225, 0.05)",
          200: "rgba(0, 91, 225, 0.1)",
          300: "rgba(0, 91, 225, 0.2)",
          400: "rgba(0, 91, 225, 0.3)",
        },
        blue: {
          50: "rgba(0, 91, 225, 0.4)",
          100: "rgba(0, 91, 225, 0.5)",
          200: "rgba(0, 91, 225, 0.6)",
          300: "rgba(0, 91, 225, 0.7)",
          400: "rgba(0, 91, 225, 0.8)",
          500: "rgba(0, 91, 225, 0.9)",
          600: "rgba(0, 91, 225, 1)",
          900: "#001234",
        },
      },
    },
  },
  plugins: [],
};
export default config;
