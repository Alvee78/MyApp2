import { Link } from "react-router-dom";
export default function Category({category}) {
    return(
        <div className="row py-2 bg-light my-3 shadow" >
            <div className="col-3">
                <img src={category.strCategoryThumb} alt="hello"/>
            </div>
            <div className="col-9">
                <div className="row">
                    <Link className="text-decoration-none p-0" to={"/"+category.strCategory}><h3 className="p-0">{category.strCategory}</h3></Link>
                </div>
                <div className="row">
                    {category.strCategoryDescription}
                </div>
            </div>
        </div>
    );
};
