import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{
      headerShown: false,
      headerShadowVisible: false,
      tabBarShowLabel: false,
      tabBarIconStyle: { display: "none" },
      tabBarStyle: {
        backgroundColor: "black",
        borderColor: "black"
      }
    }}>
    </Tabs>
  );
}