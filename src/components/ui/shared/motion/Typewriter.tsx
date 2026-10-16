import * as React from 'react';
import { useEffect, useState } from 'react';

type TypewriterProps = { words: string[] };

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

/** Types out each word, holds, deletes it, then moves to the next. */
const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? DELETE_MS : TYPE_MS;

    if (!deleting && text === word) delay = HOLD_MS;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span aria-label={words.join(', ')}>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter__caret" aria-hidden="true" />
    </span>
  );
};

export default Typewriter;
