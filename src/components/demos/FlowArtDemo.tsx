import FlowArt, { FlowSection } from '../ui/story-scroll.tsx';

export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="Présentation Flow Art">
      <FlowSection aria-label="Qui nous sommes" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Who we are</p>
          <hr className="my-[2vw] border-none border-t border-black opacity-100" />
          <div>
            <h1
              className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
            >
              Create
              <br />
              Without
              <br />
              Limits
            </h1>
          </div>
          <hr className="my-[2vw] border-none border-t border-black opacity-100" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            We believe every artist deserves a platform that puts creativity first. No algorithms, no
            noise — just pure art and the people who make it.
          </p>
        </div>
      </FlowSection>

      <FlowSection aria-label="La mission" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Mission background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — The mission</p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div>
            <h2
              className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
            >
              Art
              <br />
              First
              <br />
              Always
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            A global community built for artists, by artists. We&apos;re rewriting the rules of how
            creative work gets seen, shared, and valued.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Discovery</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Human-curated collections that put real eyes on real art. No algorithms deciding your
                fate.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Community</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Find collaborators, mentors, and fellow creatives who push your work forward.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Value</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Fair pricing. Transparent commissions. Artists keep what they earn. Always.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Every feature we build starts with one question — does this serve the artist?
          </p>
        </div>
      </FlowSection>

      <FlowSection aria-label="Comment ça marche" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — How it works</p>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <div>
            <h2
              className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
            >
              Show
              <br />
              Up.
              <br />
              Stand
              <br />
              Out.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Three steps. Zero complexity. Your creative career starts moving the moment you sign up.
          </p>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Upload</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Drag, drop, done. Your portfolio goes live in seconds with full creative control.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — Connect</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Match with collectors, galleries, and brands actively looking for your style.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Grow</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Track engagement, manage commissions, and scale your practice — all in one place.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="La vision" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Vision background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — The vision</p>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <div>
            <h2
              className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
            >
              Future
              <br />
              Of
              <br />
              Art
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            We&apos;re not just building a platform. We&apos;re building a movement.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">10K+</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Artists from 80 countries already shaping the future with us.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">$2M+</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Paid directly to creators in our first year. Zero hidden fees.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">100%</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Artist-owned. Every decision we make starts with the creator.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="Nous rejoindre" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop" 
            alt="Join us background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Join us</p>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <div>
            <h2
              className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
            >
              Ready
              <br />
              To
              <br />
              Begin?
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Take control of your creative journey. Join now and let&apos;s shape the future of the art
            world together.
          </p>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
