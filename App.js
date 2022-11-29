import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas);

import HomeScreen from './screens/HomeScreen';
import SpotScreen from './screens/SpotScreen';
import PostScreen from './screens/PostScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Spot" component={SpotScreen} />
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "Home":
                            iconName = "house";
                            break;
                        case "Spot":
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
                // headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Post" component={PostScreen} />
        </Tab.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    )
}

export default App;

