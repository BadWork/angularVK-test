import { Component, OnInit } from '@angular/core';
import { User } from "../model/user.model";
import { UserRepository } from "../model/user.repository"
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  public selectedCity = null;
  public usersPerPage = 6;
  public selectedPage = 1;

  constructor(private repository: UserRepository) { }

  ngOnInit() {
  }

  get users(): User[] {
    let pageIndex = (this.selectedPage - 1) * this.usersPerPage;
    return this.repository.getUsers(this.selectedCity)
      .slice(pageIndex, pageIndex + this.usersPerPage);
  }

  get cities(): string[] {
    return this.repository.getCities();
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getUsers(this.selectedCity).length / this.usersPerPage)
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getUsers(this.selectedCity).length / this.usersPerPage))
        .fill(0).map((x, i) => i + 1);
  }

  changeCity(newCity?: string) {
    this.selectedCity = newCity;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.usersPerPage = Number(newSize);
    this.changePage(1);
  }

}
