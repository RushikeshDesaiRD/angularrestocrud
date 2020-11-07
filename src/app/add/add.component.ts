import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { RestoService } from './../resto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  constructor(private resto:RestoService) { }
  alert:boolean=false
  addRestoForm = new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      address:new FormControl('')
  })
  addRestoData(){
    this.resto.saveData(this.addRestoForm.value).subscribe((result) => {
      this.alert=true
    })
    this.alert=true

  }
  closeAlert(){
    this.alert=false
  }
  ngOnInit(): void {
  }

}
