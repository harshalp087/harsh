import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  name = "Angular";
  stringJson: any;
  stringObject: any;
  courseList = [
    {
      courseid: "1",
      coursename: "Java programming",
      author: "Franc"
    },
    {
      courseid: "2",
      coursename: "Learn Typescript programming",
      author: "John"
    }
  ];

  ngOnInit(): void {
    this.stringJson = JSON.stringify(this.courseList);
    console.log("String json object :", this.stringJson);
    console.log("Type :", typeof this.stringJson);

    // ConvertjSON to an object
    this.stringObject = JSON.parse(this.stringJson);
    console.log("JSON object -", this.stringObject);
  }
  }





