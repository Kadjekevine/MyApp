import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Index from '.';

function App() {
    const Stack = createNativeStackNavigator();
    return(
       < NavigationContainer>
            <Stack.Navigator initialRouteName='home'>
                <Stack.Screen name='home' component={Home} options={{
                    title:'Accueil',
                    headerStyle:{
                        backgroundColor:'orange'
                    }
                }}/>
                <Stack.Screen name='home' component={Home}/>
            </Stack.Navigator>
       </NavigationContainer>
    );

 }
 export default App;