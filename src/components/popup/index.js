import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    TouchableOpacity,
    Animated,
    Dimensions,
    StyleSheet
} from 'react-native';

import Styles from '../../styles';

export default class PopUp extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={popupStyle.popupContainer}>

            </View>
        )
    }

}

const popupStyle = StyleSheet.create({
    popupContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 1
    }
})