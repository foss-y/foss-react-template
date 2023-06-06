import { webConfig } from '@/constants'
import { Button, Result } from 'antd'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = memo(() => {
  const navigate = useNavigate()
  const backHome = () => {
    navigate(webConfig.rootUrl)
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在"
      extra={<Button onClick={backHome}>返回首页</Button>}
    ></Result>
  )
})

export default NotFound
