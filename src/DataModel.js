/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* October 22, 2022
*/


// DataModel class will store questions and answers.
// Will send to ImageView when request are made from QuizController.

const DataModel = () =>{

    // Preconditions are in the Constructor. The arrays and variables will
    // be used to populate the array when the class initiates.
    // constructor() {
        
    //     // Variable holds amount of times the user has answered correctly.
    //     var count = 0;

    //     // Object array will hold images with its correct answer
    //     // there should be 20 images in total. This is only an example:
    //     const imageArr = [
    //       {imageQuestion: "images/image1.png", correctAnswer: '3/5'},
    //       {imageQuestion: "images/image2.png", correctAnswer: '3/8'}
    //     ];


    //     // This array records which questions the user has answered 
    //     // in order to avoid repitition within a session.
    //     // Initiates empty since user has not answered yet.
    //     var userQuestions = [];
    // }

    var count = 0;
    
    const imageArr = [
        {imageQuestion: './images/image1.png', correctAnswer: '3/5'},
        {imageQuestion: "images/image2.png", correctAnswer: '3/8'},
        {imageQuestion: "images/image3.png", correctAnswer: '1/4'},
        {imageQuestion: "images/image4.png", correctAnswer: '2/5'}
      ];

    function getImageQuestion(randomNum){
        // This function selects the random image from the array using parameter which is passed 
        // from Quiz Controller. The image is then returned to the ImageView for use.
         return imageArr[randomNum].imageQuestion;
    }
    
    
    // function getAnswer(randomNum){
    //     // This function selects the random answer from the array using parameter which is passed 
    //     // from Quiz Controller. The answer is then returned to the ImageView for use.
    //     return imageArr[randomNum].correctAnswer;
    // }
    

    // function getMultipleChoice(){
    //     // This function selects 3 multiple choice questions
    //     // and returns for the ImageView to display.
    //     return array;
    // }
    

    // function getCount(){
    //     // Returns how many times the user has answered correctly for 
    //     // the ImageView to display to user.
    //     return count;
    // }
    

    // function setCount(){
    //     // This function updates the amount of times the user has answered correctly.
    //     // Does not return a value.
    //     count++;
    // }


    // function updateUserQuestions(randomNum){
    //     // This function updates the userQuestion array with the questions the user has 
    //     // already been asked, to avoid repetition.
    //     // Does not return a value.
    //     userQuestions[n++] = randomNum;
    // }
};

export default DataModel;