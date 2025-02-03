import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnChanges {
  @Input() English: any;

  public jobs: any = [];
  jobsEnglish: Job[];
  
  public headEnglish: any = { title: 'RESUME', subtitle: 'MY EDUCATION AND EXPERIENCE' };
  public head: any = this.headEnglish;

  constructor() {

    const job_1: Job = new Job('Chenoa Information Services ( Mumbai, Maharashtra )', '09/12/2021 To Till date', 'Software Engineer',
      '<P>Hands-on experience in developing web applications using Angular and node.js.'
      +'<br>Ive had the opportunity to develop multiple applications single handed and in a team.'
      +'<br>Received the <b>“Super Squad Award”</b> for outstanding contributions in the Project Development in 2022 and 2023.'
        + '</P><ul><li>PROJECT 1 : DBS Bank Project</il><li>PROJECT 2 : Healthy Homes Quest Project</li><li>PROJECT 3 : On-boarding Project</li></ul>', 1);


    const job_2: Job = new Job('CMS IT Services Private Limited (Nagpur, Maharashtra)', '13/08/2020 To 20/10/2021', 'Support Engineer',
      '<P>Perform system engineering tasks, including the installation, configuration, and maintenance of operating systems and software applications.'
      +'<br> Collaborate with the IT team to implement and manage system upgrades, patches, and security updates on remote desktops.</p>', 1);


    const school_1: Job = new Job('ICEICO Technologies Pvt (Nagpur, Maharashtra)', '2/05/2019 To 27/07/2019', 'Training Developer',
      '<P>Web Development Internship.</P>', 1);    
    
    this.jobsEnglish = [job_1,job_2,school_1];
    this.jobs = this.jobsEnglish;
  }



  ngOnInit() {
  }


  ngOnChanges() {
      this.head = this.headEnglish;
      this.jobs = this.jobsEnglish;
  }

}
