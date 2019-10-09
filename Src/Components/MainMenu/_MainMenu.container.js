import React, { Component } from 'react'

import { Text } from 'react-native';

import MainMenuView from './_MainMenu.view'

class MainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
        this._clearTotalLikes = this._clearTotalLikes.bind(this);
        this._setTotalLikes = this._setTotalLikes.bind(this);
    }

    _clearTotalLikes = (imageId) => {
        this.props.clearImageViews(imageId)
    }

    _setTotalLikes = (imageId) => {
        this.props.setImageTotalLikes(imageId, this.props.currentPointer)
    }

    componentDidMount() {
        this.setState({
            active: true
        })
    }

    render() {
        return <MainMenuView currentPointer={this.props.currentPointer} _clearTotalLikes={this._clearTotalLikes} _setTotalLikes={this._setTotalLikes} />
    }
}

export default MainMenu;