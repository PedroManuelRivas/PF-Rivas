import { IStudent } from "../../layouts/dashboard/pages/students/models";
import { createReducer, on } from "@ngrx/store";
import { authActions } from "./auth.actions";

export interface AuthState {
    authUser: null | IStudent
}

const MOCK_AUTH_USER: IStudent = {
    id: 1,
    createdAt: new Date(),
    email: "bruno@gmail.com",
    firstName: "Bruno",
    lastName: "Albeiro",
    role: "ADMIN",
    age: 2
};

const initialState: AuthState = {
    authUser: null
}
export const authFeatureName = 'auth';
export const authReducer = createReducer(initialState,
    on(authActions.login, (state, action) => {
        if (action.payload.email !== 'bruno@gmail.com' || action.payload.password !== '123') {
            alert('Correo o password incorrectos');
            return state;
        } else {
            // this._authUser$.next(this.MOCK_AUTH_USER);
            localStorage.setItem(
                'authorizacion',
                'tokenUltraSecreto123123123'
            );
            // this.router.navigate(['dashboard', 'home']);
        }
        return {
            authUser: MOCK_AUTH_USER
        }
    }))