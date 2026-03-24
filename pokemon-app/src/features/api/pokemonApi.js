import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pokemontcg.io/v2/',
  }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: ({ search = "", type = "", page = 1 }) => {
        let query = [];

        if (search) query.push(`name:${search}`);
        if (type) query.push(`types:${type}`);

        const finalQuery = query.join(" ");

        return `cards?q=${finalQuery}&page=${page}&pageSize=30`;
      },
    }),
  }),
});

export const { useGetCardsQuery } = pokemonApi;