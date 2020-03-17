import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screen/Home'
import Login from './screen/Login'
import Feed from './screen/Feed'
import Search from './screen/Search'
import Profile from './screen/Profile'
import Create from './screen/Create'
const AppTabNav = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
	Create: {
        screen: Create
    },
	Feed: {
        screen: Feed
    },
	Search: {
        screen: Search
    },
	Profile: {
        screen: Profile
    }
});

const AppContainer = createAppContainer(AppTabNav)

export default AppContainer;