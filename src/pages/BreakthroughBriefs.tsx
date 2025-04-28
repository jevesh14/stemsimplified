import Navbar from "@/components/Navbar";

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
          "Here's the kicker? This AI doesn't just speed things up-it could completely change the game when it comes to how we fight infections. Because antibiotic resistance isn't some \"Future science problem.\"",
          "It's a problem now. A problem why diseases like tuberculosis and staph infections are getting harder (and scarier) to treat.",
          "And this tech? It's like handing doctors a cheat code-an upgrade in how we understand and treat disease."
        ]
      },
      {
        heading: "What Happened?",
        content: [
          "Tulane University Scientists have made a new Group Association Model (GAM)-basically, a super smart AI that can find patterns across a large set of data that can find resistance to antibiotics in bacteria.",
          "Think of GAM like that one friend who can spot drama from a mile away: it sees tiny clues in the DNA (mutations) and figures out if bacteria are about to cause trouble (resist drugs-which you should always do!)",
          "Wait, wait, but what even is antibiotic resistance?",
          "Well, here's a quick crash course: In the past, people could take antibiotics to treat diseases like tuberculosis (TB) and staph. Now they can't. Why? Over time, these bacteria have developed resistance to the drugs. How?",
          "Antibiotics kill most bacteria, but some survive due to mutations in their DNA (now this is the problem). These resistant bacteria then reproduce, creating more bacteria that the antibiotic can't kill. (Big Yikes!)",
          "This means the antibiotics that used to work no longer do, making it much harder to treat these diseases."
        ]
      },
      {
        heading: "How Does It Work?",
        content: [
          "Okay, imagine training a dog to do tricks. The New Group Association Model (GAM) uses machine learning-a branch of AI where a model is trained on a large set of data to perform a task without being programmed step by step. Think of it as the training part of training the dog.",
          "GAM uses machine learning to find genetic mutations linked to drug resistance (you know, the same kind of mutations I mentioned earlier, the ones that let some bacteria survive antibiotics.)",
          "Current tools are basic, they look at known mutations and try to find the same mutation in the bacteria. This leads to errors, because they freak over harmless mutations believing they're the reason for antibiotics' resistance, just because they look similar to known ones.",
          "GAM is way smarter. It looks through a large set of data (DNA) from different bacterias, and whether they are resistant to the antibiotic or not. It finds the pattern in which the mutations occur. GAM then compares bacteria with different resistance patterns to find genetic changes that show resistance to specific drugs."
        ]
      },
      {
        heading: "Why does it matter?",
        content: [
          "Well, because people die due to this, and the numbers are just UGLY. In 2021, 450,000 people developed multidrug-resistant tuberculosis, and treatment success rates dropped to JUST 57%.",
          "Right now, other methods are slow, inaccurate, and miss rare mutations. While this treatment is proven to outperform WHO's current resistance detection.",
          "And this tech? It helps doctors find the correct treatment before it's too late, it helps doctors save lives.",
          "If you want to read more, check out Researchers use AI to improve diagnosis of drug-resistant infections | ScienceDaily"
        ]
      }
    ],
    sources: [
      {
        text: "Tulane University. “Researchers Use AI to Improve Diagnosis of Drug-Resistant Infections.\" Science Daily, Apr. 2025.",
        url: "https://www.sciencedaily.com/releases/2025/04/250407173027.htm"
      },
      {
        text: "Saliba, Julian G., et al. “Enhanced Diagnosis of Multi-Drug-Resistant Microbes Using Group Association Modeling and Machine Learning.” Nature Communications, vol. 16, no. 1, 2025, p. 2933, doi:10.1038/s41467-025-58214-6."
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
          "What if I told you that the phone in your pocket could help solve one of the biggest discoveries of the universe? CERN has just dropped a breakthrough: your smartphone camera sensors are transformed into powerful detectors that can track antimatter.",
          "Yup, you read it right. A team from the AEgIS (Antihydrogen Experiment: Gravity, Interferometry, Spectroscopy) collaboration, led by researchers at the Technical University of Munich (TUM), created a device that can track when antimatter particles (which usually vanish on contact with normal matter) annihilate-and that too with great precision."
        ]
      },
      {
        heading: "What happened?",
        content: [
          "Now, you must be thinking, what's the deal with antimatter and why is it important to understand it?"
        ]
      },
      {
        heading: "Matter vs Antimatter",
        content: [
          "Atoms of matter and antimatter have the same mass, but opposite electrical charge and different quantum numbers.",
          "Basically, antimatter is the mirror image of regular matter. Every particle in the universe such as electrons and protons has an oppositely charged counterpart which is the antiparticle. For example, the counterpart of the negatively charged electron is the positively charged positron (which is a positively charged mirror image of the electron). When matter and antimatter come into contact, they annihilate each other (disappearing).",
          "An antiparticle is made up of an antiproton (which is the negatively charged mirror image of a proton), which is the antimatter equivalent of a proton, and a positron which is the antimatter equivalent of an electron.",
          "Physicists are trying to understand antimatter because, according to theory, the Big Bang should have made equal amounts of matter and antimatter. Yet the observable universe is made almost entirely of matter. Understanding why this imbalance exists could answer one of the most fundamental questions in physics: why is there something rather than nothing?",
          "Since antimatter doesn't naturally exist in large quantities near us, as it would instantly annihilate if it came into contact with matter, scientists have to create it in labs. At CERN's Antimatter Factory, antiprotons are made by accelerating regular protons to near-light speed and smashing them into a metal target. This collision produces many new particles, including antiprotons. These antiprotons are then slowed down and combined with positrons to create antihydrogen, the antimatter counterpart of the hydrogen atom. These atoms are stored in vacuum traps using powerful magnetic fields to prevent them from touching the walls and annihilating."
        ]
      },
      {
        heading: "How does it work?",
        content: [
          "The AEgIS experiment is trying to investigate whether antihydrogen falls under gravity in the same way as ordinary matter. According to Einstein's theory of general relativity, all masses should experience gravity in the same way. But antimatter may behave differently, and this would totally change our understanding of gravity, space-time, and the early universe.",
          "To test this, AEgIS creates a horizontal beam of antihydrogen atoms. As the beam travels forward, Earth's gravity should cause it to fall slightly downward. Measuring this tiny vertical shift is the key challenge. To detect it, scientists use a setup called a moiré deflectometer. It is a tool scientists use to detect tiny changes in the path of a beam like a beam of atoms. It has three special plates, each with very tiny, evenly spaced slits and so it is like a super thin comb. When the beam passes through these slits, it forms a pattern of light and dark stripes called a moiré pattern. If the beam bends slightly maybe because of gravity then the pattern also shifts. By measuring how much the pattern moves, scientists can figure out how much and in which direction the beam was deflected.",
          "But since antihydrogen atoms annihilate when they hit any surface, scientists also have to detect the exact locations where these annihilations occur.",
          "This is where the new detector comes in. Instead of directly observing the invisible antihydrogen atoms, the detector tracks the small fragments created by their annihilation, such as gamma rays released. These fragments hit the detector and leave identifiable marks and then researchers can trace back where the antihydrogen atom vanished.",
          "To make this process more accurate, scientists reused high-resolution camera sensors from our smartphones. Smartphone sensors have extremely small pixels which are often smaller than 1 micrometre, which makes them perfect for capturing minute details. But to turn a phone camera into a particle detector, researchers had to remove the sensor's upper layers, which in phones are designed to increase image quality, and redesign the electronics to record particles instead of light. They assembled 60 such sensors into a single large detector called OPHANIM (Optical Photon and Antimatter Imager), which boasts 3840 megapixels-making it the highest-resolution device of its kind today."
        ]
      },
      {
        heading: "Why does it matter?",
        content: [
          "OPHANIM combines the strengths of old and new technologies. It takes the high resolution of traditional smartphone cameras and also supports real-time data collection of the annihilation. This device helps researchers to pinpoint where each antiproton or antihydrogen atom annihilates.",
          "This new technology could be used in other fields. Beyond advancing antimatter research, it could be used in experiments that require precise tracking of particles, in the development of next-generation radiation detectors, or even in medical imaging technologies."
        ]
      },
      {
        heading: "Conclusion",
        content: [
          "This discovery proves that technology and tools used in daily life can also be used to solve big universe mysteries. It shows that it is possible to use something as common as a smartphone for studying antimatter. This is a mark of a giant leap for science. Could this be the start of a future where anyone, anything, anywhere can help uncover secrets of the universe? Could your next phone come with a built-in particle detector? Maybe someday."
        ]
      }
    ],
    sources: [
      {
        text: "Technical University of Munich (TUM). \"Smartphone Photo Sensors Transformed into an Unprecedented Resolution Antimatter Camera.\" Science Daily, Apr. 2025.",
        url: "https://www.sciencedaily.com/releases/2025/04/250402181314.htm"
      }
    ]
  }
];

const BreakthroughBriefs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Breakthrough Briefs</h1>
        <p className="text-gray-600 mb-8">
          Quick summaries of the latest STEM breakthroughs and discoveries.
        </p>
        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="bg-white bg-opacity-80 rounded-lg shadow p-8 max-w-2xl mx-auto">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakthroughBriefs;
