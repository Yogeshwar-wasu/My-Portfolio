import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnChanges {
  educations: any[];

  public headEnglish: any = { title: 'RESUME', subtitle: 'MY EDUCATION AND EXPERIENCE' };
  public head: any = this.headEnglish;

  constructor() {
    this.educations = [
      {
        degree: "BE (Computer Science & Engineering)",
        period: "2016-2020",
        institution: "S. B. Jain Institute of Technology, Management and Research (SBJITMR), Nagpur",
        description: "Studying computer science and engineering."
      },
      {
        degree: "HSC",
        period: "2016",
        institution: "L.B.H. Junior College, Kondhali",
        description: "Completed Higher Secondary Certificate."
      },
      {
        degree: "SSC",
        period: "2014",
        institution: "Trimurti Vidyalaya Dudhala",
        description: "Completed Secondary School Certificate."
      }
    ];
  
  }



  ngOnInit() {
  }


  ngOnChanges() {
      this.head = this.headEnglish;
  }

}

