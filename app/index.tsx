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
          //structures date string to match required formatting of API
          var year = date.getFullYear().toString();
          while (year.length < 4) year = "0" + year;

          var month = date.getMonth().toString();
          while (month.length < 2 ) month = "0" + month;

          var day = date.getDate().toString();
          while (day.length < 2) day = "0" + day;

          var endDay = date.getDate()

          var dateString = year + "-" + month + "-" + day;
          console.log(dateString);
          router.push({pathname: "/list", params: { id: 26, selectedDate: dateString}});
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