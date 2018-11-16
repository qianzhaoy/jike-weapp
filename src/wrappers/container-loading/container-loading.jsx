import Taro, { Component } from '@tarojs/taro'
import { AtActivityIndicator } from 'taro-ui'

export default class InitLoadingWrapped extends Component {

  render() {
    if (this.props.loading) {
      return (
        <AtActivityIndicator mode='center'></AtActivityIndicator>
      )
    }

    return this.props.children
  }
}