import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'tools/dto/user.dto';
import { UserModel } from 'tools/models/user.model';

const result: UserModel[] = [];

@Injectable()
export class UserService {
 
    getallUser() : UserModel[]{
        if (result.length === 0 ) {
            this.creatingMockUser({
                id: "123",
                email:"berke@bicak",
                name:"Berke",
                surname: "Bicak",
                password:"12345"
            });
        }
        return result;
    }

    getUserById(id) : any{
        const user = result.find(data=>data.id == id);

        if (!user) {
            return 'user does not exist';
        }
        else{
            return user;
        }
    }

    createUser(body:UserCreateDto){
        const isExist = result.find(res=>{res.email === body.email;});
        if (isExist) {
            return isExist;
        }
        else{
            this.creatingMockUser(body);
            return result.slice(result.length-1 , result.length);
        }
    }

    private creatingMockUser(data:any) {
        const user: UserModel = new UserModel();

        user.id = Math.floor(Math.random()*60 + 1).toString();
        user.email = data.email;
        user.name = data.name;
        user.surname = data.surname;
        user.password = data.password;

        result.push(user);
    }
}
