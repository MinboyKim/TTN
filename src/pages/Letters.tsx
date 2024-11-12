import LetterListItem from "@/components/LetterListItem";

const data = [
  {
    id: 1,
    title: "Letter 1",
    senderName: "John Doe",
    receiverName: "Jane Doe",
    sendedAt: "2024-11-11T23:28:16.043235",
  },
  {
    id: 2,
    title: "Letter 2",
    senderName: "John Doe",
    receiverName: "Jane Doe",
    sendedAt: "2024-11-11T23:28:16.043235",
  },
];

const Letters = () => {
  return (
    <div className="p-4 flex flex-col gap-4 w-full">
      <h1 className="text-3xl font-bold">Letters</h1>
      {data.map((letter) => (
        <LetterListItem key={letter.id} letter={letter} />
      ))}
    </div>
  );
};

export default Letters;
