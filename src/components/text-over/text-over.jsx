import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import './text-over.scss'
// import PropTypes from 'prop-types'

export default class TextOver extends Component {
  static externalClasses = ['root-class']

  constructor() {
    super()
    this.state = {
      showFullText: false
    }
  }

  componentDidMount() {
    const wrap = this.querySelector('.text-wrap')
    const over = this.querySelector('.text-over')
    wrap.boundingClientRect(wrapRect => {
      const wrapHeight = wrapRect.height
      over.boundingClientRect(overRect => {
        if (overRect.height > wrapHeight) {
          this.setState({ showFullText: true })
        }
      }).exec()
    }).exec()
  }

  querySelector(selector) {
    return Taro.createSelectorQuery().in(this.$scope).select(selector)
  }

  render() {
    return (
      <View className='root-class'>
        <View class='text-wrap'>
          <Text className='text-over'>{this.props.content}</Text>
        </View>
        { this.state.showFullText && <View class='full-text__btn'>全文</View> }
      </View>
    )
  }
}

TextOver.defaultProps = {
  lineClamp: 4
}