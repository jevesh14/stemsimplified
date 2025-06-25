import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Gamepad } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

// Multi-quiz data structure
const quizzes = [
  {
    id: "ai-antibiotic-resistance",
    title: "AI: 1, Antibiotic Resistance: 0",
    description: "Quiz based on the article by Lavanya Sharma.",
    questions: [
      {
        question: "What does the GAM (Group Association Model) do?",
        options: [
          "Creates video games",
          "Finds patterns in DNA for antibiotic resistance",
          "Teaches doctors coding",
          "Cleans hospitals"
        ],
        correctAnswer: "Finds patterns in DNA for antibiotic resistance"
      },
      {
        question: "Why is antibiotic resistance a growing problem?",
        options: [
          "Bacteria can evolve resistance making treatments ineffective",
          "It's caused by too much water",
          "It only affects rare tropical diseases",
          "It's solved by sunlight"
        ],
        correctAnswer: "Bacteria can evolve resistance making treatments ineffective"
      },
      {
        question: "How is GAM different from traditional tools for detection?",
        options: [
          "It only finds already known mutations",
          "It finds patterns in DNA that aren't explicitly known",
          "It uses a stethoscope for detection",
          "It finds resistance only for viruses"
        ],
        correctAnswer: "It finds patterns in DNA that aren't explicitly known"
      },
      {
        question: "Why does this matter for global health?",
        options: [
          "It can help save lives by identifying resistance quickly",
          "It has no impact on patient treatments",
          "It replaces vaccines for all illnesses",
          "It only applies to common colds"
        ],
        correctAnswer: "It can help save lives by identifying resistance quickly"
      },
      {
        question: "According to the article, how many people developed multidrug-resistant TB in 2021?",
        options: ["450,000", "1,000", "57,000", "4,500,000"],
        correctAnswer: "450,000"
      }
    ]
  },
  {
    id: "pocket-sized-physics",
    title: "Pocket-Sized Physics: Turning Your Phone into an Antimatter Detector",
    description: "Quiz based on the article by Paridhi Gautam.",
    questions: [
      {
        question: "Why is studying antimatter important?",
        options: [
          "It can explain why matter dominates the universe",
          "It can help make smartphones more expensive",
          "It only applies to electronics",
          "It's only a theoretical subject with no application"
        ],
        correctAnswer: "It can explain why matter dominates the universe"
      },
      {
        question: "What is the AEgIS experiment trying to measure?",
        options: [
          "Whether antihydrogen atoms fall like ordinary matter due to gravity",
          "How long antiprotons can survive",
          "How to make smartphones glow in the dark",
          "Why matter disappears instantly"
        ],
        correctAnswer: "Whether antihydrogen atoms fall like ordinary matter due to gravity"
      },
      {
        question: "Why do researchers remove sensor layers from smartphone cameras for AEgIS?",
        options: [
          "To make them more sensitive to antiprotons",
          "To make phone screens brighter",
          "To enable charging faster",
          "To capture video of gravity"
        ],
        correctAnswer: "To make them more sensitive to antiprotons"
      },
      {
        question: "What is OPHANIM in the context of the article?",
        options: [
          "A high-resolution antiproton and antihydrogen detection device",
          "A mobile app for antigravity",
          "A medical device for hospitals",
          "A virtual reality simulation tool"
        ],
        correctAnswer: "A high-resolution antiproton and antihydrogen detection device"
      },
      {
        question: "Why is the study of antimatter significant for understanding the universe?",
        options: [
          "It may reveal why matter dominates over antimatter",
          "It has no significance",
          "It can charge phones instantly",
          "It replaces ordinary matter in the universe"
        ],
        correctAnswer: "It may reveal why matter dominates over antimatter"
      }
    ]
  },
  {
    id: "soil-factor-floods",
    title: "The Soil Factor: Soil Saturation Triggers Floods",
    description: "Quiz based on the article by Aishna Goyal.",
    questions: [
      {
        question: "What triggers severe flooding even in moderate storms?",
        options: [
          "Soil that is already saturated with water",
          "Dry, sandy soil",
          "Very cold temperatures",
          "Strong winds"
        ],
        correctAnswer: "Soil that is already saturated with water"
      },
      {
        question: "What is the critical threshold of soil moisture?",
        options: [
          "Point when soil can no longer absorb water",
          "Point when soil becomes dry",
          "Point when water turns into ice",
          "Point when soil can always absorb more water"
        ],
        correctAnswer: "Point when soil can no longer absorb water"
      },
      {
        question: "Why is soil moisture significant for flood prediction?",
        options: [
          "It determines when flooding can occur suddenly",
          "It doesn't matter for flood prediction",
          "It only affects plants",
          "It is unrelated to flood modeling"
        ],
        correctAnswer: "It determines when flooding can occur suddenly"
      },
      {
        question: "How can understanding soil moisture help communities?",
        options: [
          "Better infrastructure and flood forecasting",
          "Make buildings disappear",
          "Make water boil instantly",
          "Prevent soil erosion completely"
        ],
        correctAnswer: "Better infrastructure and flood forecasting"
      },
      {
        question: "What is the role of watersheds in flood prediction?",
        options: [
          "Help design flood prevention strategies",
          "Make water disappear",
          "Have no role",
          "Increase flooding universally"
        ],
        correctAnswer: "Help design flood prevention strategies"
      }
    ]
  },
  {
    id: "time-dilation-hidden-side",
    title: "Time Dilation - The Hidden Side of Time",
    description: "Quiz based on the Delve Deeper article by Paridhi Gautam.",
    questions: [
      {
        question: "What is time dilation?",
        options: [
          "Time is absolute and universal for everyone",
          "Time slows down as you move closer to the speed of light",
          "Time doesn't change regardless of speed",
          "Time only affects spacecraft and not people"
        ],
        correctAnswer: "Time slows down as you move closer to the speed of light"
      },
      {
        question: "Why is the speed of light special in relativity?",
        options: [
          "It is the only variable quantity in physics",
          "It can be added or subtracted like any other velocity",
          "It remains constant regardless of the observer's motion",
          "It only applies to very large objects"
        ],
        correctAnswer: "It remains constant regardless of the observer's motion"
      },
      {
        question: "Why do GPS satellites have to account for time dilation?",
        options: [
          "Their clocks run slower due to their high speeds",
          "Their clocks run faster due to weaker gravity",
          "Their clocks experience both special and general relativistic effects",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        question: "How does gravity affect the flow of time?",
        options: [
          "Time is absolute and doesn't respond to gravity",
          "Time speeds up closer to massive objects",
          "Time slows down closer to massive objects",
          "Time becomes irrelevant near black holes"
        ],
        correctAnswer: "Time slows down closer to massive objects"
      },
      {
        question: "Is time travel to the future possible according to relativity?",
        options: [
          "Yes, it occurs naturally when traveling at near light speeds",
          "No, it contradicts the laws of physics",
          "Yes, but only through a wormhole",
          "No, time can only move backward"
        ],
        correctAnswer: "Yes, it occurs naturally when traveling at near light speeds"
      }
    ]
  },
  {
    id: "able-device-breakthrough",
    title: "ABLE Device: A Breakthrough in Disease Detection",
    description: "Quiz based on the article by Taksh Jain.",
    questions: [
      {
        question: "What is the ABLE device designed to do?",
        options: [
          "Detect airborne molecules and help with disease detection",
          "Charge mobile phones quickly",
          "Replace ventilators for patients",
          "Measure oxygen levels in water"
        ],
        correctAnswer: "Detect airborne molecules and help with disease detection"
      },
      {
        question: "Why is ABLE significant for neonatal care?",
        options: [
          "It can track disease markers through breathing, making diagnosis less invasive",
          "It replaces vaccinations",
          "It allows premature infants to walk earlier",
          "It provides a better environment for delivery"
        ],
        correctAnswer: "It can track disease markers through breathing, making diagnosis less invasive"
      },
      {
        question: "Why are airborne particles important for disease detection?",
        options: [
          "They carry harmful pathogens that can be introduced through breathing and spreading",
          "They can only carry pollen",
          "They are too rare to be detected",
          "They only matter for allergies"
        ],
        correctAnswer: "They carry harmful pathogens that can be introduced through breathing and spreading"
      },
      {
        question: "What is the first step in ABLE's detection process?",
        options: [
          "Air sampling to draw in air from the environment",
          "Heating air to boil it",
          "Directly inserting a sensor into the bloodstream",
          "Measuring sound vibrations"
        ],
        correctAnswer: "Air sampling to draw in air from the environment"
      },
      {
        question: "Why is the ABLE device considered a breakthrough for disease detection?",
        options: [
          "It allows for early and less invasive disease detection using breath",
          "It is only useful for treating rare conditions",
          "It replaces the need for medical staff",
          "It operates exclusively in space environments"
        ],
        correctAnswer: "It allows for early and less invasive disease detection using breath"
      }
    ]
  }
  // {
  //   id: "tiny-bugs-infinite-potential",
  //   title: "Tiny Bugs, Infinite Potential",
  //   description: "Quiz based on the article by Sandra Myat (Team Thailand).",
  //   questions: [
  //     {
  //       question: "What is the main function of microbots as described in the article?",
  //       options: [
  //         "To remove clots from arteries",
  //         "To deliver medicine directly to targeted areas inside the body",
  //         "To enhance memory through electrical pulses",
  //         "To record brain activity for doctors"
  //       ],
  //       correctAnswer: "To deliver medicine directly to targeted areas inside the body"
  //     },
  //     {
  //       question: "What powers the movement of some microbots?",
  //       options: [
  //         "Sunlight and wind",
  //         "Friction from red blood cells",
  //         "Magnetic fields and chemical reactions",
  //         "Electric pulses from neurons"
  //       ],
  //       correctAnswer: "Magnetic fields and chemical reactions"
  //     },
  //     {
  //       question: "Why are microbots compared to delivery drivers in the article?",
  //       options: [
  //         "Because they come in different vehicle shapes",
  //         "Because they travel fast and sometimes get lost",
  //         "Because they transport medicine directly to the problem area",
  //         "Because they use GPS to move inside the body"
  //       ],
  //       correctAnswer: "Because they transport medicine directly to the problem area"
  //     },
  //     {
  //       question: "What major benefit do microbots offer compared to traditional treatments like chemotherapy?",
  //       options: [
  //         "They are less expensive",
  //         "They boost immunity permanently",
  //         "They only target the problem area, reducing side effects",
  //         "They eliminate the need for doctors"
  //       ],
  //       correctAnswer: "They only target the problem area, reducing side effects"
  //     },
  //     {
  //       question: "According to the article, how are microbots shaped?",
  //       options: [
  //         "Like a red blood cell to move easily through the bloodstream",
  //         "Like a camera to record internal images",
  //         "Like a needle to inject medicine",
  //         "Like a white blood cell to fight infections"
  //       ],
  //       correctAnswer: "Like a red blood cell to move easily through the bloodstream"
  //     }
  //   ]
  // }, 
];

const Games = () => {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  // Find the selected quiz object
  const selectedQuiz = quizzes.find(q => q.id === selectedQuizId);
  const quizQuestions = selectedQuiz ? selectedQuiz.questions : [];

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setScore(0);
    setCurrentQuestion(0);
    setCompleted(false);
    setSelectedAnswer(null);
    setUserAnswers([]);
  };

  const handleNext = () => {
    // Record the user's answer
    setUserAnswers(prev => {
      const updated = [...prev];
      updated[currentQuestion] = selectedAnswer || "";
      return updated;
    });
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion === quizQuestions.length - 1) {
      setCompleted(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }

    setSelectedAnswer(null); // reset for next question
  };

  const handleReset = () => {
    setShowQuiz(false);
    setCompleted(false);
    setSelectedAnswer(null);
    setUserAnswers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Games & Fun</h1>
        <p className="text-gray-600 mb-8">
          Interactive games and activities to make learning STEM fun.
        </p>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <Card className="w-full transition-all hover:shadow-lg mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Gamepad className="h-6 w-6 text-blue-600" />
                <CardTitle>STEM Article Quizzes</CardTitle>
              </div>
              <CardDescription>
                Select an article and test your knowledge!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showQuiz ? (
                <div>
                  <p className="text-gray-600 mb-4 text-center">
                    Choose an article below to start its quiz.
                  </p>
                  <div className="flex justify-center mb-4">
                    <select
                      className="rounded-lg border border-blue-300 px-4 py-2 text-lg font-semibold bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full max-w-xl text-blue-900"
                      value={selectedQuizId || ""}
                      onChange={e => setSelectedQuizId(e.target.value)}
                    >
                      <option value="" disabled>
                        -- Select an Article --
                      </option>
                      {quizzes.map((quiz) => (
                        <option key={quiz.id} value={quiz.id}>
                          {quiz.title} 
                        </option>
                      ))}
                    </select>
                  </div>
                  {selectedQuiz && (
                    <div className="text-center text-gray-500 text-sm mb-2">
                      {selectedQuiz.description}
                    </div>
                  )}
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 mt-2"
                    onClick={handleStartQuiz}
                    disabled={!selectedQuizId}
                  >
                    Start Quiz
                  </Button>
                </div>
              ) : !completed ? (
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </h3>
                    <p className="text-blue-800 font-medium mb-4">
                      {quizQuestions[currentQuestion].question}
                    </p>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 p-3 rounded-md border ${
                            selectedAnswer === option ? "bg-blue-200" : "border-blue-200"
                          } hover:bg-blue-100 cursor-pointer`}
                          onClick={() => setSelectedAnswer(option)}
                        >
                          <Checkbox
                            id={`option-${index}`}
                            checked={selectedAnswer === option}
                          />
                          <label htmlFor={`option-${index}`} className="cursor-pointer flex-grow">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                    {selectedAnswer && (
                      <div className="text-right mt-4">
                        <Button
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={handleNext}
                        >
                          {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Quiz Complete!</h3>
                  <p className="text-lg mb-3">
                    Your score: <span className="font-bold text-blue-700">{score}/{quizQuestions.length}</span>
                  </p>
                  <p className="text-gray-600">
                    {score === quizQuestions.length
                      ? "Perfect score! You're a STEM expert!"
                      : score >= quizQuestions.length / 2
                        ? "Great job! Keep learning!"
                        : "Keep practicing to improve your score!"}
                  </p>
                  {quizQuestions.length > 0 && userAnswers.length === quizQuestions.length && (
                    <div className="mt-8">
                      <h4 className="font-semibold text-lg mb-4 text-blue-800">Review Your Answers</h4>
                      {quizQuestions.map((q, idx) => {
                        const userAnswer = userAnswers[idx];
                        const isCorrect = userAnswer === q.correctAnswer;
                        if (isCorrect) return null;
                        return (
                          <div key={idx} className="mb-4 p-4 bg-red-50 border-l-4 border-red-400 rounded shadow-sm text-left">
                            <div className="font-medium text-blue-900 mb-2">Q{idx + 1}: {q.question}</div>
                            <div className="mb-1"><span className="font-semibold text-red-700">Your Answer:</span> <span className="text-red-700">{userAnswer || <span className='italic text-gray-400'>No answer</span>}</span></div>
                            <div><span className="font-semibold text-green-700">Correct Answer:</span> <span className="text-green-700">{q.correctAnswer}</span></div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter>
              {showQuiz ? (
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleReset}
                >
                  {completed ? "Try Another Quiz" : "Quit Quiz"}
                </Button>
              ) : (
                <p className="text-sm text-gray-500 text-center">
                  Select an article and start the quiz!
                </p>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Games;
