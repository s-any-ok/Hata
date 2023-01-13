export enum EndpointEnum {
  //Registration
  REGISTRATION = '/api/User/register',
  AUTH = '/api/User/authenticate',

  //User
  SET_USER_MAIN_INFO = '/api/User/setMainInfo',
  GET_USER_MAIN_INFO = '/api/User/getMainInfo',

  //Announcement
  GET_ALL_ANNOUNCEMENT = '/api/Announcement/getAll',
  GET_USER_ANNOUNCEMENTS = '/api/Announcement/getUserAnnouncements',
  GET_BY_USER_ID_ANNOUNCEMENT = '/api/Announcement/getByUserId/',
  CREATE_ANNOUNCEMENT = '/api/Announcement/create',
  UPDATE_ANNOUNCEMENT = '/api/Announcement/update',
  DELETE_ANNOUNCEMENT = '/api/Announcement/delete',

  //Respond Announcement
  GET_BY_USER_ID_RESPOND_ANNOUNCEMENT = '/api/RespondAnnouncement/getByUserId',
  CREATE_RESPOND_ANNOUNCEMENT = '/api/RespondAnnouncement/create',
  UPDATE_RESPOND_ANNOUNCEMENT = '/api/RespondAnnouncement/update',
  DELETE_RESPOND_ANNOUNCEMENT = '/api/RespondAnnouncement/delete',

  //Save Announcement
  GET_BY_USER_ID_SAVE_ANNOUNCEMENT = '/api/SaveAnnouncement/getByUserId',
  CREATE_SAVE_ANNOUNCEMENT = '/api/SaveAnnouncement/create',
  UPDATE_SAVE_ANNOUNCEMENT = '/api/SaveAnnouncement/update',
  DELETE_SAVE_ANNOUNCEMENT = '/api/SaveAnnouncement/delete',
}
