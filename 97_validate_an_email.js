function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return emailRegex.test(email);
  }
  
 
  const emailToCheck = 'test@example.com';
  if (isValidEmail(emailToCheck)) {
    console.log(`${emailToCheck} is a valid email address.`);
  } else {
    console.log(`${emailToCheck} is not a valid email address.`);
  }
  

//    startString -> string   ->   @   ->   string ->  .  ->  string -> endString
//       ^           [^\s@]+       @       [^\s@]+     .      [^\s@]+     $

// 1. ^: Asserts the start of the string.

// 2. [^\s@]+: Matches one or more characters that are not whitespace \s or the "@" symbol. This part represents the local part of the email address before the "@" symbol.

// 3. @: Matches the "@" symbol.

// 4. [^\s@]+: Matches one or more characters that are not whitespace \s or the "@" symbol. This part represents the domain name of the email address.

// 5. \.: Escaped dot (.) matches the literal dot in the email address.

// 6. [^\s@]+: Matches one or more characters that are not whitespace \s or the "@" symbol. This part represents the top-level domain (TLD) of the email address.

// 7. $: Asserts the end of the string.