
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer }from 'react-navigation';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import loginScreen from './loginScreen';

const TabNavigator = createBottomTabNavigator(
    {
        People: PeopleList,
        Login: loginScreen,
        Add: AddPerson,
        Company: CompanyList,
    },
    {
        initialRouteName: 'Login',
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#80cbc4',
            showLabel: false,
            showIcon: true,
            style: {
                backgroundColor: '#26a69a'
            }
        },
    }
);

export default createAppContainer(TabNavigator);

