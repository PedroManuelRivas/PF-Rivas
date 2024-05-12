export interface IStudent {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    createdAt: Date;
    role?: StudentRole;
}

export type StudentRole = 'ADMIN' | 'STUDENT'