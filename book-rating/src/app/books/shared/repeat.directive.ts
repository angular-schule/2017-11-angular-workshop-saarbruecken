import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[brRepeat]'
})
export class RepeatDirective {

  @Input() set brRepeat(amount: number) {
    this.vc.clear();

    for (let i = 0; i < amount; i++) {
      this.vc.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vc: ViewContainerRef
  ) { }

}

/* USAGE:
<div *brRepeat="5"></div>

<ng-template [brRepeat]="5">
  <div></div>
</ng-template>

*/
