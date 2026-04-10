import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="grid h-dvh grid-rows-[8%_1fr]">
            <Navbar />
            <main className="mx-auto w-[min(60em,95%)]">
                <Outlet />
            </main>
        </div>
    );
};

export default App;
