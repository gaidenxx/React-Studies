// import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = { method: 'GET' }; // create outside to prevent looping inside Meals

export default function Meals() {
    const {
        data: loadedMeals,
        error,
        isLoading
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    console.log({
        data: loadedMeals,
        error,
        isLoading
    });

    if (isLoading) {
        return (
            <p className="center">Loading meals...</p>
        )
    }

    if (error) {
        return (
            <Error
                title="Failed to fetch meals"
                message={error}
            />
        )
    }

    // Old structure
    // const [loadedMeals, setLoadedMeals] = useState([]);

    // useEffect(() => {
    //     async function fetchMeals() {
    //         try {
    //             const response = await fetch('http://localhost:3000/meals', {method: 'GET'});
    
    //             if (!response.ok) {
    //                 // ...
    //             }
    
    //             const mealsData = await response.json();
    //             setLoadedMeals(mealsData);
    //         } catch(error) {
    //             console.log('error', error);
    //         }
    //     }

    //     fetchMeals();
    // }, []);

    console.log(loadedMeals);

    return (
        <ul id="meals">
            {loadedMeals.map(meal => (
                <MealItem 
                    mealData={meal}
                />
            ))}
        </ul>
    )
}