    var i = 0; 
    var image = new Array();   
    // LIST OF IMAGES 
    image[0] = "assets/images/c.jpg"; 
    image[1] = "assets/images/e.jpg"; 
    image[2] = "assets/images/j.jpg";
    image[3] = "assets/images/x.jpg"; 
    image[4] = "assets/images/k.jpg";    
    var k = image.length-1;    
    function swapImage(){ 
        var img= document.getElementById("slide"); 
        img.src= image[i];  
        if(i < k ) { 
            i++;
        }  
        else  { 
            i = 0; 
        } 
        
        setTimeout("swapImage()",5000);  
    } 
    function addLoadEvent(func) { 
        var oldonload = window.onload; 
        if (typeof window.onload != 'function') { 
            window.onload = func; 
        } 
        else { 
            window.onload = function() { 
        if (oldonload) { 
            oldonload(); 
        } 
        func();}}}  
    addLoadEvent(function() { 
    swapImage(); });  
