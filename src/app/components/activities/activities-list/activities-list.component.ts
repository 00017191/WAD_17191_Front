import { Component } from '@angular/core';
import { ActivityModel, HttpService } from 'src/app/http-client';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent {
  activities!: ActivityModel[] | null;

  constructor(private client: HttpService){}

  ngOnInit(): void {
    this.getAllActivities();
  }

  getAllActivities(): void {
    this.client.getActivities().subscribe({
      next: (data) => {
        this.activities = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  delete(id: number): void {
    this.client.deleteActivityById(id).subscribe({
      next: () => {
        this.getAllActivities();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
