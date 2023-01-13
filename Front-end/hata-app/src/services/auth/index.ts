import {EndpointEnum} from '../../common/constants/application';
import {IRegistration, ILogin} from '../../common/types';
import {$axios_base} from '../../helpers';

export class AuthService {
  static async login({userName, password}: ILogin) {
    return $axios_base.post(EndpointEnum.AUTH, {userName, password});
  }
  static async register({userName, password}: IRegistration) {
    return $axios_base.post(EndpointEnum.REGISTRATION, {userName, password});
  }
}
