# 08_NavLink로 네비게이션 구현하기

> * ##### Link와 NavLink의 차이점 
>
> NavLink는 Link랑 마찬가지로 사용할 수 있지만 한가지 다른 점은 스타일 `style `이라는 프롭으로 함수를 지정해 줄 수 있다라는 점이다. 
>
> ```react
> <NavLink to="courses" style={}>카탈로그</NavLink>
> ```
>
> `style={}` 안에 getLinkStyle이라는 함수를 내려주면, 
>
> ```react
> fuction getLinkStyle({ isActive }){
>     return {
>         textDecoration: isActive ? 'underline' : undefined,
>     }
> }
> 
> <NavLink to="courses" style={getLinkStyle}>카탈로그</NavLink>
> ```
>
> 파라미터로는 객체를 받는데 객체의 프로퍼티는 `isActive` 라는 Boolea불린 형이 있다. 
>
> 현재 페이지의 경로가 내비게이션의 링크에 해당하면 이 값(isActive) 이 참이 된다.  이 함수에서는 리액트 인라인 스타일 객체를 리턴하면 된다. 
>
> 이렇게 하면 카탈로그 페이지에서는 카탈로그 메뉴에 밑줄이 생기고, 커뮤니티 페이지에서는 커뮤니티 메뉴에 밑줄이 생긴다. 