import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Andi Babineau, Jay Croft",
          "title": "3 killed and at least 4 wounded in overnight shooting in Los Angeles - CNN",
          "description": "Three people were killed and at least four injured in a shooting in Los Angeles, the city's fire department said Saturday, California's fourth mass shooting this month.",
          "url": "https://www.cnn.com/2023/01/28/us/los-angeles-fatal-shooting/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230128112244-01-los-angeles-shooting-0128.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-01-28T16:07:00Z",
          "content": "Three people were killed and at least four injured in a shooting in Los Angeles, the citys fire department said Saturday, Californias fourth mass shooting this month.\r\nThe Los Angeles Fire Department… [+710 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Richard Allen Greene, Hadas Gold, Amir Tal, Tara John",
          "title": "Two wounded in shooting in Jerusalem, police say, after synagogue attack leaves seven dead - CNN",
          "description": "Two people were wounded in a shooting attack in Jerusalem on Saturday, emergency services say, the day after a gunman killed at least seven people near a synagogue in the city.",
          "url": "https://www.cnn.com/2023/01/28/middleeast/jerusalem-shooting-intl/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230128065407-01-jerusalem-shooting-0128.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-01-28T15:22:00Z",
          "content": "Two people were wounded in a shooting attack in Jerusalem on Saturday, emergency services say, the day after a gunman killed at least seven people near a synagogue in the city.\r\nThe two men injured i… [+9051 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Beast" },
          "author": "Matt Wilstein",
          "title": "Academy 'Conducting a Review' After Actress' Shock Oscar Nom - The Daily Beast",
          "description": "The official statement didn’t mention the “To Leslie” star by name, but the context was evident.",
          "url": "https://www.thedailybeast.com/academy-conducting-a-review-after-andrea-riseboroughs-shock-oscar-nom",
          "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2702,w_4803,x_0,y_331/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1674862537/GettyImages-1246242351_looxgv",
          "publishedAt": "2023-01-28T14:20:07Z",
          "content": "Days after Andrea Riseborough shocked Hollywood by landing a Best Actress Oscar nomination for her little-seen film To Leslie, the Academy of Motion Picture Arts and Sciences announced that it is con… [+1468 chars]"
        },
        {
          "source": { "id": "financial-times", "name": "Financial Times" },
          "author": "Steff Chávez, George Hammond",
          "title": "Video shows deadly beating of Tyre Nichols by Memphis police - Financial Times",
          "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
          "url": "https://www.ft.com/content/da474eda-873f-42ac-bbb3-4d3b6a07991a",
          "urlToImage": null,
          "publishedAt": "2023-01-28T14:17:53Z",
          "content": "What is included in my trial?\r\nDuring your trial you will have complete digital access to FT.com with everything in both of our Standard Digital and Premium Digital packages.\r\nStandard Digital includ… [+1496 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Jack Bezants",
          "title": "Brittany Mahomes rages at 'WEAK and embarrassing' Cincinnati mayor for trolling Chiefs star Patrick - Daily Mail",
          "description": "Pureval claiming this week that Bengals quarterback Joe Burrow has been 'asked by officials to take a paternity test' to find out if he is Patrick Mahomes's father.",
          "url": "https://www.dailymail.co.uk/sport/nfl/article-11686955/Brittany-Mahomes-rages-WEAK-embarrassing-Cincinnati-mayor-trolling-Chiefs-star-Patrick.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2023/01/28/14/67070899-0-image-a-16_1674915284423.jpg",
          "publishedAt": "2023-01-28T14:15:35Z",
          "content": "Patrick Mahomes's wife Brittany has called the mayor of Cincinnati 'weak and embarrassing' after he trolled the Chiefs quarterback before Sunday's game against the Bengals.\r\nCincinnati mayor Aftab Pu… [+3276 chars]"
        },
        {
          "source": { "id": "google-news", "name": "Google News" },
          "author": null,
          "title": "85-car pileup in Wisconsin leaves at least 21 injured - The Hill",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMiZ2h0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3Mvc3RhdGUtd2F0Y2gvMzgzNDM1Mi04NS1jYXItcGlsZXVwLWluLXdpc2NvbnNpbi1sZWF2ZXMtYXQtbGVhc3QtMjEtaW5qdXJlZC_SAWtodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL3N0YXRlLXdhdGNoLzM4MzQzNTItODUtY2FyLXBpbGV1cC1pbi13aXNjb25zaW4tbGVhdmVzLWF0LWxlYXN0LTIxLWluanVyZWQvYW1wLw?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-01-28T14:15:00Z",
          "content": null
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Daniel Dale",
          "title": "Fact check: Biden makes false and misleading claims in economic speech - CNN",
          "description": "President Joe Biden delivered a Thursday speech to hail economic progress during his administration and to attack congressional Republicans for their proposals on the economy and the social safety net.",
          "url": "https://www.cnn.com/2023/01/28/politics/fact-check-biden-economic-speech-january-2023/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230126144339-01-biden-virgina-jan-26-2023.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-01-28T14:06:00Z",
          "content": "President Joe Biden delivered a Thursday speech to hail economic progress during his administration and to attack congressional Republicans for their proposals on the economy and the social safety ne… [+17519 chars]"
        },
        {
          "source": { "id": null, "name": "YourTango" },
          "author": "Ruby Miranda",
          "title": "The 3 Zodiac Signs Who Are The Luckiest In Love On January 29, 2023 - YourTango",
          "description": "Confident and assured, these three zodiac signs are the luckiest in love on January 29, 2023.",
          "url": "https://www.yourtango.com/2023358125/zodiac-signs-luckiest-love-january-29-2023",
          "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/zodiac-signs-luckiest-love-january-29-2023.png?itok=71pkb5fB",
          "publishedAt": "2023-01-28T14:02:09Z",
          "content": "It's strange to think that we're already at the back end of January, but so far, so good, zodiac signs we shall keep on because that's the stuff we're made of. And luck is the stuff today is made up … [+4016 chars]"
        },
        {
          "source": { "id": "ars-technica", "name": "Ars Technica" },
          "author": "Corey Gaskin",
          "title": "The weekend’s best deals: Apple computers, Kindles, 4K TVs, charging cables, and more. - Ars Technica",
          "description": "Dealmaster also has iPads, storage solutions, and computer components and peripherals.",
          "url": "https://arstechnica.com/staff/2023/01/the-weekends-best-deals-apple-computers-kindles-4k-tvs-charging-cables-and-more/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/01/dm012723-760x380.jpg",
          "publishedAt": "2023-01-28T14:00:57Z",
          "content": "2 with 0 posters participating\r\nAnother weekend, another Dealmaster. In this week's roundup of the best tech deals on the web, we have deals on a range of Apple computersdesktops and laptops alike. C… [+6621 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Issy Ronald",
          "title": "Patrick Mahomes will start AFC Championship game despite ankle sprain - CNN",
          "description": "Star quarterback Patrick Mahomes will start for the Kansas City Chiefs when they face the Cincinnati Bengals in the AFC Championship Game on Sunday, despite suffering a high ankle sprain last week.",
          "url": "https://www.cnn.com/2023/01/28/sport/patrick-mahomes-injury-update-nfl-spt-intl/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230128075046-02-patrick-mahomes-0121.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-01-28T13:28:00Z",
          "content": "Star quarterbackPatrick Mahomes will start for the Kansas City Chiefs when they face the Cincinnati Bengals in the AFC Championship Game on Sunday, despite suffering a high ankle sprain last week.\r\nT… [+2348 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "UK regional airline Flybe ceases trading, cancels all flights - Reuters",
          "description": "British regional airline Flybe on Saturday ceased trading for the second time in three years, with all flights cancelled and 276 workers made redundant.",
          "url": "https://www.reuters.com/business/aerospace-defense/uk-airline-flybe-put-administration-cancels-scheduled-flights-2023-01-28/",
          "urlToImage": "https://www.reuters.com/resizer/Ks3xtcFrnFduvucCl5J2v5jz3OI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZNWSVA5S2VJWPE5PXP4TYK3WUE.jpg",
          "publishedAt": "2023-01-28T13:09:00Z",
          "content": "LONDON, Jan 28 (Reuters) - British regional airline Flybe on Saturday ceased trading for the second time in three years, with all flights cancelled and 276 workers made redundant.\r\nA statement on Fly… [+2855 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Sandee LaMotte",
          "title": "Weight loss surgery extends lives, study finds - CNN",
          "description": "Weight loss surgery reduces the risk of premature death, especially from such obesity-related conditions as cancer, diabetes and heart disease, according to a new 40-year study of nearly 22,000 people who had bariatric surgery.",
          "url": "https://www.cnn.com/2023/01/28/health/bariatric-surgery-success-wellness/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230127143124-01-gastric-bypass-surgery-stock-restricted.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-01-28T12:53:00Z",
          "content": "Weight loss surgery reduces the risk of premature death, especially from such obesity-related conditions as cancer, diabetes and heart disease, according to a new 40-year study of nearly 22,000 peopl… [+7752 chars]"
        },
        {
          "source": { "id": null, "name": "ESPN" },
          "author": "Tim McManus",
          "title": "'This guy is going to be a problem': Inside the first QB duel between Jalen Hurts and Brock Purdy - ESPN",
          "description": "Ahead of their NFC Championship Game clash, former college coaches and teammates look at back the first time the Eagles and 49ers quarterbacks squared off.",
          "url": "https://www.espn.com/nfl/story/_/id/35539918/eagles-qb-jalen-hurts-49ers-qb-brock-purdy-college-game",
          "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0123%2Fr1121620_1296x729_16%2D9.jpg",
          "publishedAt": "2023-01-28T12:46:13Z",
          "content": "PHILADELPHIA -- Different teams. Different level. Different stakes.\r\nBut Sunday's NFC Championship Game between the Philadelphia Eagles and the San Francisco 49ers (3 p.m. ET, Fox) features a college… [+10124 chars]"
        },
        {
          "source": { "id": null, "name": "SamMobile" },
          "author": "SamMobile, Asif Iqbal Shaik",
          "title": "Galaxy Note 20 Ultra vs Galaxy S23 Ultra: A great upgrade for Note fans - SamMobile - Samsung news",
          "description": "The Galaxy S23 Ultra will be unveiled next week alongside the Galaxy S23 and the Galaxy S23+. However, its specifications ...",
          "url": "https://www.sammobile.com/news/samsung-galaxy-note-20-ultra-vs-galaxy-s23-ultra-great-upgrade/",
          "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/01/Samsung-Galaxy-Note-20-Ultra-vs-Galaxy-S23-Ultra-720x405.jpg",
          "publishedAt": "2023-01-28T11:58:00Z",
          "content": "The Galaxy S23 Ultra will be unveiled next week alongside the Galaxy S23 and the Galaxy S23+. However, its specifications and pricing have leaked already. And so far, it is shaping to be a killer sma… [+6419 chars]"
        },
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "Daniel Howley",
          "title": "Big Tech layoffs are a problem of the industry's own making: Morning Brief - Yahoo Finance",
          "description": "The tech layoffs are a result of Big Tech's push for more, now their employees are paying the price.",
          "url": "https://finance.yahoo.com/news/big-tech-layoffs-are-a-problem-of-the-industrys-own-making-morning-brief-112750716.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/hxJGfi0Tp9xBeUH6TKiVcw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NjM-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/c7376e40-9e7e-11ed-bffd-b241a273ba2e",
          "publishedAt": "2023-01-28T11:27:50Z",
          "content": "This article first appeared in the Morning Brief. Get the Morning Brief sent directly to your inbox by signing up here. \r\nThe tech industry is reeling from a seemingly nonstop parade of layoffs acros… [+5615 chars]"
        },
        {
          "source": { "id": null, "name": "Usf.edu" },
          "author": "Karen Zamora, Matt Ozug, Mary Louise Kelly",
          "title": "Even after a century, tanks still play a major role in war - WUSF Public Media",
          "description": "Germany and the United States have pledged to send tanks to Ukraine for their war efforts. What role could they play in the coming months?",
          "url": "https://wusfnews.wusf.usf.edu/2023-01-28/even-after-a-century-tanks-still-play-a-major-role-in-war",
          "urlToImage": "https://npr.brightspotcdn.com/dims4/default/16e3a29/2147483647/strip/true/crop/4173x2191+0+469/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F01%2F27%2Fgettyimages-3425872-df06109e308f6b3402a045f185be8bb97d2143f8.jpg",
          "publishedAt": "2023-01-28T11:01:00Z",
          "content": "Earlier this week, it was announced that German and American tanks are headed to Ukraine to assist in the country's ongoing resistance to the Russian invasion. \r\nSome analysts say it could be a game … [+4074 chars]"
        },
        {
          "source": { "id": null, "name": "Www.geo.tv" },
          "author": "Web Desk",
          "title": "Kim Kardashian, Kanye West attend North and Saints basketball match - Geo News",
          "description": "Kanye, also known as Ye, was soon also spotted arriving at the venue with Bianca Censori",
          "url": "https://www.geo.tv/latest/467700-kim-kardashian-kanye-west-attend-north-and-saints-basketball-match",
          "urlToImage": "https://www.geo.tv/assets/uploads/updates/2023-01-28/467700_033413_updates.jpg",
          "publishedAt": "2023-01-28T10:33:00Z",
          "content": "Kim Kardashian and her ex-husband, Kanye West kept their distance as they attended North and Saints basketball game in Los Angeles on Friday, January 27, 2023, per Daily Mail.\r\nThe rapper was accompa… [+1756 chars]"
        },
        {
          "source": { "id": null, "name": "CoinDesk" },
          "author": "Jack Schickler",
          "title": "Sam Bankman-Fried Seeks Right to Transfer FTX's Crypto - CoinDesk",
          "description": "Lawyers for the bankrupt crypto exchange's founder said there was no evidence for restricting his access to crypto held by FTX as part of bail conditions in a fraud trial.",
          "url": "https://www.coindesk.com/policy/2023/01/28/sam-bankman-fried-seeks-right-to-transfer-ftxs-crypto/",
          "urlToImage": "https://www.coindesk.com/resizer/l5wmfqOG8_-d8lCRc3l0OaUoYa4=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/7UX3R2L7Z5CWVDKLG3DQBNICU4.jpg",
          "publishedAt": "2023-01-28T10:28:00Z",
          "content": "Lawyers for Sam Bankman-Fried have argued he should be allowed access to assets and crypto held by his former company FTX, saying there's no evidence he's responsible for previous alleged unauthorize… [+2353 chars]"
        },
        {
          "source": { "id": "bloomberg", "name": "Bloomberg" },
          "author": null,
          "title": "Adani Hindenburg Research Latest News: January 28, 2023 - Bloomberg",
          "description": null,
          "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=180d54a7-9f1c-11ed-afc7-794455506278&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMS0yOC9hZGFuaS1zLWRldGFpbGVkLWhpbmRlbmJ1cmctcmVwbHktbm93LXNhaWQtdG8tYmUtcG9zdC1zaGFyZS1zYWxl",
          "urlToImage": null,
          "publishedAt": "2023-01-28T10:03:41Z",
          "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
          "source": { "id": null, "name": "HuffPost" },
          "author": "AP",
          "title": "How To See The Green Comet Zooming Our Way For First Time In 50,000 Years - HuffPost",
          "description": "The comet last visited during Neanderthal times, according to NASA.",
          "url": "https://www.huffpost.com/entry/green-comet_n_63d4eb27e4b07c0c7e03ca10",
          "urlToImage": "https://img.huffingtonpost.com/asset/63d4eb282200006d0032a3c7.jpeg?cache=0mXMJFRvht&ops=1200_630",
          "publishedAt": "2023-01-28T09:38:52Z",
          "content": "CAPE CANAVERAL, Fla. (AP) A comet is streaking back our way after 50,000 years.\r\nThe dirty snowball last visited during Neanderthal times, according to NASA. It will come within 26 million miles (42 … [+3477 chars]"
        }
      ]
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className='container mt-5'>
        <h2 className='mb-5'>TOP NEWS TODAY</h2>
        <div className='row'>
            <div className='col-md-4'>
                <NewsItem title="Title 1" desc="Desc 1" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230128112244-01-los-angeles-shooting-0128.jpg?c=16x9&q=w_800,c_fill" newsUrl="TODO"/>
            </div>
            <div className='col-md-4'>
                <NewsItem title="Title 2" desc="Desc 2"/>
            </div>
            <div className='col-md-4'>
                <NewsItem title="Title 3" desc="Desc 3"/>
            </div>
        </div>
      </div>
    )
  }
}
