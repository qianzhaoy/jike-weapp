import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import './common/index.scss'

export default class Profession extends Component {
  componentDidMount() {
    console.log(111);
  }

  render() {
    return (
      <View className='tab-container'>
        <AtActivityIndicator mode='center'></AtActivityIndicator>
      </View>
    )
  }
}