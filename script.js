const extendHex = (s) => {
  // write your code here
	let iscaptial = false;
	let ans = `#`;
	let i = s.length-3;

	while (i<s.length){
		let asci = s[i].charCodeAt(0);
		if(asci>=65 && asci<=90){
			iscaptial=true;
		}
		ans=ans+s[i]+s[i];
		i++;
	}
	return iscaptial?ans.toUpperCase(): ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
