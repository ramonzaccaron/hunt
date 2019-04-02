import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const MainNavigator = createStackNavigator({
  Main: { screen: Main },
  Product: { screen: Product }
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5667F9"
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  });

const App = createAppContainer(MainNavigator);
export default App;