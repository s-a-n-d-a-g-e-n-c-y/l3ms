import React from "react";
import { useState } from "react";
import { supabase } from "api/supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  // TODO: bring the above into these functions below.
  // async function signInWithEmail() {
  //   const { user, session, error } = await supabase.auth.signIn({
  //     email,
  //   });
  // }
  //
  // async function signOut() {
  //   const { error } = await supabase.auth.signOut();
  // }

  return (
    <div>
      <p className="description">Request a Magic Link to log-in to l3ms.</p>
      <input
        className="inputField"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(email);
        }}
        className={"button"}
        disabled={loading}
      >
        {loading ? <span>Loading</span> : <span>Send magic link</span>}
      </button>
    </div>
  );
}
