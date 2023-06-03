import {routes} from "./routes";
import {createMemoryHistory, createRouter} from "vue-router";

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes
})

export default router;