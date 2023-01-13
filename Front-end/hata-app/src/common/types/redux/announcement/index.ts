export interface IAnnouncement {
  id?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
  amountOfFlats?: number;
  amountOfPeople?: number;
  priceFrom?: number;
  priceTo?: number;
  location?: ILocation;
  startDate?: Date;
  endDate?: Date;
}

export interface ILocation {
  latitude?: number;
  longitude?: number;
}
