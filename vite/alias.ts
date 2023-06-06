/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-11-03 20:38:45
 * @LastEditors: YDKD
 * @LastEditTime: 2022-12-24 20:55:54
 */
import path from 'path'
import { AliasOptions } from 'vite/dist/node'
import { resolve } from 'path'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

const alias = [
  {
    find: /\@\//,
    replacement: `${pathResolve('src')}/`
  },
  {
    find: /~\//,
    replacement: `${pathResolve('node_modules')}/`
  },
  {
    find: 'components',
    replacement: path.resolve(__dirname, '../src/components')
  },
  {
    find: 'store',
    replacement: path.resolve(__dirname, '../src/store')
  }
] as AliasOptions

export default alias
