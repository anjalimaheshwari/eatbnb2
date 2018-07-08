import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IEatbnb } from './eatbnbs';
import { EatbnbService } from './eatbnb.service';

@Component({
  selector: 'app-eatbnb',
  templateUrl: './eatbnb.component.html',
  styleUrls: ['./eatbnb.component.css']
})
export class EatbnbComponent implements OnInit{
  imageWidth: number= 225;
  imageHeight: number = 200;
  imageMargin: number = 2;
  errorMessage: string;
  products: IEatbnb[] = [];
  
  constructor(private _eatbnbService: EatbnbService) { }

  ngOnInit(): void {
    this.products = this._eatbnbService.getProducts();
  }
}
