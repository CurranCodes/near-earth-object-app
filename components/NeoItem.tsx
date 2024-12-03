import {Pressable, Text} from 'react-native';
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from 'react-native-safe-area-context';

type Data = [{ name: string; diameter: string; relative_velocity: string; miss_distance: string; hazardous: boolean; }];
export default function NeoItem(item: Data) {
    return (
   
    // NEO entry: {"diameter": "1598 ft", "hazardous": false, "miss_distance": "16262183 miles", "name": "247517 (2002 QY6)", "relative_velocity": "53637 mph"}

    <SafeAreaView style={{
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}>
      <Text style={{
        fontSize: 32,
      }}>{item.name}</Text>
    </SafeAreaView>
  );
}
