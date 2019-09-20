import React, { Component } from 'react'
import { Button, Fab, Content } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native'
// require the module
/* var RNFS = require('react-native-fs');

// get a list of files and directories in the main bundle
RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
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
export default class DownloadImageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {};
      }

    render() {
        return (
            <Button>
                {/*  */}
                <Text>Hello</Text>
            </Button>
        )
    }
}

