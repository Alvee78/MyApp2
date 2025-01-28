import {useState} from 'react';
import Category from './Category';
export default function CategoryPage() {
    let [showLoading, setShowLoading] = useState(null);
    let [categories, setCategories] = useState([]);
    let FetchData = ()=>{
        setShowLoading("Loading...");
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response)=>response.json())
        .then((data)=>setCategories(data.categories))
        .catch((error)=>console.log(error))
        .finally(()=>setShowLoading(null))
    }
    let ClearData = ()=>{
        setCategories([]);
    }
    return(
        <div className="container">
            <button className="btn btn-primary mx-2" onClick={FetchData}>Show Data</button>
            <button className="btn btn-danger" onClick={ClearData}>Hide Data</button>
            <div>{showLoading}</div>
            {categories.map((category, index)=>(<Category category={category} key={index} />))}
        </div>
    );
};
