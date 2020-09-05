import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  item: Item = new Item();

  constructor(private itemService: ItemService,
    private router: Router) { }

  ngOnInit() {
  }

  newItem(): void {
    this.item = new Item();
  }

  save() {
    this.itemService
    .createItem(this.item).subscribe(data => {
      console.log(data)
      this.item = new Item();
      this.gotoList();
    }, 
    error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/items']);
  }
}