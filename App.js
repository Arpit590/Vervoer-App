import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
// import SplashScreen from './screens/SplashScreens/SplashScreen';
import OnboardingScreen from './screens/SplashScreens/OnboardingScreen';
import LoginScreen from "./screens/Authentication/LoginScreen";
import SignUpScreen from './screens/Authentication/SignUpScreen';
import VerificationScreen from './screens/Authentication/VerificationScreen';
import OTPVerifiedScreen from './screens/Authentication/OTPVerifiedScreen';
import ForgotPasswordScreen from './screens/Authentication/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/Authentication/ResetPasswordScreen';
import RegistrationScreen from './screens/Authentication/RegistrationScreen';
import VerifyWithEmailScreen from './screens/Authentication/VerifyWithEmailScreen';
import VerifiedWithEmailScreen from './screens/Authentication/VerifiedWithEmailScreen';
import HomeScreen from './screens/HomeScreen';
import RoleHomeScreen from './screens/RoleHomeScreen';
import RideShareScreen from './screens/UserScreens/RideShareModule/RideShareScreens/RideShareScreen.js';
import BookNewRideScreen from './screens/UserScreens/RideShareModule/RideShareScreens/BookNewRideScreen';
import AvailableRidesScreen from './screens/UserScreens/RideShareModule/RideShareScreens/AvailableRidesScreen';
import RideDetails from './screens/UserScreens/RideShareModule/RideShareScreens/RideDetails';
import CancelBookingScreen from './screens/UserScreens/RideShareModule/RideShareScreens/CancelBookingScreen';
import CancelledBookingScreen from './screens/UserScreens/RideShareModule/RideShareScreens/CancelledBookingScreen';
import RideHistoryScreen from './screens/UserScreens/RideShareModule/RideHistoryScreens/RideHistoryScreen';
import LiveSessionScreen from './screens/UserScreens/RideShareModule/LiveSessionsScreen.js/LiveSessionScreen';
import DriverRegisterScreen from './screens/UserScreens/RideShareModule/DriverApplicationScreen/DriverRegisterScreen';
import DriverOTPScreen from './screens/UserScreens/RideShareModule/DriverApplicationScreen/DriverOTPScreen';
import VehicleInfoScreen from './screens/UserScreens/RideShareModule/DriverApplicationScreen/VehicleInfoScreen';
import PersonalInfoScreen from './screens/UserScreens/RideShareModule/DriverApplicationScreen/PersonalInfoScreen';
import AccountInfoScreen from './screens/UserScreens/RideShareModule/DriverApplicationScreen/AccountInfoScreen';
import AttestationScreen from './screens/UserScreens/RideShareModule/DriverApplicationScreen/AttestationScreen';
import ProfilePhotoScreen from './screens/UserScreens/RideShareModule/DriverApplicationScreen/ProfilePhotoScreen';
import DriverRegisteredScreen from './screens/UserScreens/RideShareModule/DriverApplicationScreen/DriverRegisteredScreen';
import ParkingMainScreen from "./screens/UserScreens/ParkingModule/ParkingMainScreen";
import ParkingHistoryScreen from './screens/UserScreens/ParkingModule/ParkingHistoryScreens/ParkingHistoryScreen';
import ScannerScreen from './screens/UserScreens/ParkingModule/ScannerScreen/ScannerScreen';
import BookParkingScreen from './screens/UserScreens/ParkingModule/BookParkingScreens/BookParkingScreen';
import PickParkingScreen from './screens/UserScreens/ParkingModule/BookParkingScreens/PickParkingScreen';
import ParkingDetailsScreen from './screens/UserScreens/ParkingModule/BookParkingScreens/ParkingDetailsScreen';
import CarOrBikeScreen from './screens/UserScreens/ParkingModule/BookParkingScreens/CarOrBikeScreen';
import AvailableParkingScreen from "./screens/UserScreens/ParkingModule/BookParkingScreens/AvailableParkingScreen";
import BookingConfirmationScreen from './screens/UserScreens/ParkingModule/BookParkingScreens/BookingConfirmationScreen';
import PaymentScreen from './screens/UserScreens/ParkingModule/BookParkingScreens/PaymentScreen';
import BookingConfirmedScreen from './screens/UserScreens/ParkingModule/BookParkingScreens/BookingConfirmedScreen';
import SummaryScreen from './screens/UserScreens/ParkingModule/BookParkingScreens/SummaryScreen';
//Food delivery screen
import FoodDeliveryScreen from './screens/DriverScreens/FoodDeliveryScreen/Index';
import NewOrder from './screens/DriverScreens/FoodDeliveryScreen/NewOrder/Index';
import ListItems from './screens/DriverScreens/FoodDeliveryScreen/NewOrder/ListItems';
import ItemDetail from './screens/DriverScreens/FoodDeliveryScreen/NewOrder/ItemDetail';
import FoodMenu from './screens/DriverScreens/FoodDeliveryScreen/NewOrder/FoodMenu';
import MenuDetails from './screens/DriverScreens/FoodDeliveryScreen/NewOrder/MenuDetails';
import Checkout from './screens/DriverScreens/FoodDeliveryScreen/NewOrder/Checkout';
import CheckoutBill from './screens/DriverScreens/FoodDeliveryScreen/NewOrder/CheckoutBill';
import OrderPlaced from './screens/DriverScreens/FoodDeliveryScreen/NewOrder/OrderPlaced';
import TrackOrder from './screens/DriverScreens/FoodDeliveryScreen/TrackOrder/Index';
import FoodHistory from './screens/DriverScreens/FoodDeliveryScreen/History/Index';
import MyCart from './screens/DriverScreens/FoodDeliveryScreen/MyCart/Index';
import LocateScreen from './screens/UserScreens/DryCleanersModule/LocateScreen';
import DryCleaningDetailPage from './screens/UserScreens/DryCleanersModule/DryCleaningDetailPage';
import OrderHistoryScreen from './screens/UserScreens/DryCleanersModule/OrderHistoryScreen';
import DetailedScreen from './screens/UserScreens/DryCleanersModule/DetailedScreen';
import AvailableDryCleanersScreen from './screens/UserScreens/DryCleanersModule/AvailableDryCleanersScreen';
import SelectItemsScreen from './screens/UserScreens/DryCleanersModule/SelectItemsScreen';
import PickupLocation from "./screens/UserScreens/DryCleanersModule/PIckupLocationScreen";
import DropLocationScreen from './screens/UserScreens/DryCleanersModule/DropLocationScreen';
import ScheduleScreen from './screens/UserScreens/DryCleanersModule/ScheduleScreen';
import OrderSummaryScreen from './screens/UserScreens/DryCleanersModule/OrderSummaryScreen';
import OrderPaymentScreen from './screens/UserScreens/DryCleanersModule/OrderPaymentScreen';
import OrderConfirmedScreen from './screens/UserScreens/DryCleanersModule/OrderConfirmedScreen';
import ReceiptScreen from './screens/UserScreens/DryCleanersModule/ReceiptScreen';
import ActiveOrderScreen from './screens/UserScreens/DryCleanersModule/ActiveOrderScreen';
import LocateRiderScreen from './screens/DriverScreens/LocateRiderScreens/LocateRiderMainScreen';
import CancelTripScreen from './screens/DriverScreens/LocateRiderScreens/CancelTripScreen';
import RideAcceptedScreen from './screens/DriverScreens/LocateRiderScreens/RideAcceptedScreen';
import RideSummaryScreen from './screens/DriverScreens/LocateRiderScreens/RideSummaryScreen';
import LocateDryCleaningScreen from './screens/DriverScreens/DryCleaningScreens/LocateDryCleaningScreen';
import OrderAcceptingScreen from './screens/DriverScreens/DryCleaningScreens/OrderAcceptingScreen';
import OrderPickedUpScreen from './screens/DriverScreens/DryCleaningScreens/OrderPickedUpScreen';
import OrderDropScreen from './screens/DriverScreens/DryCleaningScreens/OrderDropScreen';
import DropOffConfirmedScreen from './screens/DriverScreens/DryCleaningScreens/DropOffConfirmedScreen';
import DryCleaningReceiptScreen from './screens/DriverScreens/DryCleaningScreens/DryCleaningReceiptScreen';
import DryCleaningServiceScreen from './screens/MerchantScreens/DryCleanerScreens/DryCleaningServiceScreen';
import MyOrderHistoryScreen from './screens/MerchantScreens/MyOrderHistoryScreen';
//micro mobility
import MicroMobilityScreen from './screens/DriverScreens/MicroMobilityScreen/Index';
import MicroMobilityHistory from './screens/DriverScreens/MicroMobilityScreen/History/Index';
import BookMobilityScreen from './screens/DriverScreens/MicroMobilityScreen/BookMobility/Index';
import MobilityScreen from './screens/DriverScreens/MicroMobilityScreen/BookMobility/BookScreen';
import BookMobilityConfirm from './screens/DriverScreens/MicroMobilityScreen/BookMobility/BookConfirm';
import ParkingLot from './screens/MerchantScreens/ParkingLot/Index';
import ParkingGarage from './screens/MerchantScreens/ParkingGarage/Index';
import ParkingResidence from './screens/MerchantScreens/ParkingResidence/Index';
import ParkingAboutDetails from './components/ParkingAboutDetails';
import SearchScreen from './screens/HeaderComponents/SearchScreens/SearchScreen';
import NotificationScreen from './screens/HeaderComponents/NotificationsScreen/NotificationScreen';
import WalletScreen from './screens/HeaderComponents/WalletScreens/WalletScreen';
import WalletDetailsScreen from './screens/HeaderComponents/WalletScreens/WalletDetailsScreen';
import AddMoneyScreen from './screens/HeaderComponents/WalletScreens/AddMoneyScreen';
import WithdrawScreen from './screens/HeaderComponents/WalletScreens/WithdrawScreen';
import MoneySummaryScreen from './screens/HeaderComponents/WalletScreens/MoneySummaryScreen';
import MoneySuccessScreen from './screens/HeaderComponents/WalletScreens/MoneySuccessScreen';
import AddDetailsScreen from './screens/HeaderComponents/WalletScreens/AddDetailsScreen';
import SettingsScreen from "./screens/SideBarScreens/SettingsScreens/SettingsScreen";
import ProfileScreen from './screens/SideBarScreens/ProfileScreens/Index';
import ContactUs from './screens/SideBarScreens/ContactUs/Index';
import ResetPassword from './screens/SideBarScreens/ResetPassword/Index';
import TipsAndInfoScreen from './screens/SideBarScreens/Tips&InfoScreens/TipsAndInfoScreen';
import FareCardScreen from './screens/SideBarScreens/FareCardScreens/FareCardScreen';
import PaymentMethodScreen from './screens/SideBarScreens/PaymentMethodsScreens/PaymentMethodScreen';
import BookDryCleanersScreen from './screens/UserScreens/DryCleanersModule/BookDryCleanersScreen';
import NewPasswordScreen from './screens/Authentication/NewPasswordScreen';

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      initialRouteName="Onboarding"
      >
        {/* <Stack.Screen name="Splash" component={SplashScreen}/> */}
        <Stack.Screen name="Onbaording" component={OnboardingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen}/>
        <Stack.Screen name="New Password" component={NewPasswordScreen}/>
        <Stack.Screen name="Reset Password" component={ResetPasswordScreen}/>
        <Stack.Screen name="Verify" component={VerificationScreen}/>
        <Stack.Screen name="Verified OTP" component={OTPVerifiedScreen}/>
        <Stack.Screen name="Registration" component={RegistrationScreen}/>
        <Stack.Screen name="Email Verification" component={VerifyWithEmailScreen}/>
        <Stack.Screen name="Verified With Email" component={VerifiedWithEmailScreen}/>
        {/* SideBar */}
        {/* 1. Settings Screens */}
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        {/* Tips&Info Screen */}
        <Stack.Screen name="Tips&Info" component={TipsAndInfoScreen}/>
        {/*Profile Screens */}
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        {/*Contact Screens */}
        <Stack.Screen name="ContactScreen" component={ContactUs}/>
        {/* Face Card Screens */}
        <Stack.Screen name="Fare Card" component={FareCardScreen}/>
        {/* Payment Method Screens */}
        {/* Header Components */}
        <Stack.Screen name="Payment Method" component={PaymentMethodScreen}/>
        {/* Search */}
        <Stack.Screen name='Search' component={SearchScreen}/>
        {/* Reset Password */}
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>

        {/* NotificationScreen */}
        <Stack.Screen name="Notifications" component={NotificationScreen}/>
        {/* Wallet Screens */}
        <Stack.Screen name="Wallet" component={WalletScreen}/>
        <Stack.Screen name="Wallet Details" component={WalletDetailsScreen}/>
        <Stack.Screen name="Add Money" component={AddMoneyScreen}/>
        <Stack.Screen name="Withdraw" component={WithdrawScreen}/>
        <Stack.Screen name="Money Summary" component={MoneySummaryScreen}/>
        <Stack.Screen name="Money Success" component={MoneySuccessScreen}/>
        <Stack.Screen name="Add Details" component={AddDetailsScreen}/>

        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Role Home" component={RoleHomeScreen}/>
        <Stack.Screen name="Ride Share" component={RideShareScreen}/>
        <Stack.Screen name="Book New Ride" component={BookNewRideScreen}/>
        <Stack.Screen name="Available Rides" component={AvailableRidesScreen}/>
        <Stack.Screen name="Ride Details" component={RideDetails}/>
        <Stack.Screen name="Cancel Booking" component={CancelBookingScreen}/>
        <Stack.Screen name="Cancelled Booking" component={CancelledBookingScreen}/>
        <Stack.Screen name="Ride History" component={RideHistoryScreen}/>
        <Stack.Screen name="Live" component={LiveSessionScreen}/>
        <Stack.Screen name="Driver Register" component={DriverRegisterScreen}/>
        <Stack.Screen name="Driver OTP" component={DriverOTPScreen}/>
        <Stack.Screen name="Vehicle Info" component={VehicleInfoScreen}/>
        <Stack.Screen name="Personal Info" component={PersonalInfoScreen}/>
        <Stack.Screen name="Account Info" component={AccountInfoScreen}/>
        <Stack.Screen name="Attestation" component={AttestationScreen}/>
        <Stack.Screen name="Profile Photo" component={ProfilePhotoScreen}/>
        <Stack.Screen name="Driver Registered" component={DriverRegisteredScreen}/>
        <Stack.Screen name="Parking" component={ParkingMainScreen}/>
        <Stack.Screen name="Parking History" component={ParkingHistoryScreen}/>
        <Stack.Screen name="Scanner" component={ScannerScreen}/>
        <Stack.Screen name="Book Parking" component={BookParkingScreen}/>
        <Stack.Screen name="Pick Parking" component={PickParkingScreen}/>
        <Stack.Screen name="Parking Details" component={ParkingDetailsScreen}/>
        <Stack.Screen name="CarOrBike" component={CarOrBikeScreen}/>
        <Stack.Screen name="Available Parking" component={AvailableParkingScreen}/>
        <Stack.Screen name="Booking Confirmation" component={BookingConfirmationScreen}/>
        <Stack.Screen name="Payment" component={PaymentScreen}/>
        <Stack.Screen name="Booking Confirmed" component={BookingConfirmedScreen}/>
        <Stack.Screen name='Summary' component={SummaryScreen}/>
        {/* Dry Cleaners For Users */}
        <Stack.Screen name="Locate" component={LocateScreen}/>
        <Stack.Screen name="Dry Cleaning Details" component={DryCleaningDetailPage}/>
        <Stack.Screen name="Order History" component={OrderHistoryScreen}/>
        <Stack.Screen name="Detailed Screen" component={DetailedScreen}/>
        <Stack.Screen name="Available Dry Cleaners" component={AvailableDryCleanersScreen}/>
        <Stack.Screen name="Select Items" component={SelectItemsScreen}/>
        <Stack.Screen name="Pickup Location" component={PickupLocation}/>
        <Stack.Screen name="Drop Location" component={DropLocationScreen}/>
        <Stack.Screen name="Schedule" component={ScheduleScreen}/>
        <Stack.Screen name="Order Summary" component={OrderSummaryScreen}/>
        <Stack.Screen name="Order Payment" component={OrderPaymentScreen}/>
        <Stack.Screen name="Order Confirmed" component={OrderConfirmedScreen}/>
        <Stack.Screen name="Receipt" component={ReceiptScreen}/>
        <Stack.Screen name="Active Order" component={ActiveOrderScreen}/>
        <Stack.Screen name="BookDryCleanersScreen" component={BookDryCleanersScreen}/>
        {/* Food Delivery */}
        <Stack.Screen name='Food Delivery' component={FoodDeliveryScreen}/>
        <Stack.Screen name='NewOrder' component={NewOrder}/>
        <Stack.Screen name='ListItems' component={ListItems}/>
        <Stack.Screen name='ItemDetail' component={ItemDetail}/>
        <Stack.Screen name='FoodMenu' component={FoodMenu}/>
        <Stack.Screen name='MenuDetails' component={MenuDetails}/>
        <Stack.Screen name='Checkout' component={Checkout}/>
        <Stack.Screen name='CheckoutBill' component={CheckoutBill}/>
        <Stack.Screen name='OrderPlaced' component={OrderPlaced}/>
        <Stack.Screen name='TrackOrder' component={TrackOrder}/>
        <Stack.Screen name='History' component={FoodHistory}/>
        <Stack.Screen name='MyCart' component={MyCart}/>
        {/* Locate Rider */}
        <Stack.Screen name="Locate Rider" component={LocateRiderScreen}/>
        <Stack.Screen name="Cancel Trip" component={CancelTripScreen}/>
        <Stack.Screen name="Ride Accepted" component={RideAcceptedScreen}/>
        <Stack.Screen name="Ride Summary" component={RideSummaryScreen}/>
        {/* Locate Dry Cleaning */}
        <Stack.Screen name="Locate Dry Cleaning" component={LocateDryCleaningScreen}/>
        <Stack.Screen name="Order Accepting" component={OrderAcceptingScreen}/>
        <Stack.Screen name="Order PickedUp" component={OrderPickedUpScreen}/>
        <Stack.Screen name="Order Drop" component={OrderDropScreen}/>
        <Stack.Screen name="Drop Off" component={DropOffConfirmedScreen}/>
        <Stack.Screen name='Dry Cleaning Receipt' component={DryCleaningReceiptScreen}/>
        {/* Merchant */}
        {/* Dry Cleaning Service */}
        <Stack.Screen name="Dry Cleaning Service" component={DryCleaningServiceScreen}/>
        <Stack.Screen name='MyOrderHistory' component={MyOrderHistoryScreen}/>
        {/* Micro Mobility */}
        <Stack.Screen name='Micro Mobility' component={MicroMobilityScreen}/>
        <Stack.Screen name='Micro Mobility History' component={MicroMobilityHistory}/>
        <Stack.Screen name='BookMobility' component={BookMobilityScreen}/>
        <Stack.Screen name='MobilityScreen' component={MobilityScreen}/>
        <Stack.Screen name='BookMobilityConfirm' component={BookMobilityConfirm}/>
        {/* Parking Lot */}
        <Stack.Screen name='Parking Lot' component={ParkingLot}/>
        {/* Parking Garage */}
        <Stack.Screen name='Parking Garage' component={ParkingGarage}/>
        {/* Resisdence Parking */}
        <Stack.Screen name='Residence Parking' component={ParkingResidence}/>
        <Stack.Screen name='ParkingAboutDetails' component={ParkingAboutDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
