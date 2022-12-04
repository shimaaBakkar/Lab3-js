// setTimeout(function write()
// {
    
//        var par = document.getElementById("get");

//       var display= par.innerText =
// },1000);



// Hello in javascript
// function write()
// {
//     var par = document.getElementById("get");
//     var i;
//     var o = "";
    
//     for(i = 0; i < par.length; i++){
//     o += text[i];
//     document.write(o[i]);
// }}
// var display = setInterval(type(), 1000);

//////////////////


var text = "Welcome in javascript";
    var i = 0;

    function write() {
      document.write(text[i]);
      i++;
    }
    var interval = window.setInterval(write, 1000);



