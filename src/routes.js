import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const teste = createStackNavigator({
  Main
});

const App = createAppContainer(teste);
export default App;