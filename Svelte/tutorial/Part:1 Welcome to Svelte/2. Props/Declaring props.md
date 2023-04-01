# Declaring props
지금까지 독점적으로 내부 상태만을 다뤄왔다. 즉, 변수들은 오직 주어진 컴포넌트 내에서 접근 가능하다.

실제 어플리케이션에서, 하나의 컴포넌트로부터 아래에 `children`으로 데이터를 보낼 필요가 있다.

이것을 실행하기 위해서, 우리는 일반적으로 `props`라고 축약해 부르는 `properties`를 정의해야한다.

Svelte에서 `export` 키워드를 이용하여 이것을 실행할 수 있다.

```svelte
// Nested.svelte
<script>
  export let answer;
</script>

<p>The answer is {answer}</p>
```

```svelte
// App.svelte
<script>
  import Nested from './Nested.svelte';
</script>

<Nested answer={42} />
```

