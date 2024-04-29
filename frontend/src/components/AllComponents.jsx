import {Routes, Route, useLocation, Outlet} from 'react-router-dom'

import Home from './Home';

function AllComponents(props) {
    const location = useLocation()
    return ( <>
      <Routes location={location} key={location.pathname}>
            <Route index element={<Home/>}/>
        

      </Routes>
      <Outlet/>
    </>
     );
}

export default AllComponents;