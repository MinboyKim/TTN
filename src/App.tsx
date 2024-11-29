import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./stores/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col w-full h-full font-pacifico">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
