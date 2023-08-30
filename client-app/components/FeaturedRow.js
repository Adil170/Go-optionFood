import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import ResturantCard from './ResturantCard'

const FeaturedRow = ({title, restaurants, description}) => {
  return (
     <View>
    <View className=" flex-row justify-between items-center  px-4">
      <View>
      <Text className='text-xl font-bold'>{title}</Text>
      <Text className='text-sm font-light'>{description}</Text>
      </View>
      <TouchableOpacity>
      <Text style={{color:themeColors.text}} className="font-semibold"> See All</Text>
      </TouchableOpacity>
    </View>
   <ScrollView 
   horizontal
   showsHorizontalScrollIndicator={false}
   contentContainerStyle={{paddingHorizontal: 10}} className="overflow-visible py-1">

   {
     restaurants.map((item , index) => {
    return(
        <View key={index}>
        <ResturantCard 
        item={item}
        key={index}/>
        </View>
    )
    })
   } 
   </ScrollView>


    </View>
    
    
    
    
  )
}

export default FeaturedRow