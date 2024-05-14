import { Injectable } from "@angular/core";
import { CreateUserPayload, IStudent } from "./models";
import { Observable, delay, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
@Injectable({ providedIn: 'root' })
export class StudentsService {
    constructor(private httpClient: HttpClient) {
    }

    getStudents(): Observable<IStudent[]> {
        return this.httpClient.get<IStudent[]>(`${environment.HOST}/students`)
    }

    getStudentsById(id: string): Observable<IStudent | undefined> {
        return this.httpClient.get<IStudent>(`${environment.HOST}/students/${id}`)
    }

    createUser(payload: CreateUserPayload): Observable<IStudent> {
        return this.httpClient.post<IStudent>(
          `${environment.HOST}/students`,
          payload
        );
      }
}