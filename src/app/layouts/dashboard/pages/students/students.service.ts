import { Injectable } from "@angular/core";
import { IStudent } from "./models";
import { Observable, delay, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class StudentsService {
    constructor(private httpClient: HttpClient){

    }

    getStudents(): Observable<IStudent[]> {
        return this.httpClient.get<IStudent[]>('http://localhost:3000/students')
    }

    getStudentsById(id: string): Observable<IStudent | undefined> {
        return this.httpClient.get<IStudent>(`http://localhost:3000/students/${id}`)
       
    }
}