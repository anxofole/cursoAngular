import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  public postForm: FormGroup;
  public saved!: boolean;

  constructor(private fb: FormBuilder, private postsService: PostsService, private router: Router) {
    this.postForm = this.fb.group({
      userId: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(200)]],
      body: ['', Validators.maxLength(5000)]
    });
  }

  public onSubmit(): void {
    this.postsService.create(this.postForm.value)
      .subscribe(_ => {
        this.saved = true;
        this.router.navigate(['../']);
      });
  }
}
