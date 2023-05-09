import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  constructor(private formBuilder: FormBuilder) { }

  // public profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  //   gender: new FormControl(''),
  // });

  public profileForm = this.formBuilder.group({
    name: new FormControl('',[
      Validators.required, // Validator bắt buộc
      Validators.minLength(6), // Validator độ dài tối thiểu
    ]),
    age: new FormControl('',[
      Validators.required,
      Validators.pattern('[0-9]*')
    ]),
    gender: new FormControl('',[
      Validators.required,
    ]),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  public onSubmitForm (){
    console.log(this.profileForm.value)
  }

  
}
