import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Button = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('FoodMenu', { heading: "Food Menu" })} style={{ height: 50, backgroundColor: '#F99026', borderRadius: 40, elevation: 3, marginHorizontal: 40, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500' }}>
                View Menu
            </Text>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500' }}>
                50 items
            </Text>
        </TouchableOpacity>
    )
}

export default Button