function attachEventsListeners () {
    const metrics = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    document.getElementById('convert').addEventListener('click', convert);

    function convert () {
        const inputMetric = document.getElementById('inputUnits').value;
        const outputMetric = document.getElementById('outputUnits').value;
        const distance = +document.getElementById('inputDistance').value;
        const result = (distance * metrics[inputMetric]) / metrics[outputMetric];

        document.getElementById('outputDistance').value = result;
    }
}