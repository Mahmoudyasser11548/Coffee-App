import CoffeeScreen from "./screens/CoffeeScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import colors from "./configs/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Coffee"
          options={{ headerShown: false }}
          component={CoffeeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
