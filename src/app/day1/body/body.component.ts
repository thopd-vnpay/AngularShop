import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {Product} from '../product';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() totalItem: number;
  @Input() subtotal: number;
  @Input() promoCode: string;
  @Input() discount: number;
  @Input() products: Product[];
  title = 'angular-confirmation-dialog';

  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateProduct = new EventEmitter();
  @Output() onReloadProduct = new EventEmitter();
  @Output() onPromoCode = new EventEmitter();
  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this data?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }
  reloadProduct() {
    this.onReloadProduct.emit();
  }
  removeProduct(id: number) {
    this.onRemoveProduct.emit(id);
  }
  getPromoCode(code: string) {
    this.onPromoCode.emit(code);
  }
  updateProduct(products: Product) {
    this.onUpdateProduct.emit(products);
  }
  ngOnInit(): void {
  }
}
