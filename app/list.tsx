import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, FlatList, StatusBar, Text, StyleSheet, View } from 'react-native';

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
          neoList.push(neoEntry);
        }
      }
      setData(neoList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally {
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
                backgroundColor: '#323940',
                padding: 20,
                justifyContent: "flex-start",
                margin: 20,
                marginBottom: 10,
                borderRadius: 5,
              }}>
                <View style={{
                  flexDirection: "row"
                }}>
                  <Text style={{
                    flex: 2,
                    color: "white",
                    fontSize: 20,
                    margin: 5,
                    fontWeight: "bold",
                  }}>
                    {item.name}</Text>
                  <Text style={{
                    color: item.hazardous ?"black" : "white",
                    fontSize: 12,
                    margin: 5,
                    paddingBottom: 0,
                    marginBottom: 0,
                    textAlign: 'center',
                    alignContent: 'center',
                    fontWeight: "light",
                    padding: 8,
                    backgroundColor: item.hazardous ? "#eda125" : "#2c70de",
                    borderRadius: 5
                    }}>
                    {item.hazardous ? "HAZARD" : "SAFE"}</Text>
                </View>
                  <Text style={styles.dataItem}>
                    Miss Distance: {item.miss_distance} 
                  </Text>
                  <Text style={styles.dataItem}>
                    Relative Velocity: {item.relative_velocity} 
                  </Text>             
                  <Text style={styles.dataItem}>
                    Diameter: {item.diameter} 
                  </Text>
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
    color: "white",
    fontSize: 20,
    margin: 5
  }
});