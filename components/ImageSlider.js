import React from 'react'
import { Animated, Dimensions, StyleSheet,  View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ImageItem from './ImageItem'

const {width, height} = Dimensions.get("window")

const images = [
    {
    id: "m1",
    imageUrl: require("../assets/Image1.png")
    },
    {
    id: "m2",
    imageUrl: require("../assets/Image1.png")
    },
    {
    id: "m3",
    imageUrl: require("../assets/Image1.png")
    },
    {
    id: "m4",
    imageUrl: require("../assets/Image1.png")
    },
    {
    id: "m5",
    imageUrl: require("../assets/Image1.png")
    },
]


const ImageSlider = () => {

    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);


    return (
        <View style={styles.slider}>
            <FlatList
            data={images}
            scrollEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            keyExtractor={(item,index)=>"key"+ index}
            renderItem={({item})=>(
                <ImageItem
                imageUrl={item.imageUrl}
                />
            )}
            onScroll={
                Animated.event(
                    [{nativeEvent: {contentOffset: {x : scrollX}}}],  {useNativeDriver: false}
                )
            }
            />
            <View style={styles.dotView}>
                {images.map((_, i) => {
                    let opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })
                    return (
                        <Animated.View
                            key={i}
                            style={{ marginTop:-30,opacity, height: 10, width: 10, backgroundColor: '#F99026', margin: 8, borderRadius: 5}}
                        />
                    )
                })}
                </View>
        </View>
    )
}

export default ImageSlider

const styles = StyleSheet.create({
    slider:{
        marginTop:-40
    },
    dotView:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center"
    }
})
