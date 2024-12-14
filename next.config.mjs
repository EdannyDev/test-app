const nextConfig = {
  reactStrictMode: true,
  async exportPathMap() {
    return {
      '/': { page: '/exam' },
    };
  },
};

export default nextConfig;