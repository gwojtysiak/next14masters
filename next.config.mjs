/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx';

const nextConfig = {
    pageExtensions: ['ts','tsx','mdx'],
    experimental: {
        typedRoutes: true,
        mdxRs: true,
    }
};

const withMDX = nextMDX();
export default withMDX(nextConfig);
