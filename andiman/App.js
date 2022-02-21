import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreens from "./src/screens/ListScreens";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        List: ListScreens
    },
    {
        initialRouteName: "List",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);
