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
    ScrollView
} from 'react-native';
import Styles from './styles/index'

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
            <View style={Styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={Styles.scrollItem}>
                        <Text>
                            A
                        </Text>
                    </View>
                    <View style={Styles.scrollItem}>
                        <Text>
                            A
                        </Text>
                    </View>
                    <View style={Styles.scrollItem}>
                        <Text>
                            A
                        </Text>
                    </View>
                    <View style={Styles.scrollItem}>
                        <Text>
                            A
                        </Text>
                    </View>
                    <View style={Styles.scrollItem}>
                        <Text>
                            A
                        </Text>
                    </View>
                    <View style={Styles.scrollItem}>
                        <Text>
                            A
                        </Text>
                    </View>
                    <View style={Styles.scrollItem}>
                        <Text>
                            A
                        </Text>
                    </View>
                    <View style={Styles.scrollItem}>
                        <Text>
                            A
                        </Text>
                    </View>
                </ScrollView>
                
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeCircleBoxes', () => ReactNativeCircleBoxes);
