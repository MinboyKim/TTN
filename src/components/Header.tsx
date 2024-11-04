import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="p-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4">
        <Mail className="h-8 w-8" />
        <h1 className="text-2xl font-bold">Through the Night</h1>
      </Link>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
