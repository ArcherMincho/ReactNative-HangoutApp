import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import HomeScreen from './screens/HomeScreen';
import SelectScreen from './screens/SelectScreen';
import SpotScreen from './screens/SpotScreen';
import PostScreen from './screens/PostScreen';
import UserScreen from './screens/UserScreen';
import CalendarScreen from './screens/CalendarScreen';
import AddPlanScreen from './screens/AddPlanScreen';
import EditPlanScreen from './screens/EditPlanScreen';


const Tab = createBottomTabNavigator();
function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case "SpotHome":
                        iconName = "house";
                        break;
                    case "Calendar":
                        iconName = "calendar";
                        break;
                    case "Post":
                        iconName = "circle-plus";
                        break;
                    default:
                        iconName = "bell-exclamation";
                }

                return <FontAwesomeIcon icon={["fas", iconName]} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarShowLabel: false,
            headerShown: false,
        })}
        >
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="SpotHome" component={HomeScreen} />
            <Tab.Screen name="Add" component={AddPlanScreen} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={BottomTabs} />
                    <Stack.Screen name="Spot" component={SpotScreen} />
                    <Stack.Screen name="Post" component={PostScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App;

