    
    
    
    
     getCookie()
     //쿠키확인함수
     function getCookie(name){
         //쿠키를 얻는다.
         var cookies = document.cookie.split("; ");
          for(var i in cookies){

              if(cookies[i].search(name) != -1){ //쿠키를 찾은 경우

                  console.log("찾았다.")
                  return true; //찾은 의미로 true를 반환
                 }
          }
     }
     
    
    //쿠키 생성함수() 메개변수를 받아서 해당이름으로 1일간 유지되는 쿠키를 생성
    function createCookie(mainPopup){
                   
        var date = new Date();
        date.setDate(date.getDate()+1); //현재일자 + 1
        
        //쿠키에 저장할 문자열 생성
        var cookie = "";
        cookie += mainPopup +"="  +"true"+ ";";
        cookie +="expires="+date.toUTCString();

        document.cookie = cookie;
    }
        
     
