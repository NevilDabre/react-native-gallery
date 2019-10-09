import {connect } from 'react-redux'
import { mapDispatchToProps } from './_ImageBackground.redux'
import ImageBackground from './_ImageBackground.container'

export default connect(null, mapDispatchToProps)(ImageBackground)