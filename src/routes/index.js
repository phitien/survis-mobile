import React from 'react'
import {Scene, Router, Overlay, Stack, Lightbox} from 'react-native-router-flux'

import RoutesStyle from '../../survis-themes/styles/Routes'

import {
  CheckoutConfirmScreen,
  CheckoutPaymentScreen,
  CheckoutShippingScreen,
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
        <Scene key='root'>
          {renderScene('HomeScreen', HomeScreen, {
            initial: 'initial',
            title: 'Dashboard',
            titleStyle: RoutesStyle.sceneHeaderStyle
          })}
          {renderScene('LoginScreen', LoginScreen)}
        </Scene>
        {renderScene('UserScreen', UserScreen)}
        {renderScene('QrScanScreen', QrScanScreen)}
        {renderScene('PromotionScreen', PromotionScreen)}
        {renderScene('ShopScreen', ShopScreen)}
        {renderScene('ShopItemScreen', ShopItemScreen)}
        {renderScene('ShoppingCartScreen', ShoppingCartScreen)}
        {renderScene('CheckoutShippingScreen', CheckoutShippingScreen)}
        {renderScene('CheckoutPaymentScreen', CheckoutPaymentScreen)}
        {renderScene('CheckoutConfirmScreen', CheckoutConfirmScreen)}
        {renderScene('PromotionsScreen', PromotionsScreen)}
        {renderScene('NotificationsScreen', NotificationsScreen)}
        {renderScene('PrizesScreen', PrizesScreen)}
        {renderScene('SearchScreen', SearchScreen, {
          onExit: e => store.dispatch({type: 'Search_Upate', payload: {q: '', catid: null}})
        })}
      </Stack>
    </Overlay>
  </Router>)
}

export {
  Routes
}
