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
import RideShareScreen from './screens/UserScreens/RideShareScreen';
import BookNewRideScreen from './screens/UserScreens/BookNewRideScreen';
import AvailableRidesScreen from './screens/UserScreens/AvailableRidesScreen';
import RideDetails from './screens/UserScreens/RideDetails';
import CancelBookingScreen from './screens/UserScreens/CancelBookingScreen';
import CancelledBookingScreen from './screens/UserScreens/CancelledBookingScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
