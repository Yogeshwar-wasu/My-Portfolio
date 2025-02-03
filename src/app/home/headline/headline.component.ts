import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit, OnChanges {

  public name: string = "YOGESHWAR WASU";
  public titleEnglish: string = "Mean Stack Developer";

  public title = this.titleEnglish;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
      this.title = this.titleEnglish;
  }

}
