import react from 'react';
import axios from 'axios';
import { ICustomerInfo } from '../../models/ICustomerInfo';

jest.mock('axios');

const mockAxios = axios as jest.Mocked<typeof axios>;

const baseUrl: string = 'https://thedudes-restaurant.herokuapp.com';

const getAvailability = async () => {
  try {
    const res = await axios.get(baseUrl + '/availability');
    const data: ICustomerInfo[] = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

test('should give a response', async () => {
  const mockData: ICustomerInfo[] = [
    {
      _id: 0,
      firstName: 'Bobo',
      lastName: 'Leif',
      email: 'leif@gmail.com',
      mobile: 123456789,
      information: 'none',
      guests: 2,
      seating: 12,
      date: '2021-09-30',
    },
    {
      _id: 1,
      firstName: 'Maria',
      lastName: 'Sevensson',
      email: 'leif@gmail.com',
      mobile: 123456789,
      information: 'none',
      guests: 2,
      seating: 12,
      date: '2021-09-30',
    },
  ];

  mockAxios.get.mockResolvedValue({
    data: mockData,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  });

  expect(axios.get).not.toHaveBeenCalled();
  const data = await getAvailability();
  expect(axios.get).toHaveBeenCalled();
  expect(data).toEqual(mockData);
});
