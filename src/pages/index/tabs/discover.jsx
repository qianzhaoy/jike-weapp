import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import './common/index.scss'

export default class Discover extends Component {
  static options = {
    addGlobalClass: true
  }

  render() {
    return (
      <View className='tab-container'>
        <AtActivityIndicator mode='center'></AtActivityIndicator>
      </View>
    )
  }
}