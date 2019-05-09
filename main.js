
  var dataObject = {
    "us": "Выберите тему,Past simple, Present simple, Future simple,Vocabulary words",
    "de": "Выберите тему,Prasens,Perfect,Futurum I,Vokabeln"
  };
  var makeRelation = (function () {
    function change(slave, data){
      var x, dataArray, option;
      slave.innerHTML = "";
      if (!(this.value in data)){
        return false;
      }
      dataArray = data[this.value].split(",");
      for(x = 0; x < dataArray.length; x++) {
        option = document.createElement("option");
        option.value = String(x);
        option.innerHTML = dataArray[x];
        slave.appendChild(option);
      }}
    return function (master, slave, data) {
      master.onchange = function () {
        change.call(this, slave, data);}
      master.onchange();}
  })();
  makeRelation(gid("language"), gid("task"), dataObject);
  function gid(txt){
    return document.getElementById(txt);}
      function checkin() {
        if ( document.getElementById('language').value == 'us') {
      var res = +document.getElementById('task').value;
        switch(res) {
          case 1:

          document.getElementById('past').style.display = "flex";
          break;
          case 2:
          document.getElementById('present').style.display = "flex";
          break;
          case 3:
          document.getElementById('future').style.display = "flex";
          break;
          case 4:
          document.getElementById('vocus').style.display = "flex";
          break;
          default: 
          
          document.getElementById('past').style.display = "flex";
          document.getElementById('present').style.display = "flex";
          document.getElementById('future').style.display = "flex";
          document.getElementById('vocus').style.display = "flex";
        }
        }
        if ( document.getElementById('language').value == 'de') {
          var res = +document.getElementById('task').value;
            switch(res) {
              case 1:
              document.getElementById('prasens').style.display = "flex";
              break;
              case 2:
              document.getElementById('perfects').style.display = "flex";
              break;
              case 3:
              document.getElementById('futurum').style.display = "flex";
              break;
              case 4:
              document.getElementById('vocde').style.display = "flex";
              break;
              default:
              document.getElementById('prasens').style.display = "flex";
              document.getElementById('perfects').style.display = "flex";
              document.getElementById('futurum').style.display = "flex";
              document.getElementById('vocde').style.display = "flex";

            }
            }
            
      }

       
