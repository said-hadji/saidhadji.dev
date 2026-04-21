export default function Footer() {
  const word = [
    { id: 1, char: "S" },
    { id: 2, char: "A" },
    { id: 3, char: "I" },
    { id: 4, char: "D" },
    { id: 5, char: " " },
    { id: 6, char: "H" },
    { id: 7, char: "A" },
    { id: 8, char: "D" },
    { id: 9, char: "J" },
    { id: 10, char: "I" },
  ];
  return (
    <div className="w-full bg-gray-950 px-2 sm:px-10 pb-3 xl:pb-18 flex justify-between overflow-hidden">
      {word.map((c) => {
        return (
          <span
            key={c.id}
            className="text-[12vw] text-white font-extrabold translate-y-2 xl:translate-y-10"
          >
            {c.char}
          </span>
        );
      })}
    </div>
  );
}
