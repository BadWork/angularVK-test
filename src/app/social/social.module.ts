import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { SocialComponent } from "./social.component";
import { CounterDirective } from "./counter.directive"

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [SocialComponent, CounterDirective],
    exports: [SocialComponent]
})
export class SocialModule { }