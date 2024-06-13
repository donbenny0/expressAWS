import { Request, Response } from 'express';
import { UserService } from '../service/UserService';
import { UserDto } from '../dto/request/UserRequest.dto';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public getAllUsers(req: Request, res: Response): void {
        try {
            const users = this.userService.getAllUsers();
            console.log(users);
            
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }

    public getUserById(req: Request, res: Response): void {
        const userId = parseInt(req.params.id);
        try {
            const user = this.userService.getUserById(userId);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }

    // public createUser(req: Request, res: Response): void {
    //     const { id, name, email, age, role } = req.body;
    //     const userDto = new UserDto(id, name, email, age, role);
    //     try {
    //         const createdUser = this.userService.createUser(userDto);
    //         res.status(201).json(createdUser);
    //     } catch (err) {
    //         res.status(500).json({ message: err });
    //     }
    // }
}
