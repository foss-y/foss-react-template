import { webConfig } from '@/constants'
import { Button, Result } from 'antd'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const SystemError = memo(() => {
  const navigate = useNavigate()
  const backHome = () => {
    navigate(webConfig.rootUrl)
  }

  return (
    <Result
      status="500"
      title="500"
      subTitle="系统服务异常，请稍后再试"
      extra={<Button onClick={backHome}>返回首页</Button>}
    ></Result>
  )
})

export default SystemError
