import Navbar from "@/components/Navbar";

const RecentArticles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          The Most Recent Article
        </h1>
        <p className="text-gray-600 mb-8">
          Stay up to date with our latest STEM content across all categories.
        </p>

        <article className="max-w-2xl mx-auto text-left bg-white bg-opacity-70 p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-2">The Future of Healthcare Is in Your Breath — Literally</h1>
          <p className="italic mb-6">By Taksh Jain</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Introduction</h2>
          <p className="mb-4">
            Waiting to give a blood sample at the doctor’s office, you’ve probably wished there were a needle-free way to get the same info.
          </p>
          <p className="mb-4">
            Well, here we go, University of Chicago introduces a game-changer! A group of scientists created a portable device that can collect and detect airborne molecules. This device holds the potential to revolutionise the way diseases are detected and treated.
          </p>
          <p className="mb-4">A small insight, COVID is an airborne disease.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">What happened?</h2>
          <p className="mb-4">
            Scientists at the University of Chicago created a small, portable device (just four by eight inches across) nicknamed ABLE. (Airborne Biomarker Localisation Engine.) The scientists envision that this device could detect airborne particles in hospitals and public places.
          </p>
          <p className="mb-4">
            Wait up, what do airborne particles have to do with diseases??
          </p>
          <p className="mb-4">
            Here’s a quick summary: When you breathe, there is a possibility that there are harmful pathogens in the air surrounding you. (Oh, that’s pretty scary!) If these particles are inhaled, they are reintroduced into the air (possibly with a mutation) when someone coughs or sneezes, making it difficult to control the spread of disease.
          </p>
          <p className="mb-4">This is why COVID spread like wildfire in a forest.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">How does it work?</h2>
          <p className="mb-4">How can a device possibly detect such minute particles that we can’t even see!?</p>
          <p className="mb-4">
            It is challenging to detect the desired floating particles as they may be as few as one in a trillion. Till now, it required expensive equipment to do so, but this machine changes that.
          </p>
          <p className="mb-4">Let's see how, The device turns the air into liquid. No, but how?</p>
          <p className="mb-4">Here’s the process-</p>
          <p className="mb-4">1. Air sampling ABLE draws in air from the surrounding environment.</p>
          <p className="mb-4">2. Condensation It introduces water vapour and cools the air to turn it into a liquid state on a specifically designed surface.</p>
          <p className="mb-4">3. Concentration The condensation process above concentrates any airborne biomarkers (indicators of biological substances) into the droplets. (Basically gathering all the necessary particles and turning them into droplets)</p>
          <p className="mb-4">4. Detection The concentrated droplets are directed into a reservoir, where they can be tested using various detection methods.</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Why does it matter?</h2>
          <p className="mb-4">There are numerous potential applications for ABLE.</p>
          <p className="mb-4">For example, neonatal care. Premature infants (Infants that were born before the required time) are very fragile and vulnerable. Using methods, such as blood sampling to diagnose them, can be harmful. ABLE can be used to track newly identified biomarkers and optimize care for these infants, preventing those invasive methods.</p>
          <p className="mb-4">The device can also be used for people with diabetes. They can check their glucose levels just from their breath!</p>
          <p className="mb-4">And lastly, the scientists who made the disease are also collaborating with a doctor who treats inflammatory bowel disease. It may be possible to detect markers of inflammation from the breath of patients!</p>
          <p className="mb-4">If the device had existed before COVID, its detection would have been much easier, and it might not have spread as much.</p>
          <p className="mb-4">However, there is a small issue. The ability to easily detect airborne molecules is new. Scientists don't know what molecules they would need to look for yet!! In the future, scientists could modify the device further and upgrade it to solve the current issues.</p>
          <p className="mb-4">If you want to know more about the device, check out Scientists invent breakthrough device to detect airborne signs of disease on Science Daily</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Sources:</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              University of Chicago. "Scientists invent breakthrough device to detect airborne signs of disease." <em>ScienceDaily</em>, 21 May 2025.{" "}
              <a
                href="https://www.sciencedaily.com/releases/2025/05/250521124758.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.sciencedaily.com/releases/2025/05/250521124758.htm
              </a>
            </li>
            <li>
              Jingcheng Ma, Megan Laune, Pengju Li, Jing Lu, Jiping Yue, Yueyue Yu, Yamin Mansur, Amio P. D. Ritwik, Sai P. Peri, Jessica Cleary, Kaitlyn Oliphant, Zachary Kessler, Erika C. Claud, Bozhi Tian. Airborne biomarker localisation engine for open-air point-of-care detection. <em>Nature Chemical Engineering</em>, 2025, 2 (5): 321 DOI: 10.1038/s44286-025-00223-9
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default RecentArticles;
