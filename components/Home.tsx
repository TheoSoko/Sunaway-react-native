import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';


export default function Home() {
    return (
    <View style={styles.container}>
        <View style={styles.titleView}>
            <Text style={styles.title}>Sunaway</Text>
        </View>
        <Text style={styles.catchPhrase}>Des vacances au soleil, ça vous dit?</Text>
        <Text style={styles.introduction}>Découvrez nos dernières offres de voyage, tout compris, et à petit prix !</Text>
            <View style={styles.imageView}>
                <Image source={require('../assets/img/homescreen.jpg')} style={styles.image}></Image>
            </View>
    </View>
    );
  }

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#00B4D8',
    },
    titleView: {
        marginTop: 60,
        paddingVertical: 14,
        paddingHorizontal: 55,
        borderRadius: 10,
        backgroundColor: '#FF9E00',
    },
    title: {
        fontSize: 40,
        //fontFamily: 'averta',
        fontWeight: '500',
        color: '#FFFFFF',
    },
    catchPhrase: {
        color: '#FFFFFF',
        marginTop: 34,
        fontSize: 24,
        fontWeight: '500',
    },
    introduction: {
        color: '#FFFFFF',
        marginTop: 25,
        fontSize: 19,
        marginHorizontal: 8,
        textAlign: "center",
    },
    image: {
        flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'contain',
        borderRadius: 15,
    },
    imageView: {
        flex: 1,
        overflow: 'hidden',
        marginBottom: 16,
    },
  });
  