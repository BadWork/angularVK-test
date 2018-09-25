import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Observable, of } from 'rxjs';

@Injectable()
export class StaticDataSource {
    private users: User[] = [
        new User(1, "Валера", "Петров", "Минск"),
        new User(2, "Иван", "Сидоров", "Москва"),
        new User(3, "Петр", "Пяточкин", "Ростов"),
        new User(4, "Костя", "Серебренников", "Москва"),
        new User(5, "Саша", "Кислов", "Москва"),
        new User(6, "Валя", "Гашарина", "Москва"),
        new User(7, "Илья", "Ростиков", "Москва"),
        new User(8, "Ваня", "Иванченко", "Москва"),
        new User(9, "Костя", "Стервятин", "Москва"),
        new User(10, "Гриша", "Сашкин", "Москва"),
    ];

    getUsers(): Observable<User[]> {
        return of(this.users);
    }
}