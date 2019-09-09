import React, { Component } from 'react';
import { ScrollView, View, Dimensions } from 'react-native'
import ImageBackgroundComponent from './ImageBackgroundComponent'

class ImageScrollViewComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imagesList: [{
                id: 1,
                totalLikes: 0,
                totalViews: 0,
                uri: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg'
            }, {
                id: 2,
                totalLikes: 0,
                totalViews: 0,
                uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg'
            }, {
                id: 3,
                totalLikes: 0,
                totalViews: 0,
                uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg'
            }, {
                id: 4,
                totalLikes: 0,
                totalViews: 0,
                uri: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
            }, {
                id: 5,
                totalLikes: 0,
                totalViews: 0,
                uri: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg'
            }, {
                id: 6,
                totalLikes: 0,
                totalViews: 0,
                uri: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg'
            }]
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} pagingEnabled>
                    {this.state.imagesList.map((imageInfo, $index) => <ImageBackgroundComponent key={$index} imageInfo={imageInfo}></ImageBackgroundComponent>)}
                </ScrollView>
            </View>
        )
    }
}

export default ImageScrollViewComponent