import { View,Text, TouchableOpacity, TouchableHighlightBase } from "react-native";
import React from "react";

const CustomButton=()=>{
    return (
        <TouchableOpacity  activeOpacity={0.7} className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${''} {isLoading ? 'opacity-50' : ''}`} disabled={''}><Text className={`text-primary font-psemibold  text-lg ${''}`}>{''}</Text></TouchableOpacity>
    )
}

export default CustomButton