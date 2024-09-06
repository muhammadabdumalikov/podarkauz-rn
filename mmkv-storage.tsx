import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: `user-storage`,
  // path: `${USER_DIRECTORY}/storage`,
  encryptionKey: 'hunter2',
  // mode: Mode.MULTI_PROCESS
})