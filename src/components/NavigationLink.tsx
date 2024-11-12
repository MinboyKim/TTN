import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
  to: string;
  text: string;
}

const NavigationLink = ({ to, text }: NavigationLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "w-[200px] border rounded-sm text-xl px-6 py-3 bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-300 font-bold"
          : "w-[200px] rounded-sm text-xl px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200 font-bold"
      }
    >
      {text}
    </NavLink>
  );
};

export default NavigationLink;
