import { Pencil } from "lucide-react";

interface BuddyProps {
  buddy: {
    name: string;
  };
}

const Buddy = ({ buddy }: BuddyProps) => {
  return (
    <div className="flex justify-between w-full p-4 border rounded-xl">
      <h1>{buddy.name}</h1>
      <Pencil className="cursor-pointer" />
    </div>
  );
};

export default Buddy;
