# 01. 웹 컴포넌트에 대한 이해

## Overview

### SSR, CSR, SPA
기존의 서버를 통해 `HTML`을 랜더링 하는 `SSR(Server Side Rendering)`에서 서버는 필요한 데이터를 제공하고, 브라우저에서 자바스크립트만을 이용하여 `DOM`을 랜더링 하는 `CSR(Client Side Rendering)` 방식이 발전함에 따라 `SPA(Sing Page Application)`라는 개념이 생겨나게 되었다.

### Component
기존의 자바스크립트는 `DOM`을 직접 조작하여야 했지만 `SPA` 발전에 따라 `컴포넌트(Component)`라는 개념이 등장하게 되었고 `상태(state)`를 통해 간접적으로 DOM을 조작하는 형태의 웹 어플리케이션이 주류를 이루기 시작하였다.

## Goal
최근 대부분의 웹 어플리케이션은 컴포넌트를 기반으로 만들어진다.

또한 위에서 잠시 이야기했듯이 컴포넌트는 상태를 통해 DOM을 변경시킨다.

이와 같은 이해를 바탕으로 `Vanilla JavaScript`만을 이용하여 `Web Component`를 만들어보자.

### TODO List
- [ ] 컴포넌트는 DOM을 render할 수 있어야 한다.
- [ ] 컴포넌트는 상태 변화에 따라 DOM을 변경할 수 있어야 한다.
