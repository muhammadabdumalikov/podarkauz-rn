import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  transactions;
  
  constructor() {
    this.transactions = {
      beforeWrite: [],
      afterRead: []
    };
  }

  register(type, event, callback) {
    if (event === 'beforewrite' && type === 'string') {
      this.transactions.beforeWrite.push(callback);
    } else if (event === 'afterread' && type === 'string') {
      this.transactions.afterRead.push(callback);
    }
  }

  async setItem(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error('Error storing data', e);
    }
  }

  async getItem(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Error retrieving data', e);
    }
  }

  async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing data', e);
    }
  }

  async getAllKeys() {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (e) {
      console.error('Error getting all keys', e);
    }
  }

  async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('Error clearing storage', e);
    }
  }
}

const storage = new Storage();

export default storage;