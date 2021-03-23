/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { useState } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"API_KEY_HERE",
}

// Sets the default scene you want for AR and VR
const InitialARScene = require('./js/HelloWorldSceneAR');
const navigatorTypes = {
  UNSET: 'UNSET',
  AR: 'AR'
} ;

const LookingGlass = () => {
  const [ navigatorType, setNavigatorType ] = useState(navigatorTypes.UNSET);
  const showExperienceSelector = navigatorType === navigatorTypes.UNSET;
  const startAR = () => {
    setNavigatorType()
  };

  return (
    <View>
    { showExperienceSelector ? (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <Text style={localStyles.titleText}>
            Choose your desired experience:
          </Text>

          <TouchableHighlight style={localStyles.buttons}
            onPress={startAR}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>{navigatorTypes.AR}</Text>
          </TouchableHighlight>
        </View>
      </View>
      )
      : 
      (
        <ViroARSceneNavigator
          initialScene={{scene: InitialARScene}} />
      )
    }
    </View>
  );
}

// _exitViro() {
//   this.setState({
//     navigatorType : UNSET
//   })
// }


var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = LookingGlass;
