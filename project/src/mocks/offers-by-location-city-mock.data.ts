import { ILocation } from "../types/interfaces/location.interface";
import { IPlace } from "../types/interfaces/offer.interface";

export interface IOffersByLocationCity {
  city: IPlace,
  offersByLocationCity: IOfferByCity[]
}

export interface IOfferByCity {
  id: number | string,
  previewImage: string,
  price: number,
  priceText: string,
  rating: number,
  name: string,
  type: string,
  isMark?: boolean,
  location?: ILocation
}

export const offersByLocationCityMockData: IOffersByLocationCity[] = [
  {
    city: {
      name: 'Paris',
      location: {
        lat: 48.86716815660233,
        lng: 2.350136971959074,
        zoom: 10,
      },
    },
    offersByLocationCity: [
      {
        id: 3,
        previewImage: 'img/apartment-01.jpg',
        price: 120,
        priceText: 'night',
        rating: 80,
        name: 'Paris Beautiful & luxurious apartment at great location',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 48.88770695452274,
          lng: 2.3437190226386924,
          zoom: 10,
        },
      },
      {
        id: 4,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 86,
        name: 'Paris Wood and stone place',
        type: 'Private room',
        location: {
          lat: 48.874564803154755,
          lng: 2.3698477852525723,
          zoom: 10,
        },
      },
      {
        id: 5,
        previewImage: 'img/apartment-02.jpg',
        price: 132,
        priceText: 'night',
        rating: 88,
        name: 'Paris Luvr Canal View Prinsengracht',
        type: 'Apartment',
        location: {
          lat: 48.86142505729072,
          lng: 2.337813052004469,
          zoom: 10,
        },
      },
      {
        id: 6,
        previewImage: 'img/apartment-03.jpg',
        price: 180,
        priceText: 'night',
        rating: 95,
        name: 'Paris Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 48.85286959429452,
          lng: 2.32493432874811,
          zoom: 10,
        },
      },
    ]
  },
  {
    city: {
      name: 'Cologne',
      location: {
        lat: 50.94967480524339,
        lng: 6.959749819396611,
        zoom: 10,
      },
    },
    offersByLocationCity: [
      {
        id: 3,
        previewImage: 'img/apartment-01.jpg',
        price: 120,
        priceText: 'night',
        rating: 80,
        name: 'Cologne Beautiful & luxurious apartment at great location',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 50.944941630737276,
          lng: 6.961132577517969,
          zoom: 10,
        },
      },
      {
        id: 7,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 80,
        name: 'Cologne Wood and stone place',
        type: 'Private room',
        location: {
          lat: 50.928559784290265,
          lng:  6.959048526711098,
          zoom: 10,
        },
      },
    ]
  },
  {
    city: {
      name: 'Brussels',
      location: {
        lat: 50.85148958674652,
        lng: 4.352062103985549,
        zoom: 10,
      },
    },
    offersByLocationCity: [
      {
        id: 3,
        previewImage: 'img/apartment-01.jpg',
        price: 120,
        priceText: 'night',
        rating: 80,
        name: 'Brussels Beautiful & luxurious apartment at great location',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 50.869679322034656,
          lng: 4.332906116103354,
          zoom: 10,
        },
      },
      {
        id: 4,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 86,
        name: 'Brussels Wood and stone place',
        type: 'Private room',
        location: {
          lat: 50.82825359915811,
          lng: 4.32176708072418,
          zoom: 10,
        },
      },
      {
        id: 5,
        previewImage: 'img/apartment-02.jpg',
        price: 132,
        priceText: 'night',
        rating: 88,
        name: 'Brussels Canal View Prinsengracht',
        type: 'Apartment',
        location: {
          lat: 50.849173302183914,
          lng: 4.358325654476796,
          zoom: 10,
        },
      },
      {
        id: 6,
        previewImage: 'img/apartment-03.jpg',
        price: 180,
        priceText: 'night',
        rating: 95,
        name: 'Brussels Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 50.8081783407903,
          lng: 4.351253017715926,
          zoom: 10,
        },
      },
      {
        id: 7,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 80,
        name: 'Brussels Wood and stone place',
        type: 'Private room',
        location: {
          lat: 50.83851863851111,
          lng: 4.426419638139431,
          zoom: 10,
        },
      },
    ]
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        lat: 52.37372536363127,
        lng: 4.8976271783362835,
        zoom: 10,
      },
    },
    offersByLocationCity: [
      {
        id: 3,
        previewImage: 'img/apartment-01.jpg',
        price: 120,
        priceText: 'night',
        rating: 80,
        name: 'Amsterdam Beautiful & luxurious apartment at great location',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 52.3909553943508,
          lng: 4.85309666406198,
          zoom: 10,
        },
      },
      {
        id: 4,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 86,
        name: 'Amsterdam Wood and stone place',
        type: 'Private room',
        location: {
          lat: 52.369553943508,
          lng: 4.85309666406198,
          zoom: 10,
        },
      },
      {
        id: 5,
        previewImage: 'img/apartment-02.jpg',
        price: 132,
        priceText: 'night',
        rating: 88,
        name: 'Amsterdam Canal View Prinsengracht',
        type: 'Apartment',
        location: {
          lat: 52.3909553943508,
          lng: 4.929309666406198,
          zoom: 10,
        },
      },
      {
        id: 6,
        previewImage: 'img/apartment-03.jpg',
        price: 180,
        priceText: 'night',
        rating: 95,
        name: 'Amsterdam Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 52.3809553943508,
          lng: 4.939309666406198,
          zoom: 10,
        },
      },
      {
        id: 7,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 80,
        name: 'Amsterdam Wood and stone place',
        type: 'Private room',
        location: {
          lat: 52.369553943508,
          lng: 4.85309666406198,
          zoom: 10,
        },
      },
    ]
  },
  {
    city: {
      name: 'Hamburg',
      location: {
        lat: 53.55094657531107,
        lng: 9.988176098926454,
        zoom: 10,
      },
    },
    offersByLocationCity: [
      {
        id: 3,
        previewImage: 'img/apartment-01.jpg',
        price: 120,
        priceText: 'night',
        rating: 80,
        name: 'Hamburg Beautiful & luxurious apartment at great location',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 53.55511950353356,
          lng:  9.976032262653336,
          zoom: 10,
        },
      },
      {
        id: 4,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 86,
        name: 'Hamburg Wood and stone place',
        type: 'Private room',
        location: {
          lat: 53.540270505592034,
          lng: 9.962286905446742,
          zoom: 10,
        },
      },
      {
        id: 5,
        previewImage: 'img/apartment-02.jpg',
        price: 132,
        priceText: 'night',
        rating: 88,
        name: 'Hamburg Canal View Prinsengracht',
        type: 'Apartment',
        location: {
          lat: 53.56320318798266,
          lng: 9.981828534369685,
          zoom: 10,
        },
      },
      {
        id: 6,
        previewImage: 'img/apartment-03.jpg',
        price: 180,
        priceText: 'night',
        rating: 95,
        name: 'Hamburg Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 53.573478441486714,
          lng: 9.970257076820705,
          zoom: 10,
        },
      },
      {
        id: 7,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 80,
        name: 'Hamburg Wood and stone place',
        type: 'Private room',
        location: {
          lat: 53.552345709788355,
          lng: 10.012364641118863,
          zoom: 10,
        },
      },
    ]
  },
  {
    city: {
      name: 'Dusseldorf',
      location: {
        lat: 51.242192645685066,
        lng: 6.780022457362921,
        zoom: 10,
      },
    },
    offersByLocationCity: [
      {
        id: 3,
        previewImage: 'img/apartment-01.jpg',
        price: 120,
        priceText: 'night',
        rating: 80,
        name: 'Dusseldorf Beautiful & luxurious apartment at great location',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 51.236232973444395,
          lng: 6.790412276341721,
          zoom: 10,
        },
      },
      {
        id: 4,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 86,
        name: 'Dusseldorf Wood and stone place',
        type: 'Private room',
        location: {
          lat: 51.24117245399708,
          lng: 6.73877193306319,
          zoom: 10,
        },
      },
      {
        id: 5,
        previewImage: 'img/apartment-02.jpg',
        price: 132,
        priceText: 'night',
        rating: 88,
        name: 'Dusseldorf Canal View Prinsengracht',
        type: 'Apartment',
        location: {
          lat: 51.18926901839527,
          lng: 6.742318325523395,
          zoom: 10,
        },
      },
      {
        id: 6,
        previewImage: 'img/apartment-03.jpg',
        price: 180,
        priceText: 'night',
        rating: 95,
        name: 'Dusseldorf Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        isMark: true,
        location: {
          lat: 51.30276182126608,
          lng: 6.698739407114122,
          zoom: 10,
        },
      },
      {
        id: 7,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 80,
        name: 'Dusseldorf Wood and stone place',
        type: 'Private room',
        location: {
          lat: 51.26342873773025,
          lng: 6.847000825096488,
          zoom: 10,
        },
      },
      {
        id: 8,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 80,
        name: 'Dusseldorf Wood and stone place',
        type: 'Private room',
        location: {
          lat: 51.155243736208746,
          lng: 6.808874308950685,
          zoom: 10,
        },
      },
      {
        id: 9,
        previewImage: 'img/room.jpg',
        price: 80,
        priceText: 'night',
        rating: 80,
        name: 'Dusseldorf Wood and stone place',
        type: 'Private room',
        location: {
          lat: 51.22570101722618,
          lng: 6.782138602678636,
          zoom: 10,
        },
      },
    ]
  },
];
