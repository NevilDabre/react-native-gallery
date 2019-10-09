import { CHANGE_POINTER } from '../../redux/actions/currentImageListPointerAction'
import { ADD_VIEW, ADD_LIKE,CLEAR_LIKES } from '../../redux/actions/imageListActions'

export const mapDispatchToProps = (dispatch) =>{
    return{
        updateCurrentPointer: (imageInfo) =>{
          dispatch({
            type: CHANGE_POINTER,
            payload: {
              currentPointer: imageInfo
            }
          })
        },
        updateViewsOfImage: (imageId) =>{
            dispatch({
                type: ADD_VIEW,
                payload: {
                  imageId: imageId
                }
            })
        },
        updateLikesOfImage: (imageId) =>{
          dispatch({
            type: ADD_LIKE,
            payload: {
              imageId: imageId
            }
          })
        },
        resetLikesOfImage: (imageId) =>{
          dispatch({
            type: CLEAR_LIKES,
            payload:{
              imageId: imageId
            }
          })
        }
    }
  }