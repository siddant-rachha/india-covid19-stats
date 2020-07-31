let api_data = [],
    cases_list = [],
    recovered_list = [],
    deaths_list = [],
    dates_list = [],
    chart1,chart2,chart3;
const ctx1 = document.getElementById("axes_line_chart1").getContext("2d")
const ctx2 = document.getElementById("axes_line_chart2").getContext("2d")
const ctx3 = document.getElementById("axes_line_chart3").getContext("2d")

let main = () => {
    shortStateCode = shortStateCode.toLowerCase()

    fetch(`https://api.covid19india.org/states_daily.json`)
        .then(response => {
            console.log('api data received')
            return response.json()
        })
        .then(response => {
            response.states_daily.splice(0,54)//takes data from 1 april
            api_data = response
            console.log(api_data)
        })
        .then(response => {
            fetchData(shortStateCode)
        })
        .catch(error => {
            alert(error)
        })
}

let fetchData = function (shortStateCode) {

    updateState(shortStateCode);
    console.log(`check here: ${shortStateCode}`)

    liveStateData(shortStateCode);

    let cases_list = [],
        recovered_list = [],
        deaths_list = [],
        dates_list = [];

    shortStateCode = shortStateCode.toLowerCase()
    console.log(`shortStateCode : ${shortStateCode}`)
    lengthofData = api_data.states_daily.length;
    console.log(lengthofData / 3)
    for (let index = 0; index < lengthofData; index += 3) {
        cases_list.push(api_data.states_daily[index][shortStateCode])
    }
    for (let index = 1; index < lengthofData; index += 3) {
        recovered_list.push(api_data.states_daily[index][shortStateCode])
    }
    for (let index = 2; index < lengthofData; index += 3) {
        deaths_list.push(api_data.states_daily[index][shortStateCode])
    }
    for (let index = 0; index < lengthofData; index += 3) {
        dates_list.push(api_data.states_daily[index]['date'])
    }




    //drawChart
    console.log(`data stored in variables,`)
    function axesLinearChart() {
        if (chart1) {
            chart1.destroy()
            console.log('chart destroyed')
        }
        if (chart2) {
            chart2.destroy()
            console.log('chart destroyed')
        }
        if (chart3) {
            chart3.destroy()
            console.log('chart destroyed')
        }

        chart1 = new Chart(ctx1, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Daily New Cases',
                    data: cases_list,
                    fill: false,
                    borderColor: '#fff',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    pointRadius: 1,

                },
            ],
                labels: dates_list
            },
            options: {
                legend: {
                    labels: {
                        fontColor: '#fff'
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });



        chart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                datasets: [
                {
                    label: 'Daily New Recovered',
                    data: recovered_list,
                    fill: false,
                    borderColor: '#009688',
                    backgroundColor: '#009688',
                    borderWidth: 1,
                    pointRadius: 1,

                },

            ],
                labels: dates_list
            },
            options: {
                legend: {
                    labels: {
                        fontColor: '#fff'
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        })


        chart3 = new Chart(ctx3, {
            type: 'bar',
            data: {
                datasets: [
                {
                    label: 'Daily New Deaths',
                    data: deaths_list,
                    fill: false,
                    borderColor: '#f44336',
                    backgroundColor: '#f44336',
                    borderWidth: 1,
                    borderWidth: 1,
                    pointRadius: 1,

                }
            ],
                labels: dates_list
            },
            options: {
                legend: {
                    labels: {
                        fontColor: '#fff'
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        })


    }

    
    axesLinearChart();
    console.log('chart drawn')
}











