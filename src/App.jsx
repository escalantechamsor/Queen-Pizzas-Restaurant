import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import { Suspense } from "react";
import Loading from "./components/loader/loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={`w-full h-[100vh] relative overflow-x-hidden`}>
        <NavBar />
        <div className="z-10">
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
