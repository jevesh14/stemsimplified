import Navbar from "@/components/Navbar";

const RecentArticles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">The most recent Article</h1>
        <p className="text-gray-600 mb-8">
          Stay up to date with our latest STEM content across all categories.
        </p>
        
        <article className="max-w-2xl mx-auto text-left bg-white bg-opacity-70 p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-2">AI: 1, Antibiotic Resistance: 0</h1>
          <p className="italic mb-6">By Lavanya Sharma</p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Introduction</h2>
          <p className="mb-4">
            Major news from Tulane University: Researchers have developed an AI that <em>instantly</em> detects antibiotic resistance in bacteria.
          </p>
          <p className="mb-4">
            Here's the kicker! This AI doesn't just speed things up-it could completely change the game when it comes to how we fight infections. Because antibiotic resistance isn't some “Future science problem.”
          </p>
          <p className="mb-4">
            It's a problem <em>now</em>. A problem why diseases like tuberculosis and staph infections are getting harder (and scarier) to treat.
          </p>
          <p className="mb-4">
            And this tech? It's like handing doctors a cheat code-<em>an upgrade</em> in how we understand and treat disease.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">What Happened?</h2>
          <p className="mb-4">
            Tulane University Scientists have made a new Group Association Model (GAM)-basically, a super smart AI that can find patterns across a large set of data that can find resistance to antibiotics in bacteria.
          </p>
          <p className="mb-4">
            Think of GAM like that one friend who can spot drama from a mile away: it sees tiny clues in the DNA (mutations) and figures out if bacteria are about to cause trouble (resist drugs-which you should always do!)
          </p>
          <p className="mb-4">
            Wait, wait, but what even is antibiotic resistance?
          </p>
          <p className="mb-4">
            Well, here's a quick crash course: In the past, people could take antibiotics to treat diseases like tuberculosis (TB) and staph. Now they can't. Why? Over time, these bacteria have developed resistance to the drugs. How?
          </p>
          <p className="mb-4">
            Antibiotics kill most bacteria, but some survive due to mutations in their DNA (now this is the problem). These resistant bacteria then reproduce, creating more bacteria that the antibiotic can't kill. (Big Yikes!)
          </p>
          <p className="mb-4">
            This means the antibiotics that used to work no longer do, making it much harder to treat these diseases.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">How Does It Work?</h2>
          <p className="mb-4">
            Okay, imagine training a dog to do tricks. The New Group Association Model (GAM) uses machine learning-a branch of AI where a model is trained on a large set of data to perform a task without being programmed step by step. Think of it as the training part of training the dog.
          </p>
          <p className="mb-4">
            GAM uses machine learning to find genetic mutations linked to drug resistance (you know, the same kind of mutations I mentioned earlier, the ones that let some bacteria survive antibiotics.)
          </p>
          <p className="mb-4">
            Current tools are basic, they look at known mutations and try to find the same mutation in the bacteria. This leads to errors, because they freak over harmless mutations believing they're the reason for antibiotics' resistance, just because they look similar to known ones.
          </p>
          <p className="mb-4">
            GAM is way smarter. It looks through a large set of data (DNA) from different bacterias, and whether they are resistant to the antibiotic or not. It finds the pattern in which the mutations occur. GAM then compares bacteria with different resistance patterns to find genetic changes that show resistance to specific drugs.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Why does it matter?</h2>
          <p className="mb-4">
            Well, because people die due to this, and the numbers are just UGLY. In 2021, 450,000 people developed multidrug-resistant tuberculosis, and treatment success rates dropped to JUST 57%.
          </p>
          <p className="mb-4">
            Right now, other methods are slow, inaccurate, and miss rare mutations. While this treatment is proven to outperform WHO's current resistance detection.
          </p>
          <p className="mb-4">
            And this tech? It helps doctors find the correct treatment before it's too late, it helps doctors save lives.
          </p>
          <p className="mb-4">
            If you want to read more, check out Researchers use AI to improve diagnosis of drug-resistant infections | ScienceDaily
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Sources:</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Tulane University. “Researchers Use AI to Improve Diagnosis of Drug-Resistant Infections." <em>Science Daily</em>, Apr. 2025,{" "}
              <a href="https://www.sciencedaily.com/releases/2025/04/250407173027.htm" target="_blank" rel="noopener noreferrer">
                https://www.sciencedaily.com/releases/2025/04/250407173027.htm
              </a>.
            </li>
            <li>
              Saliba, Julian G., et al. “Enhanced Diagnosis of Multi-Drug-Resistant Microbes Using Group Association Modeling and Machine Learning.” <em>Nature Communications</em>, vol. 16, no. 1, 2025, p. 2933, doi:10.1038/s41467-025-58214-6.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default RecentArticles;
