import React, { useRef, useEffect, memo, useState } from 'react';
import { Animated, Easing, View, type ColorValue, type DimensionValue } from 'react-native';
interface ProgressBarProps {
    value: number,
    color?: ColorValue,
    width?: DimensionValue,
    height?: DimensionValue,
}
const ProgressBar: React.FC<ProgressBarProps> = ({ value, color, width, height }) => {
    const progress = useRef(new Animated.Value(0)).current;
    const [containerHeight, setContainerHeight] = useState<number>(0);
    useEffect(() => {
        if (typeof value !== 'number' || value < 0) {
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
        ])
        animation.start();
        return () => {
            animation.stop();
        }

    }, [value])
    return (
        <View style={{
            width: width ? width : '100%',
            height: height ? height : 8,

        }}
            onLayout={({ nativeEvent: LayoutEvent }) => {
                setContainerHeight(LayoutEvent.layout.height);
            }}>
            <View style={{ width: `100%`, height: '100%', overflow: 'hidden', borderRadius: containerHeight }}>
                <View style={{ width: `100%`, height: '100%', backgroundColor: color ? color : '#5BC236', opacity: 0.2 }}></View>
                <Animated.View style={[{
                    position: 'absolute',
                    height: '100%',
                    backgroundColor: color ? color : '#5BC236',
                    width: progress.interpolate({
                        inputRange: Array(2).fill(0).map((_, index) => index * 100),
                        outputRange: Array(2).fill(0).map((_, index) => index == 0 ? "0%" : "100%")
                    }),
                }]}>
                </Animated.View>
            </View>

        </View>
    )
}
export default memo(ProgressBar);