import React, { useRef, useEffect, memo, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
const ProgressBar = ({ value, color, width, height }) => {
    const progress = useRef(new Animated.Value(0)).current;
    const [containerHeight, setContainerHeight] = useState(0);
    useEffect(() => {
        if (typeof value !== 'number' || value < 0 || value > 100) {
            console.error('value is required and must be a number between 0 and 100.');
            return;
        }
        const animation = Animated.parallel([
            Animated.timing(progress, {
                toValue: value < 100 ? value : 100,
                duration: 1000,
                easing: Easing.ease,
                useNativeDriver: false
            })
        ]);
        animation.start();
        return () => {
            animation.stop();
        };
    }, [value]);
    return (React.createElement(View, { style: {
            width: width ? width : '100%',
            height: height ? height : 8,
        }, onLayout: ({ nativeEvent: LayoutEvent }) => {
            setContainerHeight(LayoutEvent.layout.height);
        } },
        React.createElement(View, { style: { width: `100%`, height: '100%', overflow: 'hidden', borderRadius: containerHeight } },
            React.createElement(View, { style: { width: `100%`, height: '100%', backgroundColor: color ? color : '#5BC236', opacity: 0.2 } }),
            React.createElement(Animated.View, { style: [{
                        position: 'absolute',
                        height: '100%',
                        backgroundColor: color ? color : '#5BC236',
                        width: progress.interpolate({
                            inputRange: Array(2).fill(0).map((_, index) => index * 100),
                            outputRange: Array(2).fill(0).map((_, index) => index == 0 ? "0%" : "100%")
                        }),
                    }] }))));
};
export default memo(ProgressBar);
