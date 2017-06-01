import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './j-query.service'

@Directive({
  selector: '[model-trigger]'
})
export class ModelTriggerDirective implements OnInit {

  private element: HTMLElement;
  @Input('model-trigger') modelId: string;
  
  constructor(
    @Inject(JQ_TOKEN) private $ : any,
    private elementRef: ElementRef
  ) {
    this.element = elementRef.nativeElement;
   }

  ngOnInit(){
    this.element.addEventListener('click', event => {
      this.$(`#${this.modelId}`).modal({})
    })
  }
}
