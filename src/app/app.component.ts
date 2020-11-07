import { Component } from '@angular/core';
import { RestoService } from './resto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private resto:RestoService ){

  }
  ngOnInit(): void {
    this.resto.getData().subscribe((result) => {
      console.log(result)
    })
 // console.log(this.resto.getData())
    
  }
}
