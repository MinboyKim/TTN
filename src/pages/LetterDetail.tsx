import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useFetch } from "@/hooks/useFetch";
import { instance } from "@/lib/instance";
import { Letter } from "@/types/letter";
import { Plus } from "lucide-react";
import { useParams } from "react-router-dom";

const LetterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: letter, loading, error } = useFetch<Letter>(`/letters/${id}`);
  const { toast } = useToast();

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

  const handleAddBuddy = () => {
    instance
      .post("/buddy", {
        buddyName: letter?.senderName,
      })
      .then(() => {
        toast({
          title: "Buddy added",
          description: `You added ${letter?.senderName} as a buddy`,
        });
      })
      .catch(() => {
        toast({
          title: "An error occurred",
          description: "Please try again later",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="p-4 flex flex-col gap-4 dark:bg-[url('/bg.jpg')] dark:bg-cover w-full h-full">
      <h1 className="text-3xl font-bold">{letter?.title}</h1>
      <div className="flex gap-4 items-center text-2xl">
        <span>From: {letter?.senderName}</span>
        <Button onClick={handleAddBuddy}>
          <Plus size={24} />
        </Button>
      </div>
      <span className="text-2xl">To: {letter?.receiverName}</span>
      <span>{letter?.sendedAt}</span>
      <div className="w-full h-full border rounded-xl dark:bg-gray-900 p-4">
        {letter?.contents}
      </div>
    </div>
  );
};

export default LetterDetail;
