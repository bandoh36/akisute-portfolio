export default function HistoryContent() {
  const histories = [
    {
      image: "/img/history/historyImage1.jpg",
      title: "保険系SIerで上流～下流行程を経験",
      description:
        "新卒で入社した保険系SIerではウォーターフォールでの開発案件に参画し、Javaでのプログラム実装だけでなく、要件定義～運用保守フェーズまで幅広く担当。入社3年目には保守開発プロジェクトのリーダーとして、案件管理やメンバーのマネジメントも経験。また独学・社外の研修を通して、Javascriptを用いたフロントエンド開発やAWSを用いたインフラ環境構築について日々自己学習に取り組む。",
    },
    {
      image: "/img/history/historyImage2.jpg",
      title: "Web系ベンチャー企業へ転職",
      description:
        "将来フルスタックに活躍できるエンジニアになる、という理想を実現するため転職を決意。ベンチャー企業へ転職し、自社サービス開発にて現在は主にフロントエンド領域を担当。スクラムにて、NextJS・MaterialUIを用いたモダンなWebシステム開発を経験。バックエンド・インフラ領域にも興味を持ち、今後は業務でも担当できるよう学習中。また業務外では、当ポートフォリオや学習内容発信のためのブログ、その他ToDoアプリなど積極的にアウトプットを実施し研鑽中。",
    },
  ];

  return (
    <div className="space-y-12 flex flex-col items-center">
      {histories.map((item, idx) => (
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
            <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
