"use client";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { useRouter, usePathname } from "next/navigation";

function Seo({
  title = "People Listener",
  description = "Welcome to People's Listener, a safe and supportive community where you can express your deepest thoughts and feelings to a born listener",
  url = "http://localhost:3000",
  imageUrl = "/icon-256x256.png",
  imageAlt = "",
  blog = false,
  date = new Date(),
}) {
  const router = useRouter();
  const path = usePathname();

  const SEO = {
    title,
    description,
    canonical: url + path,
    openGraph: {
      url,
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
      site_name: "peoplelistener",
    },
    additionalLinkTags: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico",
      },
    ],
    // twitter: {
    //   handle: "@mytwitterhandle",
    //   site: "@mysitename",
    //   cardType: "summary_large_image",
    // },
  };

  return (
    <>
      <NextSeo {...SEO} />
      {true ? (
        <ArticleJsonLd
          useAppDir={true}
          type="BlogPosting"
          url={url + path}
          title={title}
          images={[imageUrl]}
          datePublished={new Date(date)}
          dateModified={new Date(date)}
          authorName="Chinthamani"
          description={description}
        />
      ) : null}
    </>
  );
}

export default Seo;
