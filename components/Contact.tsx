import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RootStackParamList } from '../types/types';

type ContactProps = NativeStackScreenProps<RootStackParamList, 'Contact'>


export default function Contact({route, navigation}: ContactProps) {
    return (
    <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.title}>Contact</Text>
        </View>
        <Text style={styles.text1}>Notre agence :</Text>
        <View style={styles.mainInfo}>
            <Text style={styles.textMain}>Sunaway</Text>
            <Text style={styles.textMain}>5 rue du colonel Goering</Text>
            <Text style={styles.textMain}>75013 Paris,</Text>
            <Text style={styles.textMain}>France</Text>
        </View>
        <Text style={styles.textMain}>Tel : 01 69 11 87 12</Text>
        <Text style={styles.textMain}>Email: agence@sunaway.fr</Text>

        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Nous contacter</Text>
        </TouchableOpacity>
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
    textMain: {
        marginBottom: 20,
        //fontFamily: 'averta',
        fontWeight: '600',
        color: '#FFFFFF',
    },
    text1: {
        fontSize: 22,
        marginTop: 40,
        marginBottom: 50,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    mainInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 19,
        paddingVertical: 13,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 35,
        
    },
    buttonText: { 
        fontSize: 18,
    }

  });