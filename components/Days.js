import { Text, View } from "react-native";

export default function Days(props){
  return(
      <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>{props.day}</Text>
  );
}
