import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { QueryModel } from '../models/query.model';
import { SelectorModel } from "../models/selector.model";
import { MediaQueries } from "../models/media-queries";

const selector = `[container]`;

@Directive({
  selector: selector,
  host: {'(window:resize)': 'onResize()'}
})
export class ContainerDirective implements OnInit,OnChanges {

  @Input() containerXs:string;
  @Input() containerSm:string;
  @Input() containerMd:string;
  @Input() containerLg:string;
  @Input() containerXl:string;

  private _selector:SelectorModel;

  constructor(private elementRef: ElementRef) {
    this._selector=MediaQueries.container();
  }
  ngOnInit(): void {
    this.setMaxWithProperty();
  }
  ngOnChanges(): void {
    if(this.containerXs) this._selector.mediaQueries[0].queryStyleProperty=this.containerXs;
    if(this.containerSm) this._selector.mediaQueries[1].queryStyleProperty=this.containerSm;
    if(this.containerMd) this._selector.mediaQueries[2].queryStyleProperty=this.containerMd;
    if(this.containerLg) this._selector.mediaQueries[3].queryStyleProperty=this.containerLg;
    if(this.containerXl) this._selector.mediaQueries[4].queryStyleProperty=this.containerXl;
    this.setMaxWithProperty();
  }
  private setMaxWithProperty() {
    this._selector.mediaQueries.map((queryModel:QueryModel)=>{
      if(window.matchMedia(queryModel.queryMedia).matches){
        this.elementRef.nativeElement.style.maxWidth=queryModel.queryStyleProperty;
      }
    });
  }
  onResize(){
    this.setMaxWithProperty();
  }
}
