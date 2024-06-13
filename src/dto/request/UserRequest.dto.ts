export class UserDto {
    id: number;
    name: string;
    email: string;
    age: number;
    role: string;

    constructor(id: number, name: string, email: string, age: number, role: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.role = role;
    }
}
