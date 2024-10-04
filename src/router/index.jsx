import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import App from '../App'
import {
  LogIn,
  User,
  UserHome,
  Settings,
  Groups,
  Tasks,
  TasksPage,
  Notifications
} from "@pages";


const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<LogIn />} />
        <Route path="user-layout" element={<User />}>
          <Route index element={<UserHome />} />
          <Route path="groups" element={<Groups />} />
          <Route path="settings" element={<Settings />} />
          <Route path="groups/:id" element={<Tasks />} />
          <Route path="groups/:id/tasks-page" element={<TasksPage />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}
export default Router