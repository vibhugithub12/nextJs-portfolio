/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.pexels.com"
            },
            {
                protocol:"https",
                hostname:"asmart-n4tm-srajitm9161s-projects.vercel.app"
            },
            {
                protocol:"https",
                hostname:"freepik.com"
            },
        ],
    },
};

export default nextConfig;
