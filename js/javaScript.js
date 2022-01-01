// function WriteToFile(passForm) {

//     var fso = CreateObject("Scripting.FileSystemObject");
//     var s = fso.CreateTextFile("/filename.txt", True);

//     var email = document.getElementById('Email');
//     var password = document.getElementById('Password');

//     s.writeline("Email :" + email);
//     s.writeline("Password :" + password);

//     s.writeline("-----------------------------");
//     s.Close();
// }

function redirectTo(link) {
    window.location.href = link;
    return false;
}