import { Routes, Route, useLocation, Outlet } from 'react-router-dom'

import Home from './Home';
import Game from './Game';
function AllComponents(props) {
  const location = useLocation()
  return (<>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />

      <Route path='/game' element={<Game />} />



    </Routes>
    <Outlet />
  </>
  );
}

export default AllComponents;