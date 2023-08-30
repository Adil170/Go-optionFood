import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotalAmount } from '../slices/cartSlice';

export default function BasketIcon() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotalAmount()); // Dispatch the action to calculate the total amount
  }, [cart.cartItems, dispatch]); // Re-calculate whenever the cart items change

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={() => navigation.navigate('Cart')}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
          <Text className="font-extrabold text-white text-lg">{cart.cartTotalQuantity}</Text>
        </View>

        <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
        <Text className="font-extrabold text-white text-lg">${cart.cartTotalAmount.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
}
