import React, { Component } from 'react';

import ImageScrollView from './_ImageScrollView.view'

class ImageScrollViewComponent extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({ loading: false })
    }

    render() {
        return (
            <ImageScrollView loading={this.state.loading} imagesList={this.props.imagesList} />
        )
    }
}

export default ImageScrollViewComponent