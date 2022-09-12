import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  products: any;

  constructor(private productService: ProductServiceService,
              private router: Router) { }

  ngOnInit() {
    this.getProducts();
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
  openProduct(item): void {
    console.log(item);
    console.log(item.id);
    this.router.navigate(['/view-product'], {queryParams: {id: item.id}});
  }

}
