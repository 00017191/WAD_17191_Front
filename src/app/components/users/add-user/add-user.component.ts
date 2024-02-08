import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http-client';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
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
