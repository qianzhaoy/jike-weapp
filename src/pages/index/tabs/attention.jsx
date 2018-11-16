import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import JkCard from '../../../components/card/card'
import events from '../event'

import './common/index.scss'

export default class Attention extends Component {
  componentDidMount() {
    events.on('onShow:attention', this.activeHandle)
  }

  activeHandle = () => {
    console.log('active');
  }

  render() {
    return (
      <View className='tab-container'>
        <JkCard 
          name='瓦宁'
          desc='1000223'
          thumb='https://cdn.ruguoapp.com/Freo1qTIvnJ9DfyQjQGjZ3FUgGO7?imageView2/0/w/120/h/120/q/100!'
        ></JkCard>
        <AtActivityIndicator mode='center'></AtActivityIndicator>
      </View>
    )
  }
}