import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="p-6 w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-center p-6 rounded-xl border flex-col gap-6">
        <h1 className="text-xl font-bold">Register</h1>
        <div className="flex flex-col gap-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" className="w-80" />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            className="w-80"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Button className="w-full">Register</Button>
          <Link to="/login">
            <Button className="w-full" variant="secondary">
              Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
