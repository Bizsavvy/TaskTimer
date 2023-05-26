document.addEventListener("DOMContentLoaded", function() {
    var totalTime = 0;
  
    function updateTime(time) {
      totalTime += time;
      document.getElementById("total-time").textContent = formatTime(totalTime);
    }
  
    function formatTime(time) {
      var seconds = time % 60;
      var minutes = Math.floor(time / 60) % 60;
      var hours = Math.floor(time / 3600);
      return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    }
  
    document.getElementById("button-10s").addEventListener("click", function() {
      updateTime(10);
    });
  
    document.getElementById("button-20s").addEventListener("click", function() {
        updateTime(20);
      });

      document.getElementById("button-30s").addEventListener("click", function() {
        updateTime(30);
      });

      document.getElementById("button-40s").addEventListener("click", function() {
        updateTime(40);
      });

    document.getElementById("button-1m").addEventListener("click", function() {
      updateTime(60);
    });
  
    document.getElementById("button-3m").addEventListener("click", function() {
        updateTime(180);
      });

    document.getElementById("button-4m").addEventListener("click", function() {
      updateTime(240);
    });
  
    document.getElementById("button-5m").addEventListener("click", function() {
      updateTime(300);
    });
  
    document.getElementById("button-9m").addEventListener("click", function() {
      updateTime(540);
    });
  });
  