# Updating arrays and objects
Svelte의 `reactivity`는 할당(assignments)에 의해서 실행되기 때문에, `push`, `splice` 같은 배열 매서드를 사용하는 것은 자동으로 업데이트를 발생시킬 수 없다.

따라서 우리는 아래와 같은 할당을 추가하여 상태를 변경해야 한다.


```svelte
<script>
  function addNumber() {
    numbers.push(numbers.length + 1);
    numbers = numbers;
  }
</script>
```
> 배열 메서드 사용 이후 재할당



```svelte
<script>
  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }
</script>
```
> 좀 더 관용적인 사용 방법


```svelte
<script>
  let numbers = [1, 2, 3, 4];

  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }

  $: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
  Add a number
</button>
```