
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";


const ResturantCard = ({item }) => {
    
const navigation = useNavigation();
   
  return (
    <TouchableWithoutFeedback onPress={()=>{
        navigation.navigate('Resturant', {
          ...item
        })
      }}>
        <View style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}} className="mr-3 bg-white rounded-3xl shadow-lg">
            <Image  source={{ uri: item.image }} style={{ height: 110, width: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
          
          <View className="px-3 pb-4 space-y-2">
           
            <Text className="text-lg font-bold pt-2">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                <Text className="text-xs">
                    <Text className="text-green-700">{item.rating}</Text>
                    <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700"></Text>
                </Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
            </View>
          </View>
        </View>
        
        
        
      </TouchableWithoutFeedback>
  )
}

export default ResturantCard