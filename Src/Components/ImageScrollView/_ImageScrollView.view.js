import React from 'react';
import { Viewport } from '@skele/components';
import { ScrollView, View, Text } from 'react-native'
import ImageBackgroundComponent from '../ImageBackground/'

import MainMenuComponent from '../MainMenu/'

export default function ImageScrollView(props){
    return (
        <View style={{ flex: 1 }}>
            {/* <Viewport.Tracker> */}
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEventThrottle={16} pagingEnabled>
                    {props.imagesList.map((imageInfo, $index) => <ImageBackgroundComponent key={$index} imageInfo={imageInfo}></ImageBackgroundComponent>)}
                </ScrollView>
    
            {/* </Viewport.Tracker> */}
            {!props.loading ? <MainMenuComponent ></MainMenuComponent> : <Text style={{ color: '#FF0000' }}>loading</Text>}
        </View>
    )
}

