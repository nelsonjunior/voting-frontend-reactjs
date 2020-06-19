import ReactDOM from 'react-dom';
import React from 'react';
import Countdown from './Countdown';
import { act } from 'react-dom/test-utils';
import moment from "moment";
import { shallow } from 'enzyme';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('check render elements', () => {
  const format = "MM-DD-YYYY H:mm:ss";
  const timeTillDate = moment().format(format);
  
  act(() => {
    ReactDOM.render(<Countdown timeTillDate={timeTillDate} timeFormat={format} />, container);
  });

  const elements = container.querySelectorAll('span');

  expect(elements[0].textContent).toBe('days');
  expect(elements[1].textContent).toBe('hours');
  expect(elements[2].textContent).toBe('mins');
  expect(elements[3].textContent).toBe('seconds');

});

it('check render values', () => {
  const format = "MM-DD-YYYY H:mm:ss";
  const timeTillDate = moment().format(format);
  
  act(() => {
    ReactDOM.render(<Countdown timeTillDate={timeTillDate} timeFormat={format} />, container);
  });

  const elements = container.querySelectorAll('h6');

  expect(elements[0].textContent).toBe('0');
  expect(elements[1].textContent).toBe('0');
  expect(elements[2].textContent).toBe('0');
  expect(elements[3].textContent).toBe('0');

});

it('can render expired', () => {

  jest.useFakeTimers();

  const format = "MM-DD-YYYY H:mm:ss";
  const timeTillDate = moment().add(3, "seconds").format(format);
  
  act(() => {
    ReactDOM.render(<Countdown timeTillDate={timeTillDate} timeFormat={format} />, container);
  });

  jest.advanceTimersByTime(5000);

  const expired = container.querySelector('h6');

  expect(expired.textContent).toBe('EXPIRED');

});

it('can render exactly timer', () => {

  jest.useFakeTimers();

  const format = "MM-DD-YYYY H:mm:ss";
  const timeTillDate = moment().add(6, "seconds").format(format);
  
  act(() => {
    ReactDOM.render(<Countdown timeTillDate={timeTillDate} timeFormat={format} />, container);
  });
  
  jest.advanceTimersByTime(2500);
  
  const elements = container.querySelectorAll('h6');
  
  expect(elements[3].textContent).toBe('3');

});


it('componentWillUnmount should be called on unmount', () => {
  
  const format = "MM-DD-YYYY H:mm:ss";
  const timeTillDate = moment().add(3, "seconds").format(format);
  
  const wrapper = shallow(<Countdown timeTillDate={timeTillDate} timeFormat={format} />);
  const componentWillUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount');

  wrapper.unmount()

  expect(componentWillUnmount).toHaveBeenCalled();
});
