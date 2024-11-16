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
    const contents = formData.get("contents") as string;
    if (!contents || !contents.trim() || !title || !title.trim()) {
      setError("Please fill all the fields");
      return;
    }

    try {
      await instance.post("/letters", {
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
        <Label htmlFor="contents">Contents</Label>
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

export default SendLetters;
