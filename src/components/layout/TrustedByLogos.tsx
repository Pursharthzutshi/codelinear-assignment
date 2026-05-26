
const logos = [
  {
    name: 'SHELLS',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    name: 'SmartFinder',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L22 20H2L12 2Z" />
        <circle cx="12" cy="14" r="3" fill="#040E16" />
      </svg>
    ),
  },
  {
    name: 'Zoomerr',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path d="M13 6L7 13H12L11 18L17 11H12L13 6Z" fill="#040E16" />
      </svg>
    ),
  },
  {
    name: 'ArtVenue',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 22L14 2H18L8 22H4Z" />
        <path d="M10 22L20 2H24L14 22H10Z" />
      </svg>
    ),
  },
  {
    name: 'kontrastr',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22V2Z" />
      </svg>
    ),
  },
  {
    name: 'WAVES MARATHON',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="8" width="2" height="8" />
        <rect x="6" y="4" width="2" height="16" />
        <rect x="10" y="2" width="2" height="20" />
        <rect x="14" y="6" width="2" height="12" />
        <rect x="18" y="10" width="2" height="4" />
      </svg>
    ),
  },
];

export default function TrustedByLogos() {
  return (
    <div className="flex flex-col gap-8 mt-16 text-left">
      <span className="text-[#8A9BB5] text-[13px] font-medium tracking-wide">
        Trusted By:
      </span>
      <div className="flex flex-wrap items-center gap-3 opacity-80">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center gap-2 text-[#8A9BB5] hover:text-white transition-colors duration-300">
            <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
              {logo.icon}
            </div>
            <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
