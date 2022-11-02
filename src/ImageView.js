/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* October 22, 2022
*/
import React, {useState} from "react";

// The QuizController sends the new image questions and multiple choice answers
// to display to the user.


const ImageView  = ({ 
  activeQuestion, 
  onSetActiveQuestion, 
  multiArr, 
  randomNum}) => {

    //Temporary location for object array. Only for temporary implementation.
    const imgArray = [
      {imageQuestion: './images/image1.png', correctAnswer: '3/5'},
      {imageQuestion: "./images/image2.png", correctAnswer: '3/8'},
      {imageQuestion: "./images/image3.png", correctAnswer: '1/4'},
      {imageQuestion: "./images/image4.png", correctAnswer: '2/5'}
    ];

    const testBtn = (e) => {

      onSetActiveQuestion(activeQuestion = randomNum);

    }

    return (
      <main> 
        <div class="leftBox">
          <img src={imgArray[activeQuestion].imageQuestion} alt="image" />
        </div>

        <div class="rightBox">
          <div className="rightInnereBox">
            <h1>Current question #{activeQuestion} : {imgArray[activeQuestion].correctAnswer}</h1>
            <h1> Multiple choices : { multiArr }</h1>
            
            <input type="radio" name={imgArray[multiArr[0]].correctAnswer} value={imgArray[multiArr[0]].correctAnswer}/>
            <label>{imgArray[multiArr[0]].correctAnswer}</label>
            
            <input type="radio" name={imgArray[multiArr[1]].correctAnswer} value={imgArray[multiArr[1]].correctAnswer}/>
            <label>{imgArray[multiArr[1]].correctAnswer}</label>
            
            <input type="radio" name={imgArray[multiArr[2]].correctAnswer} value={imgArray[multiArr[2]].correctAnswer}/>
            <label>{imgArray[multiArr[2]].correctAnswer}</label>
            
            <input type="radio" name={imgArray[multiArr[3]].correctAnswer} value={imgArray[multiArr[3]].correctAnswer}/>
            <label>{imgArray[multiArr[3]].correctAnswer}</label>
            <br/>
            <button onClick={ testBtn }>Test Cycle Button</button>

          </div>
        </div>
      </main>
    );

    //updateImageView(){

    //     // This function will update the image. The image will show the user 
    //     // a fraction to answer correctly.
    //     // Does not return a value.
    //     QuizController.getNewImageQuestion();
        
    //     // Do something.
    // }


    // ratioBtnMultipleChoice(){

    //     // Will show the user multiple choice questions to the user.
    //     // A radio button will be assigned to each multiple choice.
    //     // Does not return a value
    //     QuizController.getNewMultipleChoice(); // Requests QuizController to get multiple choice
    // }


    // /* 
    //     Both the updateImageView and ratioBtnMultipleChoice functions will 
    //     work with a button event listener. A new image and 
    //     new multiple choice answers will be chosen for the user after the user
    //     has submitted and answer.
    
    // */


    // checkIfCorrect(){

    //     // This function will ask the QuizController for the correct answer
    //     // from the DataModel.
    //     // Using a conditional the function will find out if the user answered
    //     // the question correctly.

    //     // For example:
    //     if(userAnswer == QuizController.getCorrectAnswer()){
    //         // Update how many time the user has answered correctly.
    //         QuizController.updateCorrectCount();
    //     }
    //     // Does not return a value.

    // }
}

export default ImageView;