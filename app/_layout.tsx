import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
          <Stack.Screen name="index" options={{title: "Home",  
            headerShown: false }} />
          <Stack.Screen name="list"options={{
            headerBackButtonMenuEnabled: false,
            headerTransparent: true,
            headerBlurEffect: "systemThinMaterialDark",
            title: "NEO List", 
            headerTitleStyle: {
              color: "white",
              fontFamily: "Poppins-Bold",
              fontSize: 20
            }}}/>
        </Stack>
  );
}
