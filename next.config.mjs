import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bind cleanly behind Chabokan reverse proxy
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
