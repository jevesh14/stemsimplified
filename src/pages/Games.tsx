import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Gamepad } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

const Games = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const quizQuestions = [
    {
      question: "What is the closest planet to the Sun?",
      options: ["Venus", "Mercury", "Earth", "Mars"],
      correctAnswer: "Mercury"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["Wa", "H2O", "O2H", "H2O2"],
      correctAnswer: "H2O"
    },
    {
      question: "Which of the following is NOT a renewable energy source?",
      options: ["Solar", "Wind", "Coal", "Hydro"],
      correctAnswer: "Coal"
    }
  ];

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setScore(0);
    setCurrentQuestion(0);
    setCompleted(false);
    setSelectedAnswer(null);
  };

  const handleNext = () => {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Games & Fun</h1>
        <p className="text-gray-600 mb-8">
          Interactive games and activities to make learning STEM fun.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Gamepad className="h-6 w-6 text-blue-600" />
                <CardTitle>STEM Quiz Challenge</CardTitle>
              </div>
              <CardDescription>
                Test your knowledge with this quick science quiz!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showQuiz ? (
                <p className="text-gray-600 mb-4">
                  This quiz has {quizQuestions.length} questions about various science topics. 
                  See how many you can answer correctly!
                </p>
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
                          Next
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
                </div>
              )}
            </CardContent>
            <CardFooter>
              {!showQuiz ? (
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleStartQuiz}
                >
                  Start Quiz
                </Button>
              ) : completed ? (
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleReset}
                >
                  Try Again
                </Button>
              ) : (
                <div className="w-full flex justify-between items-center">
                  <p className="text-sm text-gray-500">Select an answer to continue</p>
                  <p className="text-sm font-medium">
                    Question {currentQuestion + 1}/{quizQuestions.length}
                  </p>
                </div>
              )}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Gamepad className="h-6 w-6 text-blue-600" />
                <CardTitle>More Games Coming Soon</CardTitle>
              </div>
              <CardDescription>
                We're developing more interactive learning games!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible className="w-full">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="flex w-full justify-between">
                    <span>Upcoming Games</span>
                    <span>+</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Element Matching Game</li>
                    <li>Build-a-Molecule</li>
                    <li>Math Challenge</li>
                    <li>Physics Simulator</li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                Check back soon for more interactive learning games and activities!
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Games;
