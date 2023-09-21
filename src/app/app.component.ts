import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {title:'Dağ Bisikleti',
    imageUrl:'assets/biking.jpeg',
     username:'Tugce',
     content:'Bugün Cok hızlı sürdüm'
  }, 
   {title:'Tırmanış',
  imageUrl:'assets/mountain.jpeg',
   username:'Tugce',
   content:'Cok hızlı tırmandım'
  },
  {title:'Doğa Yürüyüşü',
  imageUrl:'assets/tree.jpeg',
   username:'Tugce',
   content:'Cok hızlı yürüdüm'
  },
  
  ]
}
