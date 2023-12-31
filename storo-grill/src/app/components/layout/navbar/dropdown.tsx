import margaritha from '../../../../../public/meny/pizza-margaritha.jpg';
import burger from '../../../../../public/meny/burger.png';
import calzone from '../../../../../public/meny/calzone.png';
import barnemeny from '../../../../../public/meny/barnemeny.png';
import grillretter from '../../../../../public/meny/kebab-tallerken2.png';
import drikke from '../../../../../public/meny/pepsi-max.png';

export const products = [
  {
    name: 'Pizza',
    icon: margaritha,
    description: 'Trykk for å se pizza-meny',
    href: '#pizza',
  },
  {
    name: 'Burgere',
    icon: burger,
    description: 'Trykk for å se burger-meny',
    href: '#hamburger',
  },
  {
    name: 'Calzoner',
    icon: calzone,
    description: 'Trykk for å se calzone-meny',
    href: '#calzone',
  },
  {
    name: 'Grillretter',
    icon: grillretter,
    description: 'Trykk for å se Grillretter-meny',
    href: '#grillretter',
  },
  {
    name: 'Barnemeny',
    icon: barnemeny,
    description: 'Trykk for å se barnemeny-meny',
    href: '#barnemeny',
  },
  {
    name: 'Drikke',
    description: 'Trykk for å se drikke-meny',
    icon: drikke,
    href: '#drikke',
  },
];
