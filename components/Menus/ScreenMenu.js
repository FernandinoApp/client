import React,{ useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Register from "../../screens/auth/Register";
import Login from "../../screens/auth/Login";
import ForgotPassword from "../../screens/auth/ForgotPassword";
import ResetPassword from "../../screens/auth/ResetPassword";
import { AuthContext } from "../../context/authContext";
import HeaderMenu from "./HeaderMenu";
import MainMenu from "./MainMenu";
import About from "../../screens/About";
import Account from "../../screens/Account";
import Emergency from "../../screens/Emergency";
import ReportMenu from "../ReportMenu";
import ReportTraffic from "../../screens/ReportTraffic";
import ReportWaste from "../../screens/ReportWaste";
import ReportEngineer from "../../screens/ReportEngineer";
import ReportAnimals from "../../screens/ReportAnimals";
import ReportIncident from "../../screens/ReportIncident";
import EmergencyReport from "../../screens/EmergencyReport";
import Business from "../../screens/Business";
import NewsAndUpdates from "../../screens/NewsAndUpdates";
import MenuButton from "./MenuButton";
import TermsAndConditions from "../../screens/TermsAandConditions";
import ReportStatus from "../../screens/ReportStatus";
import ReportStatusDetail from "../../screens/ReportStatusDetail";
import MyReports from "../../screens/MyReports";

const Stack = createNativeStackNavigator();

const ScreenMenu = () => {
  const [state] = useContext(AuthContext);
  // auth condition true false
  const authenticatedUser = state?.user && state?.token
    
    return ( 
        <Stack.Navigator initialRouteName="Login" >
          {authenticatedUser ?
          (<>
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{ 
                headerLeft: () => <MenuButton />,
                headerRight: () => <HeaderMenu />,
              
                headerStyle: {
                  height: 60,
                },
                headerTitleStyle: {
                  fontSize: 18,
                  fontFamily: "GeologicaSemiBold",
                  color: "#f15b5b",
                },
              }}
            /> 
            <Stack.Screen 
              name="About" 
              component={About} 
              options={{ headerBackTitle: 'Back', title: '',
                headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }} 
            /> 
            <Stack.Screen 
              name="Account" 
              component={Account} 
              options={{ headerBackTitle: 'Back', title: '',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }} 
            /> 
            <Stack.Screen 
              name="Report An Incident" 
              component={ReportIncident} 
              options={{ headerBackTitle: 'Back',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            /> 
            <Stack.Screen 
              name="Report Menu" 
              component={ReportMenu} 
              options={{ headerBackTitle: 'Back',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            />
            <Stack.Screen 
              name="Report Traffic" 
              component={ReportTraffic} 
              options={{ headerBackTitle: 'Back', title: 'Report Form',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            />
            <Stack.Screen 
              name="Report Waste" 
              component={ReportWaste} 
              options={{ headerBackTitle: 'Back', title: 'Report Form',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            />
            <Stack.Screen 
              name="Report Engineer" 
              component={ReportEngineer} 
              options={{ headerBackTitle: 'Back', title: 'Report Form',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            />
            <Stack.Screen 
              name="Report Animals" 
              component={ReportAnimals} 
              options={{ headerBackTitle: 'Back', title: 'Report Form',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18,
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            />
            <Stack.Screen 
              name="Emergency Report" 
              component={EmergencyReport} 
              options={{ headerBackTitle: 'Back', title: 'Emergency Menu',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            />   
            <Stack.Screen 
              name="Emergency" 
              component={Emergency} 
              options={{ headerBackTitle: 'Back', title: 'Emergency Form',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            /> 
            <Stack.Screen 
              name="News And Updates" 
              component={NewsAndUpdates}
              options={{ headerBackTitle: 'Back', title: 'News & Updates',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            />  
            
            <Stack.Screen 
              name="Online Business Application" 
              component={Business} 
              options={{ headerBackTitle: 'Back', title: 'Online Business Application',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            /> 
            <Stack.Screen 
              name="My Reports" 
              component={MyReports} 
              options={{ headerBackTitle: 'Back', title: 'My Reports Status',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
            />
            
    
          </>
          ) : (
            <>
            <Stack.Screen 
              name="Register" 
              component={Register} 
              options={{headerShown:false}}
               />
            <Stack.Screen 
              name="Login" 
              component={Login} 
              options={{headerShown:false}}
               />
             <Stack.Screen
              name="TermsAndConditions"
              component={TermsAndConditions}
              options={{ headerBackTitle: 'Back', title: 'Terms & Conditions',
              headerStyle: {
                height: 60, 
              },
              headerTitleStyle: {
                fontSize: 18, 
                fontFamily: "GeologicaSemiBold",
                color: "#f15b5b",
              },
               }}
             />  
            <Stack.Screen 
              name="ForgotPassword" 
              component={ForgotPassword} 
              options={{headerShown:false}}
               />
            <Stack.Screen 
              name="ResetPassword" 
              component={ResetPassword} 
              options={{headerShown:false}}
               />
               </>
          )}
          </Stack.Navigator>
    
        
      );
};

export default ScreenMenu;