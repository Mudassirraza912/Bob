import { PermissionsAndroid, Platform } from 'react-native'

import {check, PERMISSIONS, request, requestMultiple, RESULTS} from 'react-native-permissions';

export const getStoragePermission = () => {

  const platform = Platform.OS == "ios" ? 'IOS' : 'ANDROID'
  requestMultiple([PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS[platform].CAMERA]).then((statuses) => {
    console.log('WRITE_EXTERNAL_STORAGE', statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]);
    console.log('CAMERA', statuses[PERMISSIONS[platform].CAMERA]);
  });

}

export const getPermissions = async () => {
    if (Platform.OS === 'android') {
        try {
          const grants = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          ]);
      
          console.log('write external stroage', grants);
      
          if (
            grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            grants['android.permission.READ_EXTERNAL_STORAGE'] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            grants['android.permission.RECORD_AUDIO'] ===
              PermissionsAndroid.RESULTS.GRANTED
          ) {
            console.log('Permissions granted');
          } else {
            console.log('All required permissions not granted');
            return;
          }
        } catch (err) {
          console.warn(err);
          return;
        }
      }
      else {
        requestMultiple([PERMISSIONS.IOS.MICROPHONE]).then((statuses) => {
            console.log('WRITE_EXTERNAL_STORAGE', statuses[PERMISSIONS.IOS.MICROPHONE]);
          });
        
      }
}