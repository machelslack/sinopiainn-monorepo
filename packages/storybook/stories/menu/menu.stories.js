import React from "react";
import { MenuBar } from "@sinopiainn/components/lib/menu";
import { MenuItem } from "@sinopiainn/components/lib/menu";
import { storiesOf } from "@storybook/react";


const menutItesm = ['Home', 'Rooms', 'Blog', 'Shop'];

storiesOf("MENU", module)
  .add("MenuBar", () => (
    <MenuBar>
      {
        menutItesm.map((item) => <MenuItem label={item} />)
      }
    </MenuBar>
  ));
