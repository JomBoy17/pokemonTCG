import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pokemontcg.io/v2/",
  }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: ({ search = "", type = "", page = 1 }) => {
        let q = [];

        if (search) q.push(`name:${search}`);
        if (type) q.push(`types:${type}`);

        const query = q.length ? q.join(" ") : "";

        return `cards?q=${query}&page=${page}&pageSize=30`;
      },
    }),
  }),
});

export const { useGetCardsQuery } = pokemonApi;