import { Text, TextInput, View, TouchableOpacity, Keyboard, Alert, ScrollView } from "react-native";
import Days from "./components/Days"
import Date from "./components/Date"
import { currentDate } from "./components/Date";
import React, { useEffect } from "react";
export default function App(){
  const [eventName, setEvent] = React.useState("");
  const [eventList, setEventList] = React.useState([]);
  const [date, setDate] = React.useState('');
  const addEvent = ()=>{
    if (date !== null && eventName !== "") {
      setEventList([...eventList, {
        time: currentDate,
        event: eventName
      }]);
      setEvent("")
    } else {
      Alert.alert("Kindly fill the values in the fields.")
    }
    Keyboard.dismiss();
  }
  const removeEvents = ()=>{
    setEventList([]);
    Alert.alert("All events have been removed")
  }  
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentDate !== "") {
        setDate(currentDate);
      } 
      return () => clearInterval(interval);
    }, 1000);

  }, []);
  return(
    <View>
      <Text style={{
        fontSize: 25,
        fontWeight: "bold",
        alignSelf:"center",
        color:"lightgreen", marginTop:10,
        marginBottom:10
      }}>Event Planner App</Text>
      
      <View style={{ flexDirection: "row", backgroundColor: "lightgreen", justifyContent: "space-around" }}>
        <Days day="M"></Days>
        <Days day="T"></Days>
        <Days day="W"></Days>
        <Days day="T"></Days>
        <Days day="F"></Days>
        <Days day="S"></Days>
        <Days day="S"></Days>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Date date = "  "></Date>
        <Date date="  "></Date>
        <Date date="1"></Date>
        <Date date="2"></Date>
        <Date date="3"></Date>
        <Date date="4"></Date>
        <Date date="5"></Date>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Date date="6  "></Date>
        <Date date="7  "></Date>
        <Date date="8  "></Date>
        <Date date="9 "></Date>
        <Date date="10"></Date>
        <Date date="11"></Date>
        <Date date="12"></Date>
      </View>
      <View style={{ flexDirection: "row", justifyContent:"space-around" }}>
        <Date date="13"></Date>
        <Date date="14"></Date>
        <Date date="15"></Date>
        <Date date="16"></Date>
        <Date date="17"></Date>
        <Date date="18"></Date>
        <Date date="19"></Date>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Date date="20"></Date>
        <Date date="21"></Date>
        <Date date="22"></Date>
        <Date date="23"></Date>
        <Date date="24"></Date>
        <Date date="25"></Date>
        <Date date="26"></Date>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Date date="27"></Date>
        <Date date="28"></Date>
        <Date date="29"></Date>
        <Date date="30         "></Date>
        <Date date=" "></Date>
        <Date date=" "></Date>
        <Date date=" "></Date>
      </View>
      <View style={{marginLeft:6, marginTop:20}}>
        <Text>
          Event Name:
        </Text>
        <TextInput placeholder="Enter the name of the event" style={{ borderBottomWidth: 2 }} value={eventName} onChangeText={ setEvent }></TextInput>
        <Text>
          Date/Day:
        </Text>
        <TextInput placeholder="Select the date/day from calender" value={ date } style={{ borderBottomWidth: 2 }}></TextInput>
      </View>
      <View style={{flexDirection :"column", justifyContent:'center', alignItems:"center"}}>
        <TouchableOpacity style={{backgroundColor:"lightgreen", width:100, height:50, marginVertical:12, alignItems:'center', justifyContent:"center"}} onPress={addEvent}>
          <Text style={{color:"white"}}>
            Add to Event
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "orange", width: 100, height: 50, marginVertical: 12, alignItems: 'center', justifyContent: "center" }} onPress={removeEvents}>
          <Text style={{ color: "white" }}>
            Remove All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:"center"}}>
      </View>
      <View style={{ borderWidth: 0.5, margin: 10, height:165 }}>
        <ScrollView>
          {eventList.map(({time,event}, index) => 
            <Text  key= {index} style={{ backgroundColor: "lightgreen", marginLeft: 10,marginRight:10, marginVertical:5, fontSize: 20, color: "white", paddingLeft: 10, borderWidth: 1 }}> 
          {time}, {event}</Text>
          )}

        </ScrollView>
      </View>
    </View>

    
  );
}
