/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* November 22, 2022
*/

/* This is the third page which will shos the user the amount of questions they have answered correctly.*/
const Results  = ({
  /* These variable are passed on from QuizController. */
  totalCorrect,
  setTotalCorrect,
  currentPage,
  setCurrentPage
}) => {

  const myStyle={
    backgroundImage: "url('./images/star_bg.png')",
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  /* This function will return a message depending on the amount of correct questions the user has answered. */
  function resultMessage(total){
    if(total <= 2){
      return 'How about we try again.'
    }
    if(total === 3 || total === 4){
      return 'Well done!' 
    }
    if(total === 5){
      return 'Amazing Job!'
    }
  }

  const retryBtn = (e) => {

    setTotalCorrect(0);// Resets total correct back to zero.
    setCurrentPage(currentPage = 2); // Sends user back to page 2 to retry quiz. 

  }

  return (
    <main> 
      <div class="leftBox">
        <div class="centerContent" style={ myStyle }>
          <h1>You got</h1>
          <div class="frac">
            <span>{totalCorrect}</span>
            <span class="symbol">/</span>
            <span class="bottom">5</span>
          </div>
          <h1>{resultMessage(totalCorrect)}</h1>
        </div>
      </div>

      <div class="rightBox">
        <div class="centerContent">

          <button onClick={ retryBtn }>More Pratice</button>
          
        </div>
      </div>
    </main>
    );
};

export default Results;