import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { DataStorageService } from './../../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes:Recipe[];
  subscription: Subscription;

  constructor(private recipeService :RecipeService, private router: Router, private route: ActivatedRoute, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
    //Auto load recipes
    if(this.recipes.length === 0) {
      this.dataStorageService.fetchRecipes().subscribe();
    }
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
