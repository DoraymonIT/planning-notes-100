import { Component } from '@angular/core';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';

@Component({
  selector: 'app-cration-docs-process',
  standalone: true,
  imports: [Step1Component,Step2Component],
  templateUrl: './cration-docs-process.component.html',
  styleUrl: './cration-docs-process.component.css'
})
export class CrationDocsProcessComponent {

}
