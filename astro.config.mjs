import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solid from "@astrojs/solid-js";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    integrations: [
        tailwind(),
        solid(),
    ],
    output: "server", // 🚀 Si usas SSR, asegúrate de definirlo
    adapter: {
        name: '@astrojs/node',
        options: {
            mode: 'standalone' // 🔥 Especifica el modo requerido
        }
    }
});