import { View, Text ,StatusBar,TextInput ,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'

import React from 'react'
import Categories from '../components/Categories';
import { featured } from '../components/constants';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
  return (
    <SafeAreaView ClassName="bg-white">
    <StatusBar  barStyle='light-content'
       
    />
     {/* search bar */}
     <View className="flex-row items-center space-x-2 px-4 pb-2 mt-4 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
                <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray" />
                    <Text className="text-gray-600">New York, NYC</Text>
                </View>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
            </View>
        </View>
        {/* main */}
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
            {/* Categories */}
            <Categories/>
          
        </ScrollView>
        <View className='mt-4'>
        {
         [featured,featured].map((category ,index) => {
            return(
                <FeaturedRow
                key={index}
                id={category.id}
                title={category.title}
                restaurants={category.restaurants}
                description={category.description}
            
                />
            )
        })

        }
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen