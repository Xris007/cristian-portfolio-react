import { useEffect, useState } from 'react';

export function useTypedText(values: string[]) {
  const [valueIndex, setValueIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = values[valueIndex];
    const atEnd = charIndex === current.length;
    const atStart = charIndex === 0;
    const delay = atEnd && !deleting ? 1600 : deleting ? 42 : 78;
    const timer = window.setTimeout(() => {
      if (atEnd && !deleting) return setDeleting(true);
      if (atStart && deleting) {
        setDeleting(false);
        setValueIndex((valueIndex + 1) % values.length);
        return;
      }
      setCharIndex((n) => n + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [charIndex, deleting, valueIndex, values]);

  return values[valueIndex].slice(0, charIndex);
}
