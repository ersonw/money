/* eslint-disable camelcase */
import FontAwesome_ttf from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Entypo_ttf from 'react-native-vector-icons/Fonts/Entypo.ttf';
import AntDesign_ttf from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import EvilIcons_ttf from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import Feather_ttf from 'react-native-vector-icons/Fonts/Feather.ttf';
import Fontisto_ttf from 'react-native-vector-icons/Fonts/Fontisto.ttf';
import Foundation_ttf from 'react-native-vector-icons/Fonts/Foundation.ttf';
import Ionicons_ttf from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialCommunityIcons_ttf from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import Octicons_ttf from 'react-native-vector-icons/Fonts/Octicons.ttf';
import SimpleLineIcons_ttf from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';
import Zocial_ttf from 'react-native-vector-icons/Fonts/Zocial.ttf';


const IconsCSS = `
@font-face {
  src: url(${AntDesign_ttf});
  font-family: AntDesign;
}
@font-face {
  src: url(${Entypo_ttf});
  font-family: Entypo;
}
@font-face {
  src: url(${Feather_ttf});
  font-family: Feather;
}
`;

const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) style.styleSheet.cssText = IconsCSS;
else style.appendChild(document.createTextNode(IconsCSS));

document.head.appendChild(style);