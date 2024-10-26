import { act, render, screen, waitFor } from '@testing-library/react';
import { TypoAnimated } from '../components/TypoAnimated';

jest.useFakeTimers();

const ms = 100;
const wait = 500;

function TestRender(children: JSX.Element) {
  return <p data-testid={'typing-text'}>{children}</p>;
}

describe('<TypoAnimated /> 컴포넌트 테스트', () => {
  test('텍스트가 타이핑되면서 나타난 후 사라지는 애니메이션이 동작함', async () => {
    render(TestRender(<TypoAnimated text="Hello" ms={ms} wait={wait} />));

    const typingElement = screen.getByTestId('typing-text');

    expect(typingElement.textContent).toBe('');

    // 텍스트가 한 글자씩 타이핑되면서 나타나는지 확인
    for (const char of ['H', 'He', 'Hel', 'Hell', 'Hello']) {
      act(() => {
        jest.advanceTimersByTime(ms);
      });
      await waitFor(() => expect(typingElement.textContent).toBe(char));
    }

    // 텍스트가 사라지기 전에 대기 시간이 존재하는지 확인
    act(() => {
      jest.advanceTimersByTime(wait);
    });
    await waitFor(() => expect(typingElement.textContent).toBe('Hello'));

    // 텍스트가 한 글자씩 사라지는지 확인
    for (const char of ['Hell', 'Hel', 'He', 'H', '']) {
      act(() => {
        jest.advanceTimersByTime(ms);
      });
      await waitFor(() => expect(typingElement.textContent).toBe(char));
    }
  });

  test('loop가 2로 설정되었을 때 정확히 2회 반복 후 멈춤', async () => {
    render(TestRender(<TypoAnimated text="hi" loop={2} ms={ms} wait={wait} />));

    const typingElement = screen.getByTestId('typing-text');

    // 루프를 두 번 실행
    for (let loopCount = 0; loopCount < 2; loopCount++) {
      // 텍스트가 한 글자씩 나타나는지 확인
      for (const char of ['h', 'hi']) {
        act(() => {
          jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe(char));
      }

      // 대기 시간 후 다시 글자가 사라지는지 확인
      if (loopCount !== 1) {
        act(() => {
          jest.advanceTimersByTime(wait);
        });
        await waitFor(() => expect(typingElement.textContent).toBe('h'));

        act(() => {
          jest.advanceTimersByTime(ms);
        });
        await waitFor(() => expect(typingElement.textContent).toBe(''));
      }
    }

    // 두 번의 루프 이후 더 이상 반복되지 않음
    act(() => {
      jest.advanceTimersByTime(ms);
    });
    expect(typingElement.textContent).toBe('hi');
  });

  test('loop가 -1일 때 무한 루프 동작', async () => {
    render(TestRender(<TypoAnimated text="hi" loop={-1} ms={ms} wait={wait} />));

    const typingElement = screen.getByTestId('typing-text');

    // 첫 번째 루프
    for (const char of ['h', 'hi']) {
      act(() => {
        jest.advanceTimersByTime(ms);
      });
      await waitFor(() => expect(typingElement.textContent).toBe(char));
    }

    // wait 시간 경과 후 루프가 다시 시작되는지 확인
    act(() => {
      jest.advanceTimersByTime(wait);
    });
    await waitFor(() => expect(typingElement.textContent).toBe('h'));

    // 추가로 타이머를 더 진행하여 무한 루프 상태 검증
    act(() => {
      jest.advanceTimersByTime(ms * 10);
    });
    expect(typingElement.textContent).not.toBe(''); // 무한 루프 중인 상태
  });
});
