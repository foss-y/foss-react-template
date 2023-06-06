import { createFromIconfontCN } from '@ant-design/icons'
import { memo, ReactElement } from 'react'
import IconWrapper from './style'
import config from '@/config'

interface iconProps {
  /**
   * 图标名称
   */
  iconName: string

  /**
   * 自定义样式
   */
  customStyle?: React.CSSProperties

  /**
   * 点击Icon的回调
   * @returns {void}
   */
  onIconClick?: () => void
}

const IconFont = memo((props: iconProps): ReactElement => {
  const { iconName, customStyle, onIconClick } = props

  const handleIconClick = () => onIconClick?.()

  const IconFont = createFromIconfontCN({
    scriptUrl: config.iconFontUrl
  })

  return (
    <IconWrapper>
      <span className="icon" style={customStyle} onClick={handleIconClick}>
        <IconFont type={iconName} />
      </span>
    </IconWrapper>
  )
})

export default IconFont
