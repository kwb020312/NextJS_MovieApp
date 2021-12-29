import NavBar from "../pages/NavBar";

export default function Layout({children}) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )
} 