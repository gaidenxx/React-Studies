import { useState, useCallback } from "react";
import quizCompleteImg from '../assets/quiz-complete.png';

import QUESTIONS_LIST from '../questions.js';
import Question from "./Question.jsx";

export default function Quiz () {
    const [userAnswers, setUserAnswers] = useState([]);
    

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS_LIST.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        // update the state with the old state values + selectedAnswer
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer])

    // Render conditions
    if(quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Quiz complete img"/>
                <h2>Quiz completed!</h2>
            </div>
        )
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}