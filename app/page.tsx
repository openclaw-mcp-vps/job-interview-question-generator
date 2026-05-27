export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg">InterviewGen</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#79b8ff] transition-colors">
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          AI-Powered Hiring Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Interview Questions<br />
          <span className="text-[#58a6ff]">Built for the Role</span>
        </h1>
        <p className="text-[#8b949e] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Paste a job description and get tailored interview questions with scoring rubrics in seconds. Hire smarter, faster.
        </p>
        <a href={checkoutUrl} className="inline-block bg-[#58a6ff] text-[#0d1117] px-8 py-4 rounded-lg text-base font-bold hover:bg-[#79b8ff] transition-colors shadow-lg">
          Generate Questions Now — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["Role-specific questions", "Scoring rubrics", "Export to PDF", "Unlimited generations", "Behavioral + technical"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#21262d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Paste Job Description", desc: "Drop in any job posting or write your own role requirements." },
            { step: "2", title: "AI Generates Questions", desc: "Get 10–20 tailored questions covering technical, behavioral, and culture fit." },
            { step: "3", title: "Use Scoring Rubrics", desc: "Each question comes with a rubric so every interviewer scores consistently." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <div className="w-10 h-10 bg-[#58a6ff] text-[#0d1117] rounded-full flex items-center justify-center font-bold text-lg mb-4">{item.step}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-2xl text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to hire well</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited question generation",
              "Scoring rubrics for every question",
              "Behavioral + technical question types",
              "Export to PDF or copy to clipboard",
              "Works for any role or industry",
              "Email support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{feat}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] py-3 rounded-lg font-bold hover:bg-[#79b8ff] transition-colors text-center">
            Start for $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What kinds of questions does it generate?",
              a: "InterviewGen creates behavioral, situational, and technical questions tailored to the specific role. Each question includes a scoring rubric with example strong and weak answers."
            },
            {
              q: "Do I need to know how to write prompts?",
              a: "No. Just paste the job description and click generate. The AI handles everything — you get ready-to-use questions in seconds."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your billing portal with no fees or penalties. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} InterviewGen. Built for founders who hire.</p>
      </footer>
    </main>
  );
}
