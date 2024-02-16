import { Hamburger } from "phosphor-react-native";
import { Image, Text, View } from "react-native";
import { Icons } from "./Utils/Icons";

interface Iprops{
    icon: string;
    description: string;
    type: string;
    value: Number;
    expense: boolean;
}

export function CardMovi({description,expense,icon,type,value}: Iprops){
    return (
        <View className="flex-row w-full items-center p-2 bg-blackWeight3 mb-3 rounded-lg shadow-md">
            <View className={`p-2 bg-white rounded-xl`}>
                {Icons[icon]}
            </View>
            <View className="flex-row flex-1 h-fit justify-between ml-2">
                <View className="">
                    <Text className="font-semibold text-base text-white">
                        {description}
                    </Text>
                    <Text className="font-semibold text-zinc-500 -mt-1">
                        {type}
                    </Text>
                </View>
                <View>
                    <Text className={`${expense? 'text-red-600': 'text-green-600'}`}>
                       {expense? '-' : '+'} R$ {value.toString()}
                    </Text>
                </View>
            </View>
        </View>
    )
}