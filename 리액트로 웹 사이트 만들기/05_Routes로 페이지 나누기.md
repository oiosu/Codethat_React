# 05_Routes로 페이지 나누기

* #### Main.js

```react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import CoursePage from "./pages/CourseListPage";
import WishlistPage from "./pages/WishlistPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="courses" element={<CourseListPage />} />
          <Route
            path="courses/react-frontend-development"
            element={<CoursePage />}
          />
          <Route path="wishlist" element={<WishlistPage />} />
        </Routes>
        <HomePage />
      </App>
    </BrowserRouter>
  );
}

export default Main;

```

> `<Route path="courses" element={<CourseListPage />} />`
>
> courses 라는 경로로 들어가게 되면 CourseListPage 컴포넌트를 보여줘! 라는 뜻이다. 
>
> `CoursePage` 는 상세페이지이기에 각 코스마다 다른 경로로 보여줘야 하는데, 일단 여기서 고정된 경로로 하나만 만들어볼 것이다. 

> `Routes` 컴포넌트는 이런 식으로 여러 개의 Route를 포함한다. 
>
> Routes를 렌더링 할 때 리액트 라우터는 Routes 안에 있는 Route를 차례대로 검사하면서 현재 경로가 path와 일치하는지 하나씩 검사한다. 
>
> 일치하는 경로를 찾으면 `elememt` 프롭으로 지정한 컴포넌트를 렌더링을 해주게 된다. 

> 참고로 Routes와 Router 컴포넌트는 실제로 `div` 태그 같은 것을 렌더링 하지 않는다. 
>
> `React.Fragmemt` 처럼 리액트 상에서만 존재하는 컴포넌트이다. 
>
> 저장하고 확인해보면 '/' 하나만 있는 루트 경로로 접속하게 되면 해당 홈페이지 화면이 나오는 것을 확인할 수 있다. 



#### 정리 

> Routes 컴포넌트로 Route들을 감싼 다음에 각 페이지마다 Route를 배치한다. 
>
> 각 페이지의 경로는 path 프롭으로 컴포넌트는 element프롭으로 지정한다. 
>
> ##### ⭐ 이때 element에는 꼭 jsx를 지정해줘야 한다는 점 잘 기억하기