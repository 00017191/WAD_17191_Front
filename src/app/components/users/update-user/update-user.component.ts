import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService, UserCreateAndUpdateModel } from 'src/app/http-client';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  userForm!: FormGroup;
  userId!: number;

  constructor(private client: HttpService, private router: Router, private route: ActivatedRoute) {
    this.userId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
      this.getUserById(this.userId);
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      weight: new FormControl(0, Validators.required),
      age: new FormControl(0, Validators.required),
    });
  }

  getUserById(id: number): void {
    this.client.getOneUser(id).subscribe({
      next: (data) => {
        this.fillForm(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  fillForm(model: UserCreateAndUpdateModel): void {
    this.userForm.patchValue({
      name: model.name,
      email: model.email,
      weight: model.weight,
      age: model.age,
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.client.createUser(formData).subscribe({
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
