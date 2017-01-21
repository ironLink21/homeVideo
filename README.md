# Home Video
-----------------------
This app is to help catalog those huge dvd/vhs video collections at home.
This project was started by the Bertlshofer Brothers.

# Getting Started:
-----------------------
Make sure you have yarn and react-native-cli installed for your OS then:
*Note: these need to be installed globally*

1. `$ git clone git@github.com:ironLink21/homeVideo.git`
2. cd into homeVideo and run `$ yarn`
3. to test run:
    - Android: `$ react-native run-android` *Note: you need to have a running emulator started or device connected BEFORE you run this command*
    - iOS: `$ react-native run-ios`

# Source code
-----------------------
All source code can be found under the app/
This allows you to write code once for both platforms


# issues
-----------------------
we ran into an issue with crypto not being recognized in some of our modules.  The `react-native-crypto` is a fix for this for the time being.
Our hope is that react-native will fix this issue inside of react-native's source code. https://github.com/mvayngrib/react-native-crypto

This package creates a shim.js file that needs to stay at the root of the project.  You need to make sure that this is being referenced in our
index.android.js and index.ios.js
