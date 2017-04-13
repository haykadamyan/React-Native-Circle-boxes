import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    TouchableOpacity,
    Animated
} from 'react-native';

import Styles from '../../styles';

import * as Helpers from '../../helpers';

export default class Bubble extends Component {
    constructor(props){
        super(props);
    }

    state = {
        bubble: this.props.bubble,
        scaleAnim: new Animated.Value(1)
    }

    componentDidMount(){
        Animated.timing(                            // Animate over time
            this.state.scaleAnim,                      // The animated value to drive
            {
                toValue: 1.1,                             // Animate to opacity: 1, or fully opaque
            }
        ).start(()=>{
            
            Animated.timing(
                this.state.scaleAnim,
                {
                    toValue: 1
                }
            ).start()
            
        });   
    }

    generateBubble({radius, style, textStyle, onPress, offsetLeft, offsetTop}) {
    return (
        <Animated.View style={{paddingTop: offsetTop || Helpers.randomBetween(5, 60), paddingLeft: offsetLeft || Helpers.randomBetween(5, 60)}}>
            <TouchableOpacity style={[{width: radius, height: radius, transform: [{scale: this.state.scaleAnim}]}, Styles.bubble, style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                <View style={Styles.flexCenter}>
                    <Text style={textStyle}>Text</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}


    render(){        
        return(
            this.generateBubble(this.state.bubble)
        );
    }
}

