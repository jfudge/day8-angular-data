import { Component, OnInit } from '@angular/core';

import Hero from '../../data/hero.interface';
import { heroes } from '../../data/heroes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  heroes: Hero[] = heroes;

  ngOnInit(): void {
  }

}
