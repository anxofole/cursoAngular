import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../../../services/posts.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  public postForm: FormGroup;
  public id!: number;
  public saved!: boolean;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postsService: PostsService,
    private router: Router) {
    this.postForm = this.fb.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(200)]],
      body: ['', Validators.maxLength(5000)]
    });
  }

  public ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];

    this.postsService.get(this.id)
      .subscribe(post => this.postForm.setValue(post, { onlySelf: true }));
  }

  public onSubmit(): void {
    this.postsService.edit(this.postForm.value)
      .subscribe(_ => {
        this.saved = true;
        this.router.navigate(['../']);
      });
  }
}
