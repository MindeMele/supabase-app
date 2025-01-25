import {Stack} from "expo-router/stack";
import AuthProvider from "../providers/AuthProvider";

export default function Layout() {
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen name="profile" options={{headerShown: false}}/>
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            </Stack>
        </AuthProvider>
    );
}