import React, { Component } from 'react';

import ImageScrollView from './_ImageScrollView.view'

class ImageScrollViewComponent extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
        this._handleInitPointer = this._handleInitPointer.bind(this);
        this._handleOnScrollEndDrag = this._handleOnScrollEndDrag.bind(this);
    }

    _handleInitPointer = (imageInfo)=> {
        this.props.initCurrentPointer(imageInfo)
    }

    _setTotalLikes = () => {
        this.props.updateLikesOfImage(this.state.imageInfo.id);
      }

    componentDidMount() {
        this.setState({ loading: false })

        if(this.props.imagesList && this.props.imagesList.length > 0){
            
                this._handleInitPointer(this.props.imagesList[0])
            
        }

        setTimeout(() => {
            this.inputElement.scrollTo({x: 0, y: 0, animated: true})
        }, 5000);
    }

    _handleOnScrollEndDrag = ()=>{
        console.log('Scroll Ended');
    }

    render() {
        return (
            <ImageScrollView inputRef={el => this.inputElement = el} handleOnScrollEndDrag={this._handleOnScrollEndDrag} scrollNext={this._scrollNext} loading={this.state.loading} imagesList={this.props.imagesList} />
        )
    }
}

export default ImageScrollViewComponent