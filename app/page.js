"use client";
import { NextSeo } from "next-seo";

const Home = () => (
  <>
    <NextSeo
      title="My Next.js SEO App"
      description="This is a Next.js app that is optimized for SEO."
      canonical="https://www.example.com/"
      openGraph={{
        type: "website",
        url: "https://www.example.com/",
        locale: "en_US",
        site_name: "My Next.js SEO App",
        images: [
          {
            url: "https://www.example.com/img/logo.png",
            alt: "My Next.js SEO App logo",
          },
        ],
      }}
    />
    <h1>My Next.js SEO App</h1>
    <p>This is a Next.js app that is optimized for SEO.</p>
  </>
);

export default Home;
