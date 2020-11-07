import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { RestoService } from './../resto.service';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {

  constructor(private resto:RestoService) { }
  registerForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  ngOnInit(): void {
  }
//registerUser
register(){

  this.resto.registerUser(this.registerForm.value).subscribe((result)=>{
    console.warn(result)
  })
}
}
