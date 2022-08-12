import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

import fs from 'fs';
import { resolve } from 'path';
import { homedir } from 'os';

let host = 'moonton.test';
let homeDir = homedir();

let serverConfig = {};

if (homeDir) {
    serverConfig = {
        https: {
            key: fs.readFileSync(resolve(homeDir, `.config/valet/Certificates/${host}.key`)),
            cert: fs.readFileSync(resolve(homeDir, `.config/valet/Certificates/${host}.crt`)),
        },
        hmr: {
            host: host,
        },
        host: host,
    };
}


export default defineConfig({
    server: serverConfig,
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
