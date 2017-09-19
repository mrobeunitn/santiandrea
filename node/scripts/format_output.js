
//format index output
exports.formatOutput = function(results,callback){
    var htmloutput= "";
    result = JSON.parse(results);
    for(i = 0 ; i < result.length; i++){
      htmloutput +=  "<li> <div class='image-container effect'> <img src='"+result[i].path+"'> <div class='mask'>   <h6> <br></h6><h6><br> </h6> <form action='http://127.0.0.1:1337/' method='post'><button type='submit' id='album' name='album' value ='"+result[i].fk_id+"' class='btn btn-default'>Success</button></form> </div>  </div> </li>";
    }
    callback(htmloutput);
    
}

//format album output
exports.formatAlbumOutput = function(results,callback){
    var htmloutput= "";
    result = JSON.parse(results);
    for(i = 0 ; i < result.length; i++){
      htmloutput +=  "<li> <div class='image-container effect'> <img src='"+result[i].path+"'> <div class='mask'>   <h6> <br></h6><h6><br> </h6> <button type='submit' id='album"+i+"' name='album' value ='1' class='btn btn-default'>Success</button> </div>  </div> </li>";
    }
    callback(htmloutput);
    
}

/*
+result[i].path+
*/