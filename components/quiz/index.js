import { useState } from "react";
import { quizData } from "@/data/quiz/quiz";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [answerCorrect, setAnswerCorrect] = useState(false);

    const handleAnswerSelection = (option) => {
        setSelectedOption(option);
        setAnswerCorrect(option === quizData[currentQuestion].answer);
    };

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption("");
        setAnswerCorrect(false);
    };

    return(
        <div>
            {currentQuestion < quizData.length ? (
                <div>
                    <h2>{quizData[currentQuestion].question}</h2>
                    {quizData[currentQuestion].options.map((option) => (
                        <div key={option}>
                                <button 
                                type="button"
                                className={`quiz-option ${selectedOption === option ? 'selected' : ''}`}
                                onClick={() => handleAnswerSelection(option)}
                            >
                            {option}
                           </button>
                            </div>
                    ))}
                    {selectedOption && (
                        <div>
                            {answerCorrect ? (
                                <img/>
                            ) : (
                                <div> 
                                    <img/>
                                    <p>
                                        The correct answer was {quizData[currentQuestion].answer}
                                    </p>
                                    </div>
                            )}
                            <button onClick={handleNextQuestion}>Next</button>
                            </div>
                    )}
             </div>

            ) : (
                <div>
                    <h2>Quiz Completed!</h2>
                    </div>
            )}
        </div>




    );


} ;

export default Quiz;