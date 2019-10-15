import { INITIALIZE_POINTER } from '../../redux/actions/currentImageListPointerAction'

export const mapStateToProps = ({ images }) => {
    return {
        imagesList: images.imageList
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        initCurrentPointer: (imageInfo) => {
            dispatch({
                type: INITIALIZE_POINTER,
                payload: {imageInfo}
            })
        }
    }
}