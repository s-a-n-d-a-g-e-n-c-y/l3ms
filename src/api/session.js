import { useState, useEffect } from "react";
import { supabase } from "api/supabaseClient";

export function setupSession() {
  const [session, setSession] = useState("");
  const [user, setUser] = useState(session?.user.username);

    const newSession = supabase.auth.session();
    setSession(newSession);
    setUser(session?.user ?? null);

    // why data: authListener?
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);
  
}
