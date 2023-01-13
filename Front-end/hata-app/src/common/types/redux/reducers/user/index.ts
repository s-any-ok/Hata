import {IGenderType} from '../../common';
export interface IUserMainInfo {
  userName?: string;
  university?: string;
  faculty?: string;
  course?: number;
  bio?: string;
  birthDay?: string;
  email?: string;
  genderType?: IGenderType;
  joinedDate?: string;
}
