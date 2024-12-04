import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
          <Stack.Screen name="index" options={{title: "Home",  
            headerShown: false }} />
          <Stack.Screen name="list"options={{
            headerBackButtonMenuEnabled: false,
            title: "NEO List",
            headerStyle: {
              backgroundColor: "black"
            },
            headerTitleStyle: {
              color: "white",
              fontFamily: "Poppins-Bold",
              fontSize: 20
            }}}/>
        </Stack>
  );
}
