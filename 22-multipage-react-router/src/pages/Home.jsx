import { Link, useNavigate } from "react-router-dom"; // Use Link instead of <a> to prevent refresh app unnecessary

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return (
    <>
        <h1>My HomePage</h1>
        <p>Go to <Link to="/products">the list of products</Link>.</p>
        <p>
            <button onClick={navigateHandler}>Navigate Example</button>
        </p>
    </>
    )
}

export default HomePage;