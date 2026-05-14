import { HISTORY_CONTENT } from "@/constant/historyConstant";

export default function HistoryContent() {
  return (
    <div className="space-y-12 flex flex-col items-center">
      {HISTORY_CONTENT.map((item, idx) => (
        <div
          key={idx}
          className={`
          flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12
          ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
          bg-white rounded-xl shadow-lg p-6 md:p-6
          max-w-[1200px] w-full
        `}
        >
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover rounded-lg shadow-md max-h-56 md:max-h-72 w-full max-w-xs"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              {item.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
