import { Dimensions, Platform } from 'react-native';

export const {height, width} = Dimensions.get('window');

export const screenWidth = (size: number) => {
    return  Platform.OS === 'android' ? width * size :   width * size;
};
export const screenHeight = (size: number) => {
    return Platform.OS === 'android' ? height * size : height * size;
};

export const screenSize = (screenWidthSize: number, screenHeightSize:number) =>{
    return Platform.OS === 'android' ? {
        width:width * screenWidthSize,
        height:height * screenHeightSize,
    } : {
        width:width * screenWidthSize,
        height:height * screenHeightSize,
    };
};


export default {
    small: 14,
    xSmall: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 30,
    radiusLG: 30,
    radiusMD: 20,
    radiusSM: 10,
// eslint-disable-next-line semi
}
