let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert(fruits.length); // ?

// 사과, 배, 오렌지, 바나나, 4

// 위와 같이 배열을 복사하는 경우 얕게 복사가 되어 주소값만을 참조하게 된다.
