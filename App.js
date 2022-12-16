import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas);

import BottomTabBar from './components/common/BottomTabBar';
import HomeScreen from './screens/HomeScreen';
import SelectScreen from './screens/SelectScreen';
import SpotScreen from './screens/SpotScreen';
import PostScreen from './screens/PostScreen';
import UserScreen from './screens/UserScreen';
import CalendarScreen from './screens/CalendarScreen';

import AgendaScreen from './screens/agendaScreen';
import ExpandableCalendarScreen from './screens/ExpandableScreen';


// If want to let a few screens hold the same tab in the navigation bar
// use the following stacked screen as a "screen" in the Tab Navigator
// for example :<Tab.Screen name="Home" component={HomeStackScreen} />
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            initialRouteName='SpotHome'
            screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen name="SpotHome" component={HomeScreen} />
            <HomeStack.Screen name="Spot" component={SpotScreen} />
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="SpotHome"
            tabBar={props => <BottomTabBar {...props} />}
            screenOptions={{ headerShown: false }}
        // If to set up icons corresponding to specific tabs here:
        // screenOptions={({ route }) => ({
        //     tabBarIcon: ({ focused, color, size }) => {
        //         let iconName;
        //         switch (route.name) {
        //             case "Home":
        //                 iconName = "house";
        //                 break;
        //             case "Calendar":
        //                 iconName = "calendar";
        //                 break;
        //             case "Post":
        //                 iconName = "circle-plus";
        //                 break;
        //             default:
        //                 iconName = "bell-exclamation";
        //         }

        //         return <FontAwesomeIcon icon={["fas", iconName]} size={size} color={color} />;
        //     },
        //     tabBarActiveTintColor: "tomato",
        //     tabBarInactiveTintColor: "gray",
        //     tabBarShowLabel: false,
        // })}
        >
            <Tab.Screen name="Calendar" component={AgendaScreen} />
            <Tab.Screen name="SpotHome" component={HomeScreen} />
            <Tab.Screen name="Add" component={ExpandableCalendarScreen} />
            <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                    {/* To show the tab bar only on the Home, Post, and User Screens,
                    encapsulate them into one tab navigator (i.e., BottomTabs),
                    and use it as a "screen" in a stack navigator, of which brother elements
                    are screens those don't want the tab bar shown. */}
                    <Stack.Screen name="Home" component={BottomTabs} />
                    <Stack.Screen name="Spot" component={SpotScreen} />
                    <Stack.Screen name="Post" component={PostScreen} />
                    <Stack.Screen name="Select" component={SelectScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App;

