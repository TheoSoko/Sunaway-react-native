import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import Selector from './selector'
import {CircuitsJsonTypes} from '../types/types'
import {imageList} from '../assets/imagesRequire'
const CircuitsJson = require('../assets/circuits.json')

type CircuitsProps = NativeStackScreenProps<RootStackParamList, 'Circuits'>


export default function Circuits({route, navigation}: CircuitsProps)  {
    return (
    <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.title}>Nos circuits</Text>
        </View>
        <Text style={styles.introduction}>Découvrez ici les différents circuits que nous proposons dans le cadre des voyages Sunaway</Text>
        <Selector></Selector>
        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center'}}>
            {
            CircuitsJson.map((e:CircuitsJsonTypes, key: number) => 
                <View style={styles.circuitContainer} key={key}>
                    <View style={styles.imageView}>
                        <TouchableOpacity onPress={() => navigation.navigate('CircuitDetails', {circuitNumber: key})}>
                            <Image source={imageList[key].mainImage} style={styles.image}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.circuitName}>{e.name}</Text>
                </View>
            )
            }
        </ScrollView>
    </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
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
    circuitContainer: {
        borderBottomWidth: 0.2,
        paddingBottom: 32,
        borderBottomColor: '#FFFFFF',
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
        marginTop: 40,
        flexDirection: 'row',
    },
    circuitName: {
        fontSize: 25,
        //fontFamily: 'averta',
        fontWeight: '600',
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    introduction: {
        color: '#FFFFFF',
        marginTop: 29,
        fontSize: 18,
        marginHorizontal: 35,
        textAlign: "center",
        fontWeight: '500',
    },
    scroll: {
        width: '100%',
    }
  });