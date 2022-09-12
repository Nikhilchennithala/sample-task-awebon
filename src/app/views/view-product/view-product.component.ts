import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productDetails: any;
  id: any;

  constructor(private activatedroute: ActivatedRoute,
              private productService: ProductServiceService) { 
                this.activatedroute.queryParamMap.subscribe(
                  (data) => {
                    console.log(data)
                    this.id = Number(data['params'].id);
                  }
                );
                console.log(this.id)
              }

  ngOnInit() {
    this.getProductDetails(this.id);
  }
  getProductDetails(id) {
    this.productService.getAllProducts().subscribe(
      data => this.hadnlersucces(data, id),
      error => this.handlererror(error)
    );
  }
  hadnlersucces(data, id) {
    this.productDetails = this.filterData(data.products, id);
    console.log(this.productDetails);
  }
  handlererror(error) {
  }
  filterData(data, id): any {
    return data.find(item => item.id === id)
  }

}
