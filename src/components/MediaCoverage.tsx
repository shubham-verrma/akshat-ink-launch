import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const MediaCoverage = () => {
  const mediaArticles = [
    {
      title: "PTI News",
      description: "The Naga Warriors to hit stands",
      url: "https://www.ptinews.com/story/national/author-akshat-gupta-s-the-naga-warriors-to-hit-stands-on-may-27/1517646",
      logo: "📰"
    },
    {
      title: "Assam Tribune", 
      description: "Powerful lecture delivery",
      url: "https://assamtribune.com/article/author-akshat-gupta-delivers-powerful-lecture-at-10th-prof-sarat-mahanta-lecture-1575996",
      logo: "📰"
    },
    {
      title: "The Hindu",
      description: "The Hidden Hindu feature",
      url: "https://www.thehindu.com/books/books-authors/akshat-gupta-the-hidden-hindu/article65366075.ece",
      logo: "📰"
    },
    {
      title: "Times of India",
      description: "Superheroes and mythology",
      url: "https://timesofindia.indiatimes.com/life-style/books/features/people-want-to-know-everything-about-superheroes-other-than-our-own-author-akshat-gupta-on-what-inspired-him-to-write-the-hidden-hindu-trilogy/articleshow/107727652.cms",
      logo: "📰"
    },
    {
      title: "Hub Network",
      description: "Challenging colonial narratives",
      url: "https://hubnetwork.in/not-mythology-but-timeless-truth-akshat-gupta-challenges-colonial-narratives-at-prof-sarat-mahanta-memorial-lecture/",
      logo: "📰"
    },
    {
      title: "News18 Hindi",
      description: "Delhi World Book Fair 2024",
      url: "https://hindi.news18.com/news/literature/sahitya-sansar-new-delhi-world-book-fair-2024-the-hidden-hindu-books-author-akshat-gupta-meet-his-fans-8060408.html",
      logo: "📰"
    },
    {
      title: "ABP Live",
      description: "Dharma discussion",
      url: "https://www.abplive.com/videos/religion-and-spirituality/what-does-the-word-sir-mean-akshat-gupta-author-dharma-live-2624549",
      logo: "📺"
    },
    {
      title: "The Print",
      description: "The Naga Warriors launch",
      url: "https://theprint.in/india/author-akshat-guptas-the-naga-warriors-to-hit-stands-on-may-27/2093114/",
      logo: "📰"
    },
    {
      title: "Entrepreneur India",
      description: "The Hidden Hindu trilogy",
      url: "https://www.entrepreneur.com/en-in/lifestyle/the-man-behind-the-the-hidden-hindu-triology/458185",
      logo: "💼"
    },
    {
      title: "New Indian Express",
      description: "Sakshi Dhoni collaboration",
      url: "https://www.newindianexpress.com/entertainment/hindi/2020/Nov/26/author-akshat-gupta-recalls-first-interaction-with-sakshi-dhoni-for-web-series-2228350.html",
      logo: "📰"
    },
    {
      title: "Times of India",
      description: "Chef Vikas Khanna book launch",
      url: "https://timesofindia.indiatimes.com/life-style/books/book-launches/chef-vikas-khanna-launches-author-akshat-guptas-the-hidden-hindu/articleshow/91444585.cms",
      logo: "📰"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured In Major Media</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Akshat Gupta's work and expertise has been recognized by India's leading publications and media houses
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-6" style={{
            animation: 'scroll 30s linear infinite',
            width: 'calc(300px * 22)' // Doubled for seamless loop
          }}>
            {/* Duplicate articles for seamless scrolling */}
            {[...mediaArticles, ...mediaArticles].map((article, index) => (
              <Card 
                key={index}
                className="min-w-[280px] bg-card/80 hover:bg-card transition-all duration-300 border-primary/20 shadow-card cursor-pointer group"
                onClick={() => window.open(article.url, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{article.logo}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>Read Article</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 11));
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default MediaCoverage;