import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDirective } from '../numbers-only.directive';
import { SaveButtonComponent } from '../save-button/save-button.component';



@NgModule({
  declarations:[NumberDirective,SaveButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[NumberDirective,SaveButtonComponent]

})
export class SharedModuleModule { }
