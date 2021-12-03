async function main() {
    // Load the JSON data
    const httpResponse = await fetch('json_award.json');
    const data = await httpResponse.json();
    console.log(data);
    // Construct labels and data
    const labels = [];
    const dataChart = [];
    const average = [];
    for (const i of data) {
        labels.push(i.awardYear)
        dataChart.push(i.prizeAmount)
        average.push(i.prizeAmountAdjusted)
    }
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Prize Amount',
                data: dataChart,
                backgroundColor: [
                    '#118C4F'
                ]
            },{
                label: 'Average Prize Money',
                data: average,
                backgroundColor: [
                    '#C92519'
                ]
            }]
        }
    });
};

main();