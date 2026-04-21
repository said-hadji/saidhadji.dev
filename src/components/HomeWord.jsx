export default function HomeWord() {
  const word = [
    { id: 1, char: "F" },
    { id: 2, char: "R" },
    { id: 3, char: "O" },
    { id: 4, char: "N" },
    { id: 5, char: "T" },
    { id: 6, char: "-" },
    { id: 7, char: "E" },
    { id: 8, char: "N" },
    { id: 9, char: "D" },
    { id: 10, char: "." },
    { id: 11, char: "E" },
    { id: 12, char: "V" },
  ];
  
  return (
    <div className="absolute bottom-0 px-2 sm:px-10 w-full flex justify-between">
      {word.map((c) => {
        return (
          <span
            key={c.id}
            className="text-[12vw] font-extrabold translate-y-2 xl:translate-y-10"
          >
            {c.char}
          </span>
        );
      })}
    </div>
  );
}
