# Statements
`Reactivity`는 반응성 변수들을 선언하는데 국한되지 않고 임의의 명령문을 반응적으로 실행할 수도 있다.

```svelte
let count = 0;

$: console.log('the count is ${count}');
```
> 일반적인 사용



```svelte
$: {
  console.log('the count is ${count}');
  console.log('this will also be logged whenever count changes');
}
```
> `block`문으로 사용 가능하다. 


```svelte
<script>
  let count = 0;
  $: if (count >= 10) {
    alert('count is dangerously high!');
    count = 0;
  }

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