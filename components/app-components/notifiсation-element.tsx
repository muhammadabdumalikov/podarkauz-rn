import React, { useState, useEffect } from "react";
import { StyleSheet, LayoutChangeEvent } from "react-native";
import { View } from "../Themed";
import { UrbanistBoldText, UrbanistMediumText } from "../StyledText";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/metrics";
import { LinearGradient } from "expo-linear-gradient";
import NotificationSale from "@/assets/icons/notification-sale";
import { textColors } from "@/constants/Colors";
import { checkDateRelation } from "@/utils/checkDateRelation";

export interface INotificationListParams {
  date: string;
  notifications: Array<{
    title: string;
    body: string;
  }>;
}

export const NotificationList = ({ notifications, date }: INotificationListParams) => {
  return (
    <View style={styles.notificationContainer}>
      <UrbanistBoldText style={styles.dateTxt}>{checkDateRelation(date)}</UrbanistBoldText>
      {notifications?.map((notification, index) => (
        <NotificationItem key={index} notification={notification} />
      ))}
    </View>
  );
};

const NotificationItem = ({ notification }: { notification: { title: string; body: string } }) => {
  const [titleLines, setTitleLines] = useState(2);
  const [bodyLines, setBodyLines] = useState(1);

  const onTitleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    const lineHeight = styles.notificationTitle.fontSize * 1.2; // Assuming line height is 1.2 times font size
    const calculatedLines = Math.round(height / lineHeight);
    
    if (calculatedLines > 1) {
      setTitleLines(2);
      setBodyLines(1);
    } else {
      setTitleLines(1);
      setBodyLines(2);
    }
  };

  return (
    <View style={styles.notificationBox}>
      <LinearGradient
        colors={['#7210FF', '#9D59FF']}
        style={[{ justifyContent: 'center', alignItems: 'center', borderRadius: 30 }, styles.notificationImage]}
      >
        <NotificationSale height={verticalScale(28)} width={verticalScale(28)} />
      </LinearGradient>

      <View style={styles.notificationDetails}>
        <UrbanistBoldText
          numberOfLines={titleLines}
          style={styles.notificationTitle}
          onLayout={onTitleLayout}
        >
          {notification.title}
        </UrbanistBoldText>
        <UrbanistMediumText
          numberOfLines={bodyLines}
          style={styles.notificationBody}
        >
          {notification.body}
        </UrbanistMediumText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    width: '100%',
    backgroundColor: textColors.offGrey2
  },
  dateTxt: {
    width: '100%',
    fontSize: moderateScale(18),
    fontWeight: '700',
    marginBottom: verticalScale(16),
    marginHorizontal: verticalScale(16)
  },
  notificationBox: {
    flexDirection: 'row',
    height: verticalScale(102),
    backgroundColor: textColors.pureWhite,
    borderRadius: moderateScale(16),
    padding: verticalScale(16),
    marginHorizontal: verticalScale(16),
    marginBottom: verticalScale(16)
  },
  notificationImage: {
    height: verticalScale(68),
    width: verticalScale(68),
    marginRight: horizontalScale(20)
  },
   notificationDetails: {
     flex: 1,
     justifyContent: 'space-around'
  },
  notificationTitle: {
    fontWeight: '700',
    fontSize: moderateScale(18),
    maxHeight: verticalScale(46),
  },
  notificationBody: {
    fontWeight: '500',
    fontSize: moderateScale(14),
  }
});