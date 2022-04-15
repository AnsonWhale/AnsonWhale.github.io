const currentState = {
    login: false
}

function init(){
    if(!currentState.login){
        doLogin();
    }
}

function doLogin(){
    //Goto login page
    open('login.html','_self');
}

init();