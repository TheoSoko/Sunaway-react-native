import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RootStackParamList } from '../types/types';

type ActivitiesProps = NativeStackScreenProps<RootStackParamList, 'Activities'>

const ActivityArray = [
    [
        require('../assets/img/activityBiking.jpg'),
        'Voyage à vélo',
    ],
    [
        require('../assets/img/activityHiking.jpg'),
        'Randonnée',
    ],
    [
        require('../assets/img/activitySafari.jpg'),
        'Safari',
    ],
    [
        require('../assets/img/activityFood.jpg'),
        'Voyage culinaire',
    ],
]


export default function Activities({route, navigation}: ActivitiesProps)  {
    let { activityNumber } = route.params;
    return (
    <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.title}>Nos activités</Text>
        </View>
        <View style={styles.mainBloc}>
            <View style={styles.imageView}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Activities', {activityNumber :  activityNumber == 0 ? ActivityArray.length - 1 : activityNumber - 1})}>
                    <AntDesign name='caretleft' size={42} color='white' style={{marginRight: 6}} />
                </TouchableOpacity>                
                <Image source={ActivityArray[activityNumber][0]} style={styles.image}></Image>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Activities', {activityNumber :  activityNumber == ActivityArray.length - 1 ? 0 : activityNumber + 1})}>
                    <AntDesign name='caretright' size={42} color='white' style={{marginLeft: 6}} />
                </TouchableOpacity>
            </View>
            <Text style={styles.activityName}>{ActivityArray[activityNumber][1]}</Text>
        </View>
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
        borderRadius: 15,
    },
    imageView: {
        overflow: 'hidden',
        marginBottom: 35,
        marginTop: 47,
        flexDirection: 'row',
    },
    activityName: {
        fontSize: 28,
        marginBottom: 50,
        //fontFamily: 'averta',
        fontWeight: '600',
        color: '#FFFFFF',
    },
    mainBloc: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftEmptySpot: {
        width: 46,
    }
  });