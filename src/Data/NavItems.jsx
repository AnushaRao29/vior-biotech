import { Texts } from '../../src/constants/Texts';

export const NavItems = Texts.header.map(data => ({
  name: data.menu,
  submenu: data.submenus?.map(sub => ({
    name: sub.name,
    path: sub.path,
  })),
  path: data.path,
}));
