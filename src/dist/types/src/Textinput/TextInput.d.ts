import React from 'react';
import { type ColorValue } from 'react-native';
interface TextInputProps {
    placeholder: String;
    placeholderColor?: ColorValue;
    textColor?: ColorValue;
    outlineColor?: ColorValue;
    disabled?: Boolean;
    onChange: (text: String) => void;
    secured?: boolean;
}
declare const _default: React.NamedExoticComponent<TextInputProps>;
export default _default;
