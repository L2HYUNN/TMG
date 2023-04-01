# Your first component

`Svelte`의 어플리케이션은 하나 혹은 그 이상의 컴포넌트들로 구성되어있다.

컴포넌트는 `.svelte`파일로 작성되며 `HTML`, `CSS` 그리고 `JS`를 캡슐화하는 재사용 가능한 독립적인 코드 블록이다.

## Adding data
아래와 같은 방법으로 변수를 랜더링할 수 있다.

curly braces 안에는 우리가 원하는 자바스크립트 코드를 넣을 수 있다.

```svelte
<script>
  let name = 'Svelte';
</script>

<h1>Hello {name}!</h1>

<h1>Hello {name.toUpperCase()}!</h1>
```