function genRange(st, en) {
    var ans = typeof st;
    if (ans == "number") {
      for (var i = st; i <= en; i++) {
        console.log(i);
      }
    } else {
      var s = st.charCodeAt();
      var t = en.charCodeAt();
      for (var i = s; i <= t; i++) {
          console.log(String.fromCharCode(i));
      }
    }
  }
  
  genRange(1,7)
  genRange("a", "h");
  