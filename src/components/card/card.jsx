import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui'
import './card.scss'

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}

export default class JkCard extends Component {
  static externalClasses = ['root-class']

  render() {
    return (
      <View className='jk-card root-class'>
        <View className='at-row at-row__justify--center at-row__align--center'>
            <View className='at-col at-col-2'>
              <AtAvatar circle image={this.props.thumb}></AtAvatar>
            </View>
            <View className='at-col at-col-8'>
              <View>
                <View className='jk-card__name'>{this.props.name || '&nbsp;'}</View>
                <View className='jk-card__desc' decode>{this.props.desc || '&nbsp;'}</View>
              </View>
            </View>
            <View className='at-col at-col-2 jk-card__heart'>
              <AtIcon value='heart' size={16} color='#999'></AtIcon>
            </View>
        </View>
        <View className='jk-card__content'>
          {this.props.children}
        </View>
      </View>
    )
  }
}

JkCard.propTypes = {
  thumb: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string
}
