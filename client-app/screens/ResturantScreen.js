import { View, Text ,Image ,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from '@react-navigation/native'
import { themeColors } from '../theme';
import BasketIcon from '../components/basketIcon';
import DishRow from '../components/dishRow';
import { useSelector } from 'react-redux'

const ResturantScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute()
    const item = params
    const cart = useSelector((state) => state.cart);
    // console.log( "item :" ,item)
    return (
        <>
      
        {cart.cartItems.length > 0 && <BasketIcon />}
            <View className="relative">
              <Image className="h-72 w-full  bg-white"  source={{ uri: item.image }} />
              <TouchableOpacity 
                    onPress={()=>navigation.goBack()} 
                    className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                    <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                </TouchableOpacity>
                
            </View>
            <View 
                style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} 
                className="bg-white -mt-12 pt-6">
                <View className="px-5">
                    <Text className="text-3xl font-bold">{item.name}</Text>
                    {/* copy this code from restaurant card */}
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <Image 
                                source={require('../assets/images/fullStar.png')} 
                                className="h-4 w-4" />
                            <Text className="text-xs">
                                <Text className="text-green-700">{item.rating}</Text>
                                <Text className="text-gray-700"> {item.reviews}</Text> · <Text className="font-semibold text-gray-700">{item.type}</Text>
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <Icon.MapPin color="gray" width={15} height={15} />
                            <Text className="text-gray-800 text-xs"> Nearby · {item.address}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2">{item.description}</Text>

                                
                    
                </View>
                
            </View>
            <ScrollView  >
            <View>
            <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                {/* dishes */}
                {
                    item.dishes.map(dish=>{
                        return (
                            <DishRow 
                                key={dish.id}
                                id={dish.id}
                                name={dish.name}
                                description={dish.description}
                                price={dish.price}
                                image={dish.image}
                            />
                        )
                    })
                }
            </View>
            </ScrollView>
        </>
    )

}

export default ResturantScreen