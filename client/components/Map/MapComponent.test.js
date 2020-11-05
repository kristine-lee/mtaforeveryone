import React, { useEffect } from "react";
import { shallow, mount } from "enzyme";
import MapComponent from './MapComponent'

it("renders correctly", () => {
  const wrapper = mount(<MapComponent />);
  expect(wrapper.state("error")).toEqual(null);
});


// describe ("User Marker", () => {
//   const mockUserLocation = {
//     longitude: -73.9707,
//     latitude: 40.5755,
//   }

//const mockUseEffect = () => {
//   useEffect.mockImplementationOnce(f => f());
// };

//   beforeEach(() => {
//     useEffect = jest.spyOn(React, "useEffect")

//     props = {
//       fetchUserLocation: jest.fn().mockResolvedValue(mockUserLocation),
//     };

//    mockUseEffect();

//     wrapper = shallow(<MapComponent {...props} />);
//   });


// })
// it("renders the user location with a marker on the map", () => {
//   const wrapper = mount(<MapComponent />)
// })
