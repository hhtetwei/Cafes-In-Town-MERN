import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getCafes = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/cafes`, {
    method: 'GET',
  }).then(async (res) => await res.json());
};

export const useGetAllCafes = () => {
  return useQuery({
    queryFn: () => getCafes(),
    queryKey: ['cafes'],
  });
};

const getFeedbacks = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedbacks`, {
    method: 'GET',
  }).then(async (res) => await res.json());
};

export const useGetAllFeedbacks = () => {
  return useQuery({
    queryFn: () => getFeedbacks(),
    queryKey: ['feedbacks'],
  });
};

const create = async (data) => {
  return axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/feedbacks`, data)
    .then((res) => {
      return console.log(res.data);
    });
};

export const useCreate = () => {
  return useMutation({
    mutationFn: create,
  });
};

const getCafesById = async (id) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/cafesDetails/${id}`, {
    method: 'GET',
  }).then(async (res) => await res.json());
};

export const useGetCafesDetailsById = () => {
  return useQuery({
    queryFn: () => getCafesById(),
    queryKey: ['cafes'],
  });
};
