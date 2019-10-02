import React, { Component } from 'react'
import { Image, Dimensions, View } from 'react-native'
import { Viewport } from '@skele/components'
const ViewportAwareImage = Viewport.Aware(Image)

export default class ViewportAwareImageComponent extends Component{
    constructor(props){
        super(props)
        this.state= {}
    }

    componentDidUpdate(prevProps){
      console.log('old ',prevProps);
      console.log('new', this.props)
    }
    render() {
        console.log('this props imageinfo',this.props.imageInfo)
        return (
            <View style={{flex: 1}}>
          <ViewportAwareImage
            style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width  }}
            source={{ uri: 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg' }}
            onViewportEnter={() => console.log('Entered!', this.props.imageInfo)}
            onViewportLeave={() => console.log('Left!', this.props.imageInfo)} />
            </View>
        )
      }
}

