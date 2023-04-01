# Nested components
하나의 컴포넌트에 어플리케이션의 모든 것을 집어넣는 것은 실용적이지 않다.

대신에 우리는 다른 파일로부터 컴포넌트들을 `import`하고 우리의 마크업에 컴포넌트들 포함할 수 있다.

우리는 다음과 같이 `<script>` 태그를 이용하여 `import`를 실행할 수 있으며, `<Nested />` 같은 형태로 컴포넌트를 사용할 수 있다.

```svelte
<script>
  import Nested from './Nested.svelte';
</script>

<p>This is a paragraph.</p>
<Nested />

<style>
  p {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>
```

> `HTML` 요소들과 구분하기 위해서 컴포넌트의 이름은 항상 대문자로 시작한다. 