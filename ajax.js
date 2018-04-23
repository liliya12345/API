$(function () {
    
var endpoint = 'live';
var access_key = "6e6bfece9fde9fa2bcdf63146d0764cf";

var rules = {
    currencies: "SEK,RUB,GBP,BZD,UZS,VEF,VND,VUV,WST,XAF,XCD,XDR,XOF,XPF,YER,ZAR,ZMK,ZWL,DKK,DOP,DZD,EGP,ETB,EUR,FJD,FKP,GBP,GEL,GHS,GIP,GMD,GNF,GTQ,GYD,HKD,HNL",
    
};

$.ajax({
    url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'json',
    data: rules,
})
.done(function(done){
    console.log(done); 
    showResults(done);  
    
})
.fail(function (fail){
    console.log(fail);
})

function showResults(data){ 
   $.each(data.quotes, function (i, value){
    var res = i.substr(3, 3);
            if(i==="USDSEK"){
                $('.search-results').append(`<p class="content1"><img class="banner" src="https://www.fg-a.com/flags/sweden-flag-button-round-1.png"> Svenska krona ${value} <input type="text" id="input" name="but"><input type="submit" id="submit"></p>`);
                $("#submit").on("click",function(){
                    var counter= $("input").val();
                    var result=Math.round(counter*value,2);
                    $("#result").html(result+res);
                })
            }
            else if (i==="USDRUB"){
                $('.search-results').append(`<p class="content2"><img class="banner" src="https://www.fg-a.com/flags/russia-flag-button-1.png"> Russian Ruble ${value} <input type=text" id="input1" name="but"><input type="submit" id="submit1"> </p>`);   
                $("#submit1").on("click",function(){
                    var counter= $("#input1").val();
                    var result=Math.round(data.quotes.USDRUB*counter,2);
                    $("#result").html(result+res);
                })
            }
                
            else if (i==="USDEGP")
            {
                $('.search-results').append(`<p class="content2"><img class="banner" src="https://www.fg-a.com/flags/egypt-flag-button-1.png"> Egyptian Pound ${value} <input type=text" id="input2" name="but"><input type="submit" id="submit2"></p>`);
                $("#submit2").on("click",function(){
                    var counter= $("#input2").val();
                    var result=Math.round(data.quotes.USDEGP*counter,2);
                    $("#result").html(result+res);
                })
            }   
            else if(i==="USDUZS")
            {
                $('.search-results').append(`<p class="content2"><img class="banner" src="https://www.fg-a.com/flags/sweden-flag-button-round-1.png"> Uzbekistan Som  ${value} <input type=text" id="input3" name="but"><input type="submit" id="submit3"></p>`);
                $("#submit3").on("click",function(){
                    var counter= $("#input3").val();
                    var result=Math.round(data.quotes.USDUZS*counter,2);
                    $("#result").html(result+res);
                })
            } 
            else if(i==="USDFJD")
            {
                $('.search-results').append(`<p class="content1"><img class="banner" src="https://www.fg-a.com/flags/fiji-flag-coat-of-arms.gif"> FJD Fijian Dollar  ${value} <input type=text" id="input4" name="but"><input type="submit" id="submit4"></p>`);
                $("#submit4").on("click",function(){
                    var counter= $("#input4").val();
                    var result=Math.round(data.quotes.USDFJD*counter,2);
                    $("#result").html(result+res);
                })
            } 
            else if(i==="USDDOP")
            {
                $('.search-results').append(`<p class="content1"><img class="banner" src="http://www.fg-a.com/flags/dominican-republic-flag-button-2.png"> DOP Dominican Peso  ${value} <input type=text" id="input5" name="but"><input type="submit" id="submit5"></p>`);
                $("#submit5").on("click",function(){
                    var counter= $("#input5").val();
                    var result=Math.round(data.quotes.USDDOP*counter,2);
                    $("#result").html(result+res);
                })
            } 
            else if(i==="USDVND")
            {
                $('.search-results').append(`<p class="content1"><img class="banner" src="https://www.fg-a.com/flags/sweden-flag-button-round-1.png"> VND Vietnamese Dong  ${value} <input type=text" id="input6" name="but"><input type="submit" id="submit6"></p>`);
                $("#submit6").on("click",function(){
                    var counter= $("#input6").val();
                    var result=Math.round(data.quotes.USDVND*counter,2);
                    $("#result").html(result+res);
                })
            } 
            else if(i==="USDGBP")
            {
                $('.search-results').append(`<p class="content1"><img class="banner" src="https://www.fg-a.com/flags/union-jack-round-button-2.jpg"> GBP British Pound Sterling  ${value} <input type=text" id="input7" name="but"><input type="submit" id="submit7"></p>`);
                $("#submit7").on("click",function(){
                    var counter= $("#input7").val();
                    var result=Math.round(data.quotes.USDGBP*counter,2);
                    $("#result").html(result+res);
                })
            } 
            else if(i==="USDHKD")
            {
                $('.search-results').append(`<p class="content2"><img class="banner" src="http://www.fg-a.com/flags/sweden-flag-button-round-1.png"> HKD Hong Kong Dollar  ${value} <input type=text" id="input8" name="but"><input type="submit" id="submit8"></p>`);
                $("#submit8").on("click",function(){
                    var counter= $("#input8").val();
                    var result=Math.round(data.quotes.USDHKD*counter,2);
                    $("#result").html(result + res);
                })
            } 
            else if(i==="USDXCD")
            {
                $('.search-results').append(`<p class="content2"><img class="banner" src="http://www.fg-a.com/flags/sweden-flag-button-round-1.png"> XCD East Caribbean Dollar  ${value} <input type=text" id="input9" name="but"><input type="submit" id="submit9"></p>`);
                $("#submit9").on("click",function(){
                    var counter= $("#input9").val();
                    var res = i.substr(3, 3);
                    var result=Math.round(data.quotes.USDXCD*counter,2);
                    $("#result").html(result+res);
                })
            } 
               
    });
    
    
};
        
        /*"http://www.apilayer.net/api/live",

        {
            access_key: "6e6bfece9fde9fa2bcdf63146d0764cf",
            format: "json",
            currencies: "SEK,RUB,",
           
                 

        },*/
        /*"http://apilayer.net/api/historical",

        {
            access_key: "6e6bfece9fde9fa2bcdf63146d0764cf",
            format: "json",
            currencies: "SEK,RUB,",
            date:"2018-01-02"
                 

        },*/

        
           
        });

