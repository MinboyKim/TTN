import { useFetch } from "@/hooks/useFetch";
import { Letter } from "@/types/letter";
import { useParams } from "react-router-dom";

const LetterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: letter, loading, error } = useFetch<Letter>(`/letters/${id}`);

  if (loading || error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{letter?.title}</h1>
      <span>From: {letter?.senderName}</span>
      <span>To: {letter?.receiverName}</span>
      <span>{letter?.sendedAt}</span>
      <p>{letter?.contents}</p>
    </div>
  );
};

export default LetterDetail;
