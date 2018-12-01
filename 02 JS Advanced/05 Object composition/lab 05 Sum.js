$(function solution () {

    let events = (function () {
        let first;
        let second;
        let result;

        return {
            init: (num1, num2, resultI) => {
                first = $(num1);
                second = $(num2);
                result = $(resultI);
            },
            add: () => {
                result.val(+first.val() + +second.val());
            },
            subtract: () => {
                result.val(+first.val() - +second.val());
            }
        };
    })();
    
    $('#sumButton').click(events.add);
    $('#subtractButton').click(events.subtract);

    return events;
})();