import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { UserService } from 'src/services/user.service';
import { recipe } from 'src/classes/recipe';
import { user } from 'src/classes/user';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(
    public RecipeService: RecipeService,
    public UserService: UserService
  ) {}
  lRecipe: Array<recipe> | any = new Array<recipe>();
  lUsers: Array<user> = new Array<user>();
  isOnEdit: boolean = false;
  recipe: recipe = new recipe();

  edit(id: number | undefined) {
    this.isOnEdit = true;
    let clicked = this.lRecipe.find((r: any) => r.RecipeId == id);
    this.recipe.RecipeName = clicked?.RecipeName;
    this.recipe.Level = clicked?.Level;
    this.recipe.Pic = clicked?.Pic;
    this.recipe.Time = clicked?.Time;
    this.recipe.UserId = clicked?.UserId;
    this.recipe.RecipeId = id;
  }
  ngOnInit(): void {
    this.getAllRecipes();
    this.getAllUsers();
  }
  getAllUsers() {
    this.UserService.GetAll().subscribe(
      (data) => {
        this.lUsers = data;
      },
      (err) => {
        alert("couldn't get the users");
      }
    );
  }
  getAllRecipes() {
    this.RecipeService.GetAll().subscribe(
      (data) => {
        this.lRecipe = data;
      },
      (err) => {
        alert('error');
      }
    );
  }
  printTo() {
    console.log(this.recipe.RecipeName);
  }
  del(id: number | any) {
    this.RecipeService.delete(id).subscribe(
      (data) => {
        this.lRecipe = data;
      },
      (err) => {
        alert('error when deleting');
      }
    );
  }
  /*
  "RecipeId": 0,
  "RecipeName": "string",
  "Pic": "string",
  "Level": "string",
  "Time": 0,
  "UserId": 0
}*/

  add() {
    if (!this.isOnEdit)
      this.RecipeService.add(this.recipe).subscribe(
        (data) => {
          this.lRecipe = this.lRecipe.concat(data);
        },
        (err) => {}
      );
    else
      this.RecipeService.edit(this.recipe.RecipeId, this.recipe).subscribe(
        (data) => {
          this.getAllRecipes();
        },
        (err) => {
          alert('something went worng...');
        }
      );
    this.recipe = new recipe();
    this.isOnEdit = false;
  }
}
