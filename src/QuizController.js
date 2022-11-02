/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* October 22, 2022
*/

import {useState} from 'react';
import ImageView from './ImageView';

// The QuizController mediates between the ImageView and DataModel, and is responsible
// for selecting the random number that the DataModel will use to choose the image and 
// answer to return to the ImageView.


const QuizController = () =>{

    var [activeQuestion, setActiveQuestion] = useState(newRandomNum());
    var [pastQuestionArr, setPastQuestionArr] = useState([]);

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

        // We have to reassign the correct answer which is in the first 
        // to a random position within the tempArray.
        let tempPos = newRandomNum();
        let temp = tempArr[tempPos];
        tempArr[tempPos] = activeQuestion;
        tempArr[0] = temp;

        return tempArr;
    }

    // function getCorrectAnswer(){

    //     // This function will retrieve the correct answer for the ImageView
    //     // to display to the user.
    //     return 22;//DataModel.getAnswer(newRandomNum());

    // }

    // // Updates the amount of times that the user has answered correctly.
    // function updateCorrectCount(){

    //     ;//DataModel.setCount();

    // }

    return (
    <ImageView
        activeQuestion = {activeQuestion} 
        onSetActiveQuestion = { setActiveQuestion }
        multiArr = { getNewMultipleChoices() }
        randomNum = { newRandomNum }/>);
};

export default QuizController;