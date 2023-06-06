import IconArrowLeft from '@/assets/svg/IconArrowLeft'
import IconArrowRight from '@/assets/svg/IconArrowRight'
import React, { memo, useEffect, useState } from 'react'
import { useRef } from 'react'
import { ViewWrapper } from './style'

interface IProps {
  children: React.ReactNode
}

const ScrollView = memo((props: IProps) => {
  /** 定义内部的状态 */
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef<number>()

  /** 组件渲染完毕, 判断是否显示右侧的按钮 */
  const scrollContentRef = useRef<HTMLElement>()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current?.scrollWidth || 0 // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current?.clientWidth || 0 // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth // 可以滚动的总距离
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  /** 事件处理的逻辑 */
  function controlClickHandle(isRight: any) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current?.children[newIndex] as HTMLElement
    const newOffsetLeft = newEl?.offsetLeft
    if (scrollContentRef.current?.style) {
      scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    }
    setPosIndex(newIndex)
    // 是否继续显示右侧的按钮
    if (totalDistanceRef.current) {
      setShowRight(totalDistanceRef.current > newOffsetLeft)
    }
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle(true)}
        >
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef as any}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView
