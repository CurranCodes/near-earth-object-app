import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform, Pressable, Text, Props } from 'react-native';
import * as Haptics from 'expo-haptics';
import { StyleProps } from 'react-native-reanimated';

export function BigButton({text}) {
  return (
    <Pressable
        style={({pressed}) => [
            {backgroundColor: pressed ? "#133e85" : "#2c70de",
            alignContent: "center",
            padding: 20,
            borderRadius: 20,
            alignItems: "center"}
          ]}
        onPressIn={
          () => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
        }
        onPress={ 
          () => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)}
        }
      >
         <Text
          style={{
            color: "white",
            fontSize: 50,
            fontFamily: "Poppins-100Thin"
          }}
         >{text}</Text>
      </Pressable>
  );
}
