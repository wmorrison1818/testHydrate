//alert("hey!");
document.addEventListener("resume", onResume, false);
document.addEventListener("pause", onPause, false);

function onResume() {
    setTimeout(function() {
               var networkState = navigator.connection.type;
               var states = {};
               states[Connection.UNKNOWN]  = 'Unknown connection';
               states[Connection.ETHERNET] = 'Ethernet connection';
               states[Connection.WIFI]     = 'WiFi connection';
               states[Connection.CELL_2G]  = 'Cell 2G connection';
               states[Connection.CELL_3G]  = 'Cell 3G connection';
               states[Connection.CELL_4G]  = 'Cell 4G connection';
               states[Connection.CELL]     = 'Cell generic connection';
               states[Connection.NONE]     = 'No network connection';
               
               if(states[networkState] != 'No network connection'){
                    //upload info here
                    alert('Connection type: ' + states[networkState]);
               }
               //when you come back here
               }, 0);
}

function onPause() {
    setTimeout(function() {
               var networkState = navigator.connection.type;
               var states = {};
               states[Connection.UNKNOWN]  = 'Unknown connection';
               states[Connection.ETHERNET] = 'Ethernet connection';
               states[Connection.WIFI]     = 'WiFi connection';
               states[Connection.CELL_2G]  = 'Cell 2G connection';
               states[Connection.CELL_3G]  = 'Cell 3G connection';
               states[Connection.CELL_4G]  = 'Cell 4G connection';
               states[Connection.CELL]     = 'Cell generic connection';
               states[Connection.NONE]     = 'No network connection';
               
               if(states[networkState] != 'No network connection'){
                    //upload info here
                    //alert('2Connection type: ' + states[networkState]);
               }
               //when you leave here
    }, 0);
}