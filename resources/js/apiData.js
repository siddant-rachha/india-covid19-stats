let api_data = [],
    cases_list = [],
    recovered_list = [],
    deaths_list = [],
    dates_list = [],
    chart;
const ctx = document.getElementById("axes_line_chart").getContext("2d")

let main = () => {
    shortStateCode = shortStateCode.toLowerCase()

    fetch(`https://api.covid19india.org/states_daily.json`)
        .then(response => {
            console.log('api data received')
            return response.json()
        })
        .then(response => {
            api_data = response
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

    //update daily values



    //drawChart
    console.log(`data stored in variables,`)
    function axesLinearChart() {
        if (chart) {
            chart.destroy()
            console.log('chart destroyed')
        }
        chart = new Chart(ctx, {
            type: 'line',
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
                {
                    label: 'Daily New Recovered',
                    data: recovered_list,
                    fill: false,
                    borderColor: '#009688',
                    backgroundColor: '#009688',
                    borderWidth: 1,
                    pointRadius: 1,

                },
                {
                    label: 'Daily New Deaths',
                    data: deaths_list,
                    fill: false,
                    borderColor: '#f44336',
                    backgroundColor: '#f44336',
                    borderWidth: 1,
                    borderWidth: 1,
                    pointRadius: 1,

                }],
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

    }
    axesLinearChart();
    console.log('chart drawn')
}











