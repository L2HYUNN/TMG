# 1.4 statement() 함수 쪼개기
`statement()`처럼 긴 함수를 리팩토링할 때는 먼저 전체 동작을 각각의 부분으로 나눌 수 있는 지점을 찾는다.

코드 조각을 별도 함수로 추출하는 방식으로 파악한 정보를 코드에 반영하자. (다음번에 쉽게 코드를 이해할 수 있다.) 추출한 함수에는 그 코드가 하는 일을 설명하는 적절한 이름을 붙여준다.

## 함수 추출하기
별도 함수로 빼냈을 때 유효범위를 벗어나는 변수, 즉 새 함수에서는 곧바로 사용할 수 없는 변수가 있는지 확인하자. (예시에서 `perf`, `play`, `thisAmount`가 여기 속한다.)

`thisAmount`와 같이 함수 안에서 값이 바뀌는 변수는 조심해서 다룬다.

> code -> code/chapter01/1.14

```javascript
// before
let thisAmount = 0;
switch(play.type) {
  ...
}

// after
let thisAmount = amountFor(perf,play);
```

별도 함수로 추출한 이후에 `thisAmount`는 `amountFor` 함수를 이용하여 계산할 수 있다. 

이렇게 간단한 수정이라도 곧바로 컴파일하고 테스트해서 실수한 부분이 없는지 확인하자.

사람은 실수를 하기 마련이기에 아주 간단한 수정이라도 리팩토링 이후에는 항상 테스트하는 것이 바람직하다.

한 가지를 수정할 때마다 테스트를 하면 오류가 생기더라도 금방 찾아 해결할 수 있다.

> 리팩토링은 프로그램 수정을 작은 단계로 나눠 진행한다. 그래서 중간에 실수하더라도 버그를 쉽게 찾을 수 있다.

하나의 리팩토링을 문제없이 끝낼 때마다 커밋하자. 그래야 중간에 문제가 생기더라도 이전의 정상 상태로 쉽게 돌아갈 수 있다.

함수를 추출하고 나면 추출된 함수 코드에서 더욱 명확하게 표현할 수 있는 간단한 방법을 찾아보자.

- 가장 먼저 변수의 이름을 더 명확하게 바꿔보자.
   - `thisAmount`는 `result`로 변경할 수 있다.
   - 저자는 함수의 반환 값에는 항상 `result`라는 이름을 쓴다. (변수의 역할을 쉽게 알 수 있다)
   - 첫 번째 인수 `perf`를 `aPerformance`로 변경한다. (동적 타입 언어를 사용할 때는 타입이 드러나게 작성하면 도움이 된다. 저자는 매개변수 이름에 접두어로 타입 이름을 적는데, 지금처럼 매개변수의 역할이 뚜렷하지 않을 때는 부정 관사 `a/an`을 붙인다.)

## play 변수 제거하기
`aPerformance`는 루프 변수에서 오기 때문에 반복문을 한 번 돌 때마다 자연스레 값이 변경된다.

하지만 `play`는 개별 공연에서 얻기 때문에 매개변수로 전달할 필요가 없다. (`amountFor()` 안에서 다시 계산하면 된다.)

저자는 긴 함수를 쪼갤 때마다 `play` 같은 변수를 최대한 제거한다.

이러한 임시 변수는 로컬 범위에 존재하는 이름을 늘어나게 해 추출 작업을 복잡하게 만든다.

이를 해결해주는 리팩토링으로 `임시 변수를 질의 함수로 바꾸기`가 존재한다.

```javascript
// before
const play = plays[perf.playID];

// after
const play = playFor(perf); // 우변을 함수로 추출
```

이후 `변수 인라인하기`를 적용한다. 

```javascript
// before
const play = playFor(perf);
let thisAmount = amountFor(perf, play);

// after
let thisAmount = amountFor(perf, playFor(perf));
```

변수를 인라인한 덕분에 `amountFor()`에 `함수 선언 바꾸기`를 적용해 `play` 매개변수를 제거할 수 있다.

먼저 새로 만든 `playFor()`를 사용하도록 `amountFor()`를 수정하자.

```javascript
// before
function amountFor(aPerformance, play) {
  ...
  switch(play.type) {
    ...
  }
  ...
}

// after
function amountFor(aPerformance, play) {
  ...
  switch(plyFor(aPerformance).type) {
    ...
  }
  ...
}
```

이제 `play` 매개변수를 삭제한다.

```javascript
// before
function statement(invoice, plays) {
  ...
  let thisAmount = amountFor(perf, playFor(perf)); 
  ...
}

function amountFor(aPerformance, play) {
  ...
}

// after
function statement(invoice, plays) {
  ...
  let thisAmount = amountFor(perf); 
  ...
}

function amountFor(aPerformance) {
  ...
}
```

이전 코드는 루프를 한 번 돌 때마다 공연을 조회했는데 반해 리팩토링한 코드는 `세 번`이나 조회한다.

성능에 큰 영향이 없을 뿐더러 리팩토링된 코드는 그렇지 않은 코드보다 성능 개선이 수월하다.

> 지역 변수를 제거해서 얻는 가장 큰 장점은 추출 작업이 훨씬 쉬워진다는 것이다. (유효범위를 신경 써야 할 대상이 줄어들기 때문에)

`amountFor()`는 임시 변수인 `thisAmount`에 값을 설정하는 데 사용되는데, 그 값이 다시 바뀌지 않으므로 `변수 인라인하기`를 적용하자.

```javascript
function statement(invoice, plays) {
  ...
  // 청구 내역을 출력한다.
  result += `${playFor(perf).name}: ${format(amountFor(perf))} ${
    perf.audience
  }석\n`;
  totalAmount += amountFor(perf);
  ...
}

```

## 적립 포인트 계산 코드 추출하기
앞에서 `play` 변수를 제거한 결과 로컬 유효범위의 변수가 하나 줄어 적립 포인트 계산 부분을 추출하기 훨씬 쉬워졌다.

`volumeCredits`는 반복문을 돌 때마다 값을 누적해야 한다는 점에 유의하며 함수를 추출하자.