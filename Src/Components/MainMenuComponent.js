import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FabMenu from './FabMenuComponent'
import { FontAwesome } from '@expo/vector-icons';
import numeral from 'numeral'
import DownloadImageComponent from './DownloadImageComponent'
import { CHANGE_POINTER } from '../redux/actions/currentImageListPointerAction'
import { ADD_LIKE, CLEAR_LIKES } from '../redux/actions/imageListActions'

import { connect } from 'react-redux'

class MenuComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
        this._clearTotalLikes = this._clearTotalLikes.bind(this);
        this._setTotalLikes = this._setTotalLikes.bind(this);
    }

    _clearTotalLikes = (imageId) => {
        console.log('_clearTotalLikes - ', imageId)
        this.props.clearImageViews(imageId)
    }

    _setTotalLikes = (imageId) => {
        console.log('_setTotalLikes - ', imageId)
        this.props.setImageTotalLikes(imageId, this.props.currentPointer)
    }

    render() {
        console.log('Main menu loaded - - -> ', this.props.currentPointer)

        return (
            <View style={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', bottom: 25, right: 10, flexDirection: 'column', }}>
                <View style={{ width: 50, height: 50, flex: 1, margin: 10, alignItems: 'center' }}>
                    <FontAwesome name="eye" size={32} color="#C0C0C0"></FontAwesome>
                    <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>
                        {numeral(this.props.currentPointer.totalViews).format('0 a')}
                    </Text>
                </View>
                <View style={{ width: 50, height: 50, flex: 2, margin: 10, alignItems: 'center' }}>
                    {
                        this.props.currentPointer.totalLikes && this.props.currentPointer.totalLikes > 0 ?
                            <FontAwesome name="heart" size={32} color="#C21E56" backgroundColor="#C21E56" onPress={this._clearTotalLikes(this.props.currentPointer.id)}></FontAwesome>
                            :
                            <FontAwesome name="heart-o" size={32} color="#C0C0C0" onPress={() => this._setTotalLikes(this.props.currentPointer.id)} ></FontAwesome>
                    }
                    <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>
                        {numeral(this.props.currentPointer.totalLikes).format('0 a')}
                    </Text>
                </View>
                <View style={{ width: 50, height: 50, flex: 1, margin: 10, alignItems: 'center' }}>
                    <FontAwesome name="share" size={32} color="#C0C0C0"></FontAwesome>
                    <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>
                        346
            </Text>
                </View>
                {/*                 <View style={{ width: 50, height: 50, flex: 1, marginLeft: 32, marginTop:15, alignItems: 'center' }}>
                        <FabMenu uri={this.props.uri}></FabMenu>
                </View> */}
            </View>
        )
    }
}


const mapStateToProps = ({ currentImagePointer }) => {
    console.log('currentImagePointer - - -  = = =>', currentImagePointer)
    return {
        currentPointer: currentImagePointer.currentPointer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearImageViews: (imageId) => {
            dispatch({
                type: CLEAR_LIKES,
                payload: {
                    imageId: imageId
                }
            })
        },
        setImageTotalLikes: (imageId, currentPointer) => {
            console.log('currentPointer id - - ->', currentPointer)
            dispatch({
                type: CHANGE_POINTER,
                payload: {
                    imageId: imageId,
                    currentPointer: currentPointer
                }
            })
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)