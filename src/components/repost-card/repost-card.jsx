import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import PropTypes from 'prop-types'
import './repost-card.scss'

export default class ReportCard extends Component {
  static externalClasses = ['root-class']

  render() {
    return (
      <View className='repost root-class'>
        <View className='repost__box'>
          <Image className='repost__thumb' src={this.props.thumb}></Image>
          <View className='repost__content'>{this.props.content || ''}</View>
        </View>
        <View className='repost__topic'>
          <Text>{this.props.topic || ''}</Text>
        </View>
      </View>
    )
  }
}

ReportCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  content: PropTypes.string,
  topic: PropTypes.string
}