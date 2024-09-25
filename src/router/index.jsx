import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import App from '../App'
import { LogIn, User, UserHome, Settings, Groups, SubGroup, Notifications } from "@pages";


const Router =()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App/>}>
            <Route index element={<LogIn/>}/>
            <Route path="user-layout" element={<User/>}>
              <Route index element={<UserHome/>}/>
              <Route path="groups" element={<Groups/>}/>
              <Route path="settings" element={<Settings/>}/>
              <Route path="groups/sub-group" element={<SubGroup/>}/>
              <Route path="notifications" element={<Notifications/>} />
            </Route>
          </Route>
        )
      );
    return <RouterProvider router={router}/>  
}
export default Router