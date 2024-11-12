import { Heart, MailCheck, UsersRound } from "lucide-react";
import HeroImage from "/hero.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-20 bg-white dark:bg-black">
      <img src={HeroImage} alt="hero" className="h-[300px]" />

      <Link to="/app">
        <Button size="lg">Get Started</Button>
      </Link>

      <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
        <div className="flex min-h-[200px] w-full max-w-[442px] flex-col gap-4 rounded-lg border p-6 transition-all duration-200 ease-in-out hover:scale-110">
          <div className="flex items-center gap-4">
            <MailCheck />
            <h1 className="text-2xl font-semibold">Send Letters</h1>
          </div>
          <p className="text-gray-500">
            Users can send letters to people around the world, fostering
            cross-cultural communication and meaningful connections.
          </p>
        </div>

        <div className="flex min-h-[200px] w-full max-w-[442px] flex-col gap-4 rounded-lg border p-6 transition-all duration-200 ease-in-out hover:scale-110">
          <div className="flex items-center gap-4">
            <UsersRound />
            <h1 className="text-2xl font-semibold">Make Friends</h1>
          </div>
          <p className="text-gray-500">
            Users can build a global network of friends. This feature aims to
            connect users with people from diverse backgrounds, promoting
            lasting friendships across borders.
          </p>
        </div>

        <div className="flex min-h-[200px] w-full max-w-[442px] flex-col gap-4 rounded-lg border p-6 transition-all duration-200 ease-in-out hover:scale-110">
          <div className="flex items-center gap-4">
            <Heart />
            <h1 className="text-2xl font-semibold">Sentiment analysis</h1>
          </div>
          <p className="text-gray-500">
            Each letter undergoes a sentiment analysis, providing users with
            insights into the emotions conveyed in their messages. This feature
            helps users better understand their own emotions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
