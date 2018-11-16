import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './pic-grid.scss'

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}

export default class PicGrid extends Component {
  static externalClasses = ['root-class']

  render() {
    const imgs = this.props.imgs.map((el, i, origin) => {
      const defaultClassName = origin.length === 1 ? 'single-pic' : 'col-4-gutter';
      return (
        <View key={el} className={defaultClassName}>
          <Image className='pic-item' mode='aspectFill' src={el}></Image>
        </View>
      )
    })

    return (
      <View className='at-row at-row--wrap at-row__justify--between root-class'>
        {imgs}
      </View>
    )
  }
}

PicGrid.defaultProps = {
  imgs: []
}

PicGrid.propTypes = {
  imgs: PropTypes.array
}