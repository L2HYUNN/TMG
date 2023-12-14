# 더 나은 컴포넌트 설계하기

더 나은 컴포넌트를 어떻게 하면 설계할 수 있을까?

함수형 프로그래밍을 중심으로 개발하는 FE 생태계에도 객체지향의 개념은 컴포넌트를 설계하는데에 있어서 매우 중요하다.

## 선언형과 명령형 프로그래밍

### 명령형 프로그래밍
**명령형 프로그래밍** 은 **어떻게** 해야할지를 보여주는 것에 가깝다.

```javascript
function double (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }

  return result;
}
```

위와 같이 동작 방법(어떻게)을 상세히 기술하고 있다.

### 선언형 프로그래밍
**선언형 프로그래밍** 은 **무엇을** 해야할지를 보여주는 것에 가깝다.

```javascript
function double (arr) {
  return arr.map(x => x * 2);
}
```

### 선언형 프로그래밍과 React
React는 **선언형** 프로그래밍을 이용하여 컴포넌트를 설계한다.

React는 갱신과 랜더링 방법을 굳이 기술하지 않아도 데이터가 변경됨에 따라 적절한 컴포넌트를 효율적으로 변경한다.

선언형 뷰는 코드를 **예측가능** 하게 하고 **디버깅** 을 쉽게 만든다.

React Hooks은 선언형에 맞는 일종의 구현체라고 생각할 수 있다. (useState, useEffect...)

React는 상속이 아닌 **합성** 을 통해 컴포넌트를 구현할 수 있다.

컴포넌트가 **단일 책임 원칙(SRP)** 을 따르게 설계하는 것이 이상적이다. 하나의 컴포넌트는 한 가지의 역할만을 수행해야한다.

반복을 줄이고 **DRY** 하게 만들자.

의존성이 한 방향으로만 흘러갈 수 있게 **단방향 데이터 바인딩** 으로 설계하자.

## 컴포넌트의 역할과 책임

### 컴포넌트
어떤 시스템을 구성하는 여러 요소 중 하나를 컴포넌트라고 할 수 있다.

### 컴포넌트 개발의 이유
**잘 추상화** 한 컴포넌트를 이용하면 반복되는 요소들을 줄임으로써 개발 리소스를 줄일 수 있다.

### 역할과 책임
프론트엔드 어플리케이션에 있어 컴포넌트는 크게 다음의 세 가지의 역할을 한다고 볼 수 있다.

**1. 외부로 부터 주입된 데이터를 관리한다.**

**2. 데이터를 UI로 표현한다.**

**3. 사용자로부터 인터렉션을 받는다.**

| 컴포넌트의 역할을 통해 **데이터** 를 기준으로 컴포넌트를 나눠야 역할을 기반으로 컴포넌트를 분리할 수 있음을 알 수 있다.

## 데이터 기반 설계
외부로부터 주소 목록을 가져와 랜더링하는 페이지를 컴포넌트로 분리해보자.

```typescript
// AddressPage.tsx
function AddressPage() {
  const [addresses, setAddresses] = useState<주소[] | null>(null)

  const handleSaveClick = (id: string) => {
    // save
  }
  const handleUnsaveClick = (id: string) => {
    // unsave
  }

  useEffect(() => {
    (async () => {
      const addresses = await fetchAddressList()
      setAddresses(addresses)
    })()
  }, [])

  return (
    <section>
      <h1>주소목록</h1>
      <ul>
        {addresses != null
          ? addresses.map(({ id, address, saved }) => {
              return (
                <li key={id}>
                  {address}
                  <button onClick={saved ? handleUnsaveClick : handleSaveClick}>
                    {saved ? '저장' : '삭제'}
                  </button>
                </li>
              )
            })
          : null}
      </ul>
    </section>
  )
}
```

### 데이터 중심으로 컴포넌트 분리하기
주소 페이지를 `주소목록`, `주소`라는 두 개의 데이터를 기준으로 컴포넌트를 분리한다.

```typescript
function AddressPage() {
  return (
    <section>
      <h1>주소목록</h1>
      <AddressList />
    </section>
  )
}
```

```typescript
function AddressList() {
  const [addresses, setAddresses] = useState<주소[] | null>(null);
  // call fetchAddressList

	const handleSaveClick(id: string) => {
		// save
	}
	const handleUnSaveClick(id: string) => {
		// unsave
	}

  return (
    <ul>
      {addresses.map(address => {
        return (
          <AddressItem
            key={address.id}
			      name={address.name}
						location={address.location}
						price={address.price}
            saved={address.save}
            onSaveClick={handleSaveClick}
            onUnsaveClick={handleUnsaveClick}
            {...address}
          />
        );
      })}
    </ul>
  );
}
```
| `AddressPage`에서 데이터를 불러와 `props`로 `AddressList`에 넘겨준게 아니라 스스로 `AddressList`가 가져올 수 있도록 한 것 에 주목한다.

```typescript
// 1번 AddressItem
interface Props {
	name: string;
	location: string;
	price: number;
	// ...
	address: 주소;
}

function AddressItem({ name, location, price, saved, onSaveClick, onUnsaveClick }: Props) {
  return (
    <li>
			<span>{name}<span>
			<span>{location}<span>
			<span>{price}<span>
      <button onClick={saved ? onUnsaveClick : onSaveClick}>
        {saved ? '저장' : '삭제'}
      </button>
    </li>)
}
```
데이터를 기준으로 컴포넌트를 분리해낼 수 있었지만, 아직 다음과 같이 고려해야할 점이 남아있다.

1. 개별적인 사용자 인터렉션은 `AddressList` 보단 `AddressItem`의 역할에 더 어울려보인다.

2. `AddressItem`의 주소 데이터에 변경사항이 있을때 `AddressItem`의 interface를 수정해야하고, `AddressList`에 prop로 넘겨주는 작업이 필요하다. 결과적으로 데이터가 하나 추가된 작업이지만 컴포넌트는 두 개를 변경해야한다.

### 역할 중심으로 분리하기

```typescript
// 2번 AddressItem
function AddressItem({ id, address, saved }: 주소) {
  // 개별 주소 데이터를 사용하기 때문에 이벤트 핸들러에 `id: string` 인자를 전달할 필요가 없어졌다.
  const handleSaveClick = () => {
    // save
  }
  const handleUnsaveClick = () => {
    // unsave
  }
  return (
    <li key={id}>
      {address}
      <button onClick={saved ? handleSaveClick : handleUnsaveClick}>
        {saved ? '저장' : '삭제'}
      </button>
    </li>
  )
}
```

```typescript
function AddressList() {
  const [addresses, setAddresses] = useState<주소[] | null>(null);
  // call fetchAddressList

  // 주소 전부를 전달하기 때문에 Item에서 보여주고 싶은 정보만 보여줄 수 있게 되었다.
  return (
    <ul>
      {addresses.map(address => {
        return <AddressItem key={address.id} {...address} />;
      })}
    </ul>
  );
}
```

```typescript
// 3번 AddressItem
function AddressItem({ id, address, saved }: 주소) {
  return (
    <li key={id}>
      {address}
      {saved ? <SaveAddressButton id={id} /> : <UnsaveAddressButton id={id} />}
    </li>
  )
}

function SaveAddressButton({ id }: { id: string }) {
  const handleSaveClick = () => {
    // save
  }
  return <button onClick={handleSaveClick}>저장</button>
}

function UnsaveAddressButton({ id }: { id: string }) {
  const handleUnsaveClick = () => {
    // unsave
  }
  return <button onClick={handleUnsaveClick}>삭제</button>
}
```

우리가 의도한 `AddressItem`의 원래 역할은 **개별 주소 데이터를 보여주는 것** 이었다.

하지만 현재는 저장, 삭제의 역할까지 수행하고 있기 때문에 이를 버튼 컴포넌트로 분리하여 역할을 위임해줄 수 있다.

우리는 다음과 같은 기준을 가지고 컴포넌트를 분리할 수 있었다.

**1. 컴포넌트가 의존하고 있는 데이터를 기준으로 분리한다.**
  
**2. 컴포넌트의 이름에 맞는 역할을 기준으로 분리한다. (단일 책임 원칙)**

## 일반적인(general) 인터페이스 설계
컴포넌트의 `재사용`을 위해서는 좋은 인터페이스를 가지고 있어야 한다.

컴포넌트에서 `props`와 `컴포넌트 네이밍`은 이러한 인터페이스 역할을 수행해주고 있다.

### 좋은 컴포넌트의 인터페이스란?

1. 인터페이스는 사용자를 위한 것이다.

2. 컴포넌트는 사용자가 인터페이스를 보고 동작을 충분히 예측가능하게 만들어야 한다.

## 도메인을 모르는 컴포넌트
**특정한 도메인을 알고 있는 컴포넌트** 는 다른 도메인에서 재사용할 수 없다.

### 결합되어 있는 의존성
컴포넌트에서 도메인 맥락을 제거함으로써 좀 더 일반적인 컴포넌트를 만들 수 있다.

```typescript
// before: AddressItem
function FlexListItem({ text, button }: { text: string, button: ReactNode }) {
  return (
    <FlexLi>
      {text}
      {button}
    </FlexLi>
  )
}

const FlexLi = styled('li')``
```

```typescript
function AddressList() {
  const [addresses, setAddresses] = useState<주소[] | null>(null);
  // call fetchAddressList

  return (
    <ul>
      {addresses.map(({ id, address, saved }) => {
        return (
          <FlexListItem key={id} text={address} button={saved ? <SaveAddressButton id={id} /> : <UnsaveAddressButton id={id} />}/>);
      })}
    </ul>);
}
```

재사용성을 높이기 위해 다음의 두 가지 방법을 사용하였다.

**1. 컴포넌트가 가진 도메인 맥락을 제거한다.**

**2. 의존성을 컴포넌트가 직접 참조하지 말고 외부로부터 주입받는다.**

### 확장 불가능한 구조
도메인 맥락을 제거한 컴포넌트는 재사용성이 높아진 만큼 (많은 곳에서 사용할 수 있기 때문에) 변경에 대한 요구가 점점 많아질 것이다.

#### 확장 가능한 컴포넌트
props를 추가함으로써 이러한 문제를 해결할 수 있지만 이렇게 하게 되면 내부 구현이 복잡해지며 결과적으로 **재사용이 불가능한 컴포넌트** 를 만들게 될 것이다.

이러한 수많은 변경사항에 의해 인터페이스가 결정되므로 컴포넌트를 사용하는 입장에서 이러한 것을 결정할 수 있도록 **주도권을 외부에 넘겨주어야 한다.**

즉, 주도권을 외부에 넘김으로써 **외부에서 많은 것을 결정하여 확장할 수 있도록** 해야 한다.

```typescript
interface Props extends LiHTMLAttributes<HTMLLIElement> {
  button?: ReactNode;
}

function FlexListItem({ children, button, ...props }: Props) {
  return (
    <FlexLi {...props}>
      {children}
      {button}
    </FlexLi>
  )
}
```

## 응집도 있는 컴포넌트
| **인터페이스는 외부와의 의존성을 만듭니다.**

### 내부의 구현을 감추자. (캡슐화)
`FlexListItem`의 경우 flex 라는 컴포넌트의 네이밍 때문에 내부의 구현이 바깥으로 노출되어있다.

만약 flex가 아닌 grid를 사용해야 하는 경우 네이밍 변경을 해야하거나 새로운 컴포넌트를 만들어야 하는 등의 작업이 불가피할 것이다.

`ListItem`으로 컴포넌트를 변경함으로써 내부의 구현을 숨기고 외부와의 의존성을 사라지게 만들 수 있다.

| 내부의 구현을 캡슐화 하여 내부의 변경이 외부에 영향을 미치지 않도록 해야 한다.

### 예상 가능한 props 설계
`ListItem`의 인터페이스(props, 컴포넌트 네이밍)만 보고서는 사용자가 `button` props의 역할을 예측하기가 어렵다. 

따라서 **사용자가 인터페이스를 보고 컴포넌트의 역할을 예측할 수 있게** 컴포넌트 네이밍을 수정하는 것이 좋다. 

**1. 기본 attributes**

  기본 HTML attributes의 역할과 일치하는 것이 있다면 동일한 네이밍을 가져가는 것이 좋다.

**2. 역할이 드러나는 네이밍**

  `li` 태그의 attributes로 button이 일반적으로 위치하고 있지는 않다. 이러한 경우 `right`와 같은 이름을 붙여 컴포넌트의 역할을 예측할 수 있게 만들 수 있다.

  이로써 button 역할에만 한정되있던 props가 위치적인 역할을 맡게되어 다른 컴포넌트를 위치시킬 수 있도록 **확장** 에도 열려있게 되었다.

**3. 널리 사용되는 네이밍**

  디자인 시스템 open source를 참고하면 큰 도움이 될 수 있다.

| **역할은 드러내고 구현은 감추어 일반적인 인터페이스를 설계하자.**

## 정리하기

```typescript
// /components/ListItem.tsx
interface Props extends LiHTMLAttributes<HTMLLIElement> {
  right: ReactNode
}

function ListItem({ children, right, ...props }: Props) {
  return (
    <StyledLi {...props}>
      {children}
      {right}
    </StyledLi>
  )
}

// /pages/address/AddressList.tsx
function AddressList() {
  const [addresses, setAddresses] = useState<주소[] | null>(null)
  // call fetchAddressList

  return (
    <ul>
      {addresses.map(({ id, address, saved }) => {
        return (
          <ListItem
            key={id}
            right={
              saved ? (
                <SaveAddressButton id={id} />
              ) : (
                <UnsaveAddressButton id={id} />
              )
            }
          >
            {address}
          </ListItem>
        )
      })}
    </ul>
  )
}
```

## 도메인 맥락을 꼭 제거해야 하는가?
**컴포넌트가 다른곳에서 재사용 될 여지가 없다면** 굳이 재사용을 위한 추상화 작업을 할 필요는 없다.









참고

[더 나은 컴포넌트 설계하기](https://velog.io/@juno7803/%EB%8D%94-%EB%82%98%EC%9D%80-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0)

[변경에 유연한 컴포넌트](https://blog.jbee.io/web/%EB%B3%80%EA%B2%BD%EC%97%90+%EC%9C%A0%EC%97%B0%ED%95%9C+%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)