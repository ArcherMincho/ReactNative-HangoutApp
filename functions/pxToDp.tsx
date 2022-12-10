/** 
 * @brief Converts static px to the default dp unit in React Native
 * for responsive UI
 * @return dp
 */

import { Dimensions } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;

const uiWidthPx = 390;

export default function pxToDp(uiElementPx) {
    return (uiElementPx * deviceWidthDp) / uiWidthPx;
};