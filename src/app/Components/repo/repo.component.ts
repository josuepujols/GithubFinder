import { Component, OnInit } from '@angular/core';
import { RepoServices } from 'src/app/Services/Repos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers: [RepoServices]
})
export class RepoComponent implements OnInit {

  public UserName:string;
  public ImgUrl:string;
  private repo_url:string;

  public repos:any[];
  private user:any;

  constructor( private request:RepoServices, private router:Router ) {
    this.UserName = "";
    this.ImgUrl = "";
    this.repo_url = "";
    this.repos = [];
    this.user = JSON.parse(sessionStorage.getItem('user') as string);
   }

  ngOnInit(): void {
    this.UserName = this.user.username;
    this.ImgUrl = this.user.ImgUrl;
    this.repo_url = this.user.repos_url;
    this.GetRepos();
  }

  async GetRepos() {
    await this.request.get_repos(this.repo_url).subscribe(data => {
      this.repos = data;
      console.log(this.repos)
    });
  }

  GoHome() {
    this.router.navigate(["/home"]);
  }

}
