import { Component, OnInit } from '@angular/core';
import { HttpService, UserModel } from 'src/app/http-client';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users!: UserModel[] | null;

  constructor(private client: HttpService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.client.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  delete(id: number): void {
    this.client.deleteUserById(id).subscribe({
      next: () => {
        this.getAllUsers();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
