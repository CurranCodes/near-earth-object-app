import { Button, Pressable, Text, View } from "react-native";
import { BigButton } from "@/components/BigButton";
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
      <BigButton text="Im a big button">

      </BigButton>
    </SafeAreaView>
  );
}
