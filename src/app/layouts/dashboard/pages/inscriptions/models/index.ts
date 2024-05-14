import { FormControl } from "@angular/forms";
import { ICourses } from "../../courses/models";
import { IStudent } from "../../students/models";

export interface IInscription {
    id: number;
    subject: ICourses;
    student: IStudent;
}

export interface ISubmitInscription {
    subject: ICourses | null;
    student: IStudent | null;
}

export interface ISubmitInscriptionForm {
    subject: FormControl<ICourses | null>;
    student: FormControl<IStudent | null>;
    value: FormControl<number | null>;
    quantity: FormControl<number | null>;
}