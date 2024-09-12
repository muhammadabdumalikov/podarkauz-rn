import PaymentCardSvg from '@/assets/images/payment-card';
import { CustomHeader } from '@/components/app-components/go-back';
import { LinearWrapper } from '@/components/app-components/linear-wrapper';
import { UrbanistSemiboldText } from '@/components/StyledText';
import { horizontalScale, verticalScale } from '@/utils/metrics';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { PasscodeInput } from '../../components/app-components/passcode';
import { ScrollView } from '@/components/Themed';

const AddNewCardScreen = () => {
  const [passcode, setPasscode] = useState([]);
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView style={styles.container}>
        <CustomHeader title='Добавить новую карточку' />

        <View style={styles.cardPreview}>
          {/* <View style={styles.card}>
          <Text style={styles.cardBrand}>Mocard</Text>
          <Text style={styles.cardNumber}>•••• •••• •••• ••••</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardDetail}>Card Holder name</Text>
            <Text style={styles.cardDetail}>Expiry date</Text>
          </View>
        </View> */}
          <View>
            <PaymentCardSvg
              height={verticalScale(240)}
              width={horizontalScale(395)}
            />
          </View>
          <View style={styles.cardDetailsBox}>
            <View style={styles.cardBrandRow}>
              <UrbanistSemiboldText style={styles.cardBrand}>
                Mocard
              </UrbanistSemiboldText>
              <UrbanistSemiboldText style={styles.cardBrand}>
                Mocard
              </UrbanistSemiboldText>
            </View>

            <View style={{ height: 20, justifyContent: 'center' }}>
              <PasscodeInput
                setExternalPasscode={setPasscode}
                externalPasscode={passcode}
                passcodeLength={16}
                passcodeSize={16}
                codeFontSize={14}
              />
            </View>
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Название карты</Text>
          <TextInput style={styles.input} value='Зарплатная карта' />

          <Text style={styles.label}>Номер карты</Text>
          <TextInput style={styles.input} value='2672 4738 7837 7285' />

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Срока действия</Text>
              <TextInput style={styles.input} value='09/07/26' />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>CVV</Text>
              <TextInput style={styles.input} value='699' secureTextEntry />
            </View>
          </View>
        </View>

        <LinearWrapper style={styles.addButton}>
          <Pressable>
            <Text style={styles.addButtonText}>Добавить</Text>
          </Pressable>
        </LinearWrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardPreview: {
    height: verticalScale(240),
    marginTop: 20,
    alignItems: 'center',
    // padding: 30,
  },
  card: {
    backgroundColor: '#6B48FF',
    width: '100%',
    borderRadius: 16,
    padding: 20,
  },
  cardBrandRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardBrand: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 24,
    marginVertical: 20,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetailsBox: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    position: 'absolute',
    padding: verticalScale(30),
    zIndex: 2,
  },
  cardDetail: {
    color: '#fff',
    fontSize: 14,
  },
  form: {
    marginTop: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#6B48FF',
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddNewCardScreen;
