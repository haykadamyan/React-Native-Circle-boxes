/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

function generateBubble({radius, style}) {
    return (
        <View>
            <Text>text</Text>
        </View>
    )
}

export default class ReactNativeCircleBoxes extends Component {
    render() {
        return (
            <View>
                <Text>
                    Welcome to React Native!
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeCircleBoxes', () => ReactNativeCircleBoxes);
