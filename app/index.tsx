import { Button, Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          backgroundColor: "#2c70de",
          height: 120,
          alignContent: "center",
          alignItems: "center"
        }}
      >
         <Text
          style={{
            color: "white",
            flex: 1,
          }}
         >I'm pressable!</Text>
      </Pressable>
    </View>
  );
}
