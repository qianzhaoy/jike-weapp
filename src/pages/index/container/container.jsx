import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'

import InitLoadingWrapper from '../../../wrappers/container-loading/container-loading'
import JkCard from '../../../components/card/card'
import JkRepostCard from '../../../components/repost-card/repost-card'
import TextOver from '../../../components/text-over/text-over'
import PicGrid from '../../../components/pic-grid/pic-grid'

import events from '../event'
import data from '../../../mock/mock'
import { getTimeInterval } from '../../../utils/utils'

import './container.scss'

const REPOST = 'REPOST'
const ORIGINAL_POST = 'ORIGINAL_POST'
const SHOW_TYPE = [REPOST, ORIGINAL_POST]

export default class Container extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      isReady: false
    }
    this.activeHandle = this.activeHandle.bind(this)
  }

  componentWillMount() {
    events.on(`onActive:${this.props.tabName}`, this.activeHandle)
  }

  activeHandle() {
    setTimeout(() => {
      data.data = data.data.filter(el => SHOW_TYPE.includes(el.type))
      this.setState({
        list: data.data,
        isReady: true
      })
    }, 500)
  }

  render() {
    const { tabName } = this.props
    const cards = this.state.list.map(el => {
      const isAttention = tabName === 'attention'
      const desc = isAttention ? getTimeInterval(+new Date(el.createdAt)) : el.user.bio
      const pics = el.pictures.map(pic => pic.thumbnailUrl)
      return (
        <JkCard
          key={el.id}
          name={el.user.screenName}
          desc={null}
          thumb={el.user.avatarImage.thumbnailUrl}
        >
          <TextOver root-class='mt20' content={el.content}></TextOver>
          {el.type === REPOST && <JkRepostCard root-class='mt20' topic={el.target.topic.content} thumb={el.target.topic.squarePicture.thumbnailUrl} content={el.target.content}></JkRepostCard>}
          {el.type === ORIGINAL_POST && <PicGrid root-class='mt20' imgs={pics}></PicGrid>}
        </JkCard>
      )
    })

    return (
      <View className='tab-container'>
        <InitLoadingWrapper loading={!this.state.isReady}>
          { cards }
        </InitLoadingWrapper>
      </View>
    )
  }
}

Container.propTypes = {
  tabName: PropTypes.string.isRequired
}
