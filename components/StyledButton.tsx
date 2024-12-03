import {Pressable, Text} from 'react-native';
import * as Haptics from 'expo-haptics';


export function StyledButton({text = "This is a button!", fontSize = 50, onPressOut = () => {return}}) {
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
        onPressOut={
          onPressOut
        }
      >
         <Text
          style={{
            color: "white",
            fontSize: fontSize,
            fontFamily: "Poppins-Bold",
          }}
         >{text}</Text>
      </Pressable>
  );
}
