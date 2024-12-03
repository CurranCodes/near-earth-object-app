import DateTimePicker from '@react-native-community/datetimepicker';
import { View } from 'react-native';



export function DatePicker (){
    return (
      <DateTimePicker
        value= {new Date()}
        mode="date"
        themeVariant='dark'
        display='spinner'
        style={{
          flex: 1
        }}
      />
    );
  };