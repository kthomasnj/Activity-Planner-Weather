

var DATEARRAY=[];
var W_DESC;
var TEMP;

var historyData=[];

$(document).on('click', '.search', function() { 
    
    $(".results").empty();
    var datePicked=$("#pickedDate").val();

    var idx;

    for(var i=0;i<5;i++){
       if(datePicked == DATEARRAY[i])
            idx=i;     
      }
    console.log(idx);

    datePicked=moment(datePicked).format('dddd,  MMMM Do');
   

    // var htmlToAdd2=
    // "<h3>Picked Date: </h3>"+
    // "<input type='date' id='pickedDate' min="+firstDate+" max="+lastDate+" value="+firstDate+">"+
    // "<button class='search'>Search</button>"+
    // "<article class='results'></article>";
    $.ajax({
        async: false,
        type: 'GET',
        url: '/api/weather',
        success: function(res) {
          weatherData=res.DATA;
          console.log(weatherData);

          W_DESC=weatherData[idx+1][0];
          TEMP=weatherData[idx+1][1];

          
          $(".results").append("<h6>Date Picked: "+datePicked+"</h6>");
          $(".results").append("<h6>Forecasted Weather: "+W_DESC+"</h6>");
          $(".results").append("<h6>Forecasted Temperature: "+TEMP+"</h6>");

        }
      });

      $.ajax({
        async: false,
        type: 'GET',
        url: '/api/activities',
        success: function(res) {

          console.log(res);

          //Implement logic for picking the correct activity

          if(W_DESC.includes("clear") || W_DESC.includes("clouds") && TEMP>50 && TEMP<80){

          
          for(var i=0;i<res.length;i++){
            if(res[i].weather.includes("Sunny")) {
                $(".results").append("<h6>Activities Available:"+res[i].name+" </h6>");
                historyData.push(res[i].name);
              }
            }
          
         }

         else if(W_DESC.includes("rain") || W_DESC.includes("drizzle")){

            for(var i=0;i<res.length;i++){
                if(res[i].weather.includes("Rainy")){
                    $(".results").append("<h6>Activities Available:"+res[i].name+" </h6>");
                    historyData.push(res[i].name);
                  }
                }
          }
        }
    });

    console.log(historyData);

    //Add history data to SQL using put

    for(var i=0;i<historyData.length;i++){

            historyObjectToSend={
              "activity":historyData[i],
              "date":datePicked
            }

            $.ajax({
              async: false,
              type: 'POST',
              url: '/api/history',
              data: historyObjectToSend,
              success: function(res) {console.log("Successfully Posted")
            }

     });
  }
})

  for (var i=1;i<6;i++){
    DATEARRAY.push(moment().add(i, 'days').format("YYYY-MM-DD"));
  }

  firstDate=moment().add(1, 'days').format("YYYY-MM-DD");
  lastDate=moment().add(5, 'days').format("YYYY-MM-DD");

  var htmlToAdd=
  "<h3>Select Date for Activity: </h3>"+
  "<input type='date' id='pickedDate' min="+firstDate+" max="+lastDate+" value="+firstDate+">"+
  "<button class='search'>Search</button>"+
  "<article class='results'></article>";

  $("#list-activities").append(htmlToAdd);