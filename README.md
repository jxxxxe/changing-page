# 📌 14주차 과제[Mission14]

이 과제는 실제 프론트엔드 신입 채용 과제임으로 각별히 외부 유출에 주의해 주시기 바라며 특히 블로그 포스팅에 유의해 주시기 바랍니다.

## 필수 과제
- 과제 기한
  - 과제 수행 기간 : 2023년 12월 15일(금) ~ 2023년 12월 20일(수)
  - 멘티 코드 리뷰 기간 : 2023년 12월 21일(목) ~ 2023년 12월 22일(금)
  - 멘토 코드 리뷰 기간 : 2023년 12월 21일(목) ~ 2023년 12월 26일(화)
  - 코드 리뷰 반영 기간 : 2023년 12월 27일(수) ~ 2023년 12월 28일(목)
- 내용
  - View 네비게이션 시스템 구현과 Tooltip 컴포넌트 구현 둘 중 하나를 선택해서 과제를 완성해 주세요.
  - 2가지 과제 중 택 1 진행, 시간이 된다면 2가지 다 구현해 보셔도 됩니다.
 
### View 네비게이션 시스템 구현

React, TypeScript를 이용한 View 네비게이션 컴포넌트를 구현합니다. 스타일링 라이브러리는 자유롭게 이용하셔도 됩니다. 이 시스템은 모바일 환경에서 자주 볼 수 있습니다.

**필요한 기능**
- [ ] 이벤트를 통한 페이지 이동이 가능하다.
- [ ] 이전 페이지로 되돌아갈 수 있다.
  - [ ] 히스토리에 남은 페이지라면 어디든 되돌아가는 것이 가능하다.
- [ ] 웹을 새로고침하더라도 페이지가 유지되어야 한다.
- [ ] 페이지 전환 트랜지션을 설정할 수 있다.
  - [ ] 트랜지션 애니메이션은 최소 2개 있어야 한다.

UI는 자유롭게 구현해도 상관없습니다. 단, 기본적으로 페이지 제목과 뒤로 가기 버튼은 반드시 존재해야 합니다.

⚠️ 참고로 router 등을 이용하여 URL이 변경되는 진짜 페이지 이동 구현은 아닙니다. 단순히 컴포넌트 내에서 로직으로서 동작되는 UI입니다.


<img width="500" alt="gif" src="https://github.com/prgrms-fe-devcourse/FEDC4-13_React/assets/44829481/4d1e4a04-0b60-47d2-a40f-0aa89c4c6653">

<img width="500" alt="gif" src="https://github.com/prgrms-fe-devcourse/FEDC4-13_React/assets/44829481/5dabe81e-bbeb-41f3-94a3-28e70e774317">

### Tooltip 컴포넌트 구현

React, TypeScript를 이용하여 Tooltip 컴포넌트를 구현합니다. 스타일링 라이브러리는 자유롭게 이용하셔도 됩니다.

**필요한 기능**
- [ ]  특정 이벤트가 발생하면 Tooltip UI가 보여야 합니다.
  - [ ]  이벤트는 Hover, Click, Focus 세 종류를 지원해야 합니다.
- [ ]  위치를 설정할 수 있어야 합니다.
- [ ]  옵션에 따라 화살표를 보여줄 수 있어야 합니다.
- [ ]  스크롤에 영향을 받으면 안됩니다.
- [ ]  Transition이 있으면 좋습니다.

**예시**

<img width="116" alt="Untitled" src="https://github.com/prgrms-fe-devcourse/FEDC4-13_React/assets/44829481/b51dfbbc-076f-4d9e-b17b-367d0e9f9dd8">
