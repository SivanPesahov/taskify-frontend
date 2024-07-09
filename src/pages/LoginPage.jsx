import { useContext, useRef } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import AuthContext from "../contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

function LoginPage() {
  const context = useContext(AuthContext);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  async function handleLogin(ev) {
    ev.preventDefault();
    const userData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await context.login(userData);
      if (context.loggedInUser) navigate("/", { replace: true });
      else {
        toast({
          title: "Error loging in",
          description: "Username or password are incorrect",
        });
      }
    } catch (err) {
      toast({
        title: "TypeError",
        description: "Somthing went wrong... please try again",
      });

      console.log(err.name);
    }
  }

  return (
    <Card className="shadow-2xl">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Login</span> <LogIn />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <Label>Username:</Label>
            <Input ref={usernameRef} placeholder="Enter username..." />
          </div>
          <div>
            <Label>Password:</Label>
            <Input
              type="password"
              ref={passwordRef}
              placeholder="Enter password..."
            />
          </div>

          <Button type="submit" className="bg-sky-900">
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-xs">
          Dont have an account?{" "}
          <Link
            className="underline font-bold text-sky-900"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

export default LoginPage;
