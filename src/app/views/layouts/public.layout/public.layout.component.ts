import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-public.layout',
  templateUrl: './public.layout.component.html',
  styleUrls: ['./public.layout.component.css']
})
export class PublicLayoutComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#eeeeee';
  }

  ngOnInit(): void {
  }

}
