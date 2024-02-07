import { Component } from '@angular/core';
import {TranslateService} from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  originalText: string='';
  translatedText: string='';

  constructor(private translateService: TranslateService){}

  handleTranslate():void{
    this.translateService.translate(this.originalText).subscribe(
      (response: any) => {
        this.translatedText = response.translated_text;
      },
      (error: any) => {
        console.error('Error translating text:', error);
      }
    );
  }
}
