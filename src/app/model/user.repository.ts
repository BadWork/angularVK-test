import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class UserRepository {
    private users: User[] = [];
    private cities: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getUsers().subscribe(data => {
            this.users = data;
            this.cities = data.map(p => p.city)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getUsers(city: string = null): User[] {
        return this.users
            .filter(p => city == null || city == p.city)
    }

    getUser(id: number): User {
        return this.users.find(p => p.id == id);
    }

    getCities(): string[] {
        return this.cities;
    }
}