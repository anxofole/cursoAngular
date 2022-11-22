import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, APP_CONFIG_TOKEN } from '../app.config';
import { Post } from '../models/post';
import { LogsService } from '../dashboard/logs/logs.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private get endpoint(): string {
    return `${this.config.endpoint}/posts`;
  }

  constructor(
    @Inject(APP_CONFIG_TOKEN) private config: AppConfig,
    private logsService: LogsService,
    private http: HttpClient) { }

  public getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.endpoint);
  }

  public get(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.endpoint}/${id}`);
  }

  public create(post: Post): Observable<Post> {
    this.logsService.add('Create: ' + JSON.stringify(post));
    return this.http.post<Post>(this.endpoint, post);
  }

  public edit(post: Post): Observable<Post> {
    this.logsService.add('Edit: ' + JSON.stringify(post));
    return this.http.put<Post>(`${this.endpoint}/${post.id}`, post);
  }

  public delete(post: Post): Observable<Post> {
    this.logsService.add('Delete: ' + JSON.stringify(post));
    return this.http.delete(`${this.endpoint}/${post.id}`)
      .pipe(
        map(() => post)
      );
  }

}
