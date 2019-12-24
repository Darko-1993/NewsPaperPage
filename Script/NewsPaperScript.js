function pokrenu(){
    
    let klikni = document.getElementById("newsID");
    let klikni1 = document.getElementById("fashionID");
    let klikni2 = document.getElementById("gadgetsID");
    let klikni3 = document.getElementById("lifestyleID");
    let klikni4 = document.getElementById("videoID");
    let klikni5 = document.getElementById("featuresID");
    
    klikni.onclick = function(){
        alert("NEWS");
    };
    
    klikni1.onclick = function(){
        alert("FASHION");
    };
    
    klikni2.onclick = function(){
        alert("GADGETS");
    };
    
    klikni3.onclick = function(){
        alert("LIFESTYLE");
    };
    
    klikni4.onclick = function(){
        alert("VIDEO");
    };
    
    klikni5.onclick = function(){
       alert("FEATURES");
    };
    
};