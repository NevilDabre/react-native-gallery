import React, { Component, useState, useEffect } from 'react';
import { View, Dimensions, Image, TouchableOpacity, findNodeHandle } from 'react-native'
import styled from 'styled-components'
import { Viewport } from '@skele/components';

import { ADD_VIEW, ADD_LIKE,CLEAR_LIKES } from '../redux/actions/imageListActions'

import { connect } from 'react-redux'

const ViewportAwareView = Viewport.Aware(View)

import MainMenuComponent from './MainMenuComponent'

const ImageContainer = styled.View`
  height: ${Dimensions.get('window').height}
`

class ImageBackgroundComponent extends Component {
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
/*     this.setState({
      imageInfo: {
        ...this.state.imageInfo,
        totalLikes: this.state.imageInfo.totalLikes + 1
      }
    }) */

    this.props.updateLikesOfImage(this.state.imageInfo.id)
  }

  _setTotalViews = () => {
/*     this.setState({
      imageInfo: {
        ...this.state.imageInfo,
        totalViews: this.state.imageInfo.totalViews + 1
      }
    }) */
    this.props.updateViewsOfImage(imageId)
  }

  _clearTotalLikes = () => {
/*     this.setState({
      imageInfo: {
        ...this.state.imageInfo,
        totalLikes: 0
      }
    }) */
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

  componentDidMount() {
  }

  render() {
    return (
      <ImageContainer ref="imageContainer">
          <TouchableOpacity activeOpacity={1} onPress={this._setTotalLikes} onPressIn={this._handleLongPress} onPressOut={this._handleLongPressOut}>
{/*           <ViewportAwareView
          onViewportEnter={() => console.log('Enter', this.props.imageInfo.id)}
          onViewportLeave={() => {
            this.refs.imageView.measureLayout( findNodeHandle(this.refs.imageContainer), ( xPos, yPos, Width, Height ) =>
            {
               console.log('Image id', this.props.imageInfo.id, this.state.imageInfo.id)
               console.log('xPos, yPos, Width, Height', xPos, yPos, Width, Height)
            });
          }}> */}
            <Image ref="imageView" style={{ height: this.state.screenDimensions.height, width: this.state.screenDimensions.width }} source={{ uri: this.state.imageInfo.uri }}></Image>
            {/* </ViewportAwareView> */}
          </TouchableOpacity>

        {/* <MainMenuComponent totalLikes={this.state.imageInfo.totalLikes} totalViews={this.state.imageInfo.totalViews} _setTotalLikes={this._setTotalLikes} _setTotalViews={this._setTotalViews} _clearTotalLikes={this._clearTotalLikes} uri={this.state.imageInfo.uri}></MainMenuComponent> */}
      </ImageContainer >
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      updateViewsOfImage: (imageId) =>{
          dispatch({
              type: ADD_VIEW,
              payload: {
                imageId: imageId
              }
          })
      },
      updateLikesOfImage: (imageId) =>{
        dispatch({
          type: ADD_LIKE,
          payload: {
            imageId: imageId
          }
        })
      },
      resetLikesOfImage: (imageId) =>{
        dispatch({
          type: CLEAR_LIKES,
          payload:{
            imageId: imageId
          }
        })
      }
  }
}



export default connect(null,mapDispatchToProps)(ImageBackgroundComponent)