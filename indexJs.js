

  

    /// פעולה שמוחקת את השם אם הוא מכיל סיפרה
    
        document.querySelector("#text").onkeyup=(e)=>{
    
       if(e.key>0&&e.key<10){
        alert("you can't use number");
      
        document.querySelector("#text").value="";
       }}
       
    
    /// פעולה שמשנה את צבע הרקע של הכפתור
    
       document.querySelector("#start").onmouseover=(e)=>{
        if( e.target.style.background=="beige")
        e.target.style.background="burlywood"
        else
        e.target.style.background="beige"
   
        }
            //עצירת שליחת הטופס ושמירת נתוני גולשים
    
            document.querySelector("#connect").onsubmit=(e)=>
            {
                e.preventDefault();
               const user={name: document.querySelector("#text").value,steps:null}
               
                let arr=[];
                let shmira=localStorage.getItem("play");
                if(shmira)
            {
                   arr=JSON.parse(shmira);
           
                 if(arr[arr.length-1].name==user.name)
          
                 {}
                 else{
                        arr.push(user);}
                 }
                 else arr.push(user)
                 
                   
                
                
                //e.currentTarget.style.display="none"
               
              const users= JSON.stringify(arr);
               localStorage.setItem("play",users);
        
        location="game.html"
                }
      
    
    
    
    
    
    
    
    
    
    
    
    
    