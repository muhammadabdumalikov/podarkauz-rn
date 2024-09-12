import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';

export const PasscodeInput = ({
  externalPasscode,
  setExternalPasscode,
  passcodeLength,
  passcodeSize,
  codeFontSize,
}: {
  externalPasscode: string[];
  setExternalPasscode: any;
  passcodeLength: number;
  passcodeSize: number;
  codeFontSize: number;
}) => {
  const inputRef = useRef<TextInput>(null);
  const animations = useRef(
    [...Array(passcodeLength)].map(() => new Animated.Value(1))
  ).current;

  // Animate dots when a new passcode digit is entered
  const animateDot = (index: number) => {
    Animated.sequence([
      Animated.timing(animations[index], {
        toValue: 1.2, // Slight scaling up
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(animations[index], {
        toValue: 1, // Back to original size
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTextChange = (text: string) => {
    const cleanedText = text.split('').slice(0, passcodeLength);
    setExternalPasscode(cleanedText); // Update the external state
    if (cleanedText.length > 0) {
      animateDot(cleanedText.length - 1); // Trigger animation for the newly added dot
    }
  };

  useEffect(() => {
    setExternalPasscode(externalPasscode); // Sync passcode with external state if it changes
  }, [externalPasscode]);
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Ensure TextInput is hidden but focusable */}
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={externalPasscode.join('')}
        keyboardType='number-pad'
        onChangeText={handleTextChange}
        maxLength={passcodeLength}
        secureTextEntry={true} // Hide text input
        autoFocus={false} // Ensure autofocus is set correctly
      />

      {/* Animated dots to represent passcode */}
      <View
        style={[
          styles.passcodeContainer,
          { width: passcodeSize * passcodeLength + 20 },
        ]}
      >
        {[...Array(passcodeLength)].map((_, index) => {
          
          return <Pressable
            key={index}
            onPress={() => {
              inputRef.current?.focus(); // Open the keyboard when passcode dots are pressed
            }}
          >
            <Animated.View
              style={[
                styles.dot,
                {
                  transform: [{ scale: animations[index] }],
                  backgroundColor:
                    index < externalPasscode.length
                      ? '#7a49a5'
                      : 'rgba(0,0,0,0.1)', // Change dot color based on input length
                  width: passcodeSize,
                  height: passcodeSize,
                  borderRadius: passcodeSize,
                  marginRight:
                    index % 4 === 3 && index !== passcodeLength - 1 ? 6 : 2, // Apply margin after every 4th dot except the last
                },
              ]}
            >
              {index < externalPasscode.length && (
                <Text style={[styles.secureText, { fontSize: codeFontSize }]}>
                  {externalPasscode[index]}
                </Text>
              )}
            </Animated.View>
          </Pressable>
        })}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  promptText: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.3)',
    marginBottom: 20,
  },
  hiddenInput: {
    position: 'absolute',
    width: 0,
    height: 0,
    opacity: 0,
  },
  passcodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secureText: {
    color: '#fff',
  },
});
