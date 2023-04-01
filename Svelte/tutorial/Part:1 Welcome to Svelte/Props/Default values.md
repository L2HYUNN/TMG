# Default values
우리는 다음 처럼 쉽게 `props`에 `default values`를 명시할 수 있다`

```svelte
// Nested.svelte
<script>
  export let answer = 'a mystery';
</script>

<p>The answer is {answer}</p>
```

```svelte
// App.svelte
<script>
  import Nested from './Nested.svelte';
</script>

<Nested answer={42} />
<Nested />
```