import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

export default defineConfig({
  plugins: [react(), yextSSG()],
  ssr: {
    platform: "node",
  },
  build: {
    rollupOptions: {
      external: ["ssh2-sftp-client"],
    },
  },
});
