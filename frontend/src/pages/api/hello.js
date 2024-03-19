// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { useQuery } from '@tanstack/react-query';

// export const getCafes = async () => {
// const { limit = 9, page = 1, search } = query;

// const skip = (page - 1) * limit;

// let queryString = `?limit=${limit}&skip=${skip}`;

// queryString += search ? `&search=${search}` : '';

//   return fetch(`${process.env.API_URL}/cafes`).then((res) => res.json());
// };

// export const useGetCafes = () => {
//   return useQuery({
//     queryFn: () => getCafes(),
//     queryKey: ['cafes'],
//   });
// };

export const getCafes = async () => {
  try {
    return fetch(`${process.env.API_URL}/cafes`, {
      method: 'GET',
    })
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error(`HTTP error: ${response.status}`);
        // }
        console.log({response: response.json()});

        return response.json();
      })
      .then((res) => {
        console.log({data: res.data});
        return res.data
      });
  } catch (err) {
    console.log({ err });
  }
};

export const useGetCafes = () => {
  return useQuery({
    queryFn: () => getCafes(),
    queryKey: ['cafes'],
  });
};
