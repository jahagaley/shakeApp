(function () {
    "use strict";
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);


    function onDeviceReady() {
        
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        var watchID = navigator.accelerometer.watchAcceleration(onSucess, onError, { frequency: 100 });


    };

    var x1 = 0, x2 = 0, y1 = 0, y2 = 0, z1 = 0, z2 = 0;
    function onPause() {


    }

    function onResume() {


    }
    function onSucess(acceleration) {
        
        x1 = acceleration.x;
        y1 = acceleration.y;
        z1 = acceleration.z;

    }

    function onError(e) {
        alert('onError!');
    }



    function getRandomInt() {
        return Math.floor(Math.random() * (255 + 1));
    }

    function newColor() {

        var num1 = getRandomInt();
        var num2 = getRandomInt();
        var num3 = getRandomInt();

        return 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')';
    }

    

    setInterval(function () {
        
        var change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);

        if (change > 25) {
            var color = newColor();
            

            var bodyElement = document.querySelector("body");

            bodyElement.style.backgroundColor = color;
           
        }
        x2 = x1;
        y2 = y1;
        z2 = z1;

    }, 100);




})();


