var resultatall = localStorage.getItem('resul');
 var tasllang = localStorage.getItem('resulname');
 var resultatall2 = localStorage.getItem('resul2');
 var tasllang2 = localStorage.getItem('resulname2');
 var resultatall3 = localStorage.getItem('resul3');
 var tasllang3 = localStorage.getItem('resulname3');
 var resultatall4 = localStorage.getItem('resulde1');
 var tasllang4 = localStorage.getItem('resulnamede1');
 var resultatall5 = localStorage.getItem('resulde2');
 var tasllang5 = localStorage.getItem('resulnamede2');
 var resultatall6 = localStorage.getItem('resulde3');
 var tasllang6 = localStorage.getItem('resulnamede3');
 var resultatall7 = localStorage.getItem('resultwordeng');
 var tasllang7 = localStorage.getItem('resultwordengname');
  var dataBases = openDatabase("result", "0.1","Наш результат", 200000);
  if (dataBases) {
    console.log('хорошо');
  }
  else {
    console.log('плохо');
  }
  dataBases.transaction(function(tx) {
    tx.executeSql
    ("CREATE TABLE IF NOT EXISTS `resultat`(id INT PRIMARY KEY , res INT, language TEXT)",
     [], function (result) {
            console.log('Таблица результат успешно создана');
        },
        function (tx, error) {
            console.log('Ошибка при создании таблицы');
    })
});

dataBases.transaction(function pastsimplecreate(tx) {
  
  tx.executeSql("INSERT INTO `resultat` (res,language) values(?,?)", [resultatall +'%',tasllang], function(result){
      console.log('Были добавлены новые данные в таблицу');
  }, function(tx,error){
      console.log('Произошла ошибка при добавлении данных в таблицу');
  });
});
dataBases.transaction(function pastsimplecreate(tx) {
  tx.executeSql("SELECT * FROM `resultat` where language=?",['pastsimple'], function(tx, result) {
    var test = document.getElementsByTagName("p")['1'].textContent;
    if (test != '') {
      document.getElementsByTagName("p")['1'].textContent = result.rows.item(result.rows.length-1)['res'];
    }
    
      })
});
dataBases.transaction(function pastperfectcreate(tx) {
  
  tx.executeSql("INSERT INTO `resultat` (res,language) values(?,?)", [resultatall2 +'%',tasllang2], function(result){
      console.log('Были добавлены новые данные в таблицу');
  }, function(tx,error){
      console.log('Произошла ошибка при добавлении данных в таблицу');
  });
});
dataBases.transaction(function pastperfectcreate(tx) {
  tx.executeSql("SELECT * FROM `resultat` where language=?",['pastperfect'], function(tx, result) {
    var test = document.getElementsByTagName("p")['3'].textContent;
    if (test != '') {
      document.getElementsByTagName("p")['3'].textContent = result.rows.item(result.rows.length-1)['res'];
    }
    
      })
});
dataBases.transaction(function futuresimplecreate(tx) {
  
  tx.executeSql("INSERT INTO `resultat` (res,language) values(?,?)", [resultatall3 +'%',tasllang3], function(result){
      console.log('Были добавлены новые данные в таблицу');
  }, function(tx,error){
      console.log('Произошла ошибка при добавлении данных в таблицу');
  });
});
dataBases.transaction(function futuresimplecreate(tx) {
  tx.executeSql("SELECT * FROM `resultat` where language=?",['futuresimple'], function(tx, result) {
    var test = document.getElementsByTagName("p")['5'].textContent;
    if (test != '') {
      document.getElementsByTagName("p")['5'].textContent = result.rows.item(result.rows.length-1)['res'];
    }
    
      })
});
dataBases.transaction(function futurumde(tx) {
  
  tx.executeSql("INSERT INTO `resultat` (res,language) values(?,?)", [resultatall4 +'%',tasllang4], function(result){
      console.log('Были добавлены новые данные в таблицу');
  }, function(tx,error){
      console.log('Произошла ошибка при добавлении данных в таблицу');
  });
});
dataBases.transaction(function futurumde(tx) {
  tx.executeSql("SELECT * FROM `resultat` where language=?",['futurum'], function(tx, result) {
    var test = document.getElementsByTagName("p")['11'].textContent;
    if (test != '') {
      document.getElementsByTagName("p")['11'].textContent = result.rows.item(result.rows.length-1)['res'];
    }
    
      })
});
dataBases.transaction(function perfectde(tx) {
  
  tx.executeSql("INSERT INTO `resultat` (res,language) values(?,?)", [resultatall5 +'%',tasllang5], function(result){
      console.log('Были добавлены новые данные в таблицу');
  }, function(tx,error){
      console.log('Произошла ошибка при добавлении данных в таблицу');
  });
});
dataBases.transaction(function perfectde(tx) {
  tx.executeSql("SELECT * FROM `resultat` where language=?",['perfect'], function(tx, result) {
    var test = document.getElementsByTagName("p")['9'].textContent;
    if (test != '') {
      document.getElementsByTagName("p")['9'].textContent = result.rows.item(result.rows.length-1)['res'];
    }
    
      })
});
dataBases.transaction(function presensde(tx) {
  
  tx.executeSql("INSERT INTO `resultat` (res,language) values(?,?)", [resultatall6 +'%',tasllang6], function(result){
      console.log('Были добавлены новые данные в таблицу');
  }, function(tx,error){
      console.log('Произошла ошибка при добавлении данных в таблицу');
  });
});
dataBases.transaction(function presensde(tx) {
  tx.executeSql("SELECT * FROM `resultat` where language=?",['presens'], function(tx, result) {
    var test = document.getElementsByTagName("p")['7'].textContent;
    if (test != '') {
      document.getElementsByTagName("p")['7'].textContent = result.rows.item(result.rows.length-1)['res'];
    }
    
      })
});
dataBases.transaction(function wordnames(tx) {
  
  tx.executeSql("INSERT INTO `resultat` (res,language) values(?,?)", [resultatall7 +'%',tasllang7], function(result){
      console.log('Были добавлены новые данные в таблицу');
  }, function(tx,error){
      console.log('Произошла ошибка при добавлении данных в таблицу');
  });
});
dataBases.transaction(function wordnames(tx) {
  tx.executeSql("SELECT * FROM `resultat` where language=?",['wordenglish'], function(tx, result) {
    var test = document.getElementsByTagName("p")['13'].textContent;
    if (test != '') {
      document.getElementsByTagName("p")['13'].textContent = result.rows.item(result.rows.length-1)['res'];
    }
    
      })
});
//   dataBases.transaction(function(tx) {
//  tx.executeSql("DELETE  FROM `resultat`", [], function(tx, result) {
//           console.log('Таблица user очищена');
//     }, function(){
//       console.log('Произошла ошибка при удалении');
//    })  });