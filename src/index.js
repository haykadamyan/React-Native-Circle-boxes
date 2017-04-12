/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Styles from './styles';

import * as Helpers from './helpers';
import Config from './config';

function generateBubble({radius, style, textStyle, onPress, offsetLeft, offsetTop}, key) {
    return (
        <View style={{paddingTop: offsetTop || Helpers.randomBetween(5, 60), paddingLeft: offsetLeft || Helpers.randomBetween(5, 60)}} key={key}>
            <TouchableOpacity style={[{width: radius, height: radius}, Styles.bubble, style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                <View style={Styles.flexCenter}>
                    <Text style={textStyle}>Text</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default class ReactNativeCircleBoxes extends Component {
    render() {
        return (
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{height: 500, flexDirection: 'column', flexWrap:'wrap', alignItems:'flex-start'}}>
                    {Config.bubbles.map((bubble, index) => {
                        return generateBubble(bubble, index)
                    })
                    }
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeCircleBoxes', () => ReactNativeCircleBoxes);
