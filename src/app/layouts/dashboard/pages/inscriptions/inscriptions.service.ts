import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { IInscription, ISubmitInscription } from "./models";

let INSCRIPTION_DB: IInscription[] = [{
    id: 1,
    subject: {
        id: 1,
        name: "Angular",
        value: 40000
    },
    student: {
        id: 1,
        firstName: "Bruno",
        lastName: "Albeiro",
        age: 2,
        email: "brunoalbeiro@gmail.com",
        createdAt: new Date(),
        role: 'ADMIN'
    }
},
{
    id: 2,
    subject: {
        id: 2,
        name: "JAVA",
        value: 40000
    },
    student: {
        id: 2,
        firstName: "Marcela",
        lastName: "Valentina",
        age: 1,
        email: "marcelavalentina@gmail.com",
        createdAt: new Date(),
        role: 'ADMIN'
    }
}]

@Injectable({ providedIn: 'root' })
export class InscriptionsService {
    getInscriptions(): Observable<IInscription[]> {
        return of(INSCRIPTION_DB).pipe(delay(1500));
    }

    createInscription(data: ISubmitInscription) {
        if (data.student && data.subject) {
            const newInscription: IInscription = {
                id: new Date().getTime(),
                student: data.student,
                subject: data.subject
            };
            INSCRIPTION_DB.push(newInscription);
        }
        return of(INSCRIPTION_DB);

    }

    deleteInscription(id: number): Observable<IInscription[]> {
        INSCRIPTION_DB = INSCRIPTION_DB.filter((inscription) => inscription.id !== id);
        return of(INSCRIPTION_DB);
    }

    updateInscription(id: number, data: IInscription): Observable<IInscription[]> {
        INSCRIPTION_DB = INSCRIPTION_DB.map((inscription) =>
            inscription.id === id ? { ...inscription, ...data } : inscription
        );
        return of(INSCRIPTION_DB);
    }
}
