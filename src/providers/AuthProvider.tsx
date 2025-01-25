import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {Session, User} from "@supabase/supabase-js";
import {supabase} from "../lib/supabase";
import {ActivityIndicator} from "react-native";

type AuthContext = {
    session: Session | null;
    user: User | undefined;
    isAuthenticated: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContext>({
    session: null,
    user: undefined,
    isAuthenticated: false,
    loading: false,
});

export default function AuthProvider({children}: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        })

        setLoading(false)

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <AuthContext.Provider value={{session, user: session?.user, isAuthenticated: !!session?.user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
