import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http-client';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  userForm!: FormGroup;

  constructor(private client: HttpService, private router: Router){}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      weight: new FormControl(0, Validators.required),
      age: new FormControl(0, Validators.required),
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
