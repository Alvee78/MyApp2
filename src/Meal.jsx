import { Link } from "react-router-dom";
export default function Meal({meal}) {
    return(
        <div className="col my-3">
            <div className="card shadow h-100" style={{width: "18rem"}}>
                <img src={meal.strMealThumb} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <Link to={"/meal/"+meal.idMeal} className="btn btn-primary">{meal.strMeal}</Link>
                </div>
            </div>
        </div>
    );
};
