import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SendLetters = () => {
  return (
    <form className="p-4 flex flex-col gap-10 w-full">
      <div>
        <h1 className="text-2xl font-bold">Send Letters</h1>
        <p>Write a letter to someone who will listen to your story.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          className="p-2 border rounded-lg h-[300px]"
        />
      </div>

      <Button size="lg" type="submit">
        Send Letter
      </Button>
    </form>
  );
};

export default SendLetters;
