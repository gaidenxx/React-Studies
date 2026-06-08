import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
    const error = useRouteError();
    
    let title = "An error occurred!";
    let message = "Something went wrong!";

    if (error.status === 404) {
        const errorData = JSON.parse(error.data);
        title = errorData.title;
        message = errorData.message;
    }

    return (
        <>
            <MainNavigation/>
            <PageContent 
                title={title}
            >
                {message}
            </PageContent>
        </>
    )
}