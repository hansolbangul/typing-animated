import { useEffect, useState } from 'react';

interface Props {
  ms: number;
  wait: number;
  loop?: number;
  text: string;
}

export function TypoAnimated({ text, ms, wait, loop = -1 }: Props) {
  const [typing, setTyping] = useState('');

  useEffect(() => {
    let remainingLoops = loop;

    const run = function* () {
      while (remainingLoops > 0 || remainingLoops === -1) {
        for (let i = 0; i <= text.length; i++) {
          yield text.slice(0, i);
        }

        yield new Promise((resolve) => setTimeout(resolve, ms));

        if (remainingLoops !== 1) {
          for (let i = text.length - 1; i >= 0; i--) {
            yield text.slice(0, i);
          }

          yield new Promise((resolve) => setTimeout(resolve, ms));
        }

        if (remainingLoops > 0) {
          remainingLoops--;
        }
      }
    };

    const iterator = run();

    const handleIteration = async () => {
      for (const value of iterator) {
        if (value instanceof Promise) {
          await value;
        } else {
          setTyping(value as string);
          await new Promise((resolve) => setTimeout(resolve, ms));
        }
      }
    };

    handleIteration();

    return () => {
      iterator.return?.();
    };
  }, [text, ms, wait, loop]);

  return <>{typing}</>;
}
