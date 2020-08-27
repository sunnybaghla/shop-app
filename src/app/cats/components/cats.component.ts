import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as statusBar from 'nativescript-status-bar';


@Component({
  selector: 'ns-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

    cata:{code:number,ImgUrl:string,name:string}[]=[];
    temp:{}[]=this.cata;
    count:number=0;
    selectedIndex:number=0;


    constructor(private page:Page) {
      this.selectedIndex=2;
      this.count=0;
      this.cata.push(


            {code:1,ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDm6osYn1cMBSUJOC4uXOgOJ_FTmZhkkk-7KAYxEDCmnepQ40H",name:"Eggless"},
          {code:1,ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDm6osYn1cMBSUJOC4uXOgOJ_FTmZhkkk-7KAYxEDCmnepQ40H",name:"Eggless"},
          {code:10,ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQHHe4ECia8FsGHDiXLSIAl7QdWfzp_94WwneOh6ZE9wwn-fGZ",name:"Eggless"},
          {code:11,ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQHHe4ECia8FsGHDiXLSIAl7QdWfzp_94WwneOh6ZE9wwn-fGZ",name:"Designer"},
          {code:12,ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQHHe4ECia8FsGHDiXLSIAl7QdWfzp_94WwneOh6ZE9wwn-fGZ",name:"Strawbery"},
          {code:13,ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQHHe4ECia8FsGHDiXLSIAl7QdWfzp_94WwneOh6ZE9wwn-fGZ",name:"Pianple"},
          {code:14,ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQHHe4ECia8FsGHDiXLSIAl7QdWfzp_94WwneOh6ZE9wwn-fGZ",name:"sweet"},
          {code:16,ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQHHe4ECia8FsGHDiXLSIAl7QdWfzp_94WwneOh6ZE9wwn-fGZ",name:"heartSahped"}





        );


     }




  ngOnInit() {
      this.page.actionBarHidden=true;
      statusBar.hide();


  }

}
