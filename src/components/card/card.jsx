import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui'
import './card.scss'

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}

export default class JkCard extends Component {
  static externalClasses = ['root-class']

  static options = {
    addGlobalClass: true
  }

  constructor() {
    super()
    const animation = Taro.createAnimation({
      duration: 200
    })
    this.animation = animation
    this.state = {
      animateData: {},
      isCollect: false
    }
  }

  collectHandle() {
    if (!this.state.isCollect) {
      this.animation.scale(1.2, 1.2).step()
      this.animation.scale(1, 1).step()
    }
    this.setState({
      animateData: this.animation.export(),
      isCollect: !this.state.isCollect
    })
  }

  render() {
    const { isCollect } = this.state;
    const color = isCollect ? '#EB553E;' : ';';
    const starIcon = isCollect ? 'jike-star-full' : 'jike-star'
    return (
      <View className='jk-card root-class'>
        <View className='at-row at-row__justify--center at-row__align--center'>
            <View className='at-col at-col-2'>
              <AtAvatar circle image={this.props.thumb}></AtAvatar>
            </View>
            <View className='at-col at-col-8'>
              <View>
                <View className='jk-card__name'>{this.props.name}</View>
                <View className='jk-card__desc' decode>{this.props.desc}</View>
              </View>
            </View>
            <View className='at-col at-col-2 jk-card__heart'>
              <Text
                className={'jike ' + starIcon}
                style={{color: color}}
                onClick={this.collectHandle.bind(this)}
                animation={this.state.animateData}
              ></Text>
              {/* <AtIcon prefixClass='jike' value='star' size={16} color='#999'></AtIcon> */}
            </View>
        </View>
        <View className='jk-card__content'>
          {this.props.children}
        </View>
      </View>
    )
  }
}

JkCard.defaultProps = {
  thumb: '',
  name: '',
  desc: ''
}

JkCard.propTypes = {
  thumb: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string
}
