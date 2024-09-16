import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { MovieDetails } from "../pages/MovieDetails"

export function MyRoutes(){
    return(<Router>
        <Routes>
            <Route exact path="/" element={<LandingPage></LandingPage>}></Route>
            <Route exact path="/movies/:movieId" element={<MovieDetails></MovieDetails>}></Route>
        </Routes>
    </Router>)
}