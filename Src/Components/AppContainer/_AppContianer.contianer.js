import * as React from 'react'
import { View, ScrollView } from 'react-native'
import { Subheading, Title, Headline } from 'react-native-paper'
import ImageCard from '../ImageCard'

const BodyComponent = () => {
    return (

        <React.Fragment>
            <ScrollView>
                <Title style={{ marginLeft: 15 }}>Trending</Title>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <ScrollView horizontal={true}>
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </ScrollView>
                </View>

                <Title style={{ marginLeft: 15 }}>Top Picks</Title>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <ScrollView horizontal={true}>
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </ScrollView>
                </View>

                <Title style={{ marginLeft: 15 }}>Trending</Title>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <ScrollView horizontal={true}>
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </ScrollView>
                </View>

                <Title style={{ marginLeft: 15 }}>Top Downloads</Title>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <ScrollView horizontal={true}>
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </ScrollView>
                </View>

                <Title style={{ marginLeft: 15 }}>Random</Title>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <ScrollView horizontal={true}>
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </ScrollView>
                </View>
            </ScrollView>
        </React.Fragment>
    )
}

export default BodyComponent