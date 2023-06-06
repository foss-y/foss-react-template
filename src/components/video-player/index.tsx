import { memo, useEffect } from 'react'
import Player from 'xgplayer'
import config from '@/config'
import { IVideoListItem } from '@/views/home/types'

interface IProps {
  videoData: IVideoListItem
}

const VideoPlayer = memo((props: IProps) => {
  const { videoData } = props

  useEffect(() => {
    console.log('videoData', videoData?.url || '')
    const player = new Player({
      id: 'mse',
      url: config.fileUploadUrl + videoData?.url,
      fluid: true, // 播放器自适应父元素宽高
      pip: true, //打开画中画功能
      volume: 0.6, //默认音量
      poster: config.fileUploadUrl + videoData?.thumbnail, //封面图
      rotate: {
        //视频旋转按钮配置项
        innerRotate: true, //只旋转内部video
        clockwise: false // 旋转方向是否为顺时针
      },
      miniplayer: true,
      miniplayerConfig: {
        bottom: 200,
        right: 0,
        width: 320,
        height: 180
      },
      danmu: {
        comments: [
          //弹幕数组
          {
            duration: 15000, //弹幕持续显示时间,毫秒(最低为5000毫秒)
            id: '1', //弹幕id，需唯一
            start: 5000, //弹幕出现时间，毫秒
            prior: true, //该条弹幕优先显示，默认false
            color: true, //该条弹幕为彩色弹幕，默认false
            txt: '长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕长弹幕', //弹幕文字内容
            style: {
              //弹幕自定义样式
              color: '#ff9500',
              fontSize: '20px',
              border: 'solid 1px #ff9500',
              borderRadius: '50px',
              padding: '5px 11px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            },
            mode: 'top' //显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
          }
        ],
        area: {
          //弹幕显示区域
          start: 0, //区域顶部到播放器顶部所占播放器高度的比例
          end: 1 //区域底部到播放器顶部所占播放器高度的比例
        },
        closeDefaultBtn: true, //开启此项后不使用默认提供的弹幕开关，默认使用西瓜播放器提供的开关
        defaultOff: true //开启此项后弹幕不会初始化，默认初始化弹幕
      }
    })
  }, [videoData])

  return <div id="mse"></div>
})

export default VideoPlayer
