import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Meal from "./Meal";
export default function MealPage() {
    let {category} = useParams();
    let [meals, setMeals] = useState([]);
    let [showLoading, setShowLoading] = useState(null);
    let navigate = useNavigate();
    function GoBack(){
        navigate(-1);
    }
    useEffect(()=>{
        FetchData(category);
    },[category]);
    let FetchData = (cat)=>{
        setShowLoading("Loading...");
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        .then((response)=>response.json())
        .then((data)=>setMeals(data.meals))
        .catch((error)=>console.log(error))
        .finally(()=>setShowLoading(null))
    };
    return(
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <h2>Meal Page</h2>
                </div>
                <div className="col-2">
                    <button onClick={GoBack} className="btn btn-primary">Back</button>
                </div>
                {showLoading}
                <div className="row my-3 row-cols-2 row-cols-md-3 row-cols-lg-4">
                    {meals.map((meal,index)=>(<Meal meal={meal} key={index}/>))}
                </div>
                
            </div>
        </div>
    );
};
