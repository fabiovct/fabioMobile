import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Home/Login';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
    })
);

export default Routes;