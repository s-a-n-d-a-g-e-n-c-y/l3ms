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

  return (
    <div>
      <h1 className="header">Supabase + React</h1>
      <p className="description">
        Sign in via magic link with your email below
      </p>
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
