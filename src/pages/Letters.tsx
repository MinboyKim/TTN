import ReceivedList from "@/components/ReceivedList";
import SentList from "@/components/SentList";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Letters = () => {
  const [section, setSection] = useState("received");

  return (
    <div className="p-4 flex flex-col gap-4 w-full bg-white dark:bg-black dark:bg-[url('/bg.jpg')] dark:bg-cover">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-5xl font-bold text-primary">Letters</h1>
        <div className="flex gap-4">
          <Button
            onClick={() => setSection("received")}
            variant={section === "received" ? "default" : "secondary"}
          >
            Received
          </Button>
          <Button
            onClick={() => setSection("sent")}
            variant={section === "sent" ? "default" : "secondary"}
          >
            Sent
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 overflow-auto scrollbar-hide">
        {section === "received" ? <ReceivedList /> : <SentList />}
      </div>
    </div>
  );
};

export default Letters;
