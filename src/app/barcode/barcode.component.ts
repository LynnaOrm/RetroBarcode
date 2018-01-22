import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {
  array = [1,2,3,4,5,6,7,8];
  colors = this.getRandomColor;
  getRandomColor(){
    var letters = '-123456789ABCDEF'
    var color = '#';
    for (var i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() *16)];
    }
    return color;
  }



  ngOnInit() {
  }

}

  