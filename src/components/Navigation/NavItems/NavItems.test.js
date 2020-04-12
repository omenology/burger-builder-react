import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavItems from "./NavItems";
import NavItem from "./NavItem/NavItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems/>", () => {
  it("should reder 2 element if not auth", () => {
    const warper = shallow(<NavItems />);
    expect(warper.find(NavItem)).toHaveLength(2);
  });
});
