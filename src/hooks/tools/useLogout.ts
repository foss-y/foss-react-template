import { router } from '@/router'
import useToken from './useToken'
import { message } from 'antd'
const { removeValue } = useToken()
/**
 * @description: 退出登录
 * @param delay 延迟时间
 */
const useLogout = (delay = 0, tip = '退出成功！') => {
  setTimeout(() => {
    router.navigate('/')
    // 清除用户信息
    removeValue('access_token')
    removeValue('refresh_token')
    message.success(tip)
  }, delay)
}

export default useLogout
