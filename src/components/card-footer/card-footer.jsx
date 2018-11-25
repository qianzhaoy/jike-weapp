import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import PropTypes from 'prop-types'
import './card-footer.scss'

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}

export default class CardFooter extends Component {
  static externalClasses = ['root-class']

  static options = {
    addGlobalClass: true
  }

  constructor() {
    super()
    const animation = Taro.createAnimation({
      duration: 200
    })
    this.state = {
      isLiked: false,
      animationData: {}
    }
    this.animation = animation
  }

  likeHandle = () => {
    if (!this.state.isLiked) {
      this.animation.scale(1.2, 1.2).step()
      this.animation.scale(1, 1).step()
    }
    this.setState({
      animationData: this.animation.export(),
      isLiked: !this.state.isLiked
    })
  }

  render() {
    const { isLiked } = this.state;
    const color = isLiked ? '#EB553E;' : ';';
    const zanIcon = isLiked ? 'jike-zan-full' : 'jike-zan'
    return (
      <View className='at-row root-class'>
        <View className='at-col'>
          <Text
            className={'jike ' + zanIcon}
            style={{color: color}}
            onClick={this.likeHandle}
            animation={this.state.animationData}
          ></Text>
          <Text style={{color: color}} className='fs12 ml5'>{ this.props.commentCount }</Text>
        </View>
        <View className='at-col'>
          <AtIcon className='va-middle' prefixClass='jike' value='pinglun' size={16}></AtIcon>
          <Text className='fs12 ml5'>{ this.props.likeCount }</Text>
        </View>
        <View className='at-col'>
          <AtIcon className='va-middle' prefixClass='jike' value='fenxiang' size={16}></AtIcon>
          <Text className='fs12 ml5'>分享</Text>
        </View>
      </View>
    )
  }
}

CardFooter.defaultProps = {
  commentCount: 0,
  likeCount: 0
}

CardFooter.propTypes = {
  commentCount: PropTypes.number,
  likeCount: PropTypes.number
}
