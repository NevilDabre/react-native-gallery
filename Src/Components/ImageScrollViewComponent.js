import React, { Component } from 'react';
import { Viewport } from '@skele/components';
import { ScrollView, View, Dimensions, Text } from 'react-native'
import ImageBackgroundComponent from './ImageBackgroundComponent'
import MainMenuComponent from './MainMenuComponent'
import { connect } from 'react-redux'

class ImageScrollViewComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Viewport.Tracker>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} pagingEnabled>
                        {this.props.imagesList.map((imageInfo, $index) => <ImageBackgroundComponent key={$index} imageInfo={imageInfo}></ImageBackgroundComponent>)}
                    </ScrollView>
                </Viewport.Tracker>
                <MainMenuComponent ></MainMenuComponent>
            </View>
        )
    }
}


const mapStateToProps = ({ images }) => {
    return {
        imagesList: images.imageList
    }
}

export default connect(mapStateToProps)(ImageScrollViewComponent)