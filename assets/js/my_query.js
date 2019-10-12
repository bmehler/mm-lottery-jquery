jQuery(document).ready(function($) {
    $( "#neu" ).click(function() {
        var stack = [];
        var randomNumbers = [];
        for (var i = 1; i < 50; i++) {
            stack.push(i);
        }
    
        for( var j = 0; j < 6; j++ ) {
            checkRandomNumber(); 
        }

        randomNumbers.sort(function(a,b) {
            return a - b;
        });
        
        //console.log(randomNumbers);

        function checkRandomNumber() {
            var ran = stack[Math.floor(Math.random() * stack.length)];
            if(randomNumbers.indexOf(ran) == -1) {
                randomNumbers.push(ran);
            } else {
                checkRandomNumber();
            }
        }

        var zusatzZahl = Math.floor((Math.random() * 9) + 1);
        //console.log('Zusatzzahl', zusatzZahl);
        $('#lottery-zusatz').text('Zusatzzahl: ' + zusatzZahl);
        var result = randomNumbers.join(' ');
        //console.log('result', result);
        $('#lottery-number').text(result);
    });
});