function checkSubstr(str, chk) {
  if (str.match(chk)) {    // or str.includes(chk)   || or   str.search(chk)
    console.log("Containes");
  } else {
    console.log("Not Containes");
  }
}

checkSubstr("This is sample", "iss");
