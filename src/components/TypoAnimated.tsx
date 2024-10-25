import { useEffect, useState } from 'react';

interface Props {
  ms: number;
  wait: number;
  text: string;
}

export function TypoAnimated({ text, ms, wait }: Props) {
  const [typing, setTyping] = useState('');

  useEffect(() => {
    const run = function* () {
      while (1) {
        for (let i = 0; i <= text.length; i++) {
          yield text.slice(0, i);
        }

        yield new Promise((resolve) => setTimeout(resolve, ms));

        for (let i = text.length - 1; i >= 0; i--) {
          yield text.slice(0, i);
        }

        yield new Promise((resolve) => setTimeout(resolve, ms));
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
      iterator.return();
    };
  }, [text, ms, wait]);

  return <>{typing}</>;
}
