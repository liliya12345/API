$(function () {   
    var url= 'https://api.nytimes.com/svc/topstories/v2/home.json?';
    var rules = {
        apikey: "456e53e5a2c741ad9ae738b2d701ec6f" ,
    };
    
    $.ajax({
        url: url,   
        dataType: 'json',
        data: rules,
        type:'GET'

    })
    .done(function(done){
        console.log(done); 
        showResults(done.results);
        
    })
    .fail(function (fail){
        console.log(fail);
    });
    function showResults (data){
        $.each(data, function(i, value) {         
                for(var i=0;i<value.multimedia.length;i++){
                    $('.logo').append( `<li><a href="${value.url}"><img src="${value.multimedia[3].url}" alt="bild"<br><p>${value.title}</p></a></li> `);
                   // $(".logo").append(`<p>${value.title}<br>${value.byline}<br>${value.url}<br></p>`);
                   return;
                }

           })
            
    }
        
    });