import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScSelect';

  listElements = [
    {id:1,name:'Melancia'},
    {id:2,name:'Banana'},
    {id:3,name:'Mamão'},
    {id:4,name:"Carambola"},
    {id:5,name:"morango"},
    {id:6,name:"Abacate"},
    {id:7,name:"Manga"},
    {id:8,name:"Goiaba"},
    {id:9,name:"Uva"},
    {id:10,name:"Tangerina"}
  ];

  changeListSelect($event){
    console.log($event)
  }
}
