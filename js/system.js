/*
 *
*/

var system = {
    
    /*  */
    
    createAjaxObject: function()
    {
        /*
         *
        */
        var AjaxObject;
        try{
            AjaxObject = new XMLHttpRequest();
        }catch(e){
            try{
                AjaxObject = new ActiveXObject('Msxml2.XMLHTTP');
            }catch(ea){
                try{
                    AjaxObject = new ActiveXObject('Microsoft.XMLHTTP');
                }catch(eb){
                    AjaxObject = false;
                }
            }
        }
        return AjaxObject;
    },
    displayMessage: function(msg_box, msg_body, msg_type)
    {
        /*
         *  This displays a defined message to the screen
         *  
        */
        var element = document.getElementById(msg_box);
        element.innerHTML = msg_body;
        element.style.display = "block";
        switch(msg_type){
            case 1: //  1 is for a good message
                element.style.backgroundColor = '#3FAF7D';
                break;
            case 2: //  2 is for a process
                element.style.backgroundColor = '#0F7991';
                break;
            default: // else there is a problem
                element.style.backgroundColor = '#EA9F9F';                
        }
    },
    getTimeStamp: function()
    {
        /*  Returns number of seconds since midnight January 1st, 1970  */
        var milliTime = new Date().getTime().toString();
        milliTime = milliTime.substring(0, (milliTime.length - 3));
        return milliTime;
    },
    gotoPage: function(page_uri)
    {
        /*
         *   This function redirects a user to a password recovery page
        */
        window.location = page_uri;
    },
}