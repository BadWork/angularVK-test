import { NgModule } from "@angular/core";
import { UserRepository } from "./user.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [UserRepository, StaticDataSource]
})
export class ModelModule { }