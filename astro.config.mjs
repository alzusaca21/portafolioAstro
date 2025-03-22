import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solid from "@astrojs/solid-js";
import dotenv from "dotenv";
import netlify from '@astrojs/netlify';

dotenv.config();

export default defineConfig({
    integrations: [
        tailwind(),
        solid(),
    ],
    output: "server",
    adapter: netlify() 
});