export default function Footer() {
  const word = [
    { id: 1, char: "S" },
    { id: 2, char: "A" },
    { id: 3, char: "I" },
    { id: 4, char: "D" },
    { id: 5, char: " " },
    { id: 5, char: "H" },
    { id: 5, char: "A" },
    { id: 5, char: "D" },
    { id: 5, char: "J" },
    { id: 5, char: "I" },
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
