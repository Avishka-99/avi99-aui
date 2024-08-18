import React, { memo, useEffect, useRef, useState } from 'react';
import { Pressable, View, TextInput, type ViewStyle } from 'react-native';
import OtpBox from './OtpBox';
interface OtpProps {
    length: number,
    onChange: (text: String) => void,
    onComplete?: (text: String) => void,
    containerStyle?: ViewStyle;
    boxStyle?: ViewStyle;
}

let backgroundStyle: ViewStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

}
const otpContainer: ViewStyle = {
    width: '100%',
    zIndex: 2,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
}




const OtpInput: React.FC<OtpProps> = ({ length, onChange, onComplete, containerStyle, boxStyle }) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
    const inputRef = useRef<TextInput>(null);
    useEffect(() => {
        if (length == undefined) {
            console.error('length must be provided');
            return;
        }
        if (onChange == undefined) {
            console.error('onPress function must be provided');
            return;
        }
        if (typeof length != 'number') {
            console.error('length should be a number');
            return;
        }
        if (typeof onChange != 'function') {
            console.error('onChange should be a function');
            return;
        }
    }, [])
    const onChangeText = (text: string) => {
        const otpArray: string[] = Array.from(text);
        if (otpArray.length >= length) {
            setOtp(otpArray)
        } else {
            const emptyArray: string[] = Array(length - otpArray.length).fill('');
            const newOtpArray: string[] = otpArray.concat(emptyArray)
            setOtp(newOtpArray)
        }
        onChange(text);
        if (text.length == length) {
            inputRef.current?.blur();
            if (onComplete) {
                onComplete(text);
            }

        }

    }
    const focusTextInput = () => {
        if (inputRef.current?.isFocused()) {
            inputRef.current.blur();
        } else {
            inputRef.current?.focus();
        }

    }
    if (containerStyle) {
        backgroundStyle = { ...backgroundStyle, ...containerStyle }
    }
    return (
        <Pressable style={backgroundStyle} onPress={focusTextInput} >
            <TextInput ref={inputRef} onChangeText={onChangeText} style={{ zIndex: 1, flex: 1, height: 60 }} cursorColor={'red'} maxLength={length} keyboardType='phone-pad' />
            <View style={otpContainer}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    {Array(length).fill(0).map((_, index) => (
                        <OtpBox key={index} digit={otp[index]} index={index} length={length} active={otp.indexOf('') == index ? true : false} boxStyle={boxStyle} />
                    ))}
                </View>
            </View>
        </Pressable>
    )
}
export default memo(OtpInput);