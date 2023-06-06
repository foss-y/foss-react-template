import { webConfig } from '@/constants'
import { Button, Result } from 'antd'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const Forbidden = memo(() => {
  const navigate = useNavigate()
  const backHome = () => {
    navigate(webConfig.rootUrl)
  }

  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，你无权访问该页面"
      extra={<Button onClick={backHome}>返回首页</Button>}
    ></Result>
  )
})

export default Forbidden
