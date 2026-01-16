import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";

function RootLayout() {
    return (
        <div className="root-layout">
            <NavBar />

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout