import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  formTitle = 'My Info Form';
  menuItems = [
    {
      itemName: 'Header Clr',
      value: '',
      itemType: 'header',
      itemClass: 'orange',
      backGroundColor: '#f75a1b',
    },
    {
      itemName: 'Footer Clr',
      value: '',
      itemType: 'footer',
      itemClass: 'blue',
      backGroundColor: '#1bb8f7',
    },
    {
      itemName: 'Reset Clr',
      value: '',
      itemType: 'reset',
      itemClass: 'yellow',
      backGroundColor: '#d9d65d',
    },
    {
      itemName: 'Submit Clr',
      value: '',
      itemType: 'submit',
      itemClass: 'green',
      backGroundColor: '#82d44e',
    },
  ];

  @Output() headerBgColor = new EventEmitter<string>();
  constructor(public router: Router) {}

  ngOnInit() {}

  changeBackgroundColors(item: any) {
    //alert('Item Type' + backgroundColor);
    this.headerBgColor.emit(item.backGroundColor);
    // console.log(item.backGroundColor);
  }

  onClickSubmit(data: any) {
    //alert('Entered Name : ' + data.name);
    this.router.navigate(['/submitted-form'], { state: { data: data } });
  }
}
