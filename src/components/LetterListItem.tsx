import { LetterListItemType } from "@/types/letter-list-item";
import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface LetterListItemProps {
  letter: LetterListItemType;
  isSent: boolean;
}

const LetterListItem = ({ letter, isSent }: LetterListItemProps) => {
  return (
    <Link to={`/app/letters/${letter.id}`}>
      <div className="relative border rounded-xl p-4 flex flex-col gap-2 w-full hover:bg-gray-300 dark:hover:bg-gray-600">
        <h2 className="text-3xl font-bold">{letter.title}</h2>
        {isSent ? (
          <p>To: {letter.receiverName}</p>
        ) : (
          <p>From: {letter.senderName}</p>
        )}
        <p>{new Date(letter.sendedAt).toLocaleString()}</p>
        <CircleCheck
          className="absolute right-4 top-12 text-green-500"
          size={40}
        />
      </div>
    </Link>
  );
};

export default LetterListItem;
