// import { TouchBar } from 'electron'
const { TouchBar, nativeImage } = require('electron')
const path = require('path');

const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar

// const spin = new TouchBarButton({
//   label: '🎰 Spin',
//   backgroundColor: '#7851A9',
//   click: () => {}
// });

let webIcon = new TouchBarButton({
  'backgroundColor': '#FFFFFF',
  'icon': nativeImage.createFromPath(path.join(__dirname, '../assets/web-white-icon.png')).resize({
    width: 58,
    height: 45,
  }),
  'iconPosition': 'center',
});

let tardisWelcome = new TouchBarLabel({
    'label': "Welcome to tardis please login",
    'textColor': "#FFFFFF"
});

// export default {
const touchBar = new TouchBar({
    items: [
        webIcon,
        new TouchBarSpacer({ size: 'large' }),
        tardisWelcome
    ]
});
// }

// const {nativeImage} = require('electron');
// ...

module.exports = touchBar;
