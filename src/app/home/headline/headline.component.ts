import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit, OnChanges {

  public name: string = "YOGESHWAR WASU";
  public titleEnglish: string = "Mean Stack Developer";
  startDate: string = '2021-12-09';

  public title = this.titleEnglish;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
      this.title = this.titleEnglish;
  }

  get calculatedExperience(): string {
    const startDate = new Date(this.startDate);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) {
      months -= 1;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    years += 1;
    months += 3;

    if (months >= 12) {
      years += Math.floor(months / 12);
      months = months % 12;
    }

    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
  }

}
