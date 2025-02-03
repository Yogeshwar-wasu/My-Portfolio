import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit, OnChanges  {
  

  public titleEnglish: string = "YOGESHWAR WASU";
  public subtitleEnglish: string = "Mean Stack Developer";
  
  public title = this.titleEnglish;
  public subtitle = this.subtitleEnglish;


  // You can use a HTML tags in 'data'
  public profileEnglish: any =
    {
      title: 'Career Objective:', data: '<p>Dedicated and experienced MEAN stack developer with a proven track record of delivering high-quality web applications. Leveraging 4+ years of expertise in front-end and back-end development using Angular, Node.js, and related technologies.'+ '<BR> Proficient in leading cross-functional teams to successfully complete projects on-time while adhering to quality benchmarks. Seeking opportunities to contribute my skills and knowledge to a dynamic team, driving innovation and excellence in web development.</p>',
      contact: 'CONTACT', sp: 'SOCIAL PROFILES'
    };
  
  
  public profile = this.profileEnglish;
  @Input() English: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
      this.title = this.titleEnglish;
      this.subtitle = this.subtitleEnglish;
      this.profile = this.profileEnglish;
  }


}
