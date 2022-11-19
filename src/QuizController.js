/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* November 22, 2022
*/

import {useState} from 'react';
import quizData from './data/ImageData.json';
import Begin from './components/Begin';
import ImageView from './components/ImageView';
import Results from './components/Results';

// The QuizController mediates between the Begin, ImageView, Results, and ImageData, and is responsible
// for selecting the random number that the ImageData will use to choose the image and 
// answer to return to the ImageView.
const QuizController = () =>{
    var [activeQuestion, setActiveQuestion] = useState(newRandomNum());
    var [currentPage, setCurrentPage] = useState(1);
    var [totalCorrect, setTotalCorrect] = useState(0);

    function newRandomNum(){
        
        // This function will run "Math.Random() * 20" and update the new random number to select 
        // which position from the DataModel image array to choose from. The random number will be between 
        // 0 - 19 since there are 20 imaage questions within the DataModel array.

        return Math.floor(Math.random()*20);

    }


    /*  This function generates a new set of multiple choice answers to send along with
        the every new question and correct answer. */
    function getNewMultipleChoices(){

        // Temporary array will hold the 4 random multiple choices. It is initiated with the 
        // current active answer.
        let tempArr = [activeQuestion];
        let count = 1;

        // Loop around three times to find the multiple choices.
        while(count < 4){

            // With every iteration a new random currentValue is created. 
            let currentValue = newRandomNum();
            
            /*  This condition checks the array for any duplicates: 
                If the tempArr does not have the currentValue, then add it to the array and increase
                the count varialble. */
            if(!tempArr.includes(currentValue)){
                tempArr[count++] = currentValue;
            }
        }

        /*  We have to reassign the correct answer which was set in the first position,
            to a random position within the tempArray. */
        let tempPos = Math.floor(Math.random()*4);;
        let temp = tempArr[tempPos];
        tempArr[tempPos] = activeQuestion;
        tempArr[0] = temp;

        return tempArr;
    }

    /*  This handler only runs on the beginning page an tells it to change to the second page which is 
        ImageView page, after the user clicks the start button. */
    const onStartHandler = () => {

        setCurrentPage(2);

    }

    return (
        <div className="QuizController">
            {currentPage === 1 && <Begin onStartHandler={ onStartHandler }/>}
            {currentPage === 2 && <ImageView
                data = { quizData.data }
                activeQuestion = { activeQuestion } 
                onSetActiveQuestion = { setActiveQuestion }
                totalCorrect = { totalCorrect }
                setTotalCorrect = { setTotalCorrect }
                currentPage = { currentPage }
                setCurrentPage = { setCurrentPage }
                newMultipleChoices = { getNewMultipleChoices() }/>}
            {currentPage === 3 && <Results 
                totalCorrect = { totalCorrect }
                setTotalCorrect = { setTotalCorrect }
                currentPage = { currentPage }
                setCurrentPage = { setCurrentPage }/>}
        </div>
    );
};

export default QuizController;