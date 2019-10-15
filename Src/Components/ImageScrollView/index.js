import { connect } from 'react-redux'
import ImageScrollView from './_ImageScrollView.container'
import { mapStateToProps, mapDispatchToProps } from './_ImageScrollView.redux'

export default connect(mapStateToProps, mapDispatchToProps)(ImageScrollView)