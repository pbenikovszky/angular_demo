import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  _listFilter: string;

  pageTitle: string = 'Products';
  errorMessage: string;

  products: IProduct[];
  filteredProducts: IProduct[];

  // Getter & Setter
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.filterProducts(this.listFilter) : this.products;
  }

  constructor(private productService: ProductService) { }

  filterProducts(filterBy: string): IProduct[] {

    return this.products.filter((product: IProduct) => {
      if (product.description) {
        return product.description.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1
      }
      return false;
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products.data;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

  }

}
