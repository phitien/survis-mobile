import React from 'react'
import {Scene, Router, Overlay, Stack, Lightbox} from 'react-native-router-flux'

import {
  CheckoutScreen,
  HomeScreen,
  LoginScreen,
  NotificationsScreen,
  PrizesScreen,
  PromotionScreen,
  PromotionsScreen,
  QrScanScreen,
  SearchScreen,
  ShopItemScreen,
  ShoppingCartScreen,
  ShopScreen,
  UserScreen
} from '../containers'

const Routes = (props) => {
  const {store} = props
  const renderScene = (name, scene, attr) => <Scene key={name} component={scene} hideNavBar='hideNavBar' {...attr}/>
  return (<Router>
    <Overlay>
      <Stack>
        {renderScene('HomeScreen', HomeScreen, {initial: true})}
        {renderScene('LoginScreen', LoginScreen)}
        {renderScene('UserScreen', UserScreen)}
        {renderScene('QrScanScreen', QrScanScreen)}
        {renderScene('PromotionScreen', PromotionScreen)}
        {renderScene('ShopScreen', ShopScreen)}
        {renderScene('ShopItemScreen', ShopItemScreen)}
        {renderScene('ShoppingCartScreen', ShoppingCartScreen)}
        {renderScene('CheckoutScreen', CheckoutScreen)}
        {renderScene('PromotionsScreen', PromotionsScreen)}
        {renderScene('NotificationsScreen', NotificationsScreen)}
        {renderScene('PrizesScreen', PrizesScreen)}
        {renderScene('SearchScreen', SearchScreen, {
          onExit: e => store.dispatch({type: 'Search_Upate', payload: {q: '', catid: ''}})
        })}
      </Stack>
    </Overlay>
  </Router>)
}

export {
  Routes
}
