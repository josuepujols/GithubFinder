import { Component, OnInit } from '@angular/core';
import { RepoServices } from 'src/app/Services/Repos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [RepoServices]
})
export class UserComponent implements OnInit {

	public user:string = "";
	public load: boolean = false;
	public users:any[];
	public total:number = 0;
	public followers:number[];

	constructor( private peticion:RepoServices ) { 
		this.users = [];
		this.followers = [];
	}
	
	ngOnInit(): void {
		this.peticion.get_followers().subscribe(
			response => {
				this.followers = response;
				console.log(response);
			},
			error => {

			}
		);
	}


	async get_user() {
		this.load = true;
		//Llamo al servicio 
		if (this.user !== "") {
			await this.peticion.get_user(this.user).subscribe(
				result => {
					this.load = false;
					this.users = result.items;
					this.total = result.total_count;
					console.log(this.users);
					console.log(this.total);

					// for (let i = 0; i < this.users.length; i++) {
					// 	this.peticion.get_followers(this.users[i].login).subscribe(
					// 		response => {
					// 			this.followers = response;
					// 			console.log(response);
					// 		},
					// 		error => {

					// 		}
					// 	);
					// }
					
				},
				error => {
					console.log(error);
				}
	
			);
		}
	}

}
