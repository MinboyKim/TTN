import ReceivedList from "@/components/ReceivedList";
import SentList from "@/components/SentList";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Letters = () => {
  const [section, setSection] = useState("received");

  return (
    <div className="p-4 flex flex-col gap-4 w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-3xl font-bold">Letters</h1>
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

      {section === "received" ? <ReceivedList /> : <SentList />}
    </div>
  );
};

export default Letters;
