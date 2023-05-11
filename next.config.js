/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["assets.coingecko.com", "picsum.photos"],
	},
};

module.exports = nextConfig;
