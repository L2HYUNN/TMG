# Styling
`HTML`과 마찬가지로 컴포넌트에 `<style>` 태그를 추가할 수 있다.

```svelte
<p>This is a paragraph.</p>

<style>  
  p {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em; 
  }
</style>
```

중요한 것은 이러한 규칙들이 컴포넌트 단위로 적용된다는 것이다.

실수로 어플리케이션의 다른 곳에 있는 `<p>` 요소의 스타일을 변경하는 일은 없을 것이다.