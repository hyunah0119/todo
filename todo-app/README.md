## 투두리스트

React + TypeScript 기반으로 제작한 SPA 형태의 Todo 관리 애플리케이션입니다.  
컴포넌트 단위 설계와 상태 관리 흐름을 중심으로 구현했으며, CRUD 기능과 사용자 경험 개선에 초점을 맞췄습니다.

초기에는 json-server를 활용한 mock API로 기능을 구현했으나,  
배포 환경에서 데이터 저장이 유지되지 않는 문제를 경험했습니다.  
이를 해결하기 위해 Supabase로 전환하여 실제 DB 기반으로 개선했습니다.

---

## 주요 기능

- 오늘 날짜 표시
- 할 일 추가 / 수정 / 삭제 (CRUD)
- 완료 / 미완료 상태 토글
- 전체 / 완료 / 미완료 필터링
- 다중 선택 후 일괄 삭제
- 드래그 앤 드롭으로 순서 변경  
  → `@hello-pangea/dnd`
- 라이트 / 다크 모드 지원
- 사용자별 데이터 분리 (localStorage + Supabase)
- Supabase 연동으로 데이터 영속성 유지

---

## 기술 스택

- React
- TypeScript
- Tailwind CSS
- Supabase
- @hello-pangea/dnd

---

## 주요 구현 포인트

- 상태 관리: `useState`, `useEffect` 기반으로 CRUD 흐름 설계
- 컴포넌트 분리: TodoList / Item / Filter / Input 구조화
- 사용자 식별: localStorage 기반 userId 생성 및 데이터 분리
- 서버 전환 경험:
  - json-server → Supabase 마이그레이션
  - fetch → supabase client 방식으로 변경
- UI/UX 개선:
  - 다크모드 대응
  - 드래그 앤 드롭 인터랙션
  - 다중 선택 삭제 기능
