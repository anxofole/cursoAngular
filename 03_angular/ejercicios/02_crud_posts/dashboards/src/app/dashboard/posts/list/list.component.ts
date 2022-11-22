import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public posts!: Post[];
  public allPosts!: Post[];
  public users!: number[];
  public filtersForms: FormGroup;
  private titleFilter: FormControl = new FormControl('');
  private userFilter: FormControl = new FormControl('');

  constructor(
    private postsService: PostsService,
    private fb: FormBuilder) {
    this.filtersForms = this.fb.group({
      titleFilter: this.titleFilter,
      userFilter: this.userFilter
    });
  }

  public ngOnInit(): void {
    this.postsService.getAll()
      .subscribe(posts => {
        this.allPosts = this.posts = posts;
        this.users = this.allPosts
          .map(p => p.userId)
          .reduce((all: number[], userId: number) => {
            if (!all.includes(userId)) {
              all = [...all, userId];
            }
            return all;
          }, []);
      });

    this.titleFilter.valueChanges
      .pipe(
        debounceTime(100)
      )
      .subscribe(_ => this.posts = this.allPosts
        .filter(post => this.filter(post)));

    this.userFilter.valueChanges
      .subscribe(_ => this.posts = this.allPosts
        .filter(post => this.filter(post)));
  }

  public delete(post: Post): void {
    this.postsService.delete(post)
      .subscribe(_ => this.posts = this.allPosts = this.allPosts.filter(p => p.id !== post.id));
  }

  private filter(post: Post): boolean {
    const titleMatches = this.titleFilter.value
      ? post.title.indexOf(this.titleFilter.value) !== -1
      : true;

    const userMatches = this.userFilter.value
      ? post.userId === Number(this.userFilter.value)
      : true;

    return titleMatches && userMatches;
  }

}
