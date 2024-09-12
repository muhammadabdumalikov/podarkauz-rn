import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have installed @expo/vector-icons
import { CustomHeader } from '@/components/app-components/go-back';

const EditProfileScreen = () => {
  const [gender, setGender] = useState('male'); // default gender selection

  return (
    <View style={styles.container}>
      {/* Header */}
      <CustomHeader title='Редактировать профиль' />

      {/* Form Fields */}
      <View style={styles.form}>
        {/* Full Name */}
        <TextInput style={styles.input} value='Аббос Хазратов' />

        {/* First Name */}
        <TextInput style={styles.input} value='Аббос' />

        {/* Date of Birth */}
        <View style={styles.inputWithIcon}>
          <TextInput style={styles.input} value='15/03/1990' />
          <Ionicons name='calendar-outline' size={24} color='black' />
        </View>

        {/* Email */}
        <View style={styles.inputWithIcon}>
          <TextInput style={styles.input} value='abboskhazratov11@gmail.com' />
          <Ionicons name='mail-outline' size={24} color='black' />
        </View>

        {/* Location */}
        <View style={styles.inputWithIcon}>
          <TextInput style={styles.input} value='Ташкент' />
          <Ionicons name='chevron-down-outline' size={24} color='black' />
        </View>

        {/* Gender Selection */}
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'male' && styles.selectedGender,
            ]}
            onPress={() => setGender('male')}
          >
            <Text
              style={[
                styles.genderText,
                gender === 'male' && styles.selectedGenderText,
              ]}
            >
              Мужской
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'female' && styles.selectedGender,
            ]}
            onPress={() => setGender('female')}
          >
            <Text
              style={[
                styles.genderText,
                gender === 'female' && styles.selectedGenderText,
              ]}
            >
              Женский
            </Text>
          </TouchableOpacity>
        </View>

        {/* Phone Number */}
        <View style={styles.inputWithFlag}>
          <Image
            style={styles.flag}
            source={{ uri: 'https://flagcdn.com/w320/uz.png' }}
          />
          <TextInput style={styles.phoneInput} value='+998 94 678 97 58' />
        </View>

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Обновить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  form: {
    flex: 1,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  genderButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedGender: {
    backgroundColor: '#dcdcdc',
  },
  genderText: {
    fontSize: 16,
  },
  selectedGenderText: {
    color: '#000',
  },
  inputWithFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  flag: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  phoneInput: {
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#8e44ad',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
