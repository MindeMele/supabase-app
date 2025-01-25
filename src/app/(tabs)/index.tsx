import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import {Redirect, useRouter} from "expo-router";
import {useAuth} from "../../providers/AuthProvider";

export default function Tab() {
    const router = useRouter();
    const {session, loading} =  useAuth();

    if (loading) {
        return <ActivityIndicator/>
    }

    if (!session) {
        return <Redirect href={'/login'} />
    }

    return (
        <View style={styles.container}>
            <Text>Tab [Home]</Text>
            <Button title='Profile Page' onPress={() => router.push('/profile')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
