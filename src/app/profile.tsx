import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import {useAuth} from "../providers/AuthProvider";
import {supabase} from "../lib/supabase";
import {Redirect} from "expo-router";

const ProfileScreen = () => {
    const {session, loading, user} =  useAuth();

    if (loading) {
        return <ActivityIndicator/>
    }

    if (!session) {
        return <Redirect href={'/login'} />
    }

    return (
        <View style={styles.container}>
            <Text>
                User id: {user?.id }
            </Text>
            <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
})

export default ProfileScreen;
