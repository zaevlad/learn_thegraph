import React from 'react';

/*
Axios version of query
(uncomment import for query use)

import axios from 'axios';
*/

/*
urql example
(uncomment import for query use)

import { createClient } from 'urql';
*/

/*
apollo example
(uncomment import for query use)*/

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


function App() {

    /*apollo code example of query */

    const main =  async () => {
        const APIURL ="https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";
        const tokensQuery = 'query{pairs(first: 10 where: {reserveUSD_gt: "1000000", volumeUSD_gt: "50000"} orderBy: reserveUSD orderDirection: desc) {id token0 {id symbol} token1 {id symbol} reserveUSD volumeUSD }}';
        const client = new ApolloClient({
            uri: APIURL,
            cache: new InMemoryCache(),
        })
        client.query({
            query: gql(tokensQuery),
        })
        .then((data) => console.log('Subgraph data: ', data.data.pairs))
        .catch((err) => {
            console.log('Error fetching data: ', err)
         })
    }
    main();
    
    /*urql code example of query 

    const main =  async () => {
        const APIURL ="https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";
        const tokensQuery = 'query{pairs(first: 10 where: {reserveUSD_gt: "1000000", volumeUSD_gt: "50000"} orderBy: reserveUSD orderDirection: desc) {id token0 {id symbol} token1 {id symbol} reserveUSD volumeUSD }}';
        const client = createClient({url: APIURL});

        const data = await client.query(tokensQuery, {id:'query'}).toPromise();
        console.log(data.data.pairs);
    }
    main();
    */

    /*

    Axios code example of query

    const main =  async () => {
        try {  
            const result = await axios.post(
                "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
                {
                    query: '{pairs(first: 10 where: {reserveUSD_gt: "1000000", volumeUSD_gt: "50000"} orderBy: reserveUSD orderDirection: desc) {id token0 {id symbol} token1 {id symbol} reserveUSD volumeUSD }}'
                }
            );
            console.log(result.data.data.pairs);
        }
        catch (error) {
            console.log(error);
        }
    }
    main();
    */

    return (
        <h1>Hello world!</h1>
    );
}

export default App;
