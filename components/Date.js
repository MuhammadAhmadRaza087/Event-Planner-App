import { Text, TouchableOpacity } from "react-native";

var value = ""
export default function Date(props) {
    const clickdate = (dt)=>{
        value = dt;
    }
    return (
        <TouchableOpacity onPress={()=>{clickdate(props.date)}}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.date}</Text>
        </TouchableOpacity>
    );
}
export { value as currentDate }