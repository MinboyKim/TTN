import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { instance } from "@/lib/instance";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SendLettersBuddy = () => {
  const { buddyName } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const contents = formData.get("contents") as string;
    if (!contents || !contents.trim() || !title || !title.trim()) {
      setError("Please fill all the fields");
      return;
    }

    if (!buddyName) {
      navigate("/app/dashboard");
    }

    try {
      await instance.post("/buddy/letter", {
        buddyName,
        title,
        contents,
      });
      setLoading(false);
      navigate("/app/letters");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      }
      setLoading(false);
    }
  };

  return (
    <form
      className="p-4 flex flex-col gap-8 w-full dark:bg-[url('/bg.jpg')] dark:bg-cover bg-white"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-primary">Send Letters</h1>
        <p className="text-2xl">
          Write a letter to someone who will listen to your story.
        </p>
      </div>

      <h1 className="text-3xl font-bold">To: {buddyName}</h1>

      <div className="flex flex-col gap-4">
        <Label htmlFor="title" className="text-3xl">
          Title
        </Label>
        <Input id="title" name="title" placeholder="Enter the title" />
      </div>

      <div className="flex flex-col gap-4">
        <Label htmlFor="contents" className="text-3xl">
          Contents
        </Label>
        <Textarea
          id="contents"
          name="contents"
          placeholder="Enter your contents"
          className="p-2 border rounded-lg h-[250px]"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}
      <Button size="lg" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Letter"}
      </Button>
    </form>
  );
};

export default SendLettersBuddy;
