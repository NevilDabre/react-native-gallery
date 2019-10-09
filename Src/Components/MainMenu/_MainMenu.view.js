import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import numeral from 'numeral'

function MainComponentView(props) {
    return (
        <View style={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', bottom: 25, right: 10, flexDirection: 'column', }}>
            <View style={{ width: 50, height: 50, flex: 1, margin: 10, alignItems: 'center' }}>
                <FontAwesome name="eye" size={32} color="#C0C0C0"></FontAwesome>
                <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>
                    {numeral(props.currentPointer.totalViews).format('0 a')}
                </Text>
            </View>
            <View style={{ width: 50, height: 50, flex: 2, margin: 10, alignItems: 'center' }}>
                {
                    props.currentPointer.totalLikes && props.currentPointer.totalLikes > 0 ?
                        <FontAwesome name="heart" size={32} color="#C21E56" backgroundColor="#C21E56" onPress={props._clearTotalLikes(props.currentPointer.id)}></FontAwesome>
                        :
                        <FontAwesome name="heart-o" size={32} color="#C0C0C0" onPress={() => props._setTotalLikes(props.currentPointer.id)} ></FontAwesome>
                }
                <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>
                    {numeral(props.currentPointer.totalLikes).format('0 a')}
                </Text>
            </View>
            <View style={{ width: 50, height: 50, flex: 1, margin: 10, alignItems: 'center' }}>
                <FontAwesome name="share" size={32} color="#C0C0C0"></FontAwesome>
                <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>
                    346
        </Text>
            </View>
            {/*                 <View style={{ width: 50, height: 50, flex: 1, marginLeft: 32, marginTop:15, alignItems: 'center' }}>
                    <FabMenu uri={props.uri}></FabMenu>
            </View> */}
        </View>
    )

}

export default MainComponentView