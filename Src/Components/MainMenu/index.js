import { mapDispatchToProps, mapStateToProps} from './_MainMenu.redux';
import MainMenu from './_MainMenu.container';
import { connect } from 'react-redux';

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)