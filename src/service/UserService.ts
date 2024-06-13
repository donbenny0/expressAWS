import { Users } from '../repository/Users';
import { UserDto } from '../dto/request/UserRequest.dto';

export class UserService {
    private users: Users;

    constructor() {
        this.users = new Users();
    }

    public getAllUsers(): UserDto[] {
        return this.users.getAllUsers();
    }

    public getUserById(id: number): UserDto | undefined {
        return this.users.getUserById(id);
    }

    public getUsersByRole(role: string): UserDto[] {
        return this.users.getUsersByRole(role);
    }
}
