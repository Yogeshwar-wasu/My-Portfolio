import {Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() English: any;
 
  // TITLE 
  public headEnglish: any = { title: 'MY SKILLS', subtitle: 'SKILLS AND TOOLS' };
  public head: any = this.headEnglish;


  // ENGLISH
  public skill_1: any = [
    [{
      title: 'HTML5',
      progress: 100
    }],
    [{
      title: 'CSS3',
      progress: 100
    }],
    [{
      title: 'JavaScript',
      progress: 100
    }],
    [{
      title: 'Typescript',
      progress: 100
    }],
    [{
      title: 'Angular 6 & 14',
      progress: 100
    }],
    [{
      title: 'Angular Material',
      progress: 100
    }],
    [{
      title:'Bootstrap',
      progress: 100
    }],
    [{
      title:'jQuery',
      progress: 100
    }]
  ];

  public skill_2: any = [

    [{
      title: 'Node.js',
      progress: 100
    }],
    [{
      title: 'Express.js',
      progress: 100
    }]
  ];
  public skill_3: any = [

    [{
      title: 'C',
      progress: 100
    }],
    [{
      title: 'C++',
      progress: 100
    }]
  ];

  public skill_4: any = [

    [{
      title: 'MySQL',
      progress: 100
    }],
    [{
      title: 'Maria DB',
      progress: 100
    }],
    [{
      title: 'MS SQL Server',
      progress: 100
    }]
  ];
  public skill_5: any = [

    [{
      title: 'JSON',
      progress: 100
    }],
    [{
      title: 'AJAX',
      progress: 100
    }],
    [{
      title: 'REST',
      progress: 100
    }],
    [{
      title: 'Postman',
      progress: 100
    }]
  ];
  public skill_6: any = [

    [{
      title: 'Git',
      progress: 100
    }],
    [{
      title: 'Bit Bucket',
      progress: 100
    }],
    [{
      title: 'JIRA',
      progress: 100
    }],
    [{
      title: 'UIpath Studio',
      progress: 100
    }],
    [{
      title: 'Visual Studio (2019/2022)',
      progress: 100
    }],
    [{
      title: 'Visual Studio Code',
      progress: 100
    }]
  ];
  public skill_7: any = [

    [{
      title: 'SSRS',
      progress: 100
    }]
  ];

 
  
  public skillEnglish: any = [
    { title: 'Front End Development', info: this.skill_1 },
    { title: 'Back End Development', info: this.skill_2 },
    { title: 'Programming Languages', info: this.skill_3 },
    { title: 'Database Management', info: this.skill_4 },
    { title: 'Web Services', info: this.skill_5 },
    { title: 'Frameworks/Tools', info: this.skill_6 },
    { title: 'Reporting Tool', info: this.skill_7 },
    { title: 'Agile Methodology'}
  ];
  // END ENGLISH


  // DEFAULT 
  public skills: any = this.skillEnglish;




  ngOnInit() {
  }

  ngOnChanges() {
      this.skills = this.skillEnglish;
      this.head = this.headEnglish;
  }


}
