import Buddy from "@/components/Buddy";
import { instance } from "@/lib/instance";
import { cn } from "@/lib/utils";
import { Frown, HeartCrack, Smile } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [messageData, setMessageData] = useState(null);
  const [messageLoading, setMessageLoading] = useState(true);
  const [messageError, setMessageError] = useState("");

  const [emotionData, setEmotionData] = useState<{
    happy: number;
    sad: number;
    loneliness: number;
  }>({
    happy: 0,
    sad: 0,
    loneliness: 0,
  });
  const [emotionLoading, setEmotionLoading] = useState(true);
  const [emotionError, setEmotionError] = useState("");

  const [buddies, setBuddies] = useState<{ buddyName: string }[] | null>(null);
  const [buddiesLoading, setBuddiesLoading] = useState(true);
  const [buddiesError, setBuddiesError] = useState("");

  const [result, setResult] = useState(0);

  useEffect(() => {
    if (emotionData) {
      setResult(
        emotionData.happy - emotionData.sad - emotionData.loneliness > 0
          ? emotionData.happy - emotionData.sad - emotionData.loneliness
          : 0
      );
    }
  }, [emotionData]);

  useEffect(() => {
    instance
      .get("/buddy")
      .then((response) => {
        setBuddies(response.data);
        setBuddiesLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setBuddiesError(error.response.data.message);
        } else {
          setBuddiesError("An error occurred");
        }
        setBuddiesLoading(false);
      });
    instance
      .get("/emotion/analyze")
      .then((response) => {
        setEmotionData(response.data);
        setEmotionLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setEmotionError(error.response.data.message);
        } else {
          setEmotionError("An error occurred");
        }
        setEmotionLoading(false);
      });
    instance
      .get("/emotion/message")
      .then((response) => {
        setMessageData(response.data.contents);
        setMessageLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setMessageError(error.response.data.message);
        } else {
          setMessageError("An error occurred");
        }
        setMessageLoading(false);
      });
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4 w-full dark:bg-[url('/bg.jpg')] dark:bg-cover bg-background">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-primary">Dashboard</h1>
        <p className="text-xl">Welcome to the dashboard</p>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full h-full">
        <div className="p-6 border rounded-xl col-span-3 h-full flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Sentiment Analyze</h1>
          {messageLoading ? (
            <p>Loading...</p>
          ) : messageError ? (
            <p>{messageError}</p>
          ) : (
            <div className="rounded-xl border p-6">{messageData}</div>
          )}
          <div className="flex flex-col rounded-xl border p-6 gap-4 h-full">
            <h1 className="text-3xl font-bold">Sentiment Status</h1>
            <p className="flex gap-4">
              <div className="flex gap-2 items-end">
                <span
                  className={cn(
                    "text-3xl font-bold",
                    result > 60
                      ? "text-green-500"
                      : result > 30
                      ? "text-yellow-500"
                      : "text-red-500"
                  )}
                >
                  {emotionLoading
                    ? "Loading..."
                    : emotionError
                    ? "Error"
                    : result}
                </span>
                <span className="text-xl">/100</span>
              </div>
              <span
                className={cn(
                  "self-end",
                  result > 60
                    ? "text-green-500"
                    : result > 30
                    ? "text-yellow-500"
                    : "text-red-500"
                )}
              >
                {result > 60 ? "Good" : result > 30 ? "Normal" : "Bad"}
              </span>
            </p>

            <div className="flex justify-between h-full gap-4">
              <div className="p-6 rounded-xl border w-full h-full flex justify-center items-center gap-4 flex-col">
                Happy
                <Smile
                  size={48}
                  className={cn(
                    emotionData!.happy > 60
                      ? "text-green-500"
                      : emotionData!.happy > 30
                      ? "text-yellow-500"
                      : "text-red-500"
                  )}
                />
                {emotionLoading ? (
                  <p>Loading...</p>
                ) : emotionError ? (
                  <p>{emotionError}</p>
                ) : (
                  emotionData?.happy + "%"
                )}
              </div>
              <div className="p-6 rounded-xl border w-full h-full flex justify-center items-center gap-4 flex-col">
                Sad
                <Frown
                  size={48}
                  className={cn(
                    emotionData!.sad > 60
                      ? "text-red-500"
                      : emotionData!.sad > 30
                      ? "text-yellow-500"
                      : "text-green-500"
                  )}
                />
                {emotionLoading ? (
                  <p>Loading...</p>
                ) : emotionError ? (
                  <p>{emotionError}</p>
                ) : (
                  emotionData?.sad + "%"
                )}
              </div>
              <div className="p-6 rounded-xl border w-full h-full flex justify-center items-center gap-4 flex-col">
                Loneliness
                <HeartCrack
                  size={48}
                  className={cn(
                    emotionData!.loneliness > 60
                      ? "text-red-500"
                      : emotionData!.loneliness > 30
                      ? "text-yellow-500"
                      : "text-green-500"
                  )}
                />
                {emotionLoading ? (
                  <p>Loading...</p>
                ) : emotionError ? (
                  <p>{emotionError}</p>
                ) : (
                  emotionData?.loneliness + "%"
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border rounded-xl col-span-1 h-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Buddies</h1>
          <div className="flex flex-col gap-2">
            {buddiesLoading ? (
              <p>Loading...</p>
            ) : buddiesError ? (
              <p>{buddiesError}</p>
            ) : (
              buddies?.map((buddy, index) => (
                <Buddy key={index} buddyName={buddy.buddyName} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
