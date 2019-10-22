import * as React from 'react';
import { Appbar } from 'react-native-paper';
import App from '../../../App';

export default class AppHeader extends React.Component {
    render(){
        return(
            <Appbar.Header>
                <Appbar.Action icon="camera" />
                <Appbar.Content title="Image Gallery" />
                <Appbar.Action icon="more-vert" />
            </Appbar.Header>
        )
    }
}
