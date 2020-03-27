import React from 'react';

interface EmojiProps {
  emoji: string;
  label: string;
}

export default function Emoji({ emoji, label }: EmojiProps): JSX.Element {
  return (
    <span aria-label={label} role="img">
      {emoji}
    </span>
  );
}
