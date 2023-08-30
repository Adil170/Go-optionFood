import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice'; // Import your Redux action
import { useNavigation } from '@react-navigation/native'; // Import React Navigation

import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';

export default function DishRow({ name, description, id, price, image }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = () => {
    const item = { id, name, price, image }; // Create an item object with necessary details
    dispatch(addToCart(item)); // Dispatch the addToCart action

  };

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-3xl" style={{ height: 100, width: 100 }} source={image} />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{name}</Text>
          <Text className="text-gray-700">{description}</Text>
        </View>
        <View className="flex-row pl-3 justify-between items-center">
          <Text className="text-gray-700 text-lg font-bold">${price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleAddToCart} // Call handleAddToCart when button is pressed
              className="p-2 rounded-md"
              style={{ backgroundColor: themeColors.bgColor(1) }}>
              <Text className="text-white">Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
