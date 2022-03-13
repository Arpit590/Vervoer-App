import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import Star from '../assets/foodDeliverySvg/star.png';
import Clock from '../assets/foodDeliverySvg/clock.png';


const FeaturedCard = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    console.log(route.params);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', {heading: "Minute By Tuk Tuk"})} style={{elevation: 0.5, borderRadius: 16, backgroundColor: '#fff', marginVertical: 10, width: props.width,}}>
    <View style={styles.cartImageContainer}>
        <Image source={props.image}
        style={{width: '100%',
        height: 167,
        resizeMode: 'cover', borderTopRightRadius: 16, borderTopLeftRadius: 16}}
        />
    </View>
    <View style={styles.cartTextContainer}>
        <View style={styles.restaurantHeading}>
            <Text style={{fontSize: 16, color: '#000', lineHeight: 24}}>
                Minute By Tuk Tuk
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                <Image source={Star} />
                <Text style={{fontSize: 12, color: '#000', lineHeight: 24}}>4.2</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row' ,alignItems: 'center', marginHorizontal: 20,}}>
            <Image source={Clock} resizeMode='contain' />
            <Text style={styles.textStyle}>2 min walk</Text>
            <Text style={styles.textStyle}>Cafe</Text>
            <Text style={styles.textStyle}></Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}

export default FeaturedCard;

const styles = StyleSheet.create({
    cartImageContainer: {
        height: 167,
    },
    cartTextContainer:{
        height: 80,
    },
    textStyle: {
        fontSize: 12,
        color: '#808080',
        paddingHorizontal: 10
    },
    restaurantHeading: {
        flexDirection: 'row', 
        justifyContent: "space-between", 
        marginHorizontal: 20, 
        alignItems: 'center', 
        marginVertical: 10
    }
})