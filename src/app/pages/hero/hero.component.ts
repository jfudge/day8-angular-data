import { Component, OnInit } from '@angular/core';
// Import useful objects from the routing library to do route stuff
import { ActivatedRoute, Params } from '@angular/router';

import Hero from '../../data/hero.interface';
import { heroes } from '../../data/heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  // Instantiate the ActivatedRoute and define it as a property of the HeroComponent
  // In Typescript to easily initialize a property, you can define it in the constructor's parameters
  // This is called self-initialization
  constructor(
    private route: ActivatedRoute // this can be retrieved by using this.route
  ) { }

  // Create a property to capture the :id in url
  id: string;

  hero: Hero;

  ngOnInit(): void {
    // Using the ngOnInit lifecycle method, we can grab paramter values from the URL when the component inits
    // We need to use the route property that was created in the constructor
    // to grab the :id param that lvies in the URL
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      // Params is an object that contains all the parameters
      // in my URL
      this.id = params.id;

      // Search for the hero in the heroes data object using params.id;
      this.hero = heroes.find((hero) => {
        // params.id is a string, which will make it not equal to hero.id
        // The best way to go about this is to convert the type of the data for consistency
        // Do not opt to use the ==
        return hero.id.toString() === params.id;
      });

      console.log(this.hero);

    });

  }

}
