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

function generateBubble({radius, style}) {
    return (
        <TouchableOpacity style={[{width: radius, height: radius}, Styles.bubble, style]}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Text</Text>
            </View>
        </TouchableOpacity>
    )
}

export default class ReactNativeCircleBoxes extends Component {
    render() {
        return (
            <View>
                <ScrollView horizontal={true} contentContainerStyle={{flex: 1, flexDirection: 'column', flexWrap:'wrap',  backgroundColor: 'black', alignItems:'flex-start'}}>
                    {generateBubble({radius: 150, style: {backgroundColor: 'purple'} })}
                    {generateBubble({radius: 150, style: {backgroundColor: 'blue'} })}
                    {generateBubble({radius: 150, style: {backgroundColor: 'pink'} })}
                    {generateBubble({radius: 150, style: {backgroundColor: 'red'} })}
                    {generateBubble({radius: 150, style: {backgroundColor: 'red'} })}
                    {generateBubble({radius: 150, style: {backgroundColor: 'red'} })}
                    {generateBubble({radius: 150, style: {backgroundColor: 'red'} })}
                    {generateBubble({radius: 150, style: {backgroundColor: 'red'} })}
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeCircleBoxes', () => ReactNativeCircleBoxes);
