# Assignments
Svelte의 중심에는 어플리케이션의 `state`와 `DOM`을 동기화하기 위한 강력한 반응성 시스템이 있다.

```svelte
<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
```