import React from "react";

const ProblemStory: React.FC = () => {
  return (
    <section id="problem" className="border-t">
      <div className="container mx-auto grid gap-10 py-16 md:grid-cols-2">
        <article className="space-y-5">
          <h2 className="text-3xl font-semibold">You’ve earned your seat. You shouldn’t have to lose yourself to keep it.</h2>
          <p className="text-muted-foreground">
            But the unspoken rules, constant code-switching, and invisible tax of leadership are exhausting. You’re a high-performing woman of colour with influence —
          </p>
          <ul className="grid gap-2 text-muted-foreground">
            <li>…still navigating politics that have you second‑guessing your voice.</li>
            <li>…still managing team dynamics where you carry the emotional load.</li>
            <li>…still wondering if there’s a way to lead that doesn’t require losing parts of yourself.</li>
          </ul>
          <p className="text-muted-foreground">If you’ve ever asked:</p>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Is it possible to succeed and still feel whole?</li>
            <li>Can I speak up without being labelled difficult?</li>
            <li>How do I keep leading when I feel so unseen?</li>
          </ul>
          <p className="text-muted-foreground">This is the coaching space for you.</p>
        </article>
        <article className="space-y-5">
          <h3 className="text-2xl font-semibold">Why this space exists</h3>
          <p className="text-muted-foreground">
            I’m Aileen Edwards — and I created this space because I’ve lived this story. As a Black woman, former HR Executive, and now leadership coach, I’ve sat in the boardroom and the backroom.
          </p>
          <p className="text-muted-foreground">
            For 30+ years in corporate leadership, I navigated the tension between responsibility and representation — leading major change while carrying the weight of being “the first,” “the only,” or “the one who has to fix it.”
          </p>
          <p className="text-muted-foreground">
            Now, I help women like you build a new legacy — one where your leadership isn’t rooted in survival, but in sovereignty.
          </p>
          <p className="text-xs text-muted-foreground">AME Consulting & Leadership Coaching · amedwards@ameconsulting.ca · 416-768-3612</p>
        </article>
      </div>
    </section>
  );
};

export default ProblemStory;
