import DateTimePicker from '@react-native-community/datetimepicker';
import { View } from 'react-native';



export function DatePicker (){
    return (
      <View>
            <DateTimePicker
            value= {new Date()}
            mode="date"
            style={{
              backgroundColor: "black",
            }}
            />
      </View>
    );
  };