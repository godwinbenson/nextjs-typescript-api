import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { queryKey } from "../../constants";
import { getCoinList } from "../../axios/getCoinList";

const CurrencyIDPage = () => {
	const router = useRouter();
	const currencyId = router.query.currencyId;

	const { isLoading, isError, data } = useQuery({
		queryKey: [queryKey.currency],
		queryFn: () => getCoinList("usd", 1, currencyId),
	});

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>There was an error</h1>;
	}

	const currency = data[0];

	return (
		<>
			<Head>
				<title>{currency.name}</title>
			</Head>
			<main>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						<div className="flex flex-col">
							<div className="flex-1 p-4">
								<h2 className="text-xl font-semibold mb-2">{currency.name}</h2>
								<ul className="list-disc pl-5">
									<li>Current Price: ${currency.current_price}</li>
									<li>All Time High: ${currency.ath}</li>
									<li>Market Cap: {currency.market_cap}</li>
									<li>Market Cap Rank: {currency.market_cap_rank}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default CurrencyIDPage;
