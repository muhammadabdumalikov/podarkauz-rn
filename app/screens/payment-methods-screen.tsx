import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have installed @expo/vector-icons
import { CustomHeader } from '@/components/app-components/go-back';
import { Link } from 'expo-router';

const PaymentMethodsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <CustomHeader title='Способы оплаты' />

      {/* Payment Methods */}
      <ScrollView contentContainerStyle={styles.paymentMethodsContainer}>
        {/* Click Up */}
        <View style={styles.paymentMethod}>
          <Image
            style={styles.paymentIcon}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Click_Up.png/1024px-Click_Up.png',
            }} // Example icon link
          />
          <Text style={styles.paymentText}>Click up</Text>
          <Text style={styles.connectedText}>Подключено</Text>
        </View>

        {/* Payme */}
        <View style={[styles.paymentMethod, styles.highlighted]}>
          <Image
            style={styles.paymentIcon}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Payme.png',
            }} // Example Payme icon
          />
          <Text style={styles.paymentText}>Payme</Text>
          <Text style={styles.connectedText}>Подключено</Text>
        </View>

        {/* Uzum Bank */}
        <View style={styles.paymentMethod}>
          <Image
            style={styles.paymentIcon}
            source={{ uri: 'https://uzumbank.uz/favicon.ico' }} // Example Uzum Bank icon
          />
          <Text style={styles.paymentText}>Uzum Bank</Text>
          <Text style={styles.connectedText}>Подключено</Text>
        </View>

        {/* Google Pay */}
        <View style={styles.paymentMethod}>
          <Image
            style={styles.paymentIcon}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
            }} // Example Google Pay icon
          />
          <Text style={styles.paymentText}>Google Pay</Text>
          <Text style={styles.connectedText}>Подключено</Text>
        </View>

        {/* Apple Pay */}
        <View style={styles.paymentMethod}>
          <Image
            style={styles.paymentIcon}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png',
            }} // Example Apple Pay icon
          />
          <Text style={styles.paymentText}>Apple Pay</Text>
          <Text style={styles.connectedText}>Подключено</Text>
        </View>

        {/* Mastercard */}
        <View style={styles.paymentMethod}>
          <Image
            style={styles.paymentIcon}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png',
            }} // Example Mastercard icon
          />
          <Text style={styles.paymentText}>•••• •••• •••• 4679</Text>
          <Text style={styles.connectedText}>Подключено</Text>
        </View>

        {/* Add New Card Button */}
        <Link href='screens/add-new-card-screen' asChild>
          <TouchableOpacity style={styles.addCardButton}>
            <Text style={styles.addCardButtonText}>
              Добавить новую карточку
            </Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paymentMethodsContainer: {
    paddingVertical: 10,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  paymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  paymentText: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  connectedText: {
    color: '#888',
    fontSize: 16,
  },
  highlighted: {
    borderColor: '#8e44ad',
    borderWidth: 2,
  },
  addCardButton: {
    backgroundColor: '#8e44ad',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  addCardButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentMethodsScreen;
