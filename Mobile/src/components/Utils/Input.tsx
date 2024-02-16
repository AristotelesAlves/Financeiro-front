import { TextInput } from "react-native";

interface Iinput{
    onChange: (e: string) => void;
    value: string;
}

export default function Input({onChange, value}: Iinput){
    return (
        <TextInput 
          keyboardType="numeric"
          onChangeText={onChange} 
          value={value} 
          className="w-full border-b"/>
    )
}