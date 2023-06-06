import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import 'normalize.css'
import '@/style/index.less'

import { AppDispatch } from '@/store'

import { RouterBeforeEach } from '../hooks/web/useUtilsNavigate'
import { getUserInfo } from '@/store/features/user'
import useToken from '@/hooks/tools/useToken'

// 注册路由守卫
RouterBeforeEach((to, from) => {
  console.log('路由守卫to', to)
  console.log('路由守卫from', from)
  return true
})

const { getValue } = useToken()

const App = memo(() => {
  // 获取派发函数
  const dispatch = useDispatch<AppDispatch>()

  // 获取请求的数据
  useEffect(() => {
    if (getValue('access_token') && getValue('refresh_token')) {
      dispatch(getUserInfo())
    }
  }, [])

  return (
    <div className="app">
      <div className="main-container flex-1">
        <Outlet />
      </div>
    </div>
  )
})

export default App
