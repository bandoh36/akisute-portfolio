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
    <div className="flex max-w-full flex-nowrap items-center justify-start gap-1.5 overflow-x-auto rounded-full border border-white/20 bg-slate-950/55 p-1.5 shadow-lg backdrop-blur-xl md:justify-center md:gap-2 md:p-2">
      {sections.map((section) => {
        const active = currentSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            className={`shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition md:px-5 md:text-sm ${
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
