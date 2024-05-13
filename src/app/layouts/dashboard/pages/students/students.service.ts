import { Injectable } from "@angular/core";
import { IStudent } from "./models";
import { Observable, delay, of } from "rxjs";

const STUDENTS_DB: IStudent[] =
    [
        {
            id: 1,
            firstName: "Bruno",
            lastName: "Albeiro",
            age: 2,
            email: "brunoalbeiro@gmail.com",
            createdAt: new Date(),
            role: 'ADMIN'
        },
        {
            id: 2,
            firstName: "Marcela",
            lastName: "Valentina",
            age: 1,
            email: "marcelavalentina@gmail.com",
            createdAt: new Date(),
            role: 'STUDENT'
        }
    ]
@Injectable({ providedIn: 'root' })
export class StudentsService {
    getStudents(): Observable<IStudent[]> {
        return of(STUDENTS_DB).pipe(delay(2000))
    }

    getStudentsById(id: number): Observable<IStudent | undefined> {
        return of(STUDENTS_DB.find((student) => student.id === id))
    }
}