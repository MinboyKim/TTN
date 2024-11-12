import { LetterListItemType } from "@/types/letter-list-item";
import LetterListItem from "./LetterListItem";
import { useFetch } from "@/hooks/useFetch";

const SentList = () => {
  const {
    data: sentList,
    loading,
    error,
  } = useFetch<LetterListItemType[]>("/letters/sent");

  if (loading || error || sentList?.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : sentList?.length === 0 ? (
          <p className="text-2xl font-bold">No letters received</p>
        ) : null}
      </div>
    );
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
