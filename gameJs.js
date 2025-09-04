
let stepss = 0;
let mostsSteps;

let my_timer;
if (location.href.includes("game.html")) {
  let seconds;


  let i = 60
  function timeIsOver() {
    i--;
    document.querySelector("h3").innerText = `you have ${i} seconds to succeed`
  }



  //-	כפתור להפעלת טיימר המגביל את המשחק בדקה
  document.querySelector("#choose-timer").onclick = (e) => {
    e.target.style.display = "none";
    document.querySelector("h3").innerText = `you have 60 seconds to succeed`

    seconds = setInterval(() => {
      timeIsOver()

    }, 1000)





    my_timer = setTimeout(() => {
      +-    setMyTimer();
    }, 3000)

  }

  let mySteps = 0;


  let pictures = ["1", "2", "3", "5", "4", "6", "1", "2", "3", "5", "4", "6"]
  // -	ערבוב המערך של המספרים המצביעים לתמונות ע"י RANDOM
  const shuffleArray = () => {
    for (let i = pictures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pictures[i];
      pictures[i] = pictures[j];
      pictures[j] = temp;
    }
  }


  //   -	ציור מערך כפתורי הכרטיסים ע"י MAP

  function play() {
    document.querySelector("#remembered").innerHTML = "";
    pictures.map((p, i) => {
      document.querySelector("#remembered").innerHTML += `<Button  >
    <img src=" " ></img>   
        </div>`;



    })

  }

  play()
  //-	הצמדת ארוע CLICK לכפתורים ע"י QUERYSELECTORALL בפונקציית CHANGE



  function changeCard() {
    const list = document.querySelectorAll("#remembered Button");

    const contents = Array.from(list)
    contents.map((c, i) => {
      c.onclick = e => {
        console.log(e.srcElement.src);

        change(e, i)
      }
    }
    )

  }
  changeCard();
  shuffleArray();

  let aa = "";
  let ai;
  let endPlay = 0;

  //-	פונקציית המתרחשת בעת לחיצה כנ"ל המוסיפה src לתמונה הלחוצה

  function change(c, i) {
    console.log(c.srcElement.src);
    if (c.srcElement.src == "file:///C:/AAA/js/%D7%94%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98/game.html") {
      c.srcElement.src = `./pictures/${pictures[i]}.jpg`
      console.log("222");
      chackIsSame = setTimeout(() => {
        isSame(c, i);
      }, 1000)

    }
  }


  //  -	פונקצייה הבודקת התאמה בין זוג כרטיסים
  function isSame(c, i) {
    console.log(c.srcElement)
    if (aa == "") {
      aa = c;
      ai = i;
    }
    else {
      stepss++;
      mySteps++;
      if (c.srcElement.src != aa.srcElement.src || ai == i) {
        c.srcElement.src = " "
        aa.srcElement.src = " "
        aa = '';
        ai = 0;
      }
      else {
        console.log("wow");
        aa = '';
        ai = 0;
        endPlay++;
        if (endPlay == pictures.length / 2) {
          setMyTimer()
        };

      }
    }
  }








  ///-	פןנקצייה המסיימת את המשחק בעת סיום הפיכת כל הקלפים/סיום הזמן הקצוב ומעלימה את המשחק
  function setMyTimer() {
    clearInterval(seconds)
    document.querySelector("h3").className = "changeDisplay"
    document.querySelector("#remembered").style.display = "none"
    document.querySelector("#choose-timer").style.display = "none"


    let shmira = localStorage.getItem("play");
    arr = JSON.parse(shmira);

    if (endPlay == pictures.length / 2) {
      console.log("woooooooooo20020ooooow")


      if (arr[arr.length - 1].steps > mySteps || arr[arr.length - 1].steps == null) {
        console.log(5555);
        arr[arr.length - 1].steps = mySteps;
        //arr.filter(x => x.steps == 14)
        arr.sort((a, b) => {
          return a.steps - b.steps
        })
      }


      if (arr[arr.length - 1].steps == null) {
        arr.pop();
        // arr.filter(x => x.steps == 14)
      }
      console.log(8888);

    }
    else {
 
      alert("your time is finished alreadyyyyy")
      //arr = arr.filter(x => x.steps != null)
    }


    console.log(5555);
    arr = arr.filter(x => x.steps != null)
    const users = JSON.stringify(arr);
    localStorage.setItem("play", users)

    //document.querySelector("#remembered").id="change-display";

    document.querySelector("#endPlay").id = "AA"
    document.querySelector("#start-again").style.display = "block"

  }





  //-	כפתור שבעת לחיצה מעביר לעמור הראשון



  document.querySelector("#start-again").onclick = e => {
    history.back()
  }




  //פונקציה המסיימת את המשחק  ומדפיסה שיאים 
  function endTheGame() {
    document.querySelector("#endPlay").onclick = e => {
      document.querySelector("#theWinner").innerHTML = '';
      let arr = [];
      let shmira = localStorage.getItem("play");
      arr = JSON.parse(shmira);
      if (endPlay == pictures.length / 2) {
        document.querySelector("#theWinner").innerHTML += `<p>your steps is:   ${stepss} wowowow</p>  `;
      }
      else
        document.querySelector("#theWinner").innerHTML += '<p>try again maybe next time you will succed</p>'
      arr = JSON.parse(shmira);
      console.log(arr);
      if (arr.length > 0) {
        document.querySelector("#theWinner").innerHTML += `<p>the winner is  ${arr[0].name} time: ${arr[0].steps}!!!!!!</p>  `;
        if (arr.length > 1) {
          document.querySelector("#theWinner").innerHTML += `<p>the second winner is  ${arr[1].name} time: ${arr[1].steps}!!!!!!!</p>  `;

        }
      }
    }
  }
  endTheGame()
}