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

export interface CreateUserPayload {
    firstName: string | null;
    lastName: string | null;
    age: number | null;
    email: string | null;
    createdAt: Date | null;
    role?: StudentRole | null;
  }
  