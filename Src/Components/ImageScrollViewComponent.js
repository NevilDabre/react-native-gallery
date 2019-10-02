import React, { Component } from 'react';
import { Viewport } from '@skele/components';
import { ScrollView, View, Dimensions, Text } from 'react-native'
import ImageBackgroundComponent from './ImageBackgroundComponent'
import MainMenuComponent from './MainMenuComponent'
import { connect } from 'react-redux'

import ViewportAwareImageComponent from './ViewPortAwareImageComponent'
class ImageScrollViewComponent extends Component {
    constructor() {
        super();
        this.state = {
            i: [1, 2, 3, 4, 5],
            loading: true
        }
    }

    componentDidMount(){
        console.log('Mounted');

        this.setState({loading : false})
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Viewport.Tracker>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEventThrottle={16} onScroll={() => console.log()} pagingEnabled>
                        {this.props.imagesList.map((imageInfo, $index) => <ImageBackgroundComponent key={$index} imageInfo={imageInfo}></ImageBackgroundComponent>)}
                    </ScrollView>
                    {/*     <ScrollView scrollEventThrottle={16} pagingEnabled onScroll={}>
        {this.state.i.map((j, $index) => <ViewportAwareImageComponent key={$index} imageInfo={j}></ViewportAwareImageComponent>)}
      </ScrollView> */}

                </Viewport.Tracker>
                       {!this.state.loading? <MainMenuComponent ></MainMenuComponent>: <Text>loading</Text>}
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