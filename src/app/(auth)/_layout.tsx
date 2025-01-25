import {Redirect, Stack} from "expo-router";
import {useAuth} from "../../providers/AuthProvider";

export default function AuthLayout() {
    const {isAuthenticated} = useAuth();

    if (isAuthenticated) {
        return <Redirect href={'/'} />;
    }

    return (
        <Stack>
            <Stack.Screen name="login" options={{ title: 'Login' }}/>
            <Stack.Screen name="register" options={{ title: 'Register' }}/>
        </Stack>
    );
}