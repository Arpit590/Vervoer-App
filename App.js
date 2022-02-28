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
        <Stack.Screen name="Reset Password" component={ResetPasswordScreen}/>
        <Stack.Screen name="Verify" component={VerificationScreen}/>
        <Stack.Screen name="Verified OTP" component={OTPVerifiedScreen}/>
        <Stack.Screen name="Registration" component={RegistrationScreen}/>
        <Stack.Screen name="Email Verification" component={VerifyWithEmailScreen}/>
        <Stack.Screen name="Verified With Email" component={VerifiedWithEmailScreen}/>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
