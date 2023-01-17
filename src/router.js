import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { createAction, deleteAction, updateAction } from "./actions";
import App from "./App"
import { cheeseLoader, cheesesLoader } from "./loaders";
import Create from "./pages/Create";
import Index from "./pages/Index";
import Show from "./pages/Show";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={cheesesLoader}/>
            <Route path=":id" element={<Show/>} loader={cheeseLoader}/>
            <Route path="create" element={<Create/>} action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    )
)

export default router