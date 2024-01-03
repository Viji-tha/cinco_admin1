import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.client';
// import { ApiService } from 'src/app/api.client';

@Component({
  selector: 'app-add-testimonials',
  templateUrl: './add-testimonials.component.html',
  styleUrls: ['./add-testimonials.component.scss']
})
export class AddTestimonialsComponent {
  addTestimonialsForm:FormGroup;
  submitted:boolean=false;
  message:string=undefined;
  errors:string[]=[];
  messages:string[]=[];
  spinLoader = false;
  isDisabled: boolean = false;
  isSelected:any;
  
  photo_url: any;

  selected_image_file :File = null;
  

  constructor(private formBuilder: FormBuilder,private api: ApiService,private sanitizer: DomSanitizer) { }
  ngOnInit():void{
    this.addTestimonialsForm=this.formBuilder.group({
      thumbnail_image: ['', [Validators.required]],
      customer_name: ['', [Validators.required]],
  
      testimonial_description:['',[Validators.required]]
 

    });
  }
get f(){
  return this.addTestimonialsForm.controls;
}
 saveAddTestimonials(){
  this.submitted=true;
  this.errors=[];
  this.messages=[];

  if(!this.addTestimonialsForm.valid){
    return;
  }
  this.spinLoader = true;

  (error:any) => {
    console.log(error);
    this.submitted=false;
    this.errors=[error.error.Message];
    
  }
}
url;
  format;
  image: string | SafeUrl="assets/img/no_image1.png";
  onSelectphoto(event) {
    this.selected_image_file=<File> event.target.files[0];
    if (this.selected_image_file) {
      var reader1 = new FileReader();
      reader1.readAsDataURL(this.selected_image_file);
      if(this.selected_image_file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(this.selected_image_file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader1.onload = (event) => {
        this.photo_url = (<FileReader>event.target).result;
      }
   
    }
    this.image = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(event.target.files[0])
    );
  }
}
