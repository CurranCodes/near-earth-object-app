import { Button, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Poppins_100Thin, Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import * as Haptics from 'expo-haptics';

export default function Index() {
  const [fontsLoaded] = useFonts({
     Poppins_400Regular,
     Poppins_100Thin
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
         >I'm pressable!</Text>
      </Pressable>
    </SafeAreaView>
  );
}
