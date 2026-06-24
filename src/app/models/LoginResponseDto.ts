import { IUser } from "./user_interface";

export interface LoginResponseDto{
    isSuccess : boolean;
    user:IUser;
    token :string;
}

