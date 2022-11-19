/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* November 22, 2022
*/
import React, {useState, useEffect, useRef} from "react";

// The QuizController sends the new image questions and multiple choice answers
// to display to the user.
const ImageView  = ({ 
  data,   
  activeQuestion, 
  onSetActiveQuestion,
  totalCorrect, 
  setTotalCorrect,
  currentPage,
  setCurrentPage,
  newMultipleChoices}) => {

    /* These variables are only used by the ImageView. */
    var [selectedAnswer, setSelectedAnswer] = useState('');
    var [pastQuestionsArr, setPastQuestionsArr] = useState([activeQuestion]);
    var [numberOfQuestions, setNumberOfQuestions] = useState(1);
    var [correctMsg, setCorrectMsg] = useState('');
    var [btnDisabled, setBtnDisabled] = useState(true);
    var [radiosDisabled, setRadiosDisabled] = useState(false);
    const radioButtonWrapper = useRef();
    const progress = useRef();
    
    /*  UseEffect checks that the radio buttons become unselected after the new 
        multiple choices are generated. */
    useEffect(() => {

      const findCheckedInput = radioButtonWrapper.current.querySelector('input:checked');

      if(findCheckedInput) {

        findCheckedInput.checked = false;

      }
    }, [data]);  

    /* Handler when a radio button is selected. */
    const onRadioChangeHandler = (e) => {

      // Grabs the value from the selected radio button and sets button disable to false.
      setSelectedAnswer(e.target.value);
      setBtnDisabled(false);

    }

    /* EventListener when next button is clicked. */
    const nextBtn = (e) => {

      // Both the next button and radio buttons are disabled to avoid user clicking multiple times.
      setBtnDisabled(true);
      setRadiosDisabled(true);

      // If the user has selected the correct question then we can add to the totalCorrect counter and
      // we inform the user that they are correct, else the user is incorrect.
      if(data[activeQuestion].correctAnswer === selectedAnswer){    
        setCorrectMsg('Correct');
        setTotalCorrect(totalCorrect+1);   
      }else{
        setCorrectMsg('Incorrect');
      }

      // Adds CSS style called "active" to progessBar class. The progress bar will show the user that 
      // in 3 seconds they will see a new question. 
      progress.current.classList.add("active");

      setTimeout(() => {

        /*  If the number of questions answered is less than 5 this condition will:
            1.  Choose a new question to ask the user. 
            2.  Reset the radio button selected answer value to empty.
            3.  Increase the number of questions asked by one. We need to keep track of the
                amount of questions the user has been asked since they will only see 5 questions. */
        if(numberOfQuestions < 5){
          
          onSetActiveQuestion(checkForDuplicateQuestion());
          setSelectedAnswer(selectedAnswer = '');
          setNumberOfQuestions(numberOfQuestions+1);
        
        }else{

        /*  Else if the number of questionos is 5 then the condition will:
            1. Reset the number of questions asked back to zero.
            2. Empty the past question array.
            3. Change to the third page to show the user the amount of questions they have answered correctly.*/
          setPastQuestionsArr(pastQuestionsArr = []);
          setCurrentPage(3);

        }

        setCorrectMsg('');// Reset the correct or incorrect message to empty.
        
        // Removes CSS style called "active" from progessBar class. 
        progress.current.classList.remove("active");
        setRadiosDisabled(false);

      }, 3000);// Wait 3 seconds before moving on. 
    }

    // This function makes sure that there are no duplicate questions randomly chosen.
    function checkForDuplicateQuestion(){

      let tempQuestion;

      /*  Continue selecting a random number and assign it to tempQuestion. While tempQuestion is included 
          in the array called "pastQuestionsArr".
          Otherwise, if it is not included in the "pastQuestionsArr" then it has not been asked and we can 
          break from the loop. */
      do{
      
        tempQuestion = Math.floor(Math.random()*20);

      }while(pastQuestionsArr.includes(tempQuestion));

      // Adds the tempQuestion to the "pastQuestionsArr" to keep track of in the future.
      setPastQuestionsArr((oldArray) => oldArray.concat(tempQuestion));

      return tempQuestion;

    }
    
  /* This function is only used to make the fractions aesthetically pleasing. */
  function fractions(index){
    return (
      <div class="frac">
        <span>{ data[index].numerator}</span>
        <span class="symbol">/</span>
        <span class="bottom"> { data[index].denominator }</span>
      </div>
    )
  }

    return (
      <main className="imageView"> 
        <div class="leftBox">
          <div class="centerContent">
            <h1 class="correct">{ correctMsg }</h1>
            <img src={data[activeQuestion].imageQuestion} alt="Image" />
            <h1>{ data[activeQuestion].correctAnswer }</h1>
          </div>
        </div>

        <div class="rightBox">
          <div class="centerContent">
            <h1>Question #{ numberOfQuestions }. Solve the fraction.</h1>
                
              <div id="radioWrapper" ref={radioButtonWrapper}>
                <label>
                  <input type="radio" name="answer" disabled={ radiosDisabled } value={data[newMultipleChoices[0]].correctAnswer} key={newMultipleChoices[0]} onChange={ onRadioChangeHandler }/>
                  { fractions(newMultipleChoices[0]) }
                </label>
                
                <label>
                  <input type="radio" name="answer" disabled={ radiosDisabled } value={data[newMultipleChoices[1]].correctAnswer} key={newMultipleChoices[1]}  onChange={ onRadioChangeHandler }/>
                  { fractions(newMultipleChoices[1]) }
                </label>

                <label>
                  <input type="radio" name="answer" disabled={ radiosDisabled } value={data[newMultipleChoices[2]].correctAnswer} key={newMultipleChoices[2]} onChange={ onRadioChangeHandler }/>
                  { fractions(newMultipleChoices[2]) }
                </label>

                <label>
                  <input type="radio" name="answer" disabled={ radiosDisabled } value={data[newMultipleChoices[3]].correctAnswer} key={newMultipleChoices[3]} onChange={ onRadioChangeHandler }/>
                  { fractions(newMultipleChoices[3]) }
                </label>
              </div>
            <button onClick={ nextBtn } disabled={ btnDisabled }>Next Question</button>
            <div className="progressBar" ref={ progress }></div>
          </div>
        </div>
      </main>
    );
};

export default ImageView;