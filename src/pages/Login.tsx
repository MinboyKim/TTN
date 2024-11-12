import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/hooks/use-session";
import { instance } from "@/lib/instance";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useSession();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const nickname = formData.get("nickname") as string;
    const password = formData.get("password") as string;

    if (!nickname || !nickname.trim() || !password || !password.trim()) {
      setError("Please fill all the fields");
      setLoading(false);
      return;
    }

    try {
      const response = await instance.post("/users/login", {
        nickname,
        password,
      });
      setLoading(false);
      localStorage.setItem("accessToken", response.data.response.accessToken);
      setIsLoggedIn(true);
      navigate("/");
    } catch {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="p-6 w-full h-full flex items-center justify-center">
      <form
        className="flex items-center justify-center p-6 rounded-xl border flex-col gap-6"
        onSubmit={onSubmit}
      >
        <h1 className="text-xl font-bold">Login</h1>
        <div className="flex flex-col gap-4">
          <Label htmlFor="nickname">Nickname</Label>
          <Input id="nickname" name="nickname" className="w-80" />
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
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
          <Link to="/register">
            <Button className="w-full" variant="secondary">
              Register
            </Button>
          </Link>
          {error && <p className="text-red-500 w-full text-center">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
