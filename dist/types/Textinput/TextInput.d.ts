import React from 'react';
import { type ViewStyle, type ColorValue } from 'react-native';
interface TextInputProps {
    placeholder: string;
    placeholderColor?: ColorValue;
    textColor?: ColorValue;
    outlineColor?: ColorValue;
    disabled?: boolean;
    onChange: (text: string) => void;
    secured?: boolean;
    containerStyle?: ViewStyle;
    value: string;
}
declare const _default: React.NamedExoticComponent<TextInputProps>;
export default _default;
