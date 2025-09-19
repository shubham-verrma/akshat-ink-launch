import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const MediaCoverage = () => {
  const mediaArticles = [
    {
      title: "PTI News",
      description: "The Naga Warriors to hit stands",
      url: "https://www.ptinews.com/story/national/author-akshat-gupta-s-the-naga-warriors-to-hit-stands-on-may-27/1517646",
      brandColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Assam Tribune", 
      description: "Powerful lecture delivery",
      url: "https://assamtribune.com/article/author-akshat-gupta-delivers-powerful-lecture-at-10th-prof-sarat-mahanta-lecture-1575996",
      brandColor: "text-green-700",
      bgColor: "bg-green-50"
    },
    {
      title: "The Hindu",
      description: "The Hidden Hindu feature",
      url: "https://www.thehindu.com/books/books-authors/akshat-gupta-the-hidden-hindu/article65366075.ece",
      brandColor: "text-red-700",
      bgColor: "bg-red-50"
    },
    {
      title: "Times of India",
      description: "Superheroes and mythology",
      url: "https://timesofindia.indiatimes.com/life-style/books/features/people-want-to-know-everything-about-superheroes-other-than-our-own-author-akshat-gupta-on-what-inspired-him-to-write-the-hidden-hindu-trilogy/articleshow/107727652.cms",
      brandColor: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Hub Network",
      description: "Challenging colonial narratives",
      url: "https://hubnetwork.in/not-mythology-but-timeless-truth-akshat-gupta-challenges-colonial-narratives-at-prof-sarat-mahanta-memorial-lecture/",
      brandColor: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "News18 Hindi",
      description: "Delhi World Book Fair 2024",
      url: "https://hindi.news18.com/news/literature/sahitya-sansar-new-delhi-world-book-fair-2024-the-hidden-hindu-books-author-akshat-gupta-meet-his-fans-8060408.html",
      brandColor: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "ABP Live",
      description: "Dharma discussion",
      url: "https://www.abplive.com/videos/religion-and-spirituality/what-does-the-word-sir-mean-akshat-gupta-author-dharma-live-2624549",
      brandColor: "text-blue-700",
      bgColor: "bg-blue-50"
    },
    {
      title: "The Print",
      description: "The Naga Warriors launch",
      url: "https://theprint.in/india/author-akshat-guptas-the-naga-warriors-to-hit-stands-on-may-27/2093114/",
      brandColor: "text-gray-800",
      bgColor: "bg-gray-50"
    },
    {
      title: "Entrepreneur India",
      description: "The Hidden Hindu trilogy",
      url: "https://www.entrepreneur.com/en-in/lifestyle/the-man-behind-the-the-hidden-hindu-triology/458185",
      brandColor: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "New Indian Express",
      description: "Sakshi Dhoni collaboration",
      url: "https://www.newindianexpress.com/entertainment/hindi/2020/Nov/26/author-akshat-gupta-recalls-first-interaction-with-sakshi-dhoni-for-web-series-2228350.html",
      brandColor: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Times of India",
      description: "Chef Vikas Khanna book launch",
      url: "https://timesofindia.indiatimes.com/life-style/books/book-launches/chef-vikas-khanna-launches-author-akshat-guptas-the-hidden-hindu/articleshow/91444585.cms",
      brandColor: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured In Major Media</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Akshat Gupta's work and expertise has been recognized by India's leading publications and media houses
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden"
             style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
          <div 
            className="flex gap-4 md:gap-6 animate-scroll" 
            style={{
              width: 'max-content',
              animation: 'scroll-mobile 30s linear infinite'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            onTouchStart={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onTouchEnd={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {/* Duplicate articles for seamless scrolling */}
            {[...mediaArticles, ...mediaArticles].map((article, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 w-[240px] md:w-[280px] bg-card/80 hover:bg-card transition-all duration-300 border-primary/20 shadow-card cursor-pointer group"
                onClick={() => window.open(article.url, '_blank')}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className={`${article.bgColor} rounded-lg p-2 md:p-3 text-center`}>
                      <div className={`font-bold text-sm md:text-lg ${article.brandColor}`}>
                        {article.title}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-xs md:text-sm group-hover:text-primary/80 transition-colors">
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
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
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-240px * 11 - 44px * 11));
          }
        }
        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll-desktop 40s linear infinite !important;
          }
          @keyframes scroll-desktop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-280px * 11 - 66px * 11));
            }
          }
        }
      `}</style>
    </section>
  );
};
export default MediaCoverage;