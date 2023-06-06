import { RouteObject } from 'react-router-dom'
/**
 *  路由配置
 */
export interface IRoute extends RouteObject {
  path: string
  auth?: boolean
  name?: string
  element:
    | React.LazyExoticComponent<React.MemoExoticComponent<() => JSX.Element>>
    | JSX.Element
  children?: IRoute[]
}
