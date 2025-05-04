import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "AI: 1, Antibiotic Resistance: 0",
    author: "By Lavanya Sharma",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Major news from Tulane University: Researchers have developed an AI that instantly detects antibiotic resistance in bacteria.",
          "Here's the kicker? This AI doesn't just speed things up—it could completely change the game when it comes to how we fight infections.",
          "Antibiotic resistance isn't some 'Future science problem.' It's a problem now—why diseases like tuberculosis and staph infections are getting harder to treat.",
          "And this tech? It's like handing doctors a cheat code—an upgrade in how we understand and treat disease."
        ]
      },
      {
        heading: "What Happened?",
        content: [
          "Tulane University Scientists have made a new Group Association Model (GAM)—a smart AI that finds patterns in bacterial DNA to detect antibiotic resistance.",
          "Think of GAM like that one friend who spots drama from a mile away—it sees DNA clues and predicts if bacteria are drug-resistant.",
          "Antibiotic resistance happens when some bacteria survive antibiotics due to DNA mutations and then multiply.",
          "This makes previous treatments ineffective and infections more dangerous."
        ]
      },
      {
        heading: "How Does It Work?",
        content: [
          "GAM uses machine learning to find hidden patterns between DNA mutations and drug resistance.",
          "It doesn’t just look for known mutations (like old tools). It compares DNA and resistance data across bacteria to find *real* causes of resistance.",
          "This reduces false positives and improves diagnostic accuracy."
        ]
      },
      {
        heading: "Why does it matter?",
        content: [
          "In 2021, 450,000 people developed multidrug-resistant TB, with only a 57% treatment success rate.",
          "GAM outperforms WHO's current detection methods and can help doctors treat infections faster—and save lives.",
          "Read more at ScienceDaily’s article linked below."
        ]
      }
    ],
    sources: [
      {
        text: 'Tulane University. “Researchers Use AI to Improve Diagnosis of Drug-Resistant Infections." Science Daily, Apr. 2025.',
        url: "https://www.sciencedaily.com/releases/2025/04/250407173027.htm"
      },
      {
        text: "Saliba, Julian G., et al. “Enhanced Diagnosis of Multi-Drug-Resistant Microbes Using Group Association Modeling and Machine Learning.” Nature Communications, 2025."
      }
    ]
  },
  {
    id: 2,
    title: "Pocket-Sized Physics: Turning Your Phone into an Antimatter Detector",
    author: "By Paridhi Gautam",
    sections: [
      {
        heading: "Introduction",
        content: [
          "CERN just proved your phone can help solve antimatter mysteries.",
          "Scientists at TUM created a device using smartphone sensors that detects antimatter annihilation with high precision."
        ]
      },
      {
        heading: "Matter vs Antimatter",
        content: [
          "Antimatter is the mirror image of regular matter—same mass, opposite charge.",
          "When matter and antimatter meet, they annihilate.",
          "Understanding antimatter helps answer why the universe exists at all (instead of canceling itself out)."
        ]
      },
      {
        heading: "How does it work?",
        content: [
          "The AEgIS experiment tests how antihydrogen responds to gravity using moiré deflectometers and OPHANIM, a 3840-megapixel detector made from modified smartphone sensors.",
          "The sensor tracks fragments created by antimatter annihilation to detect positions and behavior."
        ]
      },
      {
        heading: "Why does it matter?",
        content: [
          "This tech helps track antimatter precisely and could help in radiation detectors or medical imaging in the future."
        ]
      },
      {
        heading: "Conclusion",
        content: [
          "This breakthrough shows how everyday tech like phone cameras can solve fundamental physics questions.",
          "It’s a step toward more accessible, high-impact science tools for the future."
        ]
      }
    ],
    sources: [
      {
        text: "TUM. \"Smartphone Photo Sensors Transformed into an Unprecedented Resolution Antimatter Camera.\" Science Daily, Apr. 2025.",
        url: "https://www.sciencedaily.com/releases/2025/04/250402181314.htm"
      }
    ]
  }
];

// ✅ Final improved match logic
const BreakthroughBriefs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const matchScore = (text: string) => {
    const query = searchQuery.toLowerCase();
    const target = text.toLowerCase();
    if (!query || query.length < 3) return true;

    // Substring match
    if (target.includes(query)) return true;

    // Prefix match with at least 4 matching characters
    let matchCount = 0;
    for (let i = 0; i < Math.min(target.length, query.length); i++) {
      if (target[i] === query[i]) matchCount++;
      else break;
    }
    return matchCount >= 4;
  };

  const filteredArticles = articles.filter((article) =>
    matchScore(article.title) ||
    matchScore(article.author) ||
    article.sections.some((section) =>
      section.content.some((para) => matchScore(para))
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Breakthrough Briefs</h1>
        <p className="text-gray-600 mb-6">
          Quick summaries of the latest STEM breakthroughs and discoveries.
        </p>

        {/* 🔍 Search Input (top-right) */}
        <div className="absolute top-10 right-4 md:right-10">
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
          />
        </div>

        {/* 📰 Filtered Articles */}
        <div className="space-y-12 mt-20">
          {filteredArticles.length === 0 ? (
            <p className="text-gray-500 text-center">No articles found.</p>
          ) : (
            filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white bg-opacity-80 rounded-lg shadow p-8 max-w-2xl mx-auto"
              >
                <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                <p className="italic mb-6">{article.author}</p>
                {article.sections.map((section, idx) => (
                  <div key={idx} className="mb-6">
                    <h3 className="text-lg font-semibold mb-1">{section.heading}</h3>
                    {section.content.map((para, i) => (
                      <p className="mb-2" key={i}>{para}</p>
                    ))}
                  </div>
                ))}
                <div>
                  <h4 className="font-semibold mb-1">Sources:</h4>
                  <ul className="list-disc ml-6">
                    {article.sources.map((src, i) => (
                      <li key={i}>
                        {src.url ? (
                          <>
                            {src.text.split('"')[0]}
                            <a
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 underline"
                            >
                              {src.url}
                            </a>
                            {src.text.split('"').slice(2).join('"')}
                          </>
                        ) : (
                          src.text
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BreakthroughBriefs;
