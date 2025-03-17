function Send(){
    sl = document.getElementById("sl")
    sw = document.getElementById("sw")
    pl = document.getElementById("pl")
    pw = document.getElementById("pw")

    var data={
        "sepal_length" : sl.value,
        "sepal_width" : sw.value,
        "petal_length" : pl.value,
        "petal_width" : pw.value
    }

    $.ajax({
        type : "POST",
        url : "http://localhost:8080/predict",
        headers:{
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        },
        data : JSON.stringify(data),
        }).done(function(response){
            txtOut.value = response.prediction + " 일 확률: " + response.probability
            console.log(response)
        }).fail(function(response){
            alert("fail" + response)
        }
        ).always()

}