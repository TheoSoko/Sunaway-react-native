import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import Activities from './components/Activities'
import Circuits from './components/Circuits'
import Circuit1 from './components/CircuitDetails'
import { RootStackParamList } from './types/types';
import Ionicons from '@expo/vector-icons/Ionicons';
import  {MaterialIcons}  from '@expo/vector-icons'; 
import Contact from './components/Contact'

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootStackParamList>();

//Composant avec la navigation tab
function TabScreen(){
  return (
    <BottomTab.Navigator initialRouteName='Home' screenOptions={{tabBarStyle: styles.bottombar}}>
      <BottomTab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ focused, size, color}) => focused ? <Ionicons name='home' size={size} color={color}></Ionicons> : <Ionicons name='home' size={size} color={'black'}></Ionicons> }}/>
      <BottomTab.Screen name="Activities" component={Activities} initialParams={{ activityNumber: 0 }} options={{ headerShown: false, tabBarIcon: ({ focused, size, color}) => focused ? <Ionicons name='sunny' size={size} color={color}></Ionicons> : <Ionicons name='sunny' size={size} color={'black'}></Ionicons> }} />
      <BottomTab.Screen name="Circuits" component={Circuits} options={{ headerShown: false, tabBarIcon: ({ focused, size, color}) => focused ? <MaterialIcons name='card-travel' size={size} color={color}></MaterialIcons> : <MaterialIcons name='card-travel' size={size} color={'black'}></MaterialIcons> }}></BottomTab.Screen>
      <BottomTab.Screen name="Contact" component={Contact} options={{ headerShown: false, tabBarIcon: ({ focused, size, color}) => focused ? <MaterialIcons name='mail' size={size} color={color}></MaterialIcons> : <MaterialIcons name='mail' size={size} color={'black'}></MaterialIcons> }}></BottomTab.Screen>
    </BottomTab.Navigator>
  )
}
//Composant principal
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='TabScreen'>
          <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="CircuitDetails" component={Circuit1} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  bottombar: {
    height: 57, paddingBottom: 5, paddingTop: 6,
    borderRadius: 20
  }
})

