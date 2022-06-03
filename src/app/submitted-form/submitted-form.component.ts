import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitted-form',
  templateUrl: './submitted-form.component.html',
  styleUrls: ['./submitted-form.component.css'],
})
export class SubmittedFormComponent implements OnInit {
  constructor(public router: Router) {}
  data = window.history.state;
  ngOnInit() {
    console.log(this.data.navigationId);
    if (this.data.data) {
      console.log(this.data.data.name);
    }
  }

  goBack() {
    this.router.navigate(['/'], { state: { data: this.data } });
  }
}
