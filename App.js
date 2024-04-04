import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Changed import
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Recovery from "./components/Recovery";
import Landing from "./components/Landing";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Landing" component={Landing} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Homepage} />
        <Drawer.Screen name="Registration" component={Registration} />
        <Drawer.Screen name="Recovery" component={Recovery} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
