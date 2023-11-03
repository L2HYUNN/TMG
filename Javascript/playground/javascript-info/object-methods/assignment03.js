let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert(this.step);
    return this;
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

// up, down, showStep을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.
// 이러한 방식은 자바스크립트 라이브러리에서 널리 사용된다.
ladder.up().up().down().showStep(); // 1

// 정답
// 메서드를 호출할 때마다 객체 자신을 반환하게 하면 된다.
