import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch,useSelector } from 'react-redux'
import tailwind from 'tailwind-react-native-classnames'
import { setOrigin,setDestination,selectOrigin } from '../redux/slices/navSlice'
import NavigateCard from './NavigateCard' 

const data = [
    {
        id: '3423',
        icon: 'home',
        name:"Home",
        location: { lat: 5.5497, lng: -0.3522 },
        description: "IIIT Hyderabad, Gachibowli, IN"
    },
    {
        id: '36567',
        icon: 'briefcase',
        name: 'Work',
        location: { lat: 5.5497, lng: -0.3522 },
        description: "CoKarma, Madhapur, Hyderabad, IN"
    },
]

const NavFavourites = () => {
    const dispatch = useDispatch()
    const navigation=useNavigation()
    const origin=useSelector(selectOrigin)

    

    return (
        <FlatList
            data={data}
            renderItem={({ item: {name,icon,location,description}, item}) => (
                <TouchableOpacity 
                    style={tailwind`flex-row items-center py-3`}
                    
                >
                    <Icon 
                        style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
                        name={item.icon}
                        type="feather"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tailwind`font-bold text-lg`}>{item.name}</Text>
                        <Text style={tailwind`text-gray-500`}>{item.description}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => (
                <View
                    style={[tailwind`bg-gray-200`, { height: 0.5 }]}
                />
            )}
      />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
