//Modulos
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable() 
export class RepoServices {
    
    private url:string = "";

    constructor( private _http:HttpClient ) {

    }


    //Metodo para traer un usuario mediante el nombre 
    get_user(user:string):Observable<any> {
        this.url = "https://api.github.com/search/users?q=" + user + "&per_page=15";
        const datos =  this._http.get(this.url);
        //retorno un valor 
        return datos;

    }

    get_followers():Observable<any> {
        return this._http.get("https://api.github.com/users/lopez?accept=application/vnd.github.v3+json");
    }

}   


