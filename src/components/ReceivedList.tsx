import { LetterListItemType } from "@/types/letter-list-item";
import LetterListItem from "./LetterListItem";
import { useFetch } from "@/hooks/useFetch";

const ReceivedList = () => {
  const {
    data: receivedList,
    loading,
    error,
  } = useFetch<LetterListItemType[]>("/letters/received");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4 flex flex-col gap-4 w-full">
      {receivedList?.map((letter) => (
        <LetterListItem key={letter.id} letter={letter} />
      ))}
    </div>
  );
};

export default ReceivedList;
