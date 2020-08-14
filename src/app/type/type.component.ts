import { Component, OnInit } from '@angular/core';
import {ProductService} from "../_service/product.service";
import {IType} from "../_models/type";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  types: IType[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe(types => this.types = types);
  }

}
