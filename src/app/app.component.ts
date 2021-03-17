import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password='';
  length=0;
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;

  onLengthchange(value:string){
    const parsedV=parseInt(value);
    
    if(!isNaN(parsedV)){
      this.length=parsedV;
    }
  }

  onLetterchange(){
    this.includeLetters=!this.includeLetters;
  }

  onNumberchange(){
    this.includeNumbers=!this.includeNumbers;
  }

  onSymbolchange(){
    this.includeSymbols=!this.includeSymbols;
  }

  onButtonClick(){
   const numbers='1234567890';
   const letters='abcdefghijklmnopqrstuvwxyz';
   const symbols='!@"#$%&/()=?*';
   
   let validChars='';

   if(this.includeLetters){
     validChars+=letters;
    }
   if(this.includeNumbers){
    validChars+=numbers;
    }
  if(this.includeSymbols){
    validChars+=symbols;
    }
  let generatePassword='';
  for(let i=1;i<=this.length;i++){
        const index=Math.floor(Math.random()*validChars.length);
        generatePassword+=validChars[index];
    }
    this.password=generatePassword;
  }
}
