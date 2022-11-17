import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `PROFILE {{ id }}`,
})
export class EditProfileComponent implements OnInit {
  public id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // valor instantaneno
    let id = this.route.snapshot.paramMap.get('id');
    //suscrito a cambios
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id')!;
    });
  }
}
