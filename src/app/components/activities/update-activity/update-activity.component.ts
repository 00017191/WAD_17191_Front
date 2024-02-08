import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityCreateAndUpdateModel, HttpService } from 'src/app/http-client';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent {
  activityForm!: FormGroup;
  ActivityId: number;

  constructor(private client: HttpService, 
    private router: Router,
    private route: ActivatedRoute) 
    {
      this.ActivityId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
      this.getActivityById(this.ActivityId);
    }

    ngOnInit(): void {
      this.activityForm = new FormGroup({
        activityType: new FormControl('', Validators.required),
        caloriesBurned: new FormControl(0, Validators.required),
        distance: new FormControl(0, Validators.required),
        duration: new FormControl(0, Validators.required),
        userId: new FormControl(0, Validators.required),
      });
    }

  getActivityById(id: number): void {
    this.client.getOneActivity(id).subscribe({
      next: (data) => {
        this.fillForm(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  fillForm(activity: ActivityCreateAndUpdateModel): void {
    this.activityForm.patchValue({
      activityType: activity.activityType,
      coloriesBurned: activity.caloriesBurned,
      distance: activity.distance,
      duration: activity.duration,
      userId: activity.userId,
    });
  }

  onSubmit() {
    if (this.activityForm.valid) {
      const formData = this.activityForm.value;
      this.client.updateActivity(this.ActivityId, formData).subscribe({
          next: () => {
            this.router.navigateByUrl('');
          },
          error: (err) => {
            console.log(err)
          } 
        }
      );
    }
  }
}
