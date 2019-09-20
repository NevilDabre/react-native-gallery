import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FabMenu from './FabMenuComponent'
import { FontAwesome } from '@expo/vector-icons';
import numeral from 'numeral'
import { Container, Header, Button, Icon, Fab } from 'native-base';
import DownloadImageComponent from './DownloadImageComponent'

class MenuComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', bottom: 25, right: 10, flexDirection: 'column', }}>
                <View style={{ width: 50, height: 50, flex: 1, margin: 10, alignItems: 'center' }}>
                    <FontAwesome name="eye" size={32} color="#C0C0C0"></FontAwesome>
                    <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>
                        {numeral(this.props.totalViews).format('0 a')}
                    </Text>
                </View>
                <View style={{ width: 50, height: 50, flex: 2, margin: 10, alignItems: 'center' }}>
                    {
                        this.props.totalLikes && this.props.totalLikes > 0 ?
                            <FontAwesome name="heart" size={32} color="#C21E56" backgroundColor="#C21E56" onPress={this.props._clearTotalLikes}></FontAwesome>
                            :
                            <FontAwesome name="heart-o" size={32} color="#C0C0C0" onPress={() =>this.props._setTotalLikes()} ></FontAwesome>
                    }
                    <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>
                        {numeral(this.props.totalLikes).format('0 a')}
                    </Text>
                </View>
                <View style={{ width: 50, height: 50, flex: 1, margin: 10, alignItems: 'center' }}>
                    <FontAwesome name="share" size={32} color="#C0C0C0"></FontAwesome>
                    <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>
                        346
            </Text>
                </View>
                <View style={{ width: 50, height: 50, flex: 1, marginLeft: 32, marginTop:15, alignItems: 'center' }}>
                        <FabMenu uri={this.props.uri}></FabMenu>
                </View>
            </View>
        )
    }
}

export default MenuComponent;