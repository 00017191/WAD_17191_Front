import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http-client';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent {
  activityForm!: FormGroup;

  constructor(private client: HttpService, private router: Router) {}
  ngOnInit(): void {
    this.activityForm = new FormGroup({
      activityType: new FormControl('', Validators.required),
      caloriesBurned: new FormControl(0, Validators.required),
      distance: new FormControl(0, Validators.required),
      duration: new FormControl(0, Validators.required),
      userId: new FormControl(0, Validators.required),
    });
  }

  onSubmit() {
    if (this.activityForm.valid) {
      const formData = this.activityForm.value;
      this.client.createActivity(formData).subscribe({
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
