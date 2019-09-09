import React, { Component, useState, useEffect } from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import MainMenuComponent from './MainMenuComponent'

const ImageContainer = styled.View`
  height: ${Dimensions.get('window').height}
`

let t;

class ImageBackgroundComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenDimensions: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
      },
      imageInfo: { ...props.imageInfo },
      timer: undefined
    };
    this._clearTotalLikes = this._clearTotalLikes.bind(this);
    this._handleLongPress = this._handleLongPress.bind(this);
    this._handleLongPressOut = this._handleLongPressOut.bind(this);
    this._setTotalLikes = this._setTotalLikes.bind(this);
    this._setTotalViews = this._setTotalViews.bind(this);
  }

  _setTotalLikes = () => {
    this.setState({
      imageInfo: {
        ...this.state.imageInfo,
        totalLikes: this.state.imageInfo.totalLikes + 1
      }
    })
  }

  _setTotalViews = () => {
    this.setState({
      imageInfo: {
        ...this.state.imageInfo,
        totalViews: this.state.imageInfo.totalViews + 1
      }
    })
  }

  _clearTotalLikes = () => {
    this.setState({
      imageInfo: {
        ...this.state.imageInfo,
        totalLikes: 0
      }
    })
  }


  _handleLongPress = () => {
    let self = this;
    t = setInterval(function () {
      self._setTotalLikes()
    }, 300);
  }

  _handleLongPressOut = () => {
    clearInterval(t);
  }

  render() {
    return (
      <ImageContainer>
        <TouchableOpacity activeOpacity={1} onPress={this._setTotalLikes} onPressIn={this._handleLongPress} onPressOut={this._handleLongPressOut}>
          <Image style={{ height: this.state.screenDimensions.height, width: this.state.screenDimensions.width }} source={{ uri: this.state.imageInfo.uri }}></Image>
        </TouchableOpacity>
          <MainMenuComponent totalLikes={this.state.imageInfo.totalLikes} totalViews={this.state.imageInfo.totalViews} _setTotalLikes={this._setTotalLikes} _setTotalViews={this._setTotalViews} _clearTotalLikes={this._clearTotalLikes} uri={this.state.imageInfo.uri}></MainMenuComponent>         
      </ImageContainer >
    )
  }


}

export default ImageBackgroundComponent