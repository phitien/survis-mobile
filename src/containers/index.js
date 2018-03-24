import React, {Component} from 'react'
import {connect} from 'react-redux'

import {mapStateToProps, mapDispatchToProps} from '../utils'

/**SCREENS**/
import {CheckoutScreen as CMPCheckoutScreen} from '../screens'
import {HomeScreen as CMPHomeScreen} from '../screens'
import {LoginScreen as CMPLoginScreen} from '../screens'
import {NotificationsScreen as CMPNotificationsScreen} from '../screens'
import {PrizesScreen as CMPPrizesScreen} from '../screens'
import {PromotionScreen as CMPPromotionScreen} from '../screens'
import {PromotionsScreen as CMPPromotionsScreen} from '../screens'
import {QrScanScreen as CMPQrScanScreen} from '../screens'
import {SearchScreen as CMPSearchScreen} from '../screens'
import {ShopItemScreen as CMPShopItemScreen} from '../screens'
import {ShoppingCartScreen as CMPShoppingCartScreen} from '../screens'
import {ShopScreen as CMPShopScreen} from '../screens'
import {UserScreen as CMPUserScreen} from '../screens'

export const CheckoutScreen = connect(mapStateToProps, mapDispatchToProps)(CMPCheckoutScreen)
export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(CMPHomeScreen)
export const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(CMPLoginScreen)
export const NotificationsScreen = connect(mapStateToProps, mapDispatchToProps)(CMPNotificationsScreen)
export const PrizesScreen = connect(mapStateToProps, mapDispatchToProps)(CMPPrizesScreen)
export const PromotionScreen = connect(mapStateToProps, mapDispatchToProps)(CMPPromotionScreen)
export const PromotionsScreen = connect(mapStateToProps, mapDispatchToProps)(CMPPromotionsScreen)
export const QrScanScreen = connect(mapStateToProps, mapDispatchToProps)(CMPQrScanScreen)
export const SearchScreen = connect(mapStateToProps, mapDispatchToProps)(CMPSearchScreen)
export const ShopItemScreen = connect(mapStateToProps, mapDispatchToProps)(CMPShopItemScreen)
export const ShoppingCartScreen = connect(mapStateToProps, mapDispatchToProps)(CMPShoppingCartScreen)
export const ShopScreen = connect(mapStateToProps, mapDispatchToProps)(CMPShopScreen)
export const UserScreen = connect(mapStateToProps, mapDispatchToProps)(CMPUserScreen)

/**COMPONENTS**/
import {Categories as CMPCategories} from '../components'
import {Footer as CMPFooter} from '../components'
import {Header as CMPHeader} from '../components'
import {HighRatingShop as CMPHighRatingShop} from '../components'
import {HighRatingShops as CMPHighRatingShops} from '../components'
import {History as CMPHistory} from '../components'
import {Loyalty as CMPLoyalty} from '../components'
import {NewShop as CMNewShop} from '../components'
import {NewShops as CMNewShops} from '../components'
import {Notification as CMPNotification} from '../components'
import {PaymentInfo as CMPPaymentInfo} from '../components'
import {Prize as CMPPrize} from '../components'
import {Promotion as CMPPromotion} from '../components'
import {Promotions as CMPPromotions} from '../components'
import {Review as CMPReview} from '../components'
import {Shop as CMPShop} from '../components'
import {ShopItem as CMPShopItem} from '../components'
import {ShopSummary as CMPShopSummary} from '../components'
import {User as CMPUser} from '../components'

export const Categories = connect(mapStateToProps, mapDispatchToProps)(CMPCategories)
export const Footer = connect(mapStateToProps, mapDispatchToProps)(CMPFooter)
export const Header = connect(mapStateToProps, mapDispatchToProps)(CMPHeader)
export const HighRatingShop = connect(mapStateToProps, mapDispatchToProps)(CMPHighRatingShop)
export const HighRatingShops = connect(mapStateToProps, mapDispatchToProps)(CMPHighRatingShops)
export const History = connect(mapStateToProps, mapDispatchToProps)(CMPHistory)
export const Loyalty = connect(mapStateToProps, mapDispatchToProps)(CMPLoyalty)
export const NewShop = connect(mapStateToProps, mapDispatchToProps)(CMNewShop)
export const NewShops = connect(mapStateToProps, mapDispatchToProps)(CMNewShops)
export const Notification = connect(mapStateToProps, mapDispatchToProps)(CMPNotification)
export const PaymentInfo = connect(mapStateToProps, mapDispatchToProps)(CMPPaymentInfo)
export const Prize = connect(mapStateToProps, mapDispatchToProps)(CMPPrize)
export const Promotion = connect(mapStateToProps, mapDispatchToProps)(CMPPromotion)
export const Promotions = connect(mapStateToProps, mapDispatchToProps)(CMPPromotions)
export const Review = connect(mapStateToProps, mapDispatchToProps)(CMPReview)
export const Shop = connect(mapStateToProps, mapDispatchToProps)(CMPShop)
export const ShopItem = connect(mapStateToProps, mapDispatchToProps)(CMPShopItem)
export const ShopSummary = connect(mapStateToProps, mapDispatchToProps)(CMPShopSummary)
export const User = connect(mapStateToProps, mapDispatchToProps)(CMPUser)
