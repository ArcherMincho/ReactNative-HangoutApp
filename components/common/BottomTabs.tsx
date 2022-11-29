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

const BottomTabs = props => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
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
            {props.screens.map(i => {
                return (
                    < Tab.Screen key={i.name} name={i.name} component={i.component} />
                )
            })}
        </Tab.Navigator>
    );
}

export default BottomTabs;