import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import ImageBackgroundView from './_ImageBackground.view';

export default class ImageBackgroundContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenDimensions: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
      },
      imageInfo: { ...props.imageInfo },
      timer: undefined,
      x: null, y: null, width: null, height: null
    };
    this._clearTotalLikes = this._clearTotalLikes.bind(this);
    this._handleLongPress = this._handleLongPress.bind(this);
    this._handleLongPressOut = this._handleLongPressOut.bind(this);
    this._setTotalLikes = this._setTotalLikes.bind(this);
    this._setTotalViews = this._setTotalViews.bind(this);
  }

  _setTotalLikes = () => {
    this.props.updateLikesOfImage(this.state.imageInfo.id);
  }

  _setTotalViews = () => {
    this.props.updateViewsOfImage(imageId)
  }

  _clearTotalLikes = () => {
    this.props.resetLikesOfImage(imageId)
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
        <ImageBackgroundView imageInfo={this.state.imageInfo} screenDimensions={this.state.screenDimensions} _setTotalLikes={this._setTotalLikes} _handleLongPress={this._handleLongPress}></ImageBackgroundView>
    ) 
}
}