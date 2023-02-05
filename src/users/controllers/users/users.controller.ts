import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    getUser(user: CreateUserDto){
        return this.usersService.getUser(user);
    }

    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number){
        return this.usersService.findUsersById(id);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() user: CreateUserDto){
        return this.usersService.createUser(user);
    }


}