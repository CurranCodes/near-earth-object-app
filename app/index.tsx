import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Pressable } from "react-native";
import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { SetStateAction, useState } from "react";
import { router } from 'expo-router';

export default function index(){
  const [date, setDate] = useState(new Date())
  const navigation = useNavigation();

  const onChangeFunc = (event: any, selectedDate: SetStateAction<Date>) => {
     setDate(selectedDate);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins",
            fontSize: 30,
          }}>
            Select A Date Below!
        </Text>
      </SafeAreaView>
      <DateTimePicker
        value= {date}
        mode="date"
        themeVariant='dark'
        display='spinner'
        onChange={onChangeFunc}
        style={{
          flex: 1
          }}
      />
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
        onPressOut={() => {
          router.push("/list")
        }}
      >
         <Text
          style={{
            color: "white",
            fontSize: 30,
            fontFamily: "Poppins-Bold",
          }}
         >Lookup NEOs</Text>
      </Pressable>
    </SafeAreaView>
  );
}