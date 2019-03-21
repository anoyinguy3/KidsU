import {createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import LoginScreen from './LoginScreen'
import OverviewScreenRouter from '../OverviewScreen/index';


const LoginScreenRouter = createStackNavigator({
    Home: { screen: LoginScreen },
    Overview: { screen: OverviewScreenRouter}
})
  
const AppContainer = createAppContainer(LoginScreenRouter);
export default AppContainer;
  