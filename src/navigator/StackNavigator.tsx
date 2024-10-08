import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Portada from '../screens/Portada';
import Registro from '../screens/Registro';
import ChatScreen from '../screens/ChatScreen';
//import chatScreen from '../screens/Chat';


export interface RootStackParams {
  Inicio: undefined;
  Registro: undefined;
  ChatScreen:undefined;
  [key: string]: undefined; 
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 1
        },
      }}
    >
      <Stack.Screen name="Inicio" component={Portada} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};
//      

export default StackNavigator;




