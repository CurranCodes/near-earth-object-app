import { Link, Stack } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <SafeAreaView style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text>
            This screen doesn't exist.
        </Text>
        <Link href="/">
            Go to home screen!
        </Link>
      </SafeAreaView>
    </>
  );
}