import React, {Component} from 'react'
import { Viewport } from '@skele/components'
import { View, Dimensions, Image, TouchableOpacity, findNodeHandle } from 'react-native'
import styled from 'styled-components'

const ImageContainer = styled.View`
  height: ${Dimensions.get('window').height}
`

const ViewportAwareView = Viewport.Aware(View)

export default class ImageBackgroundView extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ImageContainer ref="imageContainer">
                <TouchableOpacity activeOpacity={1} onPress={this.props._setTotalLikes} onPressIn={this.props._handleLongPress} onPressOut={this.props._handleLongPressOut}>
                    <ViewportAwareView
                        onViewportEnter={() => console.log('Enter')}
                        onViewportLeave={() => {
                            this.refs.imageView.measureLayout(findNodeHandle(this.refs.imageView), (xPos, yPos, Width, Height) => {
                                /*                console.log('Image id', this.props.imageInfo, this.state.imageInfo.id)
                                               console.log('xPos, yPos, Width, Height', xPos, yPos, Width, Height) */
                            });
                        }}>
                        <Image ref="imageView" style={{ height: this.props.screenDimensions.height, width: this.props.screenDimensions.width }} source={{ uri: this.props.imageInfo.uri }}></Image>
                    </ViewportAwareView>
                </TouchableOpacity>
    
                {/* <MainMenuComponent totalLikes={this.state.imageInfo.totalLikes} totalViews={this.state.imageInfo.totalViews} _setTotalLikes={this._setTotalLikes} _setTotalViews={this._setTotalViews} _clearTotalLikes={this._clearTotalLikes} uri={this.state.imageInfo.uri}></MainMenuComponent> */}
            </ImageContainer >
        )
    }

}