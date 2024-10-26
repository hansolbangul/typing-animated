# TypoAnimated

[![npm version](https://badge.fury.io/js/%40hansolbangul%2Fanimated-typo.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/%40hansolbangul%2Fanimated-typo.svg)][npm_url]
[![license](https://img.shields.io/npm/l/%40hansolbangul%2Fanimated-typo.svg)][npm_url]

사용자 정의 가능한 React 타이핑 애니메이션 컴포넌트로, 텍스트의 동적 타이핑 및 삭제 효과를 구현할 수 있습니다. 프로젝트에 인터랙티브한 타자 애니메이션을 추가하는 데 적합합니다.

**[영어 설명서 보기](./README.md)**

[npm_url]: https://www.npmjs.com/package/@hansolbangul/animated-typo

## 설치 방법

```bash
# npm 사용 시
npm install @hansolbangul/animated-typo

# Yarn 사용 시
yarn add @hansolbangul/animated-typo

# pnpm 사용 시
pnpm add @hansolbangul/animated-typo
```

이 라이브러리는 `react`와 `react-dom` 버전 `^17.0.0` 이상이 필요합니다.

[//]: # (## 라이브 데모)
[//]: # ()
[//]: # (라이브 데모 및 사용 예시는 다음에서 확인할 수 있습니다: [https://hansolbangul.github.io/typing-animated]&#40;https://hansolbangul.github.io/typing-animated&#41;)
## 사용법

`TypoAnimated`를 사용하여 다양한 속도, 지연 시간, 반복 횟수 등을 설정할 수 있는 타이핑 애니메이션을 만들 수 있습니다.

### 사용 예시

다음은 단어를 순차적으로 타이핑하는 애니메이션 예제입니다. 마지막 단어에서 애니메이션이 멈춥니다.

```jsx
import { TypoAnimated } from '@hansolbangul/animated-typo';

const ExampleComponent = () => {
  return (
    <TypoAnimated
      text={['안녕하세요', '세상에', 'React 타이핑 애니메이션']}
      ms={100}
      wait={1000}
      loop={2}
    />
  );
};

export default ExampleComponent;
```

## 문서

자세한 문서, 사용 가능한 props 및 추가 예제는 다음에서 확인할 수 있습니다: [https://hansolbangul.github.io/typing-animated/docs](https://hansolbangul.github.io/typing-animated/docs)

## Props

`TypoAnimated` 컴포넌트에서 사용할 수 있는 props는 다음과 같습니다:

| Prop       | 필수      | Type                   | 설명                                                                  | 기본값   |
|------------|----------|------------------------|-----------------------------------------------------------------------|----------|
| `text`     | yes      | `string` 또는 `string[]`| 타이핑 애니메이션에 표시할 텍스트 혹은 문자열 배열                   | `-`      |
| `ms`       | yes      | `number`               | 문자당 타이핑 및 삭제 속도를 밀리초 단위로 지정                       | `-`      |
| `wait`     | yes      | `number`               | 삭제 혹은 다음 텍스트로 이동 전 대기 시간을 밀리초 단위로 지정       | `-`      |
| `loop`     | no       | `number`               | 애니메이션 반복 횟수; `-1`로 설정하면 무한 반복                       | `-1`     |

## 사용 시 참고 사항

### 루프 제어

- `loop`가 특정 횟수로 설정된 경우(예: `loop={2}`), 해당 횟수만큼 애니메이션이 반복되고 `text` 배열의 마지막 문자열에서 삭제하지 않고 멈춥니다.

### 호환성

- 이 컴포넌트는 React v17 이상을 지원합니다.
- 컴포넌트가 memoized 상태로 유지되므로 핫 리로딩 시 다시 로드가 필요할 수 있습니다.

## 라이선스

이 프로젝트는 ISC 라이선스에 따라 제공됩니다.

## 링크

- [npm](https://www.npmjs.com/package/@hansolbangul/animated-typo)
- [GitHub](https://github.com/hansolbangul/typing-animated)