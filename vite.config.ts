import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs/promises';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');

    return {
        // Base URL for assets. Set VITE_BASE to "/repo-name/" for GitHub Pages.
        base: '/portfolio/',
        plugins: [
            react(),
            {
                name: 'copy-static-images',
                apply: 'build',
                async closeBundle() {
                    const sourceDir = path.resolve(__dirname, 'src/images');
                    const targetDir = path.resolve(__dirname, 'dist/src/images');
                    try {
                        await fs.mkdir(targetDir, { recursive: true });
                        // Node 16+ supports fs.cp with recursive
                        // @ts-ignore
                        await fs.cp(sourceDir, targetDir, { recursive: true });
                        // eslint-disable-next-line no-empty
                    } catch {}
                }
            },
            ...(mode === 'production'
                ? [
                      ViteImageOptimizer({
                          jpg: {
                              quality: 70,
                          },
                          jpeg: {
                              quality: 70,
                          },
                          png: {
                              quality: 70,
                          },
                          webp: {
                              quality: 70,
                          },
                          avif: {
                              quality: 70,
                          },
                      }),
                  ]
                : []),
        ],
        define: {
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            }
        }
    };
});
