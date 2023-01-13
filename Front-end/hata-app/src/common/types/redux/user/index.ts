import {IGenderType} from '../common';
export interface ISetMainUserInfoRequest {
  userName?: string;
  firstName?: string;
  secondName?: string;
  university?: string;
  faculty?: string;
  course?: number;
  bio?: string;
  birthDay?: string;
  email?: string;
  genderType?: IGenderType;
  joinedDate?: string;
}

export interface ISetUserEmailRequest {
  phoneNumber: string;
  email: string;
}
