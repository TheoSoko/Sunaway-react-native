import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import Selector from './selector'

type CircuitsProps = NativeStackScreenProps<RootStackParamList, 'Circuits'>

const CircuitsArray = [
    {
        image: require('../assets/img/leToutParis.jpg'),
        name: 'Le tout Paris',
    },
    {
        image: require('../assets/img/cancun.jpg'),
        name:  'Découvrez Cancún',
    },
    {
        image: require('../assets/img/grece.jpg'),
        name:  'Les merveilles de la Grèce',
    },
    {
        image: require('../assets/img/route66.jpg'),
        name:  'Le circuit 66',
    },
]

export default function Circuits({route, navigation}: CircuitsProps)  {
    return (
    <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.title}>Nos circuits</Text>
        </View>
        <Text style={styles.introduction}>Découvrez ici les différents circuits que nous proposons dans le cadre des voyages Sunaway</Text>
        <Selector></Selector>
        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center',}}>
            {
            CircuitsArray.map(e => 
                <View>
                    <View style={styles.imageView}>
                        <Image source={e.image} style={styles.image}></Image>
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
    image: {
        width: 290,
        height: 290,
        resizeMode: 'contain',
        borderRadius: 19,
    },
    imageView: {
        overflow: 'hidden',
        marginBottom: 24,
        marginTop: 47,
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