import NavigationLink from "./NavigationLink";

const NavBar = () => {
  return (
    <div className="flex flex-col gap-4 p-2 bg-white dark:bg-black">
      <NavigationLink to="/app/dashboard" text="Dashboard" />
      <NavigationLink to="/app/send-letter" text="Send Letter" />
      <NavigationLink to="/app/letters" text="Letters" />
    </div>
  );
};

export default NavBar;
