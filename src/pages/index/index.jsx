import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import event from './event'

import Container from './container/container'
import './index.scss'

const tabList = [
  { title: '关注', tabName: 'attention' },
  { title: '发现', tabName: 'discover' },
  { title: '摄影', tabName: 'photography' },
  { title: '行业', tabName: 'profession' },
  { title: '分享', tabName: 'routine' },
  { title: '日常', tabName: 'share' },
]

export default class Index extends Component {

  config = {
    navigationBarTitleText: '即刻'
  }

  constructor() {
    super()
    this.state = {
      current: 0
    }
  }

  componentDidMount() {
    event.trigger('onActive:attention')
  } 

  handleClick(current) {
    this.setState({ current }, () => {
      event.trigger(`onActive:${tabList[current].tabName}`)
    })
  }

  render () {
    return (
      <View className='index'>
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
        >
          {
            tabList.map((tab, i) => {
              return (
                <AtTabsPane current={this.state.current} index={i} key={i}>
                  <Container tabName={tab.tabName}></Container>
                </AtTabsPane>
              )
            })
          }
        </AtTabs>
      </View>
    )
  }
}

