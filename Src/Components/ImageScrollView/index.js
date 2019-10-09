import { connect } from 'react-redux'
import ImageScrollView from './_ImageScrollView.container'
import { mapStateToProps } from './_ImageScrollView.redux'

export default connect(mapStateToProps)(ImageScrollView)