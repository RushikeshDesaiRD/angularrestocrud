import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from './../resto.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router: ActivatedRoute, private resto:RestoService) { }
  addRestoForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
})
alert:boolean=false
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.updateRestoData(this.router.snapshot.params.id).subscribe((ressult) =>{
      console.warn(ressult)
      this.addRestoForm = new FormGroup({
        name:new FormControl(ressult['name']),
        email:new FormControl(ressult['email']),
        address:new FormControl(ressult['address'])
    })
    })
  }
  updateRestoData(){
    //console.warn(this.addRestoForm.value)
    this.resto.realupdateRestoData(this.router.snapshot.params.id, this.addRestoForm.value).subscribe((result)=>{
      console.log("ok")
      this.alert=true
    })
  }
}
