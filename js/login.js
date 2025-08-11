
document.getElementById('login-buttton').addEventListener('click', function(){
    // console.log('button clicked');

    let userEmailField = document.getElementById('user-email');
    // console.log(userEmailField);
    
    let email = userEmailField.value;
    console.log(email);
    
    let userPasswordField = document.getElementById('user-password');
    
    let password = userPasswordField.value;
    console.log(password);

    if(email =='admin@gmail.com' && password == 123456){
            window.location.href = "./banking.html";   
    }
    
})