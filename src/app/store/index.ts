import { ActionReducerMap } from "@ngrx/store";
import { authFeatureName, authReducer } from "./auth/auth.reducers";
interface RootStatr { }
export const rootReducer: ActionReducerMap<RootStatr> = {
    [authFeatureName]: authReducer
}