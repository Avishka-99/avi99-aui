import React, { useState, useRef, memo } from 'react'
import { TextInput as TextBox, View, Animated, type ViewStyle, type ColorValue, Easing } from 'react-native'
interface TextInputProps {
    placeholder: String,
    placeholderColor?: ColorValue,
    textColor?: ColorValue,
    outlineColor?: ColorValue,
    disabled?: Boolean,
    onChange: (text: String) => void,
    secured?: boolean,

}

const TextInput: React.FC<TextInputProps> = ({ placeholder, placeholderColor, textColor, outlineColor, disabled, onChange, secured }) => {
    const [hasValue, setHasValue] = useState<Boolean>(false);
    const inputRef = useRef<TextBox>(null);
    const translation = useRef(new Animated.Value(0)).current;
    const onFocus = () => {
        Animated.timing(translation, {
            toValue: 1,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    }
    const onBlur = () => {
        if (!hasValue) {
            Animated.timing(translation, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true
            }).start();
        }
    }
    const translateYInterpolate = translation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -21.3]
    });
    const setText = (text: String) => {
        if (text.length > 0) {
            setHasValue(true);
            onChange(text);
        } else {
            setHasValue(false);
            onChange(text);
        }
    }
    const placeholderStyle: ViewStyle = {
        position: 'absolute',
        top: 24,
        left: 15,
        transform: [{ translateY: translateYInterpolate }],
        backgroundColor: 'white',
        zIndex: 1,
        pointerEvents: 'none',
    }
    return (
        <View style={{ paddingTop: 10, backgroundColor: 'transparent' }}>
            <Animated.Text style={[{ fontWeight: '600' }, { color: placeholderColor ? placeholderColor : 'black' }, placeholderStyle]}>{placeholder}</Animated.Text>
            <TextBox style={[{ borderWidth: 1, padding: 13, borderRadius: 5, backgroundColor: 'white', color: textColor ? textColor : 'black', borderColor: outlineColor ? outlineColor : 'black' }]} onFocus={onFocus} onBlur={onBlur} ref={inputRef} onChangeText={setText} secureTextEntry={secured ? secured : false} editable={disabled ? false : true} selectTextOnFocus={disabled ? false : true} />
        </View>

    )
}

export default memo(TextInput)