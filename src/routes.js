import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Home/Login';
import ListProducts from './pages/Produtos/List-products';
import NewProduct from './pages/Produtos/New-Product';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        ListProducts,
        NewProduct
    })
);

export default Routes;