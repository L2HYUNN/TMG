# Dynamic attributes
텍스트를 제어하기 위해서 `curly braces`를 사용할 수 있던것 처럼, 이를 이용하여 `element`의 `attributes`를 제어할 수 있다.

만약 `alt` 속성이 빠지게되면 경고를 주게된다.

```svelte
<img src={src} />

<img src={src} alt="A man dances" />
```

속성은 다음과 같이 짧게 작성할 수도 있다.

```svelte
<img {src} alt="A man dances" />
```