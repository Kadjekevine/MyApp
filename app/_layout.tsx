import { Stack } from "expo-router";
 
export default function RootLayout() {
   return <Stack>
    <Stack.Screen name="index" options={{
      headerShown: false, 
    }} >


    </Stack.Screen>
    <Stack.Screen name="home" options={{
      headerShown: false
    }} />
      <Stack.Screen name="login" options={{
      headerShown: false
    }} />
      <Stack.Screen name="register" options={{
      headerShown: false
    }} />
     <Stack.Screen name="accueil" options={{
      title:'Accueil',
      headerStyle:{
        backgroundColor:'#0F6EFE',
      }
    }} />
   </Stack>;
}
