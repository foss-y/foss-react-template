import { defineConfig } from 'vite'

import { alias, generateEnv, setupPlugins } from './vite'

export default defineConfig(({ command, mode }) => {
  // generate env
  generateEnv(command)

  return {
    server: {
      port: 3000,
      hmr: true,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://localhost:6060',
          changeOrigin: true,
          rewrite: (p: string) => p.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: alias,
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'md']
    },
    plugins: [setupPlugins()]
  }
})
