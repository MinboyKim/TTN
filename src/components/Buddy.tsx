import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";

interface BuddyProps {
  buddyName: string;
}

const Buddy = ({ buddyName }: BuddyProps) => {
  return (
    <div className="flex justify-between w-full p-4 border rounded-xl">
      <h1 className="text-xl">{buddyName}</h1>
      <Link to={`/app/send-letter/${buddyName}`}>
        <Pencil className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default Buddy;
