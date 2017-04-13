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

import Bubble from './components/bubble'

import Styles from './styles';

import * as Helpers from './helpers';
import Config from './config';

export default class ReactNativeCircleBoxes extends Component {
    render() {
        return (
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{height: 500, flexDirection: 'column', flexWrap:'wrap', alignItems:'flex-start'}}>
                    {
                        Config.bubbles.map((bubble, index) => {
                            return <Bubble
                                bubble={bubble}
                                key={index}
                            />
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeCircleBoxes', () => ReactNativeCircleBoxes);
