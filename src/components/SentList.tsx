import { LetterListItemType } from "@/types/letter-list-item";
import LetterListItem from "./LetterListItem";
import { useFetch } from "@/hooks/useFetch";

const SentList = () => {
  const {
    data: sentList,
    loading,
    error,
  } = useFetch<LetterListItemType[]>("/letters/sent");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4 flex flex-col gap-4 w-full">
      {sentList?.map((letter) => (
        <LetterListItem key={letter.id} letter={letter} />
      ))}
    </div>
  );
};

export default SentList;
