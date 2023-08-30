import { View, Text ,TouchableOpacity ,Image ,ScrollView} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart ,removeFromCart ,decreseCartQuantity , calculateTotalAmount } from '../slices/cartSlice'

export default function CartScreen() {
    // useEffect(() =>{
    //     dispatch(getTotel());
    //    },[cart,dispatch])

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const navigation = useNavigation()

    const handleAddToCart = (cartItem) => {
        dispatch(addToCart(cartItem))
        dispatch(calculateTotalAmount());
      };
    const handleRemoveCartItem = (cartItem) => {
        dispatch(removeFromCart(cartItem));
      };
      const handleDecreseQuantity = (cartItem) => {
        dispatch( decreseCartQuantity(cartItem));
        dispatch(calculateTotalAmount());
      };

  return (
    <View className="bg-white flex-1">
        <View className="relative py-4 shadow-sm">
        <TouchableOpacity 
            style={{backgroundColor: themeColors.bgColor(1)}} 
            onPress={navigation.goBack} 
            className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
            <Text className="text-center font-bold text-xl">Your cart</Text>
        
        </View>
        
      </View>
       {/* delivery time */}
       <View style={{backgroundColor: themeColors.bgColor(0.2)}} className="flex-row px-4 items-center">
            <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
            <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
            <TouchableOpacity>
                <Text style={{color: themeColors.text}} className="font-bold">Change</Text>
            </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView 
      showsVerticalScrollIndicator={false}
       className="bg-white pt-5"
       contentContainerStyle={{
        paddingBottom: 50
       }}
       
       >
            {
                cart.cartItems.map((item) => {
                    return(
                        <View key={item.id}  className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 border border-gray-200 shadow-lg">
                        <Text>2x</Text>
                        <Image source={ item.image } className="h-14 w-14 rounded-full" />
                        <Text className="flex-1 font-bold text-gray-700">{item.name}</Text>
                            <Text className="font-semibold text-base">${item?.price}</Text>
                            <TouchableOpacity 
                            onPress={() => {handleDecreseQuantity(item)}}
                                className="p-1 rounded-full" 
                                style={{backgroundColor: themeColors.bgColor(1)}} 
                               >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                            <Text>{item.cartQuantity}</Text>
                            <TouchableOpacity 
                             onPress={() => handleAddToCart(item)} 
                                className="p-1 rounded-full" 
                                style={{backgroundColor: themeColors.bgColor(1)}} 
                               >
                                <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>

                        </View>
                    )
                })
            }
        </ScrollView>
         {/* totals */}
      <View style={{backgroundColor: themeColors.bgColor(0.2)}} className=" p-6 px-8 rounded-t-3xl space-y-4">
            <View className="flex-row justify-between">
                <Text className="text-gray-700">Subtotal</Text>
                <Text className="text-gray-700">{cart.cartTotalAmount}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-700">Delivery Fee</Text>
                <Text className="text-gray-700">120</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="font-extrabold">Order Total</Text>
                <Text className="font-extrabold">{cart.cartTotalAmount + 120}</Text>
            </View>
            <View>
                <TouchableOpacity 
                style={{backgroundColor: themeColors.bgColor(1)}} 
                onPress={()=> navigation.navigate('PreparingOrder')} 
                className="p-3 rounded-full">
                    <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                </TouchableOpacity>
            </View>
       </View>

    </View>
  )
}