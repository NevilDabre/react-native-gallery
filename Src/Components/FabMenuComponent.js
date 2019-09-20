import React, { Component } from 'react';
import { Button, Fab, Content } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
/* import RNFS from 'react-native-fs'; */
import DownloadImageComponent from './DownloadImageComponent'



export default class FabMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
    this._handleDownloadImage = this._handleDownloadImage.bind(this)
  }

  _handleDownloadImage = () => {

    // get a list of files and directories in the main bundle
/*     RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        console.log('GOT RESULT', result);

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          return RNFS.readFile(statResult[1], 'utf8');
        }

        return 'no file';
      })
      .then((contents) => {
        // log the file contents
        console.log(contents);
      })
      .catch((err) => {
        console.log(err.message, err.code);
      }); */
  }
  render() {
    return (
      <Fab
        active={this.state.active}
        direction="left"
        style={{
          backgroundColor: null,
          shadowColor: "#FFFFFF",
          borderWidth: 0,
          shadowRadius: 25
        }}
        onPress={() => this.setState({ active: !this.state.active })}>
        <FontAwesome name="ellipsis-h" size={32} color="#C0C0C0"></FontAwesome>
        {
          this.state.active === true ?
            <Button>
              <FontAwesome name="flag-o" size={32} color="#C0C0C0"></FontAwesome>
            </Button>
            : null
        }
        {
          this.state.active === true ?
            <Button>
              <FontAwesome name="download" size={32} color="#C0C0C0" onPress={() => { console.log('download', this.props.uri); this._handleDownloadImage()  }}></FontAwesome>
            </Button>
            : null
        }



      </Fab>
    );
  }
}


/*        */