import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#f0f2f5',
        secondary:'#ff813f',
        tertiary:'#222222',
        slate:{
          10:'#f1f3f4',
        },
        green:{
          50:'#30AF5B',
          100:'#292c27',
        },gray:{
          10:'#eeeeee',
          20:'#a2a2a2',
          30:'#787878',
          50:'#585858',
          90:'#141414',
        },
      },
      fontFamily: {
        nunito:['var(--font-nunito)'],
      },
      backgroundImage:{
        hero:"url('/src/assets/bgecom.png')",
        banneroffer:"url('/src/assets/banneroffer.png')",
        pattern:"url('/pattern.png')",
        "footer-pattern":"url('/footer-pattern.png')"
      },
      screens:{
        xs:'400px',
        '3xl':'1680px',
        '4xl':'2200px',
      },
      maxWidth:{
        '10xl':'1512px',
      },
      borderRadius:{
        '5xl':'40px',
      },
    },
  },
  plugins: [],
};
export default config;
