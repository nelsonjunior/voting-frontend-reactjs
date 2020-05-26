import { render } from '@testing-library/react';
import React from 'react';
import Countdown from './Countdown';


test('renders MuiSkeleton', () => {
  const rendered  = render(<Countdown timeTillDate="01-01-2020 1:00:00" timeFormat="MM-DD-YYYY h:mm:ss" />);
  const div = rendered.container.querySelector("span");
  expect(div.className).toBe("MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse");
});

test('renders MuiSkeleton with', () => {
  const rendered  = render(<Countdown timeTillDate="01-01-2020 1:00:00" timeFormat="MM-DD-YYYY h:mm:ss" />);
  const div = rendered.container.querySelector("span");
  expect(div.style.height).toBe("50px");
});

// test('renders EXPIRED', async () => {
//   const rendered = mount(<Countdown timeTillDate="01-01-2020 1:00:00" timeFormat="MM-DD-YYYY h:mm:ss" />);
//   return Promise
//       .resolve(rendered)
//       .then(() => rendered.update())
//       .then(() => {
//         expect(rendered.text()).toContain("EXPIRED");
//       });
// });
