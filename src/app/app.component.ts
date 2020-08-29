import { Component,Input,OnInit,ViewChild } from '@angular/core';
import * as Papa from 'papaparse';
import { NgxCsvParser,NgxCSVParserError } from 'ngx-csv-parser';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipsModule,MatChipInputEvent} from '@angular/material/chips';
import {MatIconModule,MatIconRegistry} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


let obj : AppComponent;

export interface Language {
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      'cancel',
      'assets/img/cancel-24px.svg'
    );
  }
  public personArray: PersonComponent[] = [];
  headers: string[];


  visible = false;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  //languages: string[] = [["Typescript", "Java", "Clojure"],["Delphi", "VB", "C++"]];

  ngOnInit(){
    obj = this;
  }

  onChange(files: File[]){
    if(files[0]){
      console.log(files[0]);
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result,file) => {
          if (result.data.length != 0) {
            console.log(result.data);
            this.visible = true;
          }
          // console.log(result.meta);
          this.headers = result.meta.fields;
          for (let i = 0; i < result.data.length; i++)
          {
            let person = new PersonComponent(
              result.data[i][this.headers[0]],
              result.data[i][this.headers[1]],
              result.data[i][this.headers[2]],
              result.data[i][this.headers[3]].split(', ')
            );
            this.personArray.push(person);
          }
          console.log(this.personArray[0]);
        }
      });
    }
  }

  add(event: MatChipInputEvent): void {
    console.log(this.personArray);
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      console.log(this);
      //this..push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(language: string): void {
    /*const index = this.languages.indexOf(language);

    if (index >= 0) {
    this.languages.splice(index, 1);
  }*/
}
}

export class PersonComponent {

  id: string;
  name: string;
  surname: string;
  languages: string[];

  constructor(id: string, name: string, surname: string, languages: string[])
  {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.languages = languages;
  }
}
