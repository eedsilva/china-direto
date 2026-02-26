"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Navbar scroll
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      reveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/*  ─── NAV ───  */}
  <nav id="navbar">
    <a href="#hero" className="nav-logo">
      <svg className="nav-logo-ship" viewBox="0 0 40 40" fill="none">
        <path d="M8 28 C8 28 12 32 20 32 C28 32 32 28 32 28 L30 22 L10 22 Z" fill="#770b0c"/>
        <rect x="17" y="10" width="3" height="12" fill="#770b0c"/>
        <rect x="11" y="14" width="8" height="8" fill="#770b0c"/>
        <rect x="20" y="16" width="7" height="6" fill="#770b0c"/>
        <path d="M20 9 C22 9 24 10 24 12 L20 12 Z" fill="#770b0c" opacity="0.6"/>
        <path d="M6 28 Q20 34 34 28" stroke="#770b0c" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
      <div className="nav-logo-text">CHINA<br />DIRETA</div>
    </a>
    <ul className="nav-links">
      <li><a href="#what">A Missão</a></li>
      <li><a href="#how">Como Funciona</a></li>
      <li><a href="#learning">Aprendizado</a></li>
      <li><a href="#investment">Investimento</a></li>
    </ul>
    <a href="#cta" className="nav-cta">Quero Participar</a>
  </nav>

  {/*  ─── HERO ───  */}
  <section id="hero">
    <div className="hero-ornament"></div>
    <div className="hero-content">
      <p className="hero-eyebrow">China Direta — Missão Exclusiva</p>
      <h1 className="hero-title">
        Missão<br />
        <span>China Trade</span>
      </h1>
      <div className="hero-divider"></div>
      <p className="hero-subtitle">Imersão empresarial na China para quem quer aprender a importar com segurança — antes de investir capital real.</p>
      <div className="hero-not">
        <span className="hero-not-item"><span className="x">✕</span> Não é turismo</span>
        <span className="hero-not-item"><span className="x">✕</span> Não é curso teórico</span>
        <span className="hero-not-item"><span className="x">✕</span> Não vende sonho</span>
      </div>
      <div className="hero-ctas">
        <a href="#cta" className="btn-primary">Fazer Diagnóstico</a>
        <a href="#what" className="btn-ghost">Entender a Missão</a>
      </div>
    </div>
    <div className="scroll-indicator">
      <span>Descer</span>
      <div className="scroll-line"></div>
    </div>
    <div className="hero-stripe"></div>
  </section>

  {/*  ─── WHAT IS IT ───  */}
  <section id="what">
    <div className="container">
      <div className="what-grid">
        <div className="what-text reveal">
          <p className="section-eyebrow">O Que É</p>
          <div className="gold-rule"></div>
          <h2 className="section-title">Decisão Empresarial<br />Guiada</h2>
          <p className="section-lead">A Missão China Trade é uma imersão prática criada para empresários que desejam realizar a primeira importação com segurança. O foco não é passeio — é decisão.</p>
          <br />
          <p className="section-lead">Você aprende em campo: em feiras reais, com fornecedores reais, entendendo custos, impostos, volumes e riscos. Antes de investir um real.</p>
          <div className="what-tags" style={{"marginTop":"2.5rem"}}>
            <span className="tag filled">Imersão Prática</span>
            <span className="tag filled">Grupo Exclusivo</span>
            <span className="tag">Feiras e Fornecedores</span>
            <span className="tag">Curadoria de Produtos</span>
            <span className="tag">Diagnóstico Prévio</span>
          </div>
        </div>
        <div className="what-visual reveal reveal-delay-2">
          <div className="what-card-bg">
            <div className="what-quote">
              A Missão China Trade não vende sonho.<br />
              <strong style={{"fontStyle":"normal","fontWeight":"600","color":"#ffe57d"}}>Entrega entendimento real do negócio.</strong>
            </div>
          </div>
          <div className="what-accent"></div>
        </div>
      </div>
    </div>
  </section>

  {/*  ─── FOR WHO ───  */}
  <section id="forwhom">
    <div className="container">
      <div className="reveal" style={{"marginBottom":"4rem"}}>
        <p className="section-eyebrow" style={{"color":"rgba(255,229,125,0.6)"}}>Para Quem É</p>
        <div className="gold-rule"></div>
        <h2 className="section-title light">A missão certa<br />para o empresário certo.</h2>
      </div>
      <div className="forwhom-inner">
        <div className="forwhom-col yes reveal">
          <h3>✦ &nbsp;É para você se…</h3>
          <ul className="forwhom-list">
            <li>Quer fazer a primeira importação com segurança e clareza</li>
            <li>Tem dúvidas reais sobre viabilidade, custos e riscos</li>
            <li>Quer ver de perto como funciona antes de investir</li>
            <li>Precisa de acompanhamento estratégico na tomada de decisão</li>
            <li>Deseja aprender na prática, não em slides</li>
            <li>Busca reduzir erros caros na operação de importação</li>
          </ul>
        </div>
        <div className="forwhom-col no reveal reveal-delay-2">
          <h3>✕ &nbsp;Não é para você se…</h3>
          <ul className="forwhom-list">
            <li>Procura apenas uma viagem turística à China</li>
            <li>Quer um curso online sem experiência prática</li>
            <li>Já importa com total segurança e domínio do processo</li>
            <li>Não está disposto a tomar decisões empresariais durante a missão</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/*  ─── HOW IT WORKS ───  */}
  <section id="how">
    <div className="container">
      <div className="reveal" style={{"textAlign":"center"}}>
        <p className="section-eyebrow" style={{"textAlign":"center"}}>Como Funciona</p>
        <div className="gold-rule" style={{"marginLeft":"auto","marginRight":"auto"}}></div>
        <h2 className="section-title" style={{"textAlign":"center"}}>Três Momentos.<br />Uma Transformação.</h2>
      </div>
      <div className="how-steps">
        <div className="step reveal reveal-delay-1">
          <div className="step-num">01</div>
          <p className="step-label">Antes da Viagem</p>
          <h3 className="step-title">Diagnóstico &amp; Preparação</h3>
          <p className="step-desc">Analisamos o seu negócio, segmento e objetivos. Você chega à China preparado, com foco estratégico definido e clareza sobre o que buscar.</p>
        </div>
        <div className="step reveal reveal-delay-2">
          <div className="step-num">02</div>
          <p className="step-label">Durante a Viagem</p>
          <h3 className="step-title">Imersão Prática</h3>
          <p className="step-desc">Visitas a feiras, fábricas e fornecedores reais. Formação de preços, impostos, volumes mínimos e negociação — tudo vivenciado em campo, com acompanhamento estratégico.</p>
        </div>
        <div className="step reveal reveal-delay-3">
          <div className="step-num">03</div>
          <p className="step-label">Após a Viagem</p>
          <h3 className="step-title">Clareza &amp; Direcionamento</h3>
          <p className="step-desc">Você volta sabendo se deve importar, o que importar, de quem comprar e como estruturar o processo corretamente. Decisão consciente, baseada em experiência real.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  ─── LEARNING ───  */}
  <section id="learning">
    <div className="container">
      <div className="reveal">
        <p className="section-eyebrow">Conteúdo &amp; Aprendizado</p>
        <div className="gold-rule"></div>
        <h2 className="section-title">O que você vai<br />aprender na prática.</h2>
      </div>
      <div className="learning-grid" style={{"marginTop":"4rem"}}>
        <div className="learning-card reveal">
          <div className="lc-icon">⚖️</div>
          <h3 className="lc-title">Importação na Prática</h3>
          <p className="lc-desc">Como funciona o processo completo de importação do início ao fim, com aprendizado direto no mercado chinês.</p>
        </div>
        <div className="learning-card reveal reveal-delay-1">
          <div className="lc-icon">📊</div>
          <h3 className="lc-title">Custos, Impostos e Preço</h3>
          <p className="lc-desc">Formação real de preço de importação: impostos, frete, margens e viabilidade econômica calculados com dados de campo.</p>
        </div>
        <div className="learning-card reveal reveal-delay-2">
          <div className="lc-icon">🤝</div>
          <h3 className="lc-title">Negociação com Fornecedores</h3>
          <p className="lc-desc">Como negociar diretamente com fabricantes chineses: preço, volume mínimo, qualidade, prazo e proteção contratual.</p>
        </div>
        <div className="learning-card reveal reveal-delay-1">
          <div className="lc-icon">🔍</div>
          <h3 className="lc-title">Curadoria de Produtos</h3>
          <p className="lc-desc">Análise de risco e seleção estratégica de produtos com potencial real para o mercado brasileiro.</p>
        </div>
        <div className="learning-card reveal reveal-delay-2">
          <div className="lc-icon">🏭</div>
          <h3 className="lc-title">Visitas a Feiras e Fábricas</h3>
          <p className="lc-desc">Acesso às principais feiras e fábricas da China com roteiro estratégico definido de acordo com o seu segmento.</p>
        </div>
        <div className="learning-card reveal reveal-delay-3">
          <div className="lc-icon">🧭</div>
          <h3 className="lc-title">Estratégia &amp; Tomada de Decisão</h3>
          <p className="lc-desc">Orientação para decidir com segurança: se importar, o que importar, quanto investir e como estruturar a operação.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  ─── INVESTMENT ───  */}
  <section id="investment">
    <div className="container">
      <div className="reveal">
        <p className="section-eyebrow" style={{"color":"rgba(255,229,125,0.6)"}}>Investimento</p>
        <div className="gold-rule"></div>
        <h2 className="section-title light">Transparência Total.<br />Sem Surpresas.</h2>
        <p className="section-lead light" style={{"marginBottom":"0"}}>Posicionamento claro e profissional. Você sabe exatamente o que está incluído e o que não está antes de decidir.</p>
      </div>
      <div className="investment-grid">
        <div className="inv-col includes reveal reveal-delay-1">
          <h3>O que está incluso</h3>
          <ul className="inv-list">
            <li>Diagnóstico prévio do seu negócio</li>
            <li>Roteiro estratégico personalizado</li>
            <li>Acompanhamento durante todas as visitas</li>
            <li>Acesso a feiras e fornecedores curados</li>
            <li>Formação em importação prática em campo</li>
            <li>Análise de risco e viabilidade dos produtos</li>
            <li>Suporte estratégico na tomada de decisão</li>
            <li>Networking com outros empresários do grupo</li>
          </ul>
        </div>
        <div className="inv-col excludes reveal reveal-delay-2">
          <h3>O que não está incluso</h3>
          <ul className="inv-list">
            <li>Passagem aérea internacional</li>
            <li>Hospedagem e alimentação</li>
            <li>Visto chinês e documentação</li>
            <li>Seguro viagem internacional</li>
            <li>Gastos pessoais e compras particulares</li>
          </ul>
          <div style={{"marginTop":"2.5rem","padding":"1.5rem","border":"1px solid rgba(255,229,125,0.15)"}}>
            <p style={{"fontFamily":"'Cormorant Garamond',serif","fontSize":"1rem","color":"rgba(243,241,235,0.6)","fontStyle":"italic","lineHeight":"1.6"}}>Facilitamos orientações sobre hospedagem, logística e documentação para maximizar a sua experiência.</p>
          </div>
        </div>
      </div>
      <div className="reveal" style={{"textAlign":"center","marginTop":"4rem"}}>
        <a href="#cta" className="btn-primary" style={{"background":"var(--gold)","color":"var(--red)"}}>Solicitar Proposta</a>
      </div>
    </div>
  </section>

  {/*  ─── FINAL CTA ───  */}
  <section id="cta">
    <div className="container">
      <div className="cta-inner reveal">
        <p className="section-eyebrow" style={{"textAlign":"center","fontSize":"0.65rem","marginBottom":"1.5rem"}}>China Direta — Missão China Trade</p>
        <h2 className="cta-title">Pronto para decidir<br />com segurança?</h2>
        <p className="cta-sub">Faça o diagnóstico gratuito e descubra se a Missão China Trade é o próximo passo certo para o seu negócio.</p>
        <a href="https://wa.me/" className="btn-primary" style={{"fontSize":"0.9rem","padding":"1.3rem 3.5rem"}}>Fazer Diagnóstico Gratuito</a>
        <p className="cta-disclaimer">Vagas limitadas por missão. Grupo exclusivo de empresários.</p>
      </div>
    </div>
  </section>

  {/*  ─── FOOTER ───  */}
  <footer>
    <div className="footer-logo">CHINA DIRETA</div>
    <p className="footer-text">© 2025 China Direta — Missão China Trade. Todos os direitos reservados.</p>
  </footer>

  
    </>
  );
}
