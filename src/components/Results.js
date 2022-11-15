/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* November 22, 2022
*/
const Results  = ({
  totalCorrect,
  setTotalCorrect,
    page,
    setPage
}) => {

  function message(total){
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

    setTotalCorrect(0);
    setPage(page = 2);

  }

  return (
    <main> 
      <div class="leftBox">
        <div className="centerContent">
          <h1>You got</h1>
          <div class="frac">
            <span>{totalCorrect}</span>
            <span class="symbol">/</span>
            <span class="bottom">5</span>
          </div>
          <h1>{message(totalCorrect)}</h1>
        </div>
      </div>

      <div class="rightBox">
        <div className="centerContent">

          <button onClick={ retryBtn }>More Pratice</button>
          
        </div>
      </div>
    </main>
    );
};

export default Results;