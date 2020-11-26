import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product details'
  errorMessage: string;
  product: IProduct;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });

  }

}
