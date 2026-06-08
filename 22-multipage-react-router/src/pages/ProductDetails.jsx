import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const routerParams = useParams();

     // routerParams.productId > defined in app.js route params

    return (
        <>
            <h1>Product Details!</h1>
            <p>{routerParams.productId}</p>
        </>
    )
}