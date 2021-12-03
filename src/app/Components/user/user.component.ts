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
	public followers:number;
  public IsRepo:boolean;

	constructor( private peticion:RepoServices, private router:Router ) {
		this.users = [];
		this.followers = 0;
    this.IsRepo = false;
	}

	ngOnInit(): void {
    this.IsRepo = false;
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
          this.users.forEach(item => {
            this.peticion.get_followers(item.followers_url).subscribe(data => {
              item.followers_url = data.length;
            });
          });

				},
				error => {
					console.log(error);
				}

			);
		}
	}

  GoRepos(user:any) {
    this.IsRepo = true;
    this.router.navigate(["/repos"]);
    const Data = {
      username: user.login,
      ImgUrl: user.avatar_url,
      repos_url: user.repos_url
    };
    sessionStorage.setItem('user', JSON.stringify(Data));
    console.log(user)
  }

}
