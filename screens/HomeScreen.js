import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            // header ka naam change karne k liye
            // headerTitle: 'TESTING',

            //is ka apna header show nahi hoga
            headerShown: false, 
        });
    }, [])

  return (
    <SafeAreaView>
      <Text className='text-red-500'>
        {/* Header */}
        <View>
            <Image
            source={{
                url: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
             />
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen