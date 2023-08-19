import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px", 
      },
      fontFamily: {
        "source-sans-pro": "'Source Sans Pro'",
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
export default config;
