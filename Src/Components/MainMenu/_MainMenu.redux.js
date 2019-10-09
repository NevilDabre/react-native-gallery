import { CHANGE_POINTER } from '../../redux/actions/currentImageListPointerAction'
import { ADD_LIKE, CLEAR_LIKES } from '../../redux/actions/imageListActions'

exports.mapStateToProps = ({ currentImagePointer }) => {
    return {
        currentPointer: currentImagePointer.currentPointer
    }
}

exports.mapDispatchToProps = (dispatch) => {
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