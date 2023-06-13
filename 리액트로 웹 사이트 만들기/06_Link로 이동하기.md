# 06_Link로 이동하기 

웹 사이트에서 페이지를 이동할 때 매번 직접 주소를 입력하지는 않는다. 

보통, 메뉴나 글에 있는 링크를 클릭해서 이동하는데, 여기 화면 위쪽에 있는 메뉴에다가 링크를 추가하고 코스 목록 페이지에도 링크 추가하는 작업을 할 예정이다. 

Link 컴포넌트에서는 `to` 라는 프롭을 사용한다. 

```react
<Link to="/">
	<img scr={logoImg} alt="Codethat Logo"/>
</Link>
```

```react
<li><Link to="/"></Link></li>
```

> 위 코드 처럼 이동할 경로를 지정하면 된다. 

> `"/"` 이렇게 `/`를 맨 앞에 붙이는 건 절대 경로라는 의미이다. 
>
> 이렇게 하면 `localhost:3000` 이라는 도메인에 `/courses` 를 붙인 주소로 이동하게 된다. 
>
> 만약 `/`를 안붙여주면 현재 주소의 맨 뒤에다가 웹 브라우저가 `/courses`를 붙여서 이동하게 된다.  `a` 태그랑 마찬가지로 동작한다고 생각하면 된다. 



#### 📂 Link 추가하기 

##### 1. Nav.js

```react
import { Link } from "react-router-dom";

<Link to="/">
  <img src={logoImg} alt="Codethat Logo" />
</Link>


<li> <Link to=".courses"></Link>카탈로그 </li>
```



##### 2. UserMenu.js

```react
import { Link } from "react-router-dom";

<Link to="/wishlist">
	<li>위시리스트</li>
</Link>
```



##### 4. CourseListPage.js

```react
import { useState } from 'react';
import ListPage from '../components/ListPage';
import Warn from '../components/Warn';
import CourseItem from '../components/CourseItem';
import { getCourses } from '../api';
import styles from './CourseListPage.module.css';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';

function CourseListPage() {
  const [keyword, setKeyword] = useState('');
  const courses = getCourses();

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <ListPage
      variant="catalog"
      title="모든 코스"
      description="자체 제작된 코스들로 기초를 쌓으세요."
    >
      <form className={searchBarStyles.form}>
        <input
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="검색으로 코스 찾기"
        ></input>
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {courses.length}개 코스</p>

      {courses.length === 0 ? (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 코스가 없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
        />
      ) : (
        <div className={styles.courseList}>
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;

```

> `getCourses()` 라는 함수로 코스 목록 데이터를 가져와서 각 요소마다 CourseItem이라는 컴포넌트로 렌더링 해주는 코드이다. 

---

#### ◾map으로 배열 렌더링 하기 

##### Array.prototype.map() : `map()` 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다. 

```javascript
const array1 = [1, 4, 9, 16];

//Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
//Expected output : Array [2, 8, 18, 32]
```

#### 🔻 구문

```javascript
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

> * `callback` : 새로운 배열 요소를 생성하는 함수, 다음 3가지 인수를 가진다.
>
>   * `currentValue` : 처리할 현재 요소 
>   * `index` : 처리할 현재 요소의 인덱스
>   * `array` : map()을 호출한 배열 
>   * `thisArg` : callback을 실행할 때`this` 로 사용되는 값 
>
> * 반환 값 
>
>   배열의 각 요소에 대해 실행한 `callback`의 결과를 모은 새로운 배열



#### 🔻map은 forEach와 동작하는 방식이 거의 비슷하다. 

하지만 한 가지 다른 점은 map은 메소드의 호출 결과로 새로운 배열을 리턴한다. 

```javascript
const firstName = ['영훈', '윤수', '동욱', '태호'];
const lastNames = ['강', '이', '손', '성'];

firstNames.map((firstName, i) => {
    return lastName[i] + furstName;
});

console.log(fullNames);
```

> map 메소드는 이렇게 콜백 함수 내에서 리턴문을 작성해주게 되면 각각의 리턴값으로 구성된 새로운 배열이 이 메소드의 결과로 리턴된다. 
>
> * 결과 
>
> ```javascript
> (4) ["강영훈", "이윤수", "손동욱", "성태호"]
> ```
>
> 작성한 콜백 함수의 리턴값들로 구성된 배열이 출력되는 모습을 확인할 수 있다. 
>
> * Arrow Function의 문법을 활용하여 간결하게 코드 작성
>
> ```javascript
> const firstName = ['영훈', '윤수', '동욱', '태호'];
> const lastNames = ['강', '이', '손', '성'];
> 
> const fullNames = firstNames.map((firstName, i) => lastNmaes[i] + firstName);
> 
> console.log(fullNames);
> ```

* 단순히 배열의 반복 작업이 필요한 경우에는 `forEach` 를, 반복 작업을 통해서 새로운 배열이 필요한 경우에는 `map` 메소드를 활용한다는 점을 잘 기억해두기 

* 주의사항 : `forEach`와 `map` 메소드의 최대 반복 횟수는 메소드를 처음 호출할때 그 당시 요소의 개수라는 점이다.  

---



#### 5. CourseItem.js

```react
<h2 className={styles.title}>
      <Link to={`/courses/${course.slug}`}>{course.title}</Link>
</h2>
```

> slug 라는 건 데이터가 있는 `mock.json` 파일을 참고하기 
>
> 각 코스 마다 slug라는 값이 있는데, 이 slug는 각 데이터를 구분하는 고유한 문자열이라고 생각하기 
>
> ##### [웹 개발에서는 ID 보다 좀 더 의미 있는 주소를 만들 때 주로 사용한다.]

> 또한 `Main.js` 파일을 확인해보면 `courses/react-frontend-developmemt` 라는 path를 넣어둔 것을 확인 할 수 있다. 
>
> 이 slug는 `mock.json` 파일에서 확인해보면, React 프론트엔드 개발 코스에 해당하는 slug이다. 
>
> 따라서 이 slug가 있는 코스를 클릭하게 되면 해당 페이지로 이동하게 된다. 