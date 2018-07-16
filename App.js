import {createStackNavigator} from 'react-navigation';
import {HomeScreen} from './custom/HomeScreen';
import {ProfileScreen} from './custom/ProfileScreen';

const App = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

export default App;
