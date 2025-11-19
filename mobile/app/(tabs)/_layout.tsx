import { Tabs } from "expo-router"
import {Feather} from '@expo/vector-icons'


const TabsLayout = () => {
    
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen 
        name="index" 
        options={{
            headerShown:false,
            tabBarIcon:({color,size})=><Feather name="home" size={size} color={color}/>
        }}
        />
        <Tabs.Screen 
        name="search" 
        options={{
            headerShown:false,
            tabBarIcon:({color,size})=><Feather name="search" size={size} color={color}/>
        }}
        />
        <Tabs.Screen 
        name="notification" 
        options={{
            headerShown:false,
            tabBarIcon:({color,size})=><Feather name="bell" size={size} color={color}/>
        }}
        />
        <Tabs.Screen 
        name="messages" 
        options={{
            headerShown:false,
            tabBarIcon:({color,size})=><Feather name="mail" size={size} color={color}/>
        }}
        />
        <Tabs.Screen 
        name="profile" 
        options={{
            headerShown:false,
            tabBarIcon:({color,size})=><Feather name="user" size={size} color={color}/>
        }}
        />
    </Tabs>
  )
}

export default TabsLayout