import { PropsWithChildren } from "react";
import "./App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <MainContent>
        <Outlet />
      </MainContent>

      <Footer />
    </div>
  );
};

const MainContent = ({ children }: PropsWithChildren) => {
  return (
    <main className="w-full flex-1">
      <div className="mx-auto max-w-screen-lg px-4 py-6">{children}</div>
    </main>
  );
};

export default App;
