import { Component, OnInit } from '@angular/core';
import { RestoService } from './../resto.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  allData=[]
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
    this.resto.getData().subscribe((result)=>{
        this.allData=result
        console.log(this.allData)
    })
  }
  
  deleteRecord(id){
    this.resto.deleteData(id).subscribe((result)=>{
      console.log(result)
    })
  }

}
