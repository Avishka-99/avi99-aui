import React, { useRef, useEffect, memo, useState } from 'react';
import { Animated, Easing, Pressable } from 'react-native';
const Switch = ({ value, onChange, color, containerStyle }) => {
    const toggle = useRef(new Animated.Value(0)).current;
    const [isToggle, setIsToggle] = useState(false);
    let backgroundStyle = {};
    useEffect(() => {
        if (value == undefined) {
            console.error('value must be provided');
            return;
        }
        if (typeof value !== 'boolean') {
            console.error('value must be a boolean');
            return;
        }
        toggle.setValue(value ? 1 : 0);
        setIsToggle(value);
    }, []);
    const movetoggle = () => {
        setIsToggle((prevState) => !prevState);
        onChange(isToggle);
        Animated.parallel([Animated.timing(toggle, {
                toValue: isToggle ? 0 : 1,
                duration: 150,
                easing: Easing.linear,
                useNativeDriver: true,
            })]).start();
    };
    if (containerStyle) {
        backgroundStyle = { ...backgroundStyle, ...containerStyle };
    }
    return (React.createElement(Pressable, { onPress: () => {
            movetoggle();
        }, style: backgroundStyle },
        React.createElement(Animated.View, { style: [{
                    width: 50, height: 30, backgroundColor: toggle.interpolate({
                        inputRange: Array(2).fill(0).map((_, index) => index),
                        outputRange: Array(2).fill('#DDDDDD').map((_, index) => index == 1 ? color ? color : 'dodgerblue' : _)
                    }), borderRadius: 30, display: 'flex', justifyContent: 'center'
                }] },
            React.createElement(Animated.View, { style: [{
                        width: 28, height: 28, borderRadius: 28, backgroundColor: 'white', left: 1,
                        transform: [{
                                translateX: toggle.interpolate({
                                    inputRange: Array(2).fill(0).map((_, index) => index),
                                    outputRange: Array(2).fill(0).map((_, index) => index * 20),
                                })
                            }]
                    }] }))));
};
export default memo(Switch);
