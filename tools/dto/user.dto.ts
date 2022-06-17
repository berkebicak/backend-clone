import { GroupModel } from "tools/models/group.model";
import { RoleModel } from "tools/models/role.model";

export class UserCreateDto{
    name: string;
    surname: string;
    password: string;
    email: string;
    birthDate: Date;

}

export class UserLoginDto{
    email: string;
    password: string;
}

export class UserUpdateDto{
    name: string;
    surname: string;
    password: string;
    email: string;
    birthDate: Date;
    roles: RoleModel[];
    groups: GroupModel[];

}