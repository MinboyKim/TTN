import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { instance } from "@/lib/instance";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const nickname = formData.get("nickname") as string;
    const password = formData.get("password") as string;
    const language = formData.get("language") as string;

    try {
      const response = await instance.post("/users/join", {
        nickname,
        password,
        language,
      });
      setLoading(false);
      localStorage.setItem("accessToken", response.data.response.accessToken);
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      }
      setLoading(false);
    }
  };

  return (
    <div className="p-6 w-full h-full flex items-center justify-center">
      <form
        className="flex items-center justify-center p-6 rounded-xl border flex-col gap-6"
        onSubmit={onSubmit}
      >
        <h1 className="text-xl font-bold">Register</h1>
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

        <Select name="language">
          <SelectTrigger>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">🇺🇸 English</SelectItem>
            <SelectItem value="kr">🇰🇷 Korean</SelectItem>
            <SelectItem value="jp">🇯🇵 Japan</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex flex-col gap-2 w-full">
          <Button className="w-full" disabled={loading}>
            {loading ? "Loading..." : "Register"}
          </Button>
          <Link to="/login">
            <Button className="w-full" variant="secondary" type="submit">
              Back
            </Button>
          </Link>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Register;
