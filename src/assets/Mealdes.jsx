import { useParams  , useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Mealdes() {
    let {id} = useParams();
    let [meal, setMeal] = useState(null);
    let [showLoading, setShowLoading] = useState(null);
    useEffect(()=>{

        FetchData(id);
    },[id]);
    let FetchData = (id)=>{
        setShowLoading("Loading...");
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response)=>response.json())
        .then((data)=>setMeal(data.meals[0]))
        .catch((error)=>console.log(error))
        .finally(()=>setShowLoading(null))
    };

    let navigate = useNavigate();
    function goBack(){
        navigate(-1);
    }
    
    return(
        <>
        {showLoading}
        {meal?
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <h2>{meal.strMeal}</h2>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" onClick={goBack}>Back</button>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-3">
                    <img className="rounded w-100" src={meal.strMealThumb} alt="hello"/>
                </div>
                <div className="col-6">
                    {meal.strInstructions}
                </div>
                <div className="col-3 alert alert-warning rounded">
                    <h4>Ingredients</h4>
                    <ul>
                        {Object.keys(meal).filter((key)=>key.includes("strIngredient") && meal[key]).map((key,index)=>(
                            <li key={index}>{meal[key]} - {meal["strMeasure" + key.split("strIngredient")[1]]}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
            
        :null}
        </>
    );
};
