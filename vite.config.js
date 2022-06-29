import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/vite-plugin-yext-sites-ssg";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [react(), yextSSG(), imagetools()],
});
