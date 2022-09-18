import { Component, DoCheck, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rating } from 'src/app/interface/rating';
import { Task } from 'src/app/interface/task';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit, DoCheck {
  isMenu = true;
  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('wwwwwwwww', event);
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    if (this.innerWidth < 540) {
      this.isMenu = false;
    }
  }
  products: any;
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: '0% - 10%', completed: false, color: 'primary'},
      {name: '11% - 20%', completed: false, color: 'primary'},
      {name: '21% - 30%', completed: false, color: 'primary'},
      {name: '31% - 40%', completed: false, color: 'primary'},
      {name: '41% - 50%', completed: false, color: 'primary'},
      {name: '51% - 60%', completed: false, color: 'primary'}
    ],
  };
  rating: Rating = {
    name: 'Indeterminate',
    color: 'primary',
    subRating: [
      {name: '5', color: 'primary'},
      {name: '4', color: 'primary'},
      {name: '3', color: 'primary'},
      {name: '2', color: 'primary'},
      {name: '1', color: 'primary'},
    ],
  };
  sortTypes = [{name: 'Sort', value: 1}, {name: 'Price(High to Low)',value: 1}, {name: 'Price(Low to  High)',value: 1}, {name: 'Offers(High to Low)',value: 1}, {name: 'Offers(Low to  High)',value: 1}];

  @Input() value:string;
  productItems = [];

  constructor(private productService: ProductServiceService,
              private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }
  ngDoCheck(){
    this.refresh(this.value);
  }
  getProducts() {
    this.productService.getAllProducts().subscribe(
      data => this.hadnlersucces(data),
      error => this.handlererror(error)
    );
  }
  hadnlersucces(data) {
    this.products = data.products;
    console.log(this.products);
  }
  handlererror(error) {
  }
  refresh(value): void {
    this.productItems = [];
    this.products.forEach(element => {
      if(element.category.search(value) != -1
         || element.brand.search(value) != -1) {
          this.productItems.push(element)
        }
    });
  }
  openProduct(item): void {
    console.log(item);
    console.log(item.id);
    this.router.navigate(['/view-product'], {queryParams: {id: item.id}});
  }
  menu(): void {
    this.isMenu = !this.isMenu;
  }
}
