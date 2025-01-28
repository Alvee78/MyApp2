import CategoryPage from "./CategoryPage";
import MealPage from "./MealPage";
import Navber from "./Navber"
import Mealdes from "./assets/Mealdes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
        <Navber/>
        <Routes>
            <Route index ="true" element={<CategoryPage/>}/>
            <Route path="/:category" element={<MealPage/>}/>
            <Route path="/meal/:id" element={<Mealdes/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
