/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-11-03 20:46:16
 * @LastEditors: YDKD
 * @LastEditTime: 2022-12-24 20:55:30
 */
import react from '@vitejs/plugin-react'

import type { PluginOption } from 'vite/dist/node'

/**
 * @param {PluginOption[]} PluginOption 插件配置
 * @return {*} {PluginOption[]} 插件配置
 * @description: 初始化插件
 * @author: YDKD
 */
const setupPlugins = (): PluginOption[] => {
  const plugins = [react()]

  return [...plugins]
}

export default setupPlugins
