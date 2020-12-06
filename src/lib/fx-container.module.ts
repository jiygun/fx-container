import { NgModule } from '@angular/core';
import { FxContainerComponent } from './components/fx-container.component';
import { ContainerDirective } from './directives/container.directive';



@NgModule({
  declarations: [
    FxContainerComponent,
    ContainerDirective
  ],
  imports: [
  ],
  exports: [
    FxContainerComponent,
    ContainerDirective
  ]
})
export class FxContainerModule { }
