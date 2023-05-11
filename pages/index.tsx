import { getCoinList } from "@/axios/getCoinList";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { queryKey } from "../constants";
import { CoinType } from "@/types/CoinType";

const Home: React.FC = () => {
  const router = useRouter();
  const { isLoading, isError, data: coinsList } = useQuery({
    queryKey: [queryKey.coinsList],
    queryFn: () => getCoinList("usd", 45)
  })

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>There was an error</h1>;
  }

  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Market Pairs (USD)
            </h1>
            <p className="text-xl text-center text-gray-600">
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* End hero unit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {coinsList.map((coin: CoinType) => (
              <div key={coin.id} className="flex flex-col">
                <Image
                  src={coin.image}
                  alt="placeholder"
                  width={200}
                  height={200}
                  className="object-cover object-center"
                />
                <div className="flex-1 p-4">
                  <h2 className="text-xl font-semibold mb-2">{coin.name}</h2>
                  <ul className="list-disc pl-5">
                    <li>Current Price: ${coin.current_price}</li>
                    <li>24h High: ${coin.high_24h}</li>
                    <li>24h Low: ${coin.low_24h}</li>
                  </ul>
                </div>
                <div className="p-4">
                  <button onClick={() => router.push(`/currency/${coin.id}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main >
    </>
  );
};

export default Home;
