import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types'
import {imageList} from '../assets/imagesRequire'
const CircuitsJson = require('../assets/circuits.json')

type CircuitDetailsProps = NativeStackScreenProps<RootStackParamList, 'CircuitDetails'>

export default function CircuitDetails({route, navigation}: CircuitDetailsProps)  {
    const circuitNumber = route.params.circuitNumber

    return (
    <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.title}>Nos circuits</Text>
        </View>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <Text style={styles.circuitName}>{CircuitsJson[circuitNumber].name}</Text>
            <Text style={styles.introduction}>{CircuitsJson[circuitNumber].introText}</Text>
            <View style={styles.imageView}>
                <Image source={imageList[circuitNumber].images[0]} style={styles.image}></Image>
            </View>
            <Text style={styles.introduction}>
                Blablabla, blabla blabla. Oui oui non non oui peut-être, blablabla, blabla blablabla. Bien sur, évidemment.
            </Text>

        </ScrollView>
    </View>
    );
  }


  const styles = StyleSheet.create({
    returnBtn: {
      fontSize: 17,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 20,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#00B4D8',
    },
    titleView: {
        width: "100%",
        paddingVertical: "6.5%",
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        backgroundColor: '#FF9E00',
        alignItems: 'center',
    },
    title: {
        fontSize: 38,
        //fontFamily: 'averta',
        fontWeight: '500',
        color: '#FFFFFF',
    },
    image: {
        width: 290,
        height: 290,
        resizeMode: 'contain',
        borderRadius: 19,
    },
    imageView: {
        overflow: 'hidden',
        marginBottom: 24,
        marginTop: 42,
        flexDirection: 'row',
    },
    circuitName: {
        marginTop: 43,
        marginBottom: 15,
        fontSize: 28,
        //fontFamily: 'averta',
        fontWeight: '600',
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    introduction: {
        color: '#FFFFFF',
        marginTop: 23,
        fontSize: 18,
        marginHorizontal: 37,
        textAlign: "left",
        fontWeight: '400',
    },
  });