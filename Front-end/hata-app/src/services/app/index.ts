import {EndpointEnum} from '../../common/constants/application';
import {
  IAnnouncement,
  ISetMainUserInfoRequest,
  ISetUserEmailRequest,
} from '../../common/types';
import {$axios_auth} from '../../helpers';

export class AppService {
  //User
  static async setUserMainInfo(data: ISetMainUserInfoRequest) {
    return $axios_auth.post(EndpointEnum.SET_USER_MAIN_INFO, {...data});
  }
  static async getUserMainInfo() {
    return $axios_auth.get(EndpointEnum.GET_USER_MAIN_INFO);
  }
  static async setEmail({email}: ISetUserEmailRequest) {
    return $axios_auth.put(EndpointEnum.SET_USER_MAIN_INFO, {
      email,
    });
  }
  //Announcement
  static async getAllAnnouncements() {
    return $axios_auth.get(EndpointEnum.GET_ALL_ANNOUNCEMENT);
  }
  static async getUserAnnouncements() {
    return $axios_auth.get(EndpointEnum.GET_USER_ANNOUNCEMENTS);
  }
  static async getAnnouncementsByUserId(id: number) {
    return $axios_auth.get(EndpointEnum.GET_BY_USER_ID_ANNOUNCEMENT + id);
  }
  static async createAnnouncement(announcement: IAnnouncement) {
    return $axios_auth.post(EndpointEnum.CREATE_ANNOUNCEMENT, announcement);
  }
  static async updateAnnouncement(announcement: IAnnouncement) {
    return $axios_auth.post(EndpointEnum.UPDATE_ANNOUNCEMENT, announcement);
  }
  static async deleteAnnouncement(announcement: IAnnouncement) {
    return $axios_auth.post(EndpointEnum.DELETE_ANNOUNCEMENT, announcement);
  }
}
