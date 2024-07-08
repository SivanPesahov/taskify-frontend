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
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import AuthContext from "../contexts/AuthContext";

function RegisterPage() {
  const context = useContext(AuthContext);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const eMailRef = useRef(null);

  async function handleRegister(ev) {
    ev.preventDefault();

    const userData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: eMailRef.current.value,
    };

    await context.register(userData);
  }

  return (
    <Card className="shadow-2xl">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Register</span> <LogIn />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div>
            <Label>Username:</Label>
            <Input ref={usernameRef} placeholder="Enter username..." />
          </div>
          <div>
            <Label>Password:</Label>
            <Input
              ref={passwordRef}
              type="password"
              placeholder="Enter password..."
            />
          </div>
          <div>
            <Label>First name:</Label>
            <Input ref={firstNameRef} placeholder="Enter first name..." />
          </div>
          <div>
            <Label>Last name:</Label>
            <Input ref={lastNameRef} placeholder="Enter last name..." />
          </div>
          <div>
            <Label>EMail:</Label>
            <Input ref={eMailRef} placeholder="Enter last name..." />
          </div>

          <Button type="submit">Register</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-xs">
          Already have an account?{" "}
          <Link className="underline font-bold" to="/auth/login">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

export default RegisterPage;
