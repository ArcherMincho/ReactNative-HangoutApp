import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas);
library.add(far);


import HomeScreen from '../../screens/HomeScreen';
import PostScreen from '../../screens/PostScreen';
import SpotScreen from '../../screens/SpotScreen';

const Tab = createBottomTabNavigator();

const BotmTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Post'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'house';
                            break;
                        case 'Spot':
                            iconName = 'calendar';
                            break;
                        case 'Post':
                            iconName = 'circle-plus';
                            break;
                        default:
                            iconName = 'bell-exclamation';
                    }

                    return <FontAwesomeIcon icon={['fas', iconName]} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Spot" component={SpotScreen} />
            <Tab.Screen name="Post" component={PostScreen} />
        </Tab.Navigator>
    );
}

export default BotmTabs;