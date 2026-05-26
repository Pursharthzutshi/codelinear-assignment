const logos = [
  'Stripe', 'Shopify', 'Airbnb', 'Notion', 'Linear',
  'Vercel', 'Figma', 'Slack', 'Dropbox', 'Atlassian',
  'Stripe', 'Shopify', 'Airbnb', 'Notion', 'Linear',
  'Vercel', 'Figma', 'Slack', 'Dropbox', 'Atlassian',
]

export default function LogoTicker() {
  return (
    <section
      className="py-16 section-border"
      style={{ background: 'var(--bg-dark-main)' }}
    >
      <div className="container mx-auto" style={{ maxWidth: '1200px' }}>
 
        </div>

        {/* Divider text */}
        <p className="text-center text-sm mb-8 tracking-widest uppercase" style={{ color: '#4A5D73' }}>
          Trusted by teams at
        </p>

        {/* Ticker */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--bg-dark-main), transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--bg-dark-main), transparent)' }}
          />

          <div className="ticker-track">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-8 py-3 mx-2 rounded-lg flex-shrink-0"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  minWidth: '120px',
                }}
              >
                <span className="font-semibold text-sm" style={{ color: '#4A5D73' }}>
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}
