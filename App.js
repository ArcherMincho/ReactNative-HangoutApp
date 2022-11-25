import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SpotScreen from './screens/SpotScreen';
import PostScreen from './screens/PostScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Post' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Spot" component={SpotScreen} />
                <Stack.Screen name="Post" component={PostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

