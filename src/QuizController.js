/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* November 22, 2022
*/

import {useState} from 'react';
import quizData from './ImageData.json';
import Begin from './Begin';
import ImageView from './ImageView';
import Results from './Results';

// The QuizController mediates between the Begin, ImageView, Results, and ImageData, and is responsible
// for selecting the random number that the ImageData will use to choose the image and 
// answer to return to the ImageView.


const QuizController = () =>{

    var [activeQuestion, setActiveQuestion] = useState(newRandomNum());
    var [page, setPage] = useState(1);
    var [correctCount, setCorrectCount] = useState(0);

    function newRandomNum(){
        
        // This function will run "Math.Random() * 19" and update the new random number to select 
        // which position from the DataModel image array to choose from. The random number will be between 
        // 0 - 19 since there are 20 imaage questions within the DataModel array.

        return Math.floor(Math.random()*4);

    }


    // This function creates a new set of multiple choice answers to send along with
    // the question and correct answer.
    function getNewMultipleChoices(){

        // Temporary array will hold the 4 random multiple choices. It is initiated with the 
        // first correct answer.
        let tempArr = [activeQuestion];
        let count = 1;

        // Will loop around four times. Will be changed to loop 20 times.
        while(count < 4){

            // With every iteration a new currentValue is created 
            let currentValue = newRandomNum();
            
            //Checks the array for duplicates.
            if(!tempArr.includes(currentValue)){
                tempArr[count++] = currentValue;
            }
        }

        /*  We have to reassign the correct answer which is in the first 
            to a random position within the tempArray. */
        let tempPos = newRandomNum();
        let temp = tempArr[tempPos];
        tempArr[tempPos] = activeQuestion;
        tempArr[0] = temp;

        return tempArr;
    }

    /*  This handler only runs on the beginning page an tells it to change to the second page which is 
        ImageView page */
    const onBeginHandler = () => {

        setPage(page = 2);

    }

    return (
        <div className="QuizController">
            {page === 1 && <Begin onBeginHandler={onBeginHandler}/>}
            {page === 2 && <ImageView
                data = { quizData.data}
                activeQuestion = {activeQuestion} 
                onSetActiveQuestion = { setActiveQuestion }
                correctCount= { correctCount }
                setCorrectCount = { setCorrectCount }
                page = { page }
                setPage = { setPage }
                newMultipleChoice = { getNewMultipleChoices() }/>}
            {page === 3 && <Results 
                correctCount= { correctCount }
                setCorrectCount = { setCorrectCount }
                page = { page }
                setPage = { setPage }/>}
        </div>
    );
};

export default QuizController;