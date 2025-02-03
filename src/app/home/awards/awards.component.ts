import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit, OnChanges {

  constructor() { }

  public headEnglish: any = { title: 'AWARDS', subtitle: 'PERSONAL ACHIEVEMENT & COURSES' };
  public head: any = this.headEnglish;

  images: string[] = ['assets/images/award.jpg', 'assets/images/award1.jpg'];
  currentIndex: number = 0;
  interval: any;


  public awardsEnglish: any = [

    {
      title: 'COURSE',
      name: 'Angular - 2022'
    },
    {
      title: 'ACHIEVEMENT',
      name: 'Super Squad Award - 2022'
    },
    {
      title: 'ACHIEVEMENT',
      name: 'Super Squad Award - 2023'
    }
  ];
  
  public awards: any = this.awardsEnglish;

  ngOnInit() {
    this.startInterval();
  }
  ngOnDestroy() {
    this.clearInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000); // Change images every 3 seconds (adjust as needed)
  }
  clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }


  ngOnChanges() {
      this.awards = this.awardsEnglish;
      this.head = this.headEnglish;
  }

  get currentImage(): string {
    return this.images[this.currentIndex];
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
