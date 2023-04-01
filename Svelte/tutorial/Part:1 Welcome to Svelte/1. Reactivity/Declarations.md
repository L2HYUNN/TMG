# Declarations
컴포넌트의 상태가 변할 때, Svelte는 자동으로 `DOM`을 업데이트한다. 

종종, 컴포넌트의 상태 일부분은 다른 파트로부터의 연산되고 그들이 변경될 때마다 재연산될 필요가 있다. (예를들어, `fullname`은 `firstname`과 `lastname`으로부터 비롯된다.)

```svelte
<script>
  let count = 0;
  $: doubled = count * 2;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
```