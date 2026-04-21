export default function LetterReveal({ baseLetters, revealLetters }) {
  const renderLetters = (arr) => {
    return arr.map((letter) => {
      return (
        <span
          key={letter.id}
          className="group-hover:-translate-y-40 duration-300 block"
          style={{ transitionDelay: `${letter.id * 20}ms` }}
        >
          {letter.char}
        </span>
      );
    });
  };

  return (
    <div className="h-45 overflow-hidden flex flex-col group">
      <div className="flex cursor-default">{renderLetters(baseLetters)}</div>
      <div className="text-transparent [-webkit-text-stroke:2px_black] flex cursor-default">
        {renderLetters(revealLetters)}
      </div>
    </div>
  );
}
