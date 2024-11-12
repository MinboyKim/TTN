import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { instance } from "@/lib/instance";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SendLetters = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const message = formData.get("message") as string;
    if (!message || !message.trim() || !title || !title.trim()) {
      setError("Please fill all the fields");
      return;
    }

    try {
      await instance.post("/letters", {
        title,
        message,
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
    <form className="p-4 flex flex-col gap-10 w-full" onSubmit={onSubmit}>
      <div>
        <h1 className="text-2xl font-bold">Send Letters</h1>
        <p>Write a letter to someone who will listen to your story.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" placeholder="Enter the title" />
      </div>

      <div className="flex flex-col gap-4">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message"
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

export default SendLetters;
