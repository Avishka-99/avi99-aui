import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { TouchableWithoutFeedback, Dimensions, type DimensionValue, StyleSheet, Animated, View, StatusBar, type ColorValue } from "react-native";
export interface SheetRef {
    open: () => void;
    close: () => void;
}

interface BottomsheetProps {
    height: DimensionValue,
    children: React.ReactNode,
    close?: () => void,
    backdropColor?: ColorValue,
    ref: SheetRef,

}
const Bottomsheet = forwardRef<SheetRef, BottomsheetProps>(({ children, height, close, backdropColor }, ref) => {
    useEffect(() => {
        if (height == undefined) {
            console.error('height must be provided');
            return;
        }
        if (children == undefined) {
            console.error('childern must be provided');
            return;
        }
        if (close == undefined) {
            console.error('close function must be provided');
            return;
        }
        if (ref == undefined) {
            console.error('reference must be provided');
            return;
        }
        if (typeof close != 'function') {
            console.error('close shound be a function');
            return;
        }

    }, [])
    const screenHeight = Dimensions.get('window').height
    const [open, setOpen] = useState(false);
    const style = StyleSheet.create({
        container: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'green',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            zIndex: 1000,
            width: Dimensions.get('screen').width,
            height: height,
        }
    })
    const translateY = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    useImperativeHandle(ref, () => ({
        open: () => {
            setOpen(true)
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.7,
                    duration: 300,
                    useNativeDriver: true,
                })
            ]).start();
        },
        close: () => {
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                })
            ]).start(() => {
                setOpen(false);
            });
        }
    }));

    return (
        <>
            {open && <TouchableWithoutFeedback onPress={close}>
                <Animated.View style={{ height: Dimensions.get('screen').height, backgroundColor: backdropColor ? backdropColor : 'black', width: '100%', position: 'absolute', opacity: opacity, paddingTop: StatusBar.currentHeight, zIndex: 999 }}></Animated.View>
            </TouchableWithoutFeedback>}
            <Animated.View style={
                [style.container,
                { transform: [{ translateY: translateY.interpolate({ inputRange: [0, 1], outputRange: [screenHeight, 0] }) }] },

                ]}>

                <View style={{ height: '100%', width: '100%', backgroundColor: 'grey' }}>
                    {children}
                </View>

            </Animated.View>




        </>

    )
})

export default Bottomsheet;