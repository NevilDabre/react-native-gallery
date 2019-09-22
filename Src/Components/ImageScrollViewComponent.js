import React, { Component } from 'react';
import { Viewport } from '@skele/components';
import { ScrollView, View, Dimensions, Text } from 'react-native'
import ImageBackgroundComponent from './ImageBackgroundComponent'
import MainMenuComponent from './MainMenuComponent'
import { connect } from 'react-redux'

class ImageScrollViewComponent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Viewport.Tracker>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} pagingEnabled>
                    {this.props.imagesList.map((imageInfo, $index) => <ImageBackgroundComponent key={$index} imageInfo={imageInfo}></ImageBackgroundComponent>)}
                </ScrollView>
                </Viewport.Tracker>
                <MainMenuComponent totalLikes={100} totalViews={100} ></MainMenuComponent>
            </View>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        imagesList: state.imagesList
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setLikes: (imageId) =>{
            dispatch({
                type: "SET_LIKE",
                payload: imageId
            })
        }
    }
}

export default connect(mapStateToProps)(ImageScrollViewComponent)