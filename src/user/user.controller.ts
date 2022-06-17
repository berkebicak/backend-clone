import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreateDto } from 'tools/dto/user.dto';
import { UserModel } from 'tools/models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService) {}

    @Post()
    createUser(@Body() body: UserCreateDto){
        return this.userService.createUser(body);

    }
    
    @Get()
    getAllUser() : UserModel[]{
        return this.userService.getallUser();
    }

    @Get(":id")
    getUser(@Param() params): UserModel{
        return this.userService.getUserById(params.id);
    }
}
