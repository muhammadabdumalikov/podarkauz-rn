import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  Switch,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { textColors } from '@/constants/Colors';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import {
  UrbanistBoldText,
  UrbanistMediumText,
  UrbanistSemiboldText,
} from '@/components/StyledText';
import { Link } from 'expo-router';
import { MMKV } from 'react-native-mmkv';
import { ONBOARDING_KEY } from '../screens/onboarding-screens';

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = React.useState(false);

  const profileData = [
    {
      icon: <Ionicons name='person-outline' size={24} color='black' />,
      label: 'Редактировать профиль',
      screen: 'screens/edit-profile-screen',
    },
    {
      icon: <SimpleLineIcons name='location-pin' size={24} color='black' />,
      label: 'Адрес доставки',
      screen: 'screens/adresses-screen',
    },
    {
      icon: <Ionicons name='notifications-outline' size={24} color='black' />,
      label: 'Уведомление',
      screen: 'screens/notification-settings-screen',
    },
    {
      icon: <Ionicons name='card-outline' size={24} color='black' />,
      label: 'Способы оплаты',
      screen: 'screens/payment-methods-screen',
    },
    {
      icon: <Ionicons name='shield-outline' size={24} color='black' />,
      label: 'Безопасность',
      screen: 'screens/adresses-screen',
    },
    {
      icon: <Ionicons name='language-outline' size={24} color='black' />,
      label: 'Язык',
      value: 'Русский (RU)',
      screen: 'screens/adresses-screen',
    },
    {
      icon: <Ionicons name='moon-outline' size={24} color='black' />,
      label: 'Темный режим',
      switch: true,
    },
    {
      icon: <Ionicons name='lock-closed-outline' size={24} color='black' />,
      label: 'политика конфиденциальности',
      screen: 'screens/adresses-screen',
    },
    {
      icon: <Ionicons name='help-circle-outline' size={24} color='black' />,
      label: 'Справочный центр',
      screen: 'screens/adresses-screen',
    },
    {
      icon: <Ionicons name='people-outline' size={24} color='black' />,
      label: 'Приглашайте друзей',
      screen: 'screens/adresses-screen',
    },
  ];

  const handleSwitchChange = () => setDarkMode(prev => !prev);

  const renderItem = ({ item }: { item: any }) => {
    return item?.switch ? (
      <View style={styles.optionRow}>
        {item.icon}
        <UrbanistMediumText style={styles.optionText}>
          {item.label}
        </UrbanistMediumText>
        {item.value && (
          <UrbanistSemiboldText style={styles.optionValue}>
            {item.value}
          </UrbanistSemiboldText>
        )}
        {item.switch && (
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={handleSwitchChange}
            value={darkMode}
          />
        )}
        {!item.switch && (
          <FontAwesome
            name='angle-right'
            size={moderateScale(28)}
            color='black'
          />
        )}
      </View>
    ) : (
      <Link href={item.screen} asChild>
        <Pressable style={styles.optionRow}>
          {item.icon}
          <UrbanistMediumText style={styles.optionText}>
            {item.label}
          </UrbanistMediumText>
          {item.value && (
            <UrbanistSemiboldText style={styles.optionValue}>
              {item.value}
            </UrbanistSemiboldText>
          )}
          {item.switch && (
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={handleSwitchChange}
              value={darkMode}
            />
          )}
          {!item.switch && (
            <FontAwesome
              name='angle-right'
              size={moderateScale(28)}
              color='black'
            />
          )}
        </Pressable>
      </Link>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <UrbanistBoldText style={styles.headerTitle}>Кабинет</UrbanistBoldText>
        <Pressable style={styles.headerRight}>
          <Ionicons
            name='ellipsis-horizontal-circle'
            size={moderateScale(28)}
            color='black'
          />
        </Pressable>
      </View>

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <View>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.profileImage}
          />
          <Link href='screens/onboarding-screens' asChild>
            <Pressable
              style={styles.editIconBox}
              onPress={() => {
                const storage = new MMKV();
                storage.delete(ONBOARDING_KEY);
              }}
            >
              <View style={styles.editIcon}>
                <FontAwesome
                  name='pencil'
                  size={moderateScale(18)}
                  color='white'
                />
              </View>
            </Pressable>
          </Link>
        </View>
        <UrbanistBoldText style={styles.profileName}>
          Аббос Хазратов
        </UrbanistBoldText>
        <UrbanistSemiboldText style={styles.profilePhone}>
          +998 94 678 97 58
        </UrbanistSemiboldText>
      </View>

      {/* Options List */}
      <FlatList
        data={profileData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.label}
        contentContainerStyle={styles.listContainer}
      />

      {/* Logout */}
      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Выйти</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
    paddingBottom: verticalScale(100)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: moderateScale(24),
    fontWeight: '700',
  },
  headerRight: {
    padding: 2,
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: verticalScale(120),
    height: verticalScale(120),
    borderRadius: verticalScale(60),
    overflow: 'hidden',
  },
  editIconBox: {
    padding: 5,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  editIcon: {
    height: verticalScale(26),
    width: verticalScale(26),
    backgroundColor: textColors.purple,
    borderRadius: moderateScale(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    marginTop: 10,
    letterSpacing: 0.2,
  },
  profilePhone: {
    fontSize: moderateScale(14),
    color: 'gray',
    fontWeight: '600',
    letterSpacing: 0.2,
    marginTop: 5,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontWeight: '400',
    letterSpacing: 0.2,
    fontSize: moderateScale(18),
  },
  optionValue: {
    marginRight: 10,
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: textColors.navyBlack,
  },
  logoutButton: {
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
  },
  logoutText: {
    color: 'red',
    fontSize: 16,
  },
});
