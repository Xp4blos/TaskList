import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class Kat{
    public kategorie = [
        'Naprawa',
        'Budowa aplikacji',
        'Wsparcie',
        'Utrzymanie i konserwacja'
    ]
}