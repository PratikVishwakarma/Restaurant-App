import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreens from './src/screens/SearchScreens'
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen'

const navigator = createStackNavigator({
  Search: SearchScreens,
  RestaurantDetail: RestaurantDetailScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator)
    // Client ID
    // ix2kA1Z8x6vXCOHc_ZD0dQ

    // API Key
    // 0OUv_BUGb-EHH7Wz6MMlw2GRgAbULMFIg82Em4CwscadGX4UNdmZRICnsysS0y6VEu42Bq4pcSDcPWX8xnQ0K5QOTvdtAYSI9IFmzkDvt6im4hNs66siH67APAhGX3Yx     
