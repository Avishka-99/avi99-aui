import React from "react";
import { type DimensionValue, type ColorValue } from "react-native";
export interface SheetRef {
    open: () => void;
    close: () => void;
}
interface BottomsheetProps {
    height: DimensionValue;
    children: React.ReactNode;
    close?: () => void;
    backdropColor?: ColorValue;
    ref: SheetRef;
}
declare const Bottomsheet: React.ForwardRefExoticComponent<Omit<BottomsheetProps, "ref"> & React.RefAttributes<SheetRef>>;
export default Bottomsheet;
