import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-ci',
  templateUrl: './new-ci.component.html',
  styleUrls: ['./new-ci.component.scss']
})
export class NewCIComponent implements OnInit {

  newCIForm!:FormGroup;
  CI!:any;
  constructor(private router : Router, private route: ActivatedRoute,private formBuilder:FormBuilder,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.newCIForm=this.formBuilder.group(
      {
        nom: ['',Validators.required],
        description: ['',Validators.required],
        organisation:['',Validators.required],
        criticite:['',Validators.required],
        emplacement:['',Validators.required]
      

      }
    )
  };
  onSubmitForm()
  {
    const formValue=this.newCIForm.value;
    this.CI={
      'nom':formValue['nom'],
      'organisation':formValue['organisation'],
      'description':formValue['description'],
      'criticite':formValue['criticite'],
      'emplacement':formValue['emplacement']
    }
    this.httpClient
    .post("http://127.0.0.1:8443/CI/add",this.CI)
    .subscribe(
      response=>{
        console.log(response);
        console.log(this.CI);
        if(sessionStorage.getItem("role")=="admin")
        {
          this.router.navigate(['gererConfigurationAdmin']);
        }
        else if(sessionStorage.getItem("role")=="technicien")
        {
          this.router.navigate(['gererConfigurationTechnicien']);
        }
       
      }
    );
  }


}
