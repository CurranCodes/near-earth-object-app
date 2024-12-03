import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, FlatList, StatusBar, Text, StyleSheet, View } from 'react-native';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';

const API_URL = 'https://api.nasa.gov/neo/rest/v1/feed?';

export default function list() {
  const params = useLocalSearchParams()
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([{}])
  const {selectedDate} = params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const requestURL = API_URL + "start_date=" + selectedDate + "&end_date=" + selectedDate + "&api_key=lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN";
      const response = await axios.get(requestURL);
      const neoList = [];
      // NEO entry: {"diameter": "1598 ft", "hazardous": false, "miss_distance": "16262183 miles", "name": "247517 (2002 QY6)", "relative_velocity": "53637 mph"}
      
      for (const property in response.data.near_earth_objects){
        for (const asteroidKey in response.data.near_earth_objects[property]){
          const neoEntry = {id: "", name: "", diameter: "", relative_velocity: "", miss_distance: "", hazardous: false};
          const asteroidData = response.data.near_earth_objects[property][asteroidKey];
          const estimatedDiameterData = asteroidData.estimated_diameter.feet;
          const closeApproachData = asteroidData.close_approach_data[0];
          
          //uses Math.round() to yield nice square numbers for the user
          neoEntry.name = asteroidData.name;
          neoEntry.diameter = Math.round(((estimatedDiameterData.estimated_diameter_min + estimatedDiameterData.estimated_diameter_max) / 2)).toString() + " ft";
          neoEntry.relative_velocity = Math.round(Number(closeApproachData.relative_velocity.miles_per_hour)).toString() + " mph";
          neoEntry.miss_distance = Math.round(Number(closeApproachData.miss_distance.miles)) + " mi";
          neoEntry.hazardous = asteroidData.is_potentially_hazardous_asteroid;
          neoEntry.id = asteroidData.id;
          console.log(neoEntry);
          neoList.push(neoEntry);
        }
      }
      setData(neoList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally {
      console.log(data);
      setLoading(false);
    }
  };

  return (
    <SafeAreaProvider style={{
      flex: 1
    }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          marginTop: StatusBar.currentHeight || 0,
        }}
      >
      {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={{
                backgroundColor: '#6d8196',
                padding: 20,
                justifyContent: "flex-start",
                alignItems: "center",
                margin: 10,
                borderRadius: 5,
              }}>
                <Text
                style={{
                  flex:1,
                  color: "white",
                  fontSize: 20,
                  marginTop: 0,
                  textAlign: 'center'
                }}>
                  ASTEROID {item.name}
                </Text>
                <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center"
                }}>
                  <Text style={styles.dataItem}>
                    Miss Distance
                    {"\n"}
                    {item.miss_distance} 
                  </Text>
                  <Text style={styles.dataItem}>
                    Relative Velocity 
                    {"\n"}
                    {item.relative_velocity} 
                  </Text>
                </View>
                <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center"
                }}>
                  <Text style={styles.dataItem}>
                    Diameter
                    {"\n"}
                    {item.diameter} 
                  </Text>
                  <Text style={styles.dataItem}>
                    {item.hazardous ? "Hazardous" : "Not Hazardous"}
                  </Text>
                </View>
              </View>
            )}
            />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  dataItem: {
    flex: 1,
    color: "#36404a",
    fontSize: 20,
    backgroundColor: "#adcced",
    borderColor: "#36404a",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    alignContent: "center",
    margin: 5
  }
});