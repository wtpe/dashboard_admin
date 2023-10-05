import { Routes, Route } from "react-router-dom"
import Dashboard from "../Page/Dashboard"
import Inventory from "../Page/Inventory"
import Orders from "../Page/Orders"
import Customers from "../Page/Customers"
function AppRoutes() {
    return (<div className="AppRoutes">
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/inventory' element={<Inventory />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/customers' element={<Customers />}></Route>
        </Routes>
    </div>
    )
}
export default AppRoutes