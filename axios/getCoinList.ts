import { baseApiUrl } from "@/constants";
import Axios from "axios";

export const getCoinList = async (
	vs_currency: string,
	per_page?: number,
	ids?: string
) => {
	const { data } = await Axios.get(`${baseApiUrl}/coins/markets`, {
		params: {
			vs_currency,
			per_page,
			ids,
		},
	});

	return data;
};
