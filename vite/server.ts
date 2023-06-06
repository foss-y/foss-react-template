/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-11-06 20:47:43
 * @LastEditors: YDKD
 * @LastEditTime: 2023-02-03 16:19:12
 */

import generateEnv from './utils/generateEnv'
generateEnv()

const server = {
  port: 3000,
  hmr: true,
  host: '0.0.0.0',
  proxy: {
    '/airbnb/api': {
      target: 'http://codercba.com:1888/airbnb/api',
      changeOrigin: true,
      rewrite: (p: string) => p.replace(/^\/airbnb\/api/, '/airbnb/api')
    },
    '/api': {
      target: 'http://localhost:6000/',
      changeOrigin: true,
      rewrite: (p: string) => p.replace(/^\/api/, '')
    }
  }
}

export default server
