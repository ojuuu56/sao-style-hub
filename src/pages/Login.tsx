import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import saoLogo from "@/assets/sao-logo.png";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      if (!name) { toast.error("Please enter your name"); return; }
      const ok = signup(name, email, password);
      if (ok) { toast.success("Account created!"); navigate("/"); }
      else toast.error("Email already exists");
    } else {
      const ok = login(email, password);
      if (ok) { toast.success("Welcome back!"); navigate("/"); }
      else toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10 animate-fade-up">
          <Link to="/">
            <img src={saoLogo} alt="SAO" className="h-16 mx-auto mb-6" />
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {isSignup ? "Join the SAO community" : "Sign in to your account"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up stagger-2">
          {isSignup && (
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm text-muted-foreground mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="w-full gold-gradient px-8 py-3.5 text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-sm hover:opacity-90 active:scale-[0.97] transition-all mt-6"
          >
            {isSignup ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6 animate-fade-up stagger-3">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-primary hover:underline"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>

        <div className="text-center mt-8 animate-fade-up stagger-4">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
