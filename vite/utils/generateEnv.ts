import dotenv from 'dotenv'
import fs from 'fs'

/**
 * @name: generateEnv
 * @param {string} command
 * @description: 系统环境变量生成
 * @return {*}
 */
const generateEnv = (command?: string) => {
  const NODE_ENV: string = process.env.NODE_ENV || 'development'
  let envFiles: string[] = []

  if (command == 'serve') {
    envFiles = [
      /** default file */
      `.env`
    ]
  } else {
    envFiles = [
      /** default file */
      `.env`,
      /** mode file */
      `.env.${NODE_ENV}`
    ]
  }

  for (const f of envFiles) {
    try {
      // 根据环境变量加载环境变量文件
      const file = dotenv.parse(fs.readFileSync(f))
      // 根据获取的key给对应的环境变量赋值
      for (const key in file as object) {
        process.env[key] = file[key]
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default generateEnv
