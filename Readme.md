## Running application on real device cmd
ionic capacitor run android -l --external

<!--- if SDK is not able to detect-->
# export ANDROID_SDK_ROOT="/home/ragav/Android/Sdk"
# export ANDROID_HOME="/home/ragav/Android/Sdk"

<!--- steps to take build in ionic cap-->
## steps to take build in ionic cap
```
Stop live server
npx/npm run build
npx cap sync android
ionic capacitor build android
Build the apk again in Android Studio
```