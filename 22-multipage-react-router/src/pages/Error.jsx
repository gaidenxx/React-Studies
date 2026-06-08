import MainNav from "../components/MainNav";

export default function ErrorPage() {
    return (
        <>
            <MainNav />
            <main>
                <h1>An error occorred!</h1>
                <p>Could not find this page or something went wrong!</p>
            </main>
        </>
    )
}