import { PlaceLocations, Vote } from './types';

export const FESTIVAL_DATE = ['2024-09-02', '2024-09-03'];

export const MapPinColor = {
  A: ['bg-mapPin-1', 'text-mapPin-1'],
  B: ['bg-mapPin-2', 'text-mapPin-2'],
  C: ['bg-mapPin-3', 'text-mapPin-3'],
  D: ['bg-mapPin-4', 'text-mapPin-4'],
};

export const DONGBAK_LOCATIONS: PlaceLocations = {
  // day -> 1, 2
  // section -> A,B,C,D
  // 각각의 장소는 location_id(ex. 1, 2, 총1 등)과 section에 해당하는 map에 대한 절대 좌표, rotate을 가지고 있음.
  1: {
    A: [
      {
        location: '1',
        x: 20,
        y: 95,
      },
      {
        location: '2',
        x: 40,
        y: 106,
      },
      {
        location: '3',
        x: 60,
        y: 117,
      },
      {
        location: '4',
        x: 80,
        y: 128,
      },
      {
        location: '5',
        x: 100,
        y: 139,
      },

      {
        location: '6',
        x: 120,
        y: 150,
      },
      {
        location: '7',
        x: 140,
        y: 161,
      },
      {
        location: '8',
        x: 160,
        y: 172,
      },
      {
        location: '9',
        x: 180,
        y: 183,
      },
      {
        location: '10',
        x: 200,
        y: 194,
      },
      {
        location: '11',
        x: 220,
        y: 205,
      },
      {
        location: '12',
        x: 240,
        y: 216,
      },
    ],
    B: [
      {
        location: '13',
        x: 270,
        y: 110,
      },
      {
        location: '14',
        x: 262,
        y: 126,
      },
      {
        location: '15',
        x: 254,
        y: 142,
      },
      {
        location: '16',
        x: 246,
        y: 158,
      },
      {
        location: '17',
        x: 238,
        y: 174,
      },
      {
        location: '18',
        x: 230,
        y: 190,
      },
      {
        location: '19',
        x: 222,
        y: 206,
      },
      {
        location: '20',
        x: 214,
        y: 222,
      },
      {
        location: '21',
        x: 206,
        y: 238,
      },
      {
        location: '22',
        x: 198,
        y: 254,
      },
      {
        location: '23',
        x: 190,
        y: 270,
      },
      {
        location: '24',
        x: 182,
        y: 286,
      },

      {
        location: '25',
        x: 174,
        y: 302,
      },
      {
        location: '26',
        x: 166,
        y: 318,
      },
      {
        location: '27',
        x: 158,
        y: 334,
      },
      {
        location: '28',
        x: 150,
        y: 350,
      },
      {
        location: '29',
        x: 142,
        y: 366,
      },
      {
        location: '30',
        x: 134,
        y: 382,
      },
      {
        location: '31',
        x: 210,
        y: 135,
      },
      {
        location: '32',
        x: 197,
        y: 161,
      },
      {
        location: '33',
        x: 184,
        y: 187,
      },
      {
        location: '34',
        x: 171,
        y: 213,
      },
      {
        location: '35',
        x: 158,
        y: 239,
      },
      {
        location: '36',
        x: 145,
        y: 265,
      },
    ],
    C: [
      {
        location: '37',
        x: 215,
        y: 270,
      },
      {
        location: '38',
        x: 195,
        y: 299,
      },
      {
        location: '39',
        x: 175,
        y: 328,
      },
      {
        location: '40',
        x: 155,
        y: 357,
      },
      {
        location: '41',
        x: 105,
        y: 353,
      },
      {
        location: '42',
        x: 85,
        y: 333,
      },
      {
        location: '43',
        x: 65,
        y: 313,
      },
      {
        location: '44',
        x: 45,
        y: 293,
      },
      {
        location: '45',
        x: 57,
        y: 268,
      },
      {
        location: '46',
        x: 71,
        y: 242,
      },

      {
        location: '47',
        x: 85,
        y: 216,
      },
      {
        location: '48',
        x: 99,
        y: 190,
      },
      {
        location: '49',
        x: 113,
        y: 164,
      },
      {
        location: '50',
        x: 127,
        y: 138,
      },
      {
        location: '51',
        x: 141,
        y: 112,
      },
      {
        location: '52',
        x: 155,
        y: 86,
      },
      {
        location: '53',
        x: 185,
        y: 86,
      },
      {
        location: '54',
        x: 210,
        y: 100,
      },

      {
        location: '55',
        x: 235,
        y: 114,
      },
      {
        location: '56',
        x: 260,
        y: 128,
      },
    ],
    D: [
      {
        location: '57',
        x: 5,
        y: 125,
      },
      {
        location: '58',
        x: 35,
        y: 120,
      },
      {
        location: '59',
        x: 65,
        y: 130,
      },
      {
        location: '60',
        x: 93,
        y: 145,
      },
      {
        location: '61',
        x: 220,
        y: 200,
      },
      {
        location: '62',
        x: 243,
        y: 185,
      },
      {
        location: '63',
        x: 270,
        y: 190,
      },
      {
        location: '64',
        x: 290,
        y: 210,
      },
    ],
  },
  2: {},
  3: {},
};

export const VOTE_IMAGES: Vote[] = [
  { id: 1, src: '/assets/vote/1.jpeg' },
  { id: 2, src: '/assets/vote/2.jpeg' },
  { id: 3, src: '/assets/vote/3.jpeg' },
  { id: 4, src: '/assets/vote/4.jpeg' },
  { id: 5, src: '/assets/vote/5.jpeg' },
  { id: 6, src: '/assets/vote/6.jpeg' },
  { id: 7, src: '/assets/vote/7.jpeg' },
];
