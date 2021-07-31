import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class User {

    constructor(
        public id_user: number,
        public username: string,
        public email: string,
        public password: string,
) {
    }
}