import { StyledButton } from "@/components/StyledButton";
import { DatePicker } from "@/components/DatePicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function index(){
  
  const API_URL = 'https://ssd-api.jpl.nasa.gov/scout.api';

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
      <SafeAreaView 
        style={{
          flex: 3
        }}>
        <DatePicker/>
      </SafeAreaView>
      <StyledButton text="Lookup NEOs" fontSize={30}/>
    </SafeAreaView>
  );
}
