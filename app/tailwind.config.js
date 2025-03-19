/** @type {import('tailwindcss').Config} */
const essentialTailwindClasses = [
  // Layout y posicionamiento
  "block", // display: block;
  "inline-block", // display: inline-block;
  "inline", // display: inline;
  "flex", // display: flex;
  "grid", // display: grid;
  "hidden", // display: none;
  "absolute", // position: absolute;
  "relative", // position: relative;
  "fixed", // position: fixed;
  "static", // position: static;
  "top-0", // top: 0;
  "right-0", // right: 0;
  "bottom-0", // bottom: 0;
  "left-0", // left: 0;
  "z-0", // z-index: 0;
  "z-10", // z-index: 10;
  "z-20", // z-index: 20;

  // Espaciado
  "m-0", // margin: 0;
  "mx-0", // margin-left: 0; margin-right: 0;
  "my-0", // margin-top: 0; margin-bottom: 0;
  "p-0", // padding: 0;
  "px-0", // padding-left: 0; padding-right: 0;
  "py-0", // padding-top: 0; padding-bottom: 0;
  "space-x-4", // margin-left: 1rem; (ejemplo)
  "space-y-4", // margin-top: 1rem; (ejemplo)

  // Tamaños
  "w-full", // width: 100%;
  "h-full", // height: 100%;
  "w-screen", // width: 100vw;
  "h-screen", // height: 100vh;
  "w-1/2", // width: 50%;
  "h-1/2", // height: 50%;
  "max-w-md", // max-width: 28rem; (ejemplo)
  "min-h-screen", // min-height: 100vh;

  // Tipografía
  "text-sm", // font-size: 0.875rem;
  "text-base", // font-size: 1rem;
  "text-lg", // font-size: 1.125rem;
  "font-bold", // font-weight: 700;
  "font-medium", // font-weight: 500;
  "font-light", // font-weight: 300;
  "text-left", // text-align: left;
  "text-center", // text-align: center;
  "text-right", // text-align: right;

  // Colores
  "text-gray-500", // color: #6B7280; (ejemplo)
  "bg-white", // background-color: #FFFFFF;
  "bg-gray-200", // background-color: #E5E7EB; (ejemplo)
  "border-gray-300", // border-color: #D1D5DB; (ejemplo)
  "placeholder-gray-400", // placeholder-color: #9CA3AF; (ejemplo)

  // Bordes
  "border", // border-width: 1px;
  "rounded", // border-radius: 0.25rem;
  "rounded-md", // border-radius: 0.375rem;
  "rounded-lg", // border-radius: 0.5rem;
  "border-t", // border-top-width: 1px;
  "border-b", // border-bottom-width: 1px;
  "border-l", // border-left-width: 1px;
  "border-r", // border-right-width: 1px;

  // Interacción
  "cursor-pointer", // cursor: pointer;
  "focus:outline-none", // outline: 2px solid transparent; outline-offset: 2px;
  "hover:opacity-90", // opacity: .9;
  "disabled:opacity-50", // opacity: .5;

  // Efectos visuales
  "opacity-100", // opacity: 1;
  "shadow", // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  "shadow-md", // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  "transition-all", // transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;
];
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [...essentialTailwindClasses],
};
