import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Home/Login';
import ListProducts from './pages/Produtos/List-products';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        ListProducts
    })
);

export default Routes;