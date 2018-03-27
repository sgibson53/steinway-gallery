import { Component, OnInit } from '@angular/core';
import { BRANDS } from '../shared/constants/brands.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public brands;
  public selectedCategory = "All Brands";

  constructor() { }

  ngOnInit() {
    this.brands = Object.values(BRANDS);
  }

  public changeCategory(newCategory) {
    this.selectedCategory = newCategory;
  }

}
