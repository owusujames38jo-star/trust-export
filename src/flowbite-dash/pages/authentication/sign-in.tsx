/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Label, TextInput, Alert } from "flowbite-react";
import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { HiLockClosed, HiInformationCircle } from "react-icons/hi2";

const SignInPage: FC = function () {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");      // Stores the email
  const [error, setError] = useState(false);
  
  

   // Updated Email and password as per your request
  const ADMIN_EMAIL = "owusujames38.jo@gmail.com";
  const ADMIN_PASSWORD = "12345"; 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {

      localStorage.setItem("isAuthenticated", "true");
      setError(false);
      navigate("/admin");

    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12 bg-gray-50 dark:bg-gray-900">
      <div className="my-6 flex items-center gap-x-1 lg:my-0">
        <HiLockClosed className="h-10 w-10 text-blue-600 mr-2" />
        <span className="self-center whitespace-nowrap text-2xl font-black dark:text-white uppercase tracking-tight">
          TrustAuto <span className="text-blue-600">Admin</span>
        </span>
      </div>

      <Card
        horizontal
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:block md:[&>img]:w-80"
        imgSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">Secure Access</h1>
        
        {error && (
          <Alert color="failure" icon={HiInformationCircle} className="mb-4">
            <span>Invalid Admin Credentials.</span>
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Admin Email</Label>
            <TextInput 
              id="email" 
              type="email" 
              placeholder="admin@trustauto.com" 
              required 
              value={email} // Connects the input to our "email" state
              onChange={(e) => setEmail(e.target.value)} // Updates state as you type
/>
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Security Password</Label>
            <TextInput
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" color="blue" className="w-full">Sign in</Button>
        </form>
      </Card>
    </div>
  );
};

export default SignInPage;