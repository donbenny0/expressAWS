import * as fs from 'fs';
import * as path from 'path';
import { UserDto } from '../dto/request/UserRequest.dto';

export class Users {
    private users: UserDto[] = [];

    constructor() {
        this.loadUsers();
    }

    private loadUsers() {
        const filePath = path.resolve(__dirname, '../data/userData.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        const parsedData = JSON.parse(data);
        this.users = parsedData.map((user: any) => new UserDto(user.id, user.name, user.email, user.age, user.role));
    }

    public getAllUsers(): UserDto[] {
        return this.users;
    }

    public getUserById(id: number): UserDto | undefined {
        return this.users.find(user => user.id === id);
    }

    public getUsersByRole(role: string): UserDto[] {
        return this.users.filter(user => user.role === role);
    }
}

