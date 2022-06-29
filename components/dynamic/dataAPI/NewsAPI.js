const dummy = {
  status: "ok",
  totalResults: 8247,
  articles: [
    {
      source: {
        id: null,
        name: "Cointelegraph",
      },
      author: "Cointelegraph By William Suberg",
      title:
        "Bitcoin holds $20K as ECB warns inflation may never return to pre-COVID lows",
      description:
        "Markets beyond the euro slow to react as Europe acknowledges higher inflation may be permanent.",
      url: "https://cointelegraph.com/news/bitcoin-holds-20k-as-ecb-warns-inflation-may-never-return-to-pre-covid-lows",
      urlToImage:
        "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDYvMWE2Njg2ZDctN2JkNS00MjQ1LWFiOTctNDVlZjA5ZjMyNDM5LmpwZw==.jpg",
      publishedAt: "2022-06-29T16:03:23Z",
      content:
        'Bitcoin (BTC) held steady at just above $20,000 after the June 29 Wall Street open as Europe\'s chief banker admitted the world would "never" return to low inflation.\r\nBTC/USD 1-hour candle chart (Bit… [+3812 chars]',
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Jon Markman, Contributor, \n Jon Markman, Contributor\n https://www.forbes.com/sites/fast-forward-investing/",
      title: "Who Wins When Netflix Finally Shows Ads",
      description:
        "Ads are officially coming to the streaming media company. The announcement is an about-face, and it is game-changing for a whole swath of firms.\n\nThis is what investors should expect from Netflix, The Trade Desk (TTD), Alphabet (GOOGL) and others in the digit…",
      url: "https://www.forbes.com/sites/jonmarkman/2022/06/29/who-wins-when-netflix-finally-shows-ads/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve//62bc761ccc9124ca3470f112/0x0.jpg?format=jpg&width=1200",
      publishedAt: "2022-06-29T16:01:01Z",
      content:
        "Ads on Netflix are the next big thing. (Photo by Phil Barker/Future Publishing via Getty Images)\r\nFuture Publishing via Getty Images\r\nDigital advertisements are coming to the worlds only global media… [+4460 chars]",
    },
    {
      source: {
        id: null,
        name: "The Truth About Cars",
      },
      author: "Matt Posky",
      title: "J.D. Power Claims Vehicles Are Becoming Less Reliable",
      description:
        "J.D. Power has released its U.S. Initial Quality Study for 2022 and the prognosis could be better. Automobiles are reportedly becoming less reliable and more expensive. While there are certainly valid reasons for this — ongoing supply chain problems, companie…",
      url: "https://www.thetruthaboutcars.com/2022/06/j-d-power-claims-vehicles-are-becoming-less-reliable/",
      urlToImage:
        "https://www.thetruthaboutcars.com/wp-content/uploads/2022/06/shutterstock_1794491545.jpg",
      publishedAt: "2022-06-29T16:00:47Z",
      content:
        "J.D. Power has released its U.S. Initial Quality Study for 2022 and the prognosis could be better. Automobiles are reportedly becoming less reliable and more expensive. While there are certainly vali… [+4485 chars]",
    },
    {
      source: {
        id: null,
        name: "BMWBLOG",
      },
      author: "Nico DeMattia",
      title: "Can the Cadillac Lyriq Challenge the BMW iX?",
      description:
        "The BMW iX hasn’t had a ton of natural competition since its debut. The Tesla Model X is a bit too outdated, the Model Y is too small, the Mercedes-Benz EQE SUV isn’t out yet,...\nThe article Can the Cadillac Lyriq Challenge the BMW iX? appeared first on BMW B…",
      url: "https://www.bmwblog.com/2022/06/29/cadillac-lyriq-challenge-bmw-ix/",
      urlToImage:
        "https://cdn.bmwblog.com/wp-content/uploads/2020/11/2022-bmw-ix-exterior-42.jpg",
      publishedAt: "2022-06-29T16:00:15Z",
      content:
        "The BMW iX hasn’t had a ton of natural competition since its debut. The Tesla Model X is a bit too outdated, the Model Y is too small, the Mercedes-Benz EQE SUV isn’t out yet, and the Audi e-tron is … [+2805 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Per Liljas",
      title: "The green revolution sweeping Sweden",
      description:
        "A boom of renewable-powered industries have found a home in northern Sweden, fueling the country’s ambitions of a fossil-free economy.",
      url: "https://www.washingtonpost.com/climate-solutions/interactive/2022/sweden-green-revolution-steel-climate-change/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NXVIAYXWJEI6ZAO3VQD2HFFINM.jpg&w=1200",
      publishedAt: "2022-06-29T16:00:01Z",
      content:
        "Old twigs crunch beneath his boots as Claes Nordmark, mayor of Boden, steps out into a vast clear-cut area. He comes to a stop at a slope and motions toward an electrical substation nearby.\r\n“Listen … [+12090 chars]",
    },
    {
      source: {
        id: null,
        name: "PRNewswire",
      },
      author: null,
      title: "ArgoCon 2022 Event Schedule is Released",
      description:
        "In-person and virtual event will focus on collaboration, discussion, and knowledge sharing around the Argo open source project SAN FRANCISCO, June 29, 2022 /PRNewswire/ -- The Cloud Native Computing Foundation® (CNCF®), which builds sustainable ecosystems for…",
      url: "https://www.prnewswire.com/news-releases/argocon-2022-event-schedule-is-released-301578067.html",
      urlToImage:
        "https://mma.prnewswire.com/media/461851/CNCF_Logo.jpg?p=facebook",
      publishedAt: "2022-06-29T16:00:00Z",
      content:
        "In-person and virtual event will focus on collaboration, discussion, and knowledge sharing around the Argo open source project \r\nSAN FRANCISCO, June 29, 2022 /PRNewswire/ -- The Cloud Native Computin… [+3609 chars]",
    },
  ],
};

import React from "react";
import { useState } from "react";

const NewsAPI = (props) => {
  const [news, setNws] = useState("Loading...");
  const { articles } = dummy;
  // const newsList = articles.map(new => (<p>{new.title}</p>))
  //   console.log(articles[0].title);

  return (
    <div>
      {articles.map((art) => (
        <p className="text-white text-[9px] tracking-widest" key={art.title}>
          {art.title.substring(0, 70)} [...]
        </p>
      ))}
    </div>
  );
};

export default NewsAPI;
