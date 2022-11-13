/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* October 22, 2022
*/
import React, {useState, useEffect, useRef} from "react";

// The QuizController sends the new image questions and multiple choice answers
// to display to the user.


const ImageView  = ({ 
  data,
  activeQuestion, 
  onSetActiveQuestion,
  correctCount, 
  setCorrectCount,
  page,
  setPage,
  newMultipleChoice,}) => {
    var [selectedAnswer, setSelectedAnswer] = useState('');
    var [pastArrayQuestions, setPastArrayQuestions] = useState([activeQuestion]);
    var [numberOfQuestions, setNumberOfQuestions] = useState(1);
    var [errorMsg, setErrorMsg] = useState('');
    var [correctMsg, setCorrectMsg] = useState('');
    const radiosWrapper = useRef();
    
    
    useEffect(() => {
      const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
      if(findCheckedInput) {
        findCheckedInput.checked = false;
      }
    }, [data]);

    const submitBtn = (e) => {
      // If no radio button is selected this condition will
      // return a message asking the user to choose one.
      if(selectedAnswer === ''){
        return setErrorMsg('Please select an answer');
      }

      // If the user has selected the correct question then we can add to thir correct counter.
      // else it is incorrect.
      if(data[activeQuestion].correctAnswer === selectedAnswer){    
        setCorrectMsg('Correct');
        setCorrectCount(correctCount+1);       
      }else{
        setCorrectMsg('Incorrect');
      }

      // Resets the error message to empty
      setErrorMsg(errorMsg = '');

      setTimeout(() => {
        // If the number of questions answered is less than 4 this condition will:
        // 1. Choose a new question to ask the user. 
        // 2. Reset the radio button selected answer.
        // 3. Increase the number of questions asked to the user by one.         
        if(numberOfQuestions < 5){
          
          onSetActiveQuestion(activeQuestion = checkForDuplicate());
          setSelectedAnswer(selectedAnswer = '');
          setNumberOfQuestions(numberOfQuestions+1);
        
        }else{

          setNumberOfQuestions(numberOfQuestions = 0);
          setPastArrayQuestions(pastArrayQuestions = []);
          setPage(page = 3);

        }
        setCorrectMsg('');

        }, 3000);
    }

    // This function makes sure that there are no duplicate answers.
    function checkForDuplicate(){

      let currentQuestion;

      // Continue selecting a random number and assign it to currentQuestion while currentQuestion is included 
      // in the array called "pastArrayQuestion".
      // Otherwise, if it is not included in the "pastArrayQuestions" then it has not been asked and we can 
      // break from the loop.
      do{
      
        currentQuestion = Math.floor(Math.random()*20);

      }while(pastArrayQuestions.includes(currentQuestion));

      setPastArrayQuestions((oldArray) => oldArray.concat(currentQuestion));

      return currentQuestion;

    }

    const onRadioChangeHandler = (e) => {

      // Grabs the value from the selected radio button. 
      setSelectedAnswer(e.target.value);

    }
    
  function fracEqualParts(index){
    return (
      <div class="frac">
        <span>{ data[index].numerator}</span>
        <span class="symbol">/</span>
        <span class="bottom"> {data[index].denominator}</span>
      </div>
    )
  }

    return (
      <main> 
        <div class="leftBox">
          <div class="centerContent">
            <h1 class="correct">{ correctMsg }</h1>
            <img src={data[activeQuestion].imageQuestion} alt="image" />
            <h1>{ data[activeQuestion].correctAnswer }</h1>
          </div>
        </div>

        <div class="rightBox">
          <div className="centerContent">
            <h1>Question #{ numberOfQuestions }. Solve the fraction.</h1>
                
              <ul ref={radiosWrapper}>
                <li>
                <label>
                  <input type="radio" name="answer" value={data[newMultipleChoice[0]].correctAnswer} key={newMultipleChoice[0]} onChange={ onRadioChangeHandler }/>
                  { fracEqualParts(newMultipleChoice[0]) }
                </label>
                </li>
                
                <li>
                <label>
                  <input type="radio" name="answer" value={data[newMultipleChoice[1]].correctAnswer} key={newMultipleChoice[1]}  onChange={ onRadioChangeHandler }/>
                  { fracEqualParts(newMultipleChoice[1]) }
                </label>
                </li>

                <li>
                <label>
                  <input type="radio" name="answer" value={data[newMultipleChoice[2]].correctAnswer} key={newMultipleChoice[2]} onChange={ onRadioChangeHandler }/>
                  {  fracEqualParts(newMultipleChoice[2]) }
                </label>
                </li>

                <li>
                <label>
                  <input type="radio" name="answer" value={data[newMultipleChoice[3]].correctAnswer} key={newMultipleChoice[3]} onChange={ onRadioChangeHandler }/>
                  {  fracEqualParts(newMultipleChoice[3]) }
                </label>
                </li>
              </ul>
            <h3 class="error"> { errorMsg } </h3>
            <button onClick={ submitBtn }>Next Question</button>
            
          </div>
        </div>
      </main>
    );
}

export default ImageView;

    //Temporary location for object array. Only for temporary implementation.
    // const imgArray = [
    //   {imageQuestion: './images/image1.png', correctAnswer: '3/5'},
    //   {imageQuestion: "./images/image2.png", correctAnswer: '3/8'},
    //   {imageQuestion: "./images/image3.png", correctAnswer: '1/4'},
    //   {imageQuestion: "./images/image4.png", correctAnswer: '1/5'},
    //   {imageQuestion: "./images/image1.png", correctAnswer: '2/7'},
    //   {imageQuestion: "./images/image2.png", correctAnswer: '2/3'},
    //   {imageQuestion: "./images/image3.png", correctAnswer: '7/5'},
    //   {imageQuestion: "./images/image4.png", correctAnswer: '4/5'},
    //   {imageQuestion: "./images/image1.png", correctAnswer: '4/5'},
    //   {imageQuestion: "./images/image2.png", correctAnswer: '9/5'},
    //   {imageQuestion: "./images/image3.png", correctAnswer: '5/9'},
    //   {imageQuestion: "./images/image4.png", correctAnswer: '1/9'},
    // ];



    
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