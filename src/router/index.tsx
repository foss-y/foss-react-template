import React, { Suspense } from 'react'
import {
  createBrowserRouter,
  Navigate,
  redirect,
  useRouteError
} from 'react-router-dom'
import { IRoute } from 'types/router'
import permissionRoutes from './permission-routes'
import useToken from '@/hooks/tools/useToken'
import { message } from 'antd'

const { getValue } = useToken()

const MainLayout = React.lazy(() => import('@/layout/MainLayout'))
const Home = React.lazy(() => import('@/views/home'))
const SystemError = React.lazy(() => import('@/views/ErrorPages/SystemError'))
const Forbidden = React.lazy(() => import('@/views/ErrorPages/Forbidden'))
const NotFound = React.lazy(() => import('@/views/ErrorPages/NotFound'))

type IRouterBeforeLoad = (res: any, redirectUrl: string) => boolean
let routerLoader: IRouterBeforeLoad
const _redirectUrl = '/'

function ErrorBoundary() {
  const error: any = useRouteError()
  return (
    <div>
      <div>{error.message}</div>
      <div>{error.stack}</div>
    </div>
  )
}

// 路由处理方式
const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }

    if (item.path !== '/') {
      item.element = (
        <Suspense fallback={<div>加载中...</div>}>
          {/* 把懒加载的异步路由变成组件装载进去 */}
          {/* <KeepAlive id={item.name} cacheKey={item.name}> */}
          <item.element />
          {/* </KeepAlive> */}
        </Suspense>
      )
    }

    item.errorElement = <ErrorBoundary></ErrorBoundary>
    item.loader = async (res: any) => {
      if (item.auth) {
        // 权限校验
        if (getValue('access_token') && getValue('refresh_token')) {
          return res
        } else {
          message.warning('请先登录')
          return redirect(_redirectUrl)
        }
      }

      if (routerLoader && !item.children) {
        if (routerLoader(res, _redirectUrl)) {
          return res
        } else {
          return redirect(_redirectUrl)
        }
      }
      return res
    }
    return item
  })
}

const RouterLoader = (fun: IRouterBeforeLoad) => {
  routerLoader = fun
}

// 路由配置
const routes: IRoute[] = [
  {
    path: '/',
    element: <Navigate to="/web/home" />
  },
  {
    path: '/web',
    element: MainLayout,
    name: 'app',
    children: [
      {
        path: 'home',
        name: 'home',
        element: Home
      },
      ...permissionRoutes.map((item) => {
        item['auth'] = true
        return item
      })
    ]
  },
  {
    path: '*',
    element: NotFound
  },
  {
    path: '/error/system-error',
    element: SystemError
  },
  {
    path: '/error/not-found',
    element: NotFound
  },
  {
    path: '/error/forbidden',
    element: Forbidden
  }
]

const router = createBrowserRouter(generateRouter([...routes]))

export { router, RouterLoader }
