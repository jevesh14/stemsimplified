import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Footer from "@/components/Footer";

const articles = [
  {
    id: 1,
    title: "AI: 1, Antibiotic Resistance: 0",
    description: "An AI from Tulane University can now instantly detect antibiotic resistance in bacteria through spotting mutation patterns. This breakthrough could revolutionize how we treat infections! check out more.", 
    author: "By Lavanya Sharma",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Major news from Tulane University: Researchers have developed an AI that instantly detects antibiotic resistance in bacteria.",
          "Here’s the kicker? This AI doesn’t just speed things up—it could completely change the game when it comes to how we fight infections.",
          "Because antibiotic resistance isn’t some “Future science problem.”  It’s a problem now. A problem why diseases like tuberculosis and staph infections are getting harder (and scarier) to treat",
          "And this tech?  It’s like handing doctors a cheat code—an upgrade in how we understand and treat disease."
        ]
      },
      {
        heading: "What Happened?",
        content: [
          "Tulane University Scientists have made a new Group Association Model (GAM)- Basically, a super smart AI that can find patterns across a large set of data- that can find resistance to antibiotics in bacteria.",
          "Think of GAM like that one friend who can spot drama from a mile away — it sees tiny clues in the DNA (mutations) and figures out if bacteria are about to cause trouble (resist drugs- which you should always do!)",
          "Wait, wait, but what even is antibiotic resistance?",
          "Well, here's a quick crash course:",
          "In the past, people could take antibiotics to treat diseases like tuberculosis (TB) and staph.",
          "Now they can’t. Why?",
          "Over time, these bacteria have developed resistance to the drugs. How?",
          "Antibiotics kill most bacteria, but some survive due to mutations in their DNA (now this is the problem). These resistant bacteria then reproduce, creating more bacteria that the antibiotic can’t kill. (Big Yikes!)",
          "This means the antibiotics that used to work no longer do, making it much harder to treat these diseases."
        ]
      },
      {
        heading: "How Does It Work?",
        content: [
          "Okay, imagine training a dog to do tricks",
          "The New Group Association Model (GAM) uses machine learning-  a branch of AI where a model is trained on a large set of data to perform a task without being programmed step by step. Think of it as the training part of training the dog.",
          "GAM uses machine learning to find genetic mutations linked to drug resistance (you know, the same kind of mutations I mentioned earlier, the ones that let some bacteria survive antibiotics.)",
          "Current tools are basic, they at known mutations and try to find the same mutation in the bacteria. This leads to errors, because they freak over harmless mutations believing they're the reason for antibiotics’ resistance, just because they look similar to known ones",
          "GAM is way smarter.",
          "It looks through a large set of data (DNA) from different bacterias, and wether they are resistant to the antibiotic or not. It finds the pattern in which the mutations occur. GAM then compares bacteria with different resistance patterns to find genetic changes that show resistance to specific drugs."
        ]
      },
      {
        heading: "Why does it matter?",
        content: [
          "Well, because people die due to this, and the numbers are just UGLY.",
          "In 2021, 450,000 people developed multidrug-resistant tuberculosis, and treatment success rates dropped to JUST 57%.",
          "Right now, other methods are slow, inaccurate, and miss rare mutations. While this treatment is proven to outperform WHO’s current resistance detection.",
          "And this tech?",
          "It helps doctors find the correct treatment before it too late, it helps doctors save lives",
          "If you want to read more, check out Researchers use AI to improve diagnosis of drug-resistant infections | ScienceDaily"
        ]
      }
    ],
    sources: [
      {
        text: "Tulane University. “Researchers Use AI to Improve Diagnosis of Drug-Resistant Infections.” Science Daily, Apr. 2025.",
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
    description: "Scientists just used a phone to track invisible particles . It’s called antimatter and this could help us understand why the universe even exists. Check it out by reading this article!!", 
    author: "By Paridhi Gautam",
    sections: [
      {
        heading: "Introduction",
        content: [
          "What if I told you that the phone in your pocket could help solve one of the biggest discoveries of the universe? CERN has just dropped a breakthrough: your smartphone camera sensors are transformed into powerful detectors that can track antimatter. Yup, you read it right. A team from the AEgIS(Antihydrogen Experiment: Gravity,Interferometry, Spectroscopy ) collaboration, led by researchers at the Technical University of Munich (TUM), created a device that can track when antimatter particles (which usually vanish on contact with normal matter disappear) annihilate and that too with great precision."
        ]
      },
      {
        heading: "What happened ?",
        content: [
          "Now, you must be thinking, what’s the deal with antimatter and why is it important to understand it?",
          "Basically, antimatter is the mirror image of regular matter. Every particle in the universe such as electrons and protons has an oppositely charged counterpart which is the antiparticle. For example, the counterpart of the negatively charged electron is the positively charged positron (which is a positively charged mirror image of the electron). When matter and antimatter come into contact, they annihilate each other(disappearing). An antiparticle is made up of an antiproton(which is the negatively charged mirror image of a proton.)which is the antimatter equivalent of a proton and a positron which is the antimatter equivalent of an electron.",
          "Simply put, Physicists are trying to understand antimatter because, according to theory, the Big Bang should have made equal amounts of matter and antimatter. Yet the observable universe (the universes you can see) is made almost entirely of matter. Understanding why this imbalance exists could answer one of the most fundamental questions in physics that is - why is there something rather than nothing?",
          "Since antimatter doesn't naturally exist in large quantities near us, as it would instantly annihilate (disappear) if it came into contact with matter, therefore scientists have to create it in labs. At CERN’s Antimatter Factory, antiprotons are made by accelerating regular protons to near-light speed and smashing them into a metal target. This collision produces many new particles, including antiprotons. These antiprotons are then slowed down and combined with positrons (the same ones I explained earlier) to create antihydrogen, the antimatter counterpart of the hydrogen atom. These atoms are stored in vacuum traps using powerful magnetic fields to prevent them from touching the walls and annihilating(disappearing)."
        ]
      },
      {
        heading: "How does it work ?",
        content: [
          "The AEgIS experiment is trying to investigate whether antihydrogen falls under gravity in the same way as ordinary matter. According to Einstein’s theory of general relativity, all masses should experience gravity in the same way. But antimatter may behave differently, and this would totally change our understanding of gravity, space-time, and the early universe.",
          "To test this, AEgIS creates a horizontal beam of antihydrogen atoms. As the beam travels forward, Earth’s gravity should cause it to fall slightly downward. Measuring this tiny vertical shift is the key challenge. To detect it, scientists use a setup called a moiré deflectometer. It is a tool scientists use to detect tiny changes in the path of a beam like a beam of atoms. It has three special plates, each with very tiny, evenly spaced slits and so it is like a super thin comb. When the beam passes through these slits, it forms a pattern of light and dark stripes called a moiré pattern. If the beam bends slightly maybe because of gravity then the pattern also shifts. By measuring how much the pattern moves, scientists can figure out how much and in which direction the beam was deflected. But since antihydrogen atoms annihilate when they hit any surface, scientists also have to detect the exact locations where these annihilations occur.",
          "This is where the new detector comes in. Instead of directly observing the invisible antihydrogen atoms, the detector tracks the small fragments created by their annihilation, such as gamma rays released. These fragments hit the detector and leave identifiable marks and then researchers can trace back where the antihydrogen atom vanished.",
          "To make this process more accurate, scientists reused high-resolution camera sensors from our smartphones. Smartphone sensors have extremely small pixels which are often smaller than 1 micrometre, which makes them perfect for capturing minute details. But to turn a phone camera into a particle detector, researchers had to remove the sensor’s upper layers, which in phones are designed to increase image quality and redesign the electronics to record particles instead of light. They assembled 60 such sensors into a single large detector called OPHANIM (Optical Photon and Antimatter Imager), which boasts 3840 megapixels which makes it the highest-resolution device of its kind today."
        ]
      },
      {
        heading: "Why does it matter ?",
        content: [
          "OPHANIM combines the strengths of old and new technologies. It takes the high resolution of traditional smartphone cameras and also supports real-time data collection of the annihilation. This device helps researchers to pinpoint where each antiproton or antihydrogen atom annihilates.",
          "This new technology could be used in other fields. Beyond advancing antimatter research, it could be used in experiments that require precise tracking of particles, in the development of next-generation radiation detectors, or even in medical imaging technologies."
        ]
      },
      {
        heading: "Conclusion",
        content: [
          "This discovery proves that technology and tools used in daily life can also be used to solve big universe mysteries. It shows that it is possible to use something as common as a smartphone for studying antimatter. This is a mark of a giant leap for science. Could this be the start of a future where anyone, anything,anywhere can help uncover secrets of the universe? Could your next phone come with a built-in particle detector? Maybe someday."
        ]
      }
    ],
    sources: [
      {
        text: "Technical University of Munich (TUM). “Smartphone Photo Sensors Transformed into an Unprecedented Resolution Antimatter Camera.” Science Daily, Apr. 2025.",
        url: "https://www.sciencedaily.com/releases/2025/04/250402181314.htm"
      }
    ]
  },
  {
    id: 3,
    title: "The Soil Factor: Soil Saturation Triggers Floods",
    description: "Scientists expose how wet soil can supercharge floods! Even moderate storms can cause massive damage. Discover how smarter flood prediction is now possible by reading about the ground beneath the storm!",
    author: "By Aishna Goyal",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Isn’t it hard to believe that one of the main factors affecting the impact of floods isn’t just the storm’s size, but also the pre-existing soil moisture before the rain even begins? In a new study, researchers simulated over 43,000 atmospheric river landfalls. These are long bands of concentrated moisture in the atmosphere carrying huge amounts of water vapor (like rivers in the sky) from tropical oceans, which are hitting the US West Coast as heavy rain/snow. They discovered that the wetness and type of soil contribute to the severity of floods. This finding helps prevent flood damage and predict disasters early on.",
          "Note: Atmospheric Rivers provide the essential moisture required for the region, but are the main cause of flooding in the area."
        ]
      },
      {
        heading: "What happened?",
        content: [
          "Researchers fed data about atmospheric rivers, soil moisture levels and past flooding events to high-resolution computer models. These models worked like virtual laboratories, allowing scientists to simulate real-world scenarios for experiments and run controlled experiments. In this case, they created the model of atmospheric river landfalls and studied the cause-and-effect relationships of flooding events to predict future risks."
        ]
      },
      {
        heading: "What did scientists discover during the study?",
        content: [
          "Now, we all know that traditionally, flood risk was thought to depend mostly on the size and strength of a storm—the bigger the storm, the higher the flood risk. But this study showed that soil moisture can be just as important.",
          "In fact, it was discovered that flood peaks were 2 to 4.5 times higher at places where the soil was already saturated (wet). Which is why sometimes, even a moderate storm caused severe flooding if the ground was wet. While in other areas, even heavy rain didn’t trigger flooding if the soil had high absorbent capacity or was dry.",
          "", 
          "",


          
          "So wait…"
        ]
      },
      {
        heading: "How on earth does that soil-wetness thingy even work?!",
        content: [
          "Well, don’t worry. This took me quite some research to figure out, too.",
          "Yes. Ik, even with Chat GPT. But, Here’s How :)",
          "Think of the soil as a Sponge. If the sponge is dry, it can soak up water easily. If it is damp, it can still absorb a bit more water, but once it's fully soaked and drenched in water… any extra water will just run off the surface.",
          "This point – after which soil cannot absorb any more water, is known as the critical threshold of soil moisture wetness. In other words, the maximum capacity of wetness that the soil can uphold."
        ]
      },
      {
        heading: "So…why does it matter?",
        content: [
          "The thing is, this nature of soil helps us to determine the relationship between the risk of flooding and the wetness of sand.",
          "Once the critical threshold of soil wetness is met, the risk of flooding rises suddenly, not gradually. This kind of relationship is called non-linear, where a small increase in wetness can lead to a large increase in flooding.",
          "Therefore, since water has nowhere else to go but up once the soil reaches its saturation point, some floods can occur suddenly. This also means that areas with low water-absorbent levels in soil have a tendency to have unpredictable floods.",
          "Yikes!"
        ]
      },
      {
        heading: "But, why is it important?",
        content: [
          "Understanding soil moisture is vital for creating better hydrologic models—these are computer models that simulate how water moves through the land. With this insight, flood forecasting can become more accurate and localized, helping communities better prepare for disasters.",
          "As lead author of the study Mariana Webb said:",
          "“It’s not only about the storm size and magnitude but also what’s happening on the land surface.”",
          "The study also emphasizes the role of watersheds—areas of land where all water drains to a common outlet. By analyzing how different watersheds respond to moisture, we can optimize infrastructure, improve regional planning, and design better flood prevention systems based on the land’s unique characteristics."
        ]
      },
      {
        heading: "So… What’s next?",
        content: [
          "Better infrastructure, development in regional strategies, enhanced hydrologic models and more precise forecasts, and much more.",
          "However, I have a question for you.",
          "Do you think YOU could discover flood prevention methods in ways never yet explored? Is there another factor overlooked that is awaiting someone’s arrival to enlighten the world about it? Someone like you? Do you think YOU can find something new in this area?",
          "What if you could dictate another breakthrough…"
        ]
      }
    ],
    sources: [
      {
        text: "Desert Research Institute. “Scientists Reveal the Hidden Trigger behind Massive Floods.” Science Daily, June 2025",
        url: "https://www.sciencedaily.com/releases/2025/06/250614121958.htm"
      }
    ]
  },
  {
    id: 4,
    title: "The Future of Healthcare Is in Your Breath — Literally",
    description: "A new device captures clues from the air around you — and it might just change how we fight disease forever. Check it out by reading this article",
    author: "By Taksh Jain",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Waiting to give a blood sample at the doctor’s office, you’ve probably wished there were a needle-free way to get the same info.",
          "Well, here we go,",
          "University of Chicago introduces a game-changer! - A group of scientists created a portable device that can collect and detect airborne molecules. This device holds the potential to revolutionise the way diseases are detected and treated.",
          "A small insight, COVID is an airborne disease."
        ]
      },
      {
        heading: "What happened?",
        content: [
          "Scientists at the University of Chicago created a small, portable device (just four by eight inches across) nicknamed ABLE. (Airborne Biomarker Localisation Engine.) The scientists envision that this device could detect airborne particles in hospitals and public places.",
          "Wait up, what do airborne particles have to do with diseases??",
          "Here’s a quick summary,",
          "When you breathe, there is a possibility that there are harmful pathogens in the air surrounding you. (Oh, that’s pretty scary!) If these particles are inhaled, they are reintroduced into the air (possibly with a mutation) when someone coughs or sneezes, making it difficult to control the spread of disease.",
          "This is why COVID spread like wildfire in a forest."
        ]
      },
      {
        heading: "How does it work?",
        content: [
          "How can a device possibly detect such minute particles that we can’t even see!?",
          "It is challenging to detect the desired floating particles as they may be as few as one in a trillion. Till now, it required expensive equipment to do so, but this machine changes that.",
          "Let's see how,",
          "The device turns the air into liquid.",
          "No, but how?",
          "Here’s the process-",
          "1. Air sampling ABLE draws in air from the surrounding environment.",
          "2. Condensation It introduces water vapour and cools the air to turn it into a liquid state on a specifically designed surface.",
          "3. Concentration The condensation process above concentrates any airborne biomarkers (indicators of biological substances) into the droplets. (Basically gathering all the necessary particles and turning them into droplets)",
          "4. Detection The concentrated droplets are directed into a reservoir, where they can be tested using various detection methods."
        ]
      },
      {
        heading: "Why does it matter?",
        content: [
          "There are numerous potential applications for ABLE.",
          "For example, neonatal care. Premature infants (Infants that were born before the required time) are very fragile and vulnerable. Using methods, such as blood sampling to diagnose them, can be harmful. ABLE can be used to track newly identified biomarkers and optimize care for these infants, preventing those invasive methods.",
          "The device can also be used for people with diabetes. They can check their glucose levels just from their breath!",
          "And lastly, the scientists who made the device are also collaborating with a doctor who treats inflammatory bowel disease. It may be possible to detect markers of inflammation from the breath of patients!",
          "If the device had existed before COVID, its detection would have been much easier, and it might not have spread as much.",
          "However, there is a small issue.",
          "The ability to easily detect airborne molecules is new. Scientists don't know what molecules they would need to look for yet!! In the future, scientists could modify the device further and upgrade it to solve the current issues.",
          "If you want to know more about the device, check out Scientists invent breakthrough device to detect airborne signs of disease on Science Daily."
        ]
      }
    ],
    sources: [
      {
        text: "University of Chicago. \"Scientists invent breakthrough device to detect airborne signs of disease.\" ScienceDaily, 21 May 2025.",
        url: "https://www.sciencedaily.com/releases/2025/05/250521124758.htm"
      },
      {
        text: "Journal Reference: Jingcheng Ma, Megan Laune, Pengju Li, Jing Lu, Jiping Yue, Yueyue Yu, Yamin Mansur, Amio P. D. Ritwik, Sai P. Peri, Jessica Cleary, Kaitlyn Oliphant, Zachary Kessler, Erika C. Claud, Bozhi Tian. Airborne biomarker localisation engine for open-air point-of-care detection. Nature Chemical Engineering, 2025, 2 (5): 321 DOI: 10.1038/s44286-025-00223-9",
        url: "http://dx.doi.org/10.1038/s44286-025-00223-9"
      }
    ]
  },
  {
    id: 5,
    title: "Tiny Bugs, Infinite Potential",
    description: "Scientists have invented micro bots capable of delivering medicine directly inside the body-no surgery needed! This breakthrough is able to transform the medical industry on treatments for diseases like cancer and infections. Scroll to learn more!",
    author: "By Sandra Myat (Team Thailand)",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Let’s take a moment to appreciate how our noses aren’t clogged and our throats aren't hurting because, honestly, being sick is the worst and on par with hospital visits. But what if we're able to avoid those long hospital stays, painful treatments, and harsh side effects? What if instead a tiny robot could zoom through your veins and solve your problem? I know what you're thinking: \"A robot…inside my body?” Yes, but don't worry, it won't ask for your Apple Pay details or steal your Netflix password.",
          "The concept of micro- and nanobots is not particularly new, as scientists have been developing it over the past two decades. These tiny robots can travel through your body to deliver medicine directly to the targeted source. This innovation can improve the risks and suffering experienced by a majority of terminally ill patients. Could this overall replace the need for surgery and chemotherapy?"
        ]
      },
      {
        heading: "What Happened?",
        content: [
          "Hey, why don't microbots ever gossip?",
          "Probably because theyre too small to spread rumors",
          "How do they work?",
          "The microbots developed are engineered to navigate through the fluids inside our bodies and target medicine to specifically sick cells.",
          "Think of them as delivery drivers, just like ordering food on Grab or packages through FedEx, but for your body instead. The shape of the robots is similar to the likes of a single red blood cell, as they are swift, tiny, and immediate. Researchers have clinically tested them on animals such as mice, which turned out successful in the end. If they can help mice heal, who’s to say we aren't next?"
        ]
      },
      {
        heading: "How Does It Work",
        content: [
          "What did the magnetic microbot say to the doctor?",
          "“I’m attracted to healing”.",
          "Now, Picture a small sail or boat that's essentially stretchy and made out of flexible/elastic materials that flow through your blood; that's essentially the microbot. Now, how do they work and function? These microbots can be produced from either magnets or chemical reactions. Ever tried plopping vinegar and soda or Coke and Mentos together? The same bubbling reaction is used for the bots to travel through your body.",
          "For the magnetic-powered microbots, scientists essentially use magnetic fields to direct them to the problem, whether it be a tumor, cancerous cells, or an infection. Once they reach the destination, the microbots release the medical substance directly to the area."
        ]
      },
      {
        heading: "Why does it matter?",
        content: [
          "Most of the time the medicine put into our body is similar to tossing a message in a bottle into the ocean, hoping it reaches the shore. They might eventually reach the problem, but at what cost? These microbots are able to help patients and save them from their pains without suffering. In the cases of heart disease, cancer, and brain disorders, these microbots can travel through barriers in the blood-brain, arteries, and bloodstreams to precisely and accurately deliver medicine to the root of the problem. This helps the patients, as many treatments target the full body, which causes many side effects compared to the microbots going to the area only where the problem is."
        ]
      },
      {
        heading: "Conclusion",
        content: [
          "Although most people expect inventions such as flying cars, I’d say microbots aren’t as bad either, as researchers continue to improve and experiment with the precision and accuracy of these bots. With the current technologies and innovations, it’s not that far to dream of surgeries becoming less frequent, as one day many illnesses may simply be solved with the digestion of a simple pill. If you had a chance, would you consider trusting a microbot to heal you from the inside?"
        ]
      }
    ],
    sources: [
      {
        "text": "Aliakbarzadeh, Sanaz, et al. “Micro‑Surgeons and Nano‑Pharmacists: The Future of Healthcare with Medical Nanorobots.” Journal of Drug Delivery Science and Technology, vol. 103, no. 106410, 2025, p. 106410",
        "url": "https://doi.org/10.1016/j.jddst.2024.106410"
      },
      {
        "text": "Sun, Tianhao, et al. “Application of Micro/Nanorobot in Medicine.” Frontiers in Bioengineering and Biotechnology, vol. 12, 2024, p. 1347312",
        "url": "https://doi.org/10.3389/fbioe.2024.1347312"
      },
      {
        "text": "Ye, Min, et al. “Magnetic Microrobots with Folate Targeting for Drug Delivery.” Cyborg and Bionic Systems, vol. 4, 2023, p. 0019",
        "url": "https://doi.org/10.34133/cbsystems.0019"
      }
    ]    
  },
  {
    "id": 6,
    "title": "Automated Labs- Smarter, Faster, and Self-driven!",
    "description": "This breakthrough describes a game-changing AI powered lab that can run experiments on its own. You'll find out about how the lab works, it's importance in the scientific world, and reveals how machines are doing science way better, faster and smarter!",
    "sections": [
      {
        "heading": "Introduction",
        "content": [
          "Scientists have built a digital laboratory that incorporates artificial intelligence and machine learning algorithms. This lab does not require humans to run chemical experiments and discovers materials with speed 10 times faster. Therefore, it is important in the scientific world because it results in quicker discoveries, and reduces both the costs and harm to the natural world."
        ]
      },
      {
        "heading": "Breaking It Down",
        "content": []
      },
      {
        "heading": "What Happened?",
        "content": [
          "Generally, when scientists try to discover new materials, it takes them weeks, months, or probably years! They first have to plan, then set everything up, and perform all experiments on their own. This wastes a lot of time just to achieve only a handful of results.",
          "Researchers at North Carolina State University have created a “self-driving lab” to solve this issue. This automated laboratory thinks for itself using AI. It decides what it has to do, runs on its own, and learns from previous results."
        ]
      },
      {
        "heading": "How Does It Work?",
        "content": [
          "The lab includes artificial intelligence to understand how the experiments will work. Through AI it decides on numerous factors like what substances to mix, what will be the experimental conditions required, how to test the results received.",
          "In addition to this, the usual- traditional labs, carry out the experiments one step at a time. Instead of doing this, this smart lab runs tests that can be modified while they are happening. This aids in collecting a lot more information as compared to the normal labs.",
          "Moreover, machine learning algorithms in-built in the lab, assist AI in understanding the patterns in the data, and also help in changing its plans as it learns from its previous experiments. Consequently, this leads to finer choices. This cycle is repeated continuously, and just like scientists learn from their former research, the smart lab also gets smarter and quicker gradually."
        ]
      },
      {
        "heading": "Why Does It Matter?",
        "content": [
          "Normally, uncovering new substances is expensive and slow. With this automated lab we can reduce the time needed from years to just a few days.  This means that we can obtain results quicker than expected. Apart from this, the smart lab also reduces wastage of resources and energy, making science more lasting, environment-friendly and non-threatening to the ecosystem. This is achievable because the AI makes wiser decisions. Furthermore, because the lab works 10 times faster, it can find breakthroughs or ideas that we humans might not have the time or brains to test. This could result in some unexpected new findings that we cannot even imagine! And who knows that these explorations might be the solution to some of the major global problems of mankind as well as the environment."
        ]
      },
      {
        "heading": "Conclusion",
        "content": [
          "The automated lab created by the North Carolina State University is a big achievement in the world of science and tech. This lab provides results quicker and with greater accuracy. It can change our way of finding solutions to problems like  global warming, diseases and what not!",
          "This lab works faster than any human could ever could- it DOESN’T need breaks, it DOESN’T need food, it DOESN’T need mankind- it just learns, improves, and keeps going.",
          "It’s like gifting science a brain that never sleeps.",
          "This innovation proves how AI can be combined with science- and it sparks a BIG question:",
          "What if the next biggest discovery comes from a machine - and not a human?"
        ]
      }
    ],
    "sources": [
      {
        "text": "“This AI-powered lab runs itself—and discovers new materials 10x faster”",
        "url": "https://www.sciencedaily.com/releases/2025/07/250714052105.htm"
      }
    ]
  },  
];

const BreakthroughBriefs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-1 h-full flex flex-col">
        <div className="container mx-auto px-4 py-10 relative flex-1 flex flex-col h-full">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Breakthrough Briefs</h1>
          <p className="text-gray-600 mb-6">
            Quick summaries of the latest STEM breakthroughs and discoveries.
          </p>

          {/* 🔍 Search Input (top-right) */}
          <div className="absolute top-10 right-4 md:right-10 border-2 border-blue-300 rounded-lg">
            <Input
              type="text"
              placeholder="Search Articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64"
            />
          </div>

          {/* 📰 Filtered Articles */}
          <div className="space-y-6 mt-20">
            {filteredArticles.length === 0 ? (
              <p className="text-gray-500 text-center">No articles found.</p>
            ) : (
              filteredArticles.map((article) => {
                const isExpanded = expandedIds.includes(article.id);
                return (
                  <article
                    key={article.id}
                    className={
                      `bg-white bg-opacity-95 rounded-2xl border border-blue-200 shadow-lg max-w-4xl xl:max-w-5xl mx-auto transition-colors duration-300 ` +
                      (isExpanded ? 'ring-2 ring-blue-400 bg-gradient-to-br from-blue-50 via-white to-blue-100' : 'hover:ring-1 hover:ring-blue-200 hover:scale-105')
                    }
                    style={{ boxShadow: isExpanded ? '0 12px 40px 0 rgba(34, 139, 230, 0.13)' : undefined }}
                  >
                    <button
                      className={
                        `w-full text-left focus:outline-none flex items-center justify-between px-6 md:px-8 py-5 rounded-2xl transition-colors duration-200 ` +
                        (isExpanded ? 'bg-blue-50' : 'hover:bg-blue-50')
                      }
                      onClick={() => {
                        if (isExpanded) {
                          setExpandedIds(expandedIds.filter(id => id !== article.id));
                        } else {
                          setExpandedIds([...expandedIds, article.id]);
                        }
                      }}
                      aria-expanded={isExpanded}
                    >
                      <div>
                        <h2 className="text-xl md:text-2xl font-extrabold mb-1 text-blue-900 transition-colors duration-200">{article.title}</h2>
                        {!isExpanded && (
                          <p className="mb-2 text-gray-600 text-base font-normal">{article.description}</p>
                        )}
                        <p className="italic text-gray-600 mb-0 text-base md:text-lg">{article.author}</p>
                      </div>
                      <span
                        className={
                          `ml-4 text-3xl transition-transform duration-300 ` +
                          (isExpanded ? 'rotate-180 text-blue-600' : 'rotate-0 text-gray-400')
                        }
                        aria-hidden="true"
                      >
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </button>
                    <div
                      className={
                        `overflow-hidden transition-all duration-[1400ms] ease-in-out bg-white px-6 md:px-8 ` +
                        (isExpanded ? 'max-h-[70vh] py-6 opacity-100 bg-blue-50' : 'max-h-0 py-0 opacity-0 bg-white')
                      }
                      style={{
                        visibility: 'visible',
                      }}
                    >
                      <div
                        className={
                          isExpanded
                            ? 'overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50 pr-2 h-full'
                            : ''
                        }
                        style={{ maxHeight: isExpanded ? '50vh' : 'none' }}
                      >
                        <hr className="my-4 border-blue-100" />
                        {article.sections.map((section, idx) => (
                          <div key={idx} className="mb-8">
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">{section.heading}</h3>
                            {section.content.map((para, i) => (
                              <p className="mb-4 text-black leading-relaxed text-sm md:text-base" key={i}>{para}</p>
                            ))}
                          </div>
                        ))}
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-700 text-base md:text-lg">Sources:</h4>
                          <ul className="list-disc ml-8 text-black text-xs md:text-sm">
                            {article.sources.map((src, i) => (
                              <li key={i}>
                                {src.url ? (
                                  <>
                                    {src.text.split('"')[0]}
                                    <a
                                      href={src.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 underline break-all"
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
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BreakthroughBriefs;
