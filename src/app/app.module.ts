import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BurgersComponent } from './burgers/burgers.component';
import { RollsComponent } from './rolls/rolls.component';
import { SteaksComponent } from './steaks/steaks.component';
import { NoodlesComponent } from './noodles/noodles.component';
import { RollDetailComponent } from './rolls/roll-detail/roll-detail.component';
import { RollListComponent } from './rolls/roll-list/roll-list.component';
import { RollItemComponent } from './rolls/roll-list/roll-item/roll-item.component';
import { BurgersDetailComponent } from './burgers/burgers-detail/burgers-detail.component';
import { BurgersListComponent } from './burgers/burgers-list/burgers-list.component';
import { BurgersItemComponent } from './burgers/burgers-list/burgers-item/burgers-item.component';
import { NoodlesDetailComponent } from './noodles/noodles-detail/noodles-detail.component';
import { NoodlesListComponent } from './noodles/noodles-list/noodles-list.component';
import { NoodlesItemComponent } from './noodles/noodles-list/noodles-item/noodles-item.component';
import { SteaksDetailComponent } from './steaks/steaks-detail/steaks-detail.component';
import { SteaksListComponent } from './steaks/steaks-list/steaks-list.component';
import { SteaksItemComponent } from './steaks/steaks-list/steaks-item/steaks-item.component';
import { KhinkaliesComponent } from './khinkalies/khinkalies.component';
import { KhinkaliesDetailComponent } from './khinkalies/khinkalies-detail/khinkalies-detail.component';
import { KhinkaliesListComponent } from './khinkalies/khinkalies-list/khinkalies-list.component';
import { KhinkaliesItemComponent } from './khinkalies/khinkalies-list/khinkalies-item/khinkalies-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BurgersComponent,
    RollsComponent,
    SteaksComponent,
    NoodlesComponent,
    RollDetailComponent,
    RollListComponent,
    RollItemComponent,
    BurgersDetailComponent,
    BurgersListComponent,
    BurgersItemComponent,
    NoodlesDetailComponent,
    NoodlesListComponent,
    NoodlesItemComponent,
    SteaksDetailComponent,
    SteaksListComponent,
    SteaksItemComponent,
    KhinkaliesComponent,
    KhinkaliesDetailComponent,
    KhinkaliesListComponent,
    KhinkaliesItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
