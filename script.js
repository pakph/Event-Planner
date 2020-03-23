var currentHour = moment().hour().valueOf();
var timesArr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
var values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]


// This for loop is to create a card element for each AM hour of the day
for (i = 0; i < 12; i++){

    var row = $('<div class="row">')

    //Add a time slot for each AM hour of the day
    var timeDiv = $('<div class="card time-slot">');
    $(timeDiv).css({
        'width': "90%",
        'max-width': "90%",
    })
    var labelEl = $("<label>");
    var textAreaEl= $("<textarea class='form-control' rows='3'>");
    var labelElTimeAm = $(labelEl).text(timesArr[i] + ":00 " + "am")
    $(labelEl).attr("value", values[i])
    $(labelEl).append(textAreaEl)
    $(timeDiv).append(labelEl)
    $(row).append(timeDiv)
    var checkValues = $(labelEl).attr("value");

    //Add a button element for each time slot (AM)
    var button = $('<button type="button" class="btn btn-info">Save</button>')
    $(button).css({
        'width': "10%",
        'max-width': "10%",
    })  
    $(row).append(button)

    //Display the schedule with the button
    $("#schedule").append(row);

    //Changes the color of the time slot depending on the current time
    function colorChange (event){
        if (checkValues < currentHour) {
            var pastTimeColor = $(this.timeDiv).css("background-color", "#bababa") && $(this.textAreaEl).css("background-color", "#bababa")
        }
        else if (checkValues == currentHour) {
            var currentTimeColor = $(this.timeDiv).css("background-color", "#99ff99") && $(this.textAreaEl).css("background-color", "#99ff99")
        }
        else {
            var futureTimeColor = $(this.timeDiv).css("background-color", "#add8e6") && $(this.textAreaEl).css("background-color", "#add8e6")
        }
    }
    colorChange()

    $(this.button).click(function() {
        var textAreaVal = $("textarea").val();
        var key = $(this.labelEl).attr("value")
        var value = (this.textAreaVal);
        localStorage.setItem(key , value);
    })

}

// This for loop is to create a card element for each PM hour of the day
for (i = 0; i < 12; i++){

    var row = $('<div class="row">')

    //Add a time slot for each AM hour of the day
    var timeDiv = $('<div class="card time-slot">');
    $(timeDiv).css({
        'width': "90%",
        'max-width': "90%",
    })
    var labelEl = $("<label>");
    var textAreaEl= $("<textarea class='form-control' rows='3'>");
    var labelElTimePm = $(labelEl).text(timesArr[i] + ":00 " + "pm")
    $(labelEl).attr("value", values[i+12])
    $(labelEl).append(textAreaEl)
    $(timeDiv).append(labelEl)
    $(row).append(timeDiv)
    var checkValues = $(labelEl).attr("value");

    //Add a button element for each time slot (AM)
    var button = $('<button type="button" class="btn btn-info">Save</button>')
    $(button).css({
        'width': "10%",
        'max-width': "10%",
    })  
    $(row).append(button)

    //Display the schedule with the button
    $("#schedule").append(row);

    //Changes the color of the time slot depending on the current time
    function colorChange (event){
        if (checkValues < currentHour) {
            var pastTimeColor = $(this.timeDiv).css("background-color", "#bababa") && $(this.textAreaEl).css("background-color", "#bababa")
        }
        else if (checkValues == currentHour) {
            var currentTimeColor = $(this.timeDiv).css("background-color", "#99ff99") && $(this.textAreaEl).css("background-color", "#99ff99")
        }
        else {
            var futureTimeColor = $(this.timeDiv).css("background-color", "#add8e6") && $(this.textAreaEl).css("background-color", "#add8e6")
        }
    }
    colorChange()
}

