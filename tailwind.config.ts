import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "skyBlue-gradient":
          "radial-gradient( circle at 70% -20%, rgba(4, 127, 254, 0.6) 15%, rgba(0, 208, 236, 0.3) 15%, transparent 40%);",
      },

      colors: {
        blue: {
          100: "#E6EFFC",
          200: "#CCDEF9",
          300: "#366FC2",
          400: "#005BE1",
          500: "#003275",
          600: "#00285C",
          700: "#001D44",
          800: "#001234",
        },
        transparentBlue: {
          100: "rgba(230, 239, 252, 0.5)",
          200: "rgba(204, 222, 249, 0.7)",
          300: "rgba(0,91,225,0.8)",
        },
        transparentWhite: {
          100: "rgba(255, 255, 255, 0.5)",
          200: "rgba(255, 255, 255, 0.7)",
          300: "rgba(255, 255, 255, 0.9)",
        },
        gray: {
          50: "#F0F0F0",
          100: "#F5F5F5",
          200: "#BFBFBF",
          300: "#444444",
        },
        icon: {
          1: "#047FFE",
          2: "#00D0EC",
          3: "#80D0EC",
        },
      },
    },
  },
  plugins: [],
};
export default config;
