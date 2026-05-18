"use client";

interface NavigationSection {
  id: string;
  label: string;
}

interface NavigationTabProps {
  currentSection: string;
  sections: NavigationSection[];
  onNavigate: (id: string) => void;
}

const NavigationTab = ({
  currentSection,
  sections,
  onNavigate,
}: NavigationTabProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-slate-950/45 p-2 backdrop-blur-xl shadow-lg">
      {sections.map((section) => {
        const active = currentSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-medium transition md:px-5 ${
              active
                ? "bg-white text-slate-950 shadow-md"
                : "text-slate-200 hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => onNavigate(section.id)}
          >
            {section.label}
          </button>
        );
      })}
    </div>
  );
};

export default NavigationTab;
