import React, {Component} from 'react'
import {StyleSheet, Animated, Dimensions, Button} from 'react-native'
import {Icon, View, Content} from 'native-base'
import {Actions } from 'react-native-router-flux'

const AnimatedView = Animated.View

import {LightBox as style} from '../theme/styles/components'

export class LightBox extends Component {
  state = {
    opacity: new Animated.Value(0),
  }
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 1,
    }).start()
  }
  onClose = e => {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 0,
    }).start(e => {
      Actions.pop()
      if (this.props.onClose) this.props.onClose()
    })
  }

  renderCloseIcon() {
    return this.props.hideClose ? null : <View end><Icon name='md-close' onPress={this.onClose} style={style.icon_close}/></View>
  }
  render() {
    return <AnimatedView style={{...style.background, opacity: this.state.opacity}}>
      <View style={style.container}>
        <Content>
          {this.renderCloseIcon()}
          {this.props.children}
        </Content>
      </View>
    </AnimatedView>
  }
}
