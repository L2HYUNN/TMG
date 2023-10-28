5 > 4; // true
"apple" > "pineapple"; // false
"2" > "12"; // true -> 숫자지만 문자열이므로 사전순으로 비교가 이뤄짐에 유의
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false -> null은 오직 undefined와만 같다
null === +"\n0\n"; // false -> 형이 다르므로 false이다.
