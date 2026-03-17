import { useState, useCallback, useRef, useEffect, useMemo } from "react";

// ─── TRADITIONS ────────────────────────────────────────────────
const TRADITIONS = {
  ancient: { label: "Ancient", color: "#C2785C", accent: "#F4D5C0" },
  medieval: { label: "Medieval", color: "#7B6B8A", accent: "#D8CEE0" },
  rationalist: { label: "Rationalism", color: "#4A7C6F", accent: "#C2DDD4" },
  empiricist: { label: "Empiricism", color: "#5B7FA5", accent: "#C0D4E8" },
  german_idealism: { label: "German Idealism", color: "#8C6B4A", accent: "#DBC9AB" },
  existentialism: { label: "Existentialism", color: "#9B4D5A", accent: "#E0B8C1" },
  analytic: { label: "Analytic", color: "#3D6B7A", accent: "#B0CDD7" },
  continental: { label: "Continental", color: "#7A5C8A", accent: "#CDBDD8" },
  pragmatism: { label: "Pragmatism", color: "#6B8C4A", accent: "#C4D9A8" },
  eastern: { label: "Eastern", color: "#B08840", accent: "#E8D5A0" },
  political: { label: "Political", color: "#6A5C4A", accent: "#C9BFAE" },
};

// ─── PHILOSOPHER DATA (enhanced with deep content) ─────────────
const PHILOSOPHERS = {
  socrates: {
    name: "Socrates",
    years: "470–399 BCE",
    sortYear: -470,
    tradition: "ancient",
    tagline: "The examined life",
    blurb: "Socrates never wrote a word. Everything we know comes through Plato, Xenophon, and Aristophanes. He spent his life in the Athenian agora, cornering politicians, poets, and craftsmen with relentless questioning — exposing that those who claimed wisdom had none, while he at least knew the extent of his ignorance. His method (elenchus) wasn't about winning arguments but about midwifing truth from the interlocutor's own beliefs. Athens eventually executed him for 'corrupting the youth' and 'introducing new gods' — making him the West's first philosophical martyr.",
    fuller: `Socrates represents a turning point in Western philosophy — the shift from cosmological speculation (the Presocratics' concern with the nature of the physical world) to ethical and epistemological inquiry focused on human life. His method of elenchus (cross-examination) proceeds by taking an interlocutor's confident claim — "I know what courage is" — and drawing out its logical implications until the claim collapses into contradiction. The goal is aporia: a productive state of confusion that clears the ground for genuine inquiry.

Central to Socratic thought is the unity of virtue and knowledge. If you truly know what is good, you will do it; wrongdoing is therefore a species of ignorance. This intellectualist ethics scandalized contemporaries and continues to provoke — it seems to deny weakness of will (akrasia), which Aristotle would later rehabilitate.

The Socratic turn also introduced the examined life as a philosophical imperative. Philosophy is not merely an intellectual exercise but a way of living — one that demands constant self-scrutiny, humility before complexity, and the courage to follow arguments wherever they lead, even (especially) when they threaten cherished beliefs.

His trial and death, as depicted in Plato's Apology, Crito, and Phaedo, established a template for philosophical integrity: the thinker who would rather die than abandon the pursuit of truth. Whether this is historically accurate or Platonic mythmaking remains debated, but the archetype has shaped Western intellectual culture for 2,400 years.`,
    subtopics: [
      { name: "Elenchus & Dialectic", desc: "The method of cross-examination: taking a thesis, drawing out implications, and arriving at contradiction (aporia). Not a technique for refutation but for collaborative truth-seeking." },
      { name: "Socratic Irony", desc: "Socrates' characteristic pose of ignorance — claiming to know nothing while systematically dismantling his interlocutor's claims. Ironic or genuine? The question itself is philosophical." },
      { name: "Trial & Death", desc: "Charged with impiety and corrupting youth (399 BCE). The Apology, Crito, and Phaedo dramatize his defense, refusal to escape, and final hours — establishing the philosophical martyr archetype." },
      { name: "Socratic Problem", desc: "We have no writings from Socrates himself. Plato, Xenophon, and Aristophanes give contradictory portraits. Separating the historical Socrates from the literary character remains impossible." },
    ],
    primarySources: [
      { title: "Apology", author: "Plato", note: "Socrates' defense speech at trial — the foundational text for what 'doing philosophy' means" },
      { title: "Meno", author: "Plato", note: "Can virtue be taught? Features the slave boy geometry demonstration and the theory of recollection" },
      { title: "Euthyphro", author: "Plato", note: "What is piety? The Euthyphro dilemma remains a live problem in philosophy of religion" },
      { title: "Crito", author: "Plato", note: "Should Socrates escape prison? A compact argument about law, justice, and civil disobedience" },
      { title: "Phaedo", author: "Plato", note: "Socrates' last day: arguments for the soul's immortality and a moving death scene" },
      { title: "Memorabilia", author: "Xenophon", note: "A less philosophically charged but possibly more historically grounded portrait" },
    ],
    ideas: [
      { title: "Socratic Method", desc: "Rigorous questioning to expose contradictions in beliefs. Knowledge emerges through dialectic, not declaration." },
      { title: "Intellectual Humility", desc: "'I know that I know nothing.' Wisdom begins with recognizing the limits of one's knowledge." },
      { title: "Ethics as Knowledge", desc: "No one does wrong willingly — evil is a form of ignorance. Virtue is knowledge." },
      { title: "The Unexamined Life", desc: "A life without self-reflection and philosophical inquiry is not worth living." },
    ],
    influences: [],
    influenced: ["plato", "aristotle", "stoics"],
  },
  plato: {
    name: "Plato",
    years: "428–348 BCE",
    sortYear: -428,
    tradition: "ancient",
    tagline: "Theory of Forms",
    blurb: "Plato founded the Academy — the West's first institution of higher learning — and wrote dramatic dialogues that remain philosophy's most accessible masterpieces. His central insight: the everyday world of change and imperfection participates in an eternal realm of perfect, immutable Forms (Beauty itself, Justice itself, the Good). Philosophy is the soul's ascent from shadows to this higher reality. His influence is so vast that Whitehead called all of Western philosophy 'a series of footnotes to Plato.'",
    fuller: `Plato's philosophy is built on a radical ontological claim: the things we perceive with our senses — trees, chairs, just actions — are imperfect copies of eternal, unchanging Forms (eidos/idea). The Form of the Good sits atop this hierarchy as the source of all being and intelligibility, analogous to the sun that illuminates everything in the visible world.

The epistemological consequence is equally radical: genuine knowledge (episteme) can only be of the Forms, not of the sensible world, which yields only opinion (doxa). The soul, before incarnation, knew the Forms directly; learning is therefore recollection (anamnesis), not discovery. The Allegory of the Cave in Republic VII dramatizes this: most humans are prisoners watching shadows, taking them for reality. The philosopher breaks free, ascends to see the sun (the Good), and returns — painfully — to liberate others.

In ethics and politics, Plato argues that justice in the soul mirrors justice in the city. The soul has three parts — reason, spirit, and appetite — each with its proper virtue (wisdom, courage, temperance). Justice is their harmony, with reason ruling. Analogously, the ideal city has three classes — philosophers, auxiliaries, producers — and is just when philosophers rule, since only they have grasped the Good.

Plato's later dialogues (Parmenides, Sophist, Timaeus) complicate and sometimes challenge the Theory of Forms, introducing problems like the Third Man Argument and the relationship between being and non-being. Whether these represent self-criticism or development remains one of the great interpretive questions in Plato scholarship.`,
    subtopics: [
      { name: "Theory of Forms", desc: "The claim that abstract, perfect, eternal entities (Forms) are more real than physical objects. Physical things 'participate in' or 'imitate' Forms." },
      { name: "Epistemology & Recollection", desc: "Knowledge is recollection of the Forms the soul knew before birth. The divided line distinguishes imagination, belief, reasoning, and direct knowledge of Forms." },
      { name: "Political Philosophy", desc: "The Republic's ideal city, philosopher-kings, the allegory of the cave, the critique of democracy, and the Noble Lie." },
      { name: "Late Dialogues", desc: "The Parmenides' self-critique, the Sophist's analysis of non-being, the Timaeus' cosmology, and the Laws' more practical politics." },
    ],
    primarySources: [
      { title: "Republic", author: "Plato", note: "The masterwork: justice, the ideal city, the cave, the sun, the divided line, philosopher-kings" },
      { title: "Symposium", author: "Plato", note: "On love (eros) as the soul's ascent toward Beauty itself — via Diotima's ladder" },
      { title: "Phaedrus", author: "Plato", note: "The chariot allegory of the soul, divine madness, and a critique of writing" },
      { title: "Parmenides", author: "Plato", note: "Devastating objections to the Theory of Forms — from Plato himself" },
      { title: "Timaeus", author: "Plato", note: "Plato's cosmology: the Demiurge, the World Soul, and the mathematical structure of the physical world" },
    ],
    ideas: [
      { title: "Theory of Forms", desc: "The physical world is an imperfect shadow of an eternal, immutable realm of ideal Forms — perfect archetypes like Beauty, Justice, and the Good." },
      { title: "Allegory of the Cave", desc: "Prisoners chained in a cave mistake shadows for reality. Philosophy is the painful ascent toward truth." },
      { title: "Tripartite Soul", desc: "The soul has three parts: reason (logistikon), spirit (thumoeides), and appetite (epithumetikon). Justice is their harmony." },
      { title: "Philosopher-Kings", desc: "The ideal state is governed by those who have grasped the Form of the Good — philosophers trained in dialectic." },
    ],
    influences: ["socrates"],
    influenced: ["aristotle", "plotinus", "augustine", "descartes"],
  },
  aristotle: {
    name: "Aristotle",
    years: "384–322 BCE",
    sortYear: -384,
    tradition: "ancient",
    tagline: "Virtue & substance",
    blurb: "Plato's most brilliant student who rejected his teacher's otherworldly Forms in favor of studying this world — biology, logic, ethics, politics, rhetoric, poetics, metaphysics, physics. Aristotle invented formal logic, founded biology as a science, and developed virtue ethics. His influence dominated medieval Islamic and Christian thought for a millennium. Where Plato looked up to perfect Forms, Aristotle looked around at the concrete, particular things that actually exist.",
    fuller: `Aristotle's philosophical project is a systematic inquiry into every domain of knowledge, unified by the conviction that form and matter, universal and particular, are not separated (as Plato held) but always found together in concrete substances. His hylomorphism holds that every natural substance is a composite of matter (hyle) and form (morphe): a bronze statue is bronze (matter) shaped into a particular figure (form).

His theory of causation identifies four causes: material (what something is made of), formal (its structure or definition), efficient (what brought it about), and final (its purpose or telos). The final cause is paramount: to understand anything fully, you must grasp what it is for. Nature does nothing in vain.

In ethics, Aristotle rejects Plato's Form of the Good as too abstract. The good for humans is eudaimonia — often translated 'happiness' but better rendered 'flourishing' or 'living well and doing well.' Eudaimonia is achieved through the habitual practice of virtues — stable dispositions to feel and act in the right way, at the right time, toward the right people, for the right reason. Each virtue is a mean between extremes: courage between cowardice and rashness, generosity between stinginess and profligacy.

Aristotle's logic — the theory of the syllogism and the categories — remained the standard for over two thousand years until Frege's revolution in the 19th century. His Physics established the framework for natural philosophy until the Scientific Revolution, and his Poetics continues to shape literary criticism.`,
    subtopics: [
      { name: "Metaphysics & Hylomorphism", desc: "Substance, form and matter, actuality and potentiality, the unmoved mover, the categories of being." },
      { name: "Logic & Organon", desc: "The syllogism, the categories, the square of opposition — formal logic's foundation for 2,000 years." },
      { name: "Virtue Ethics", desc: "Eudaimonia, the doctrine of the mean, practical wisdom (phronesis), friendship, the contemplative life." },
      { name: "Natural Philosophy", desc: "The four causes, teleology in nature, his biological works (the first systematic zoologist), the Physics." },
    ],
    primarySources: [
      { title: "Nicomachean Ethics", author: "Aristotle", note: "The definitive virtue ethics text — eudaimonia, virtues, friendship, the contemplative life" },
      { title: "Metaphysics", author: "Aristotle", note: "'Being qua being' — substance, form/matter, actuality/potentiality, the unmoved mover" },
      { title: "Politics", author: "Aristotle", note: "Humans as political animals, constitutions, the good city, slavery (troublingly defended)" },
      { title: "Poetics", author: "Aristotle", note: "Tragedy, catharsis, plot as 'the soul of tragedy' — still foundational for narrative theory" },
      { title: "Categories + Prior Analytics", author: "Aristotle", note: "The logical works: categories of predication and the formal theory of the syllogism" },
    ],
    ideas: [
      { title: "Hylomorphism", desc: "Every substance is a composite of matter (hyle) and form (morphe). Form is what makes a thing what it is." },
      { title: "Four Causes", desc: "To understand anything, grasp its material, formal, efficient, and final causes. The final cause — purpose (telos) — is paramount." },
      { title: "Virtue Ethics", desc: "The good life is eudaimonia (flourishing) achieved through practicing virtues — habitual dispositions hitting the mean between extremes." },
      { title: "Logic & Categories", desc: "Founded formal logic with the syllogism. Classified being into ten categories: substance, quantity, quality, relation, etc." },
    ],
    influences: ["plato", "socrates"],
    influenced: ["aquinas", "stoics", "hegel"],
  },
  stoics: {
    name: "Stoics",
    years: "~300 BCE–200 CE",
    sortYear: -300,
    tradition: "ancient",
    tagline: "Logos & equanimity",
    blurb: "Founded by Zeno of Citium and developed by Cleanthes, Chrysippus, Seneca, Epictetus, and Marcus Aurelius. The Stoics taught that the cosmos is a rational, living organism governed by Logos (reason/fate), and that the good life consists in aligning one's will with this cosmic order. What you control — your judgments and responses — is all that matters. Everything else (health, wealth, reputation) is 'preferred' but ultimately indifferent.",
    fuller: `Stoicism is a complete philosophical system encompassing logic, physics (natural philosophy), and ethics — but it is the ethics that have proven most enduring. The core insight is the dichotomy of control: some things are 'up to us' (eph' hemin) — our judgments, impulses, desires, and aversions — and some are not (events, others' actions, our bodies, our reputations). Freedom and happiness come from focusing exclusively on what we control.

The Stoic physics grounds this ethics. The cosmos is a rational, living organism pervaded by Logos (divine reason/fate). Everything happens according to this rational order. 'Bad' events are bad only relative to our limited perspective; from the cosmic viewpoint, everything is as it should be. The sage (sophos) — the ideal Stoic — grasps this and remains tranquil amid catastrophe.

Emotions (pathe) for the Stoics are not raw feelings but cognitive judgments — specifically, false judgments about what is good or bad. Fear is the judgment that some future event is bad; grief is the judgment that some past event was bad. Since externals are indifferent, these judgments are false, and the resulting emotions are pathological. Apatheia (freedom from pathe) is not emotional deadness but rational equanimity — the sage still experiences 'good feelings' (eupatheiai) like rational joy, wish, and caution.

Late Stoicism, especially in Seneca, Epictetus, and Marcus Aurelius, becomes more practically oriented and psychologically rich. Epictetus' Discourses and Marcus' Meditations remain among the most powerful self-help texts ever written — far predating the genre, and far surpassing most of it.`,
    subtopics: [
      { name: "Dichotomy of Control", desc: "The foundational distinction between what is up to us and what is not. Epictetus' Enchiridion opens with this." },
      { name: "Stoic Physics & Logos", desc: "The cosmos as a rational living organism, determinism, the conflagration (ekpyrosis), and cosmic cycles." },
      { name: "Stoic Logic", desc: "Propositional logic, the lekton (sayable), and the criterion of truth — more sophisticated than often credited." },
      { name: "Late Stoicism", desc: "Seneca's Letters, Epictetus' Discourses, Marcus Aurelius' Meditations — practical ethics for living." },
    ],
    primarySources: [
      { title: "Discourses & Enchiridion", author: "Epictetus", note: "The most systematic late Stoic — born a slave, became Rome's greatest philosophy teacher" },
      { title: "Meditations", author: "Marcus Aurelius", note: "A Roman emperor's private philosophical journal — raw, repetitive, and profound" },
      { title: "Letters to Lucilius", author: "Seneca", note: "124 letters on how to live — philosophy as practical psychology" },
      { title: "Long and Short Studies in Stoic Philosophy", author: "A.A. Long", note: "The best scholarly introduction to the whole system" },
    ],
    ideas: [
      { title: "Living According to Nature", desc: "The cosmos is governed by rational order (Logos). Happiness comes from aligning one's will with this natural order." },
      { title: "Dichotomy of Control", desc: "Distinguish what is 'up to us' (judgments, desires) from what is not (events, others' actions). Freedom lies in controlling only the former." },
      { title: "Apatheia", desc: "Not apathy, but freedom from destructive passions. Emotions arise from false judgments about what is good or bad." },
    ],
    influences: ["socrates", "aristotle"],
    influenced: ["spinoza", "kant"],
  },
  plotinus: {
    name: "Plotinus",
    years: "204–270 CE",
    sortYear: 204,
    tradition: "ancient",
    tagline: "The One & emanation",
    blurb: "The founder of Neoplatonism, Plotinus transformed Plato's Theory of Forms into a grand metaphysical system centered on 'the One' — an ineffable, transcendent source from which all reality emanates like light from the sun. Hugely influential on Christian, Islamic, and Jewish theology. Where Plato separated Forms from matter, Plotinus wove them into a continuous hierarchy of being descending from absolute unity.",
    fuller: `Plotinus' system, as recorded in the Enneads (edited by his student Porphyry), is organized around three primary 'hypostases' or levels of reality. At the summit is the One (to hen) — absolutely simple, beyond being, beyond thought, beyond language. It is not a thing among things but the source of all things, comparable to the sun that gives light without being diminished.

From the One emanates Nous (Intellect/Mind), which contains the Forms in a state of eternal, unified contemplation. Nous is being and thought united: it thinks the Forms, and in thinking them, it is them. From Nous emanates Soul (Psyche), which bridges the intelligible and sensible worlds. Soul generates time, creates the physical cosmos, and animates individual living beings.

Matter sits at the bottom of this hierarchy — not a substance in its own right but a kind of absolute deficiency, the point where the emanative power of the One finally gives out. Evil, for Plotinus, is not a positive force but privation: the absence of form and being that characterizes matter.

The soul's task is epistrophe — the return to its source. Through philosophical contemplation, ethical purification, and ultimately mystical union, the soul ascends back through the hypostases toward the One. Plotinus reportedly experienced this union several times. His influence on Augustine, Pseudo-Dionysius, and the entire tradition of Christian mysticism is incalculable.`,
    subtopics: [
      { name: "The Three Hypostases", desc: "The One, Nous (Intellect), and Soul — the three fundamental levels of reality in Plotinus' metaphysics." },
      { name: "Emanation", desc: "Reality 'overflows' from the One necessarily, like light from the sun — without diminishing the source." },
      { name: "Matter & Evil", desc: "Matter as privation — the furthest point from the One. Evil is not a force but an absence of being and form." },
      { name: "Mystical Union", desc: "The soul's return (epistrophe) to the One through contemplation — Plotinus' mystical experiences and their philosophical articulation." },
    ],
    primarySources: [
      { title: "Enneads", author: "Plotinus (ed. Porphyry)", note: "Six groups of nine treatises — the complete works, organized thematically by his student" },
      { title: "Enneads V.1 ('On the Three Primary Hypostases')", author: "Plotinus", note: "The most accessible entry point: the One, Intellect, Soul" },
      { title: "Enneads I.6 ('On Beauty')", author: "Plotinus", note: "Beauty as the soul's recognition of form — and ladder toward the One" },
    ],
    ideas: [
      { title: "The One", desc: "Ultimate reality is a singular, ineffable source beyond being and thought. Everything emanates from it like light from the sun." },
      { title: "Emanation", desc: "Reality cascades: The One → Nous (intellect) → Soul → Matter. Each level is a diminished reflection of what's above." },
      { title: "Return to the One", desc: "The soul's goal is epistrophē — turning back toward its source through contemplation and intellectual purification." },
    ],
    influences: ["plato"],
    influenced: ["augustine"],
  },
  augustine: {
    name: "Augustine",
    years: "354–430 CE",
    sortYear: 354,
    tradition: "medieval",
    tagline: "Faith & grace",
    blurb: "A North African rhetorician who converted to Christianity after a dramatic spiritual crisis (recounted in the Confessions), Augustine became the most influential Christian philosopher until Aquinas. He synthesized Neoplatonism with Christian theology, developed the doctrines of original sin and divine grace, and his City of God provided a philosophy of history that shaped Western thought for a millennium.",
    fuller: `Augustine's philosophical significance extends far beyond theology. His Confessions — part autobiography, part prayer, part philosophical treatise — is the West's first great work of introspective self-examination. The famous analysis of time in Book XI remains a touchstone: time cannot be measured objectively (the past no longer exists, the future doesn't yet, the present has no duration), so it must exist as a 'distension of the soul' — memory, attention, and expectation.

His epistemology draws on Plato via Plotinus but Christianizes it: we know eternal truths not by recollecting Forms but through divine illumination. God lights up the mind the way the sun lights up objects. This theory dominated medieval epistemology until Aquinas replaced it with an Aristotelian alternative.

The doctrine of original sin holds that Adam's fall corrupted human nature so thoroughly that we cannot achieve goodness by our own effort — only divine grace can rescue us. This created a tension with human freedom that Augustine wrestled with throughout his career, particularly in his disputes with the Pelagians (who affirmed human capacity for good without grace).

The City of God, written after the sack of Rome in 410, offers a sweeping philosophy of history: two invisible 'cities' — the city of God (oriented by love of God) and the earthly city (oriented by self-love) — are intermingled in history and will be separated only at the Last Judgment. This framework shaped Christian political theology for over a thousand years.`,
    subtopics: [
      { name: "Confessions & Interiority", desc: "The turn inward as the path to God — memory, time, self-knowledge, and the restless heart." },
      { name: "Grace & Free Will", desc: "The Pelagian controversy, original sin, predestination, and the limits of human moral capacity." },
      { name: "Divine Illumination", desc: "How we know eternal truths — God as the 'light' by which the mind sees intelligible objects." },
      { name: "Philosophy of History", desc: "City of God vs. City of Man — Augustine's theological framework for understanding historical events." },
    ],
    primarySources: [
      { title: "Confessions", author: "Augustine", note: "The first great Western autobiography — also a philosophical treatise on memory, time, and desire" },
      { title: "City of God", author: "Augustine", note: "Philosophy of history, critique of Roman religion, the two cities framework" },
      { title: "On Free Choice of the Will", author: "Augustine", note: "Early work on evil, freedom, and divine foreknowledge" },
      { title: "On the Trinity", author: "Augustine", note: "Trinitarian theology using psychological analogies — memory, understanding, will" },
    ],
    ideas: [
      { title: "Original Sin", desc: "Human nature is fundamentally wounded by the Fall. Without divine grace, we are incapable of true goodness." },
      { title: "Divine Illumination", desc: "Knowledge of eternal truths requires God's illumination of the mind — a Christianized Theory of Forms." },
      { title: "City of God vs. City of Man", desc: "History is the drama between two invisible cities: those oriented toward God (charity) and those toward self (cupidity)." },
      { title: "Time & Interiority", desc: "Time exists in the soul's distension — memory (past), attention (present), expectation (future). Turn inward to find God." },
    ],
    influences: ["plato", "plotinus"],
    influenced: ["aquinas", "luther", "descartes"],
  },
  aquinas: {
    name: "Thomas Aquinas",
    years: "1225–1274",
    sortYear: 1225,
    tradition: "medieval",
    tagline: "Faith meets reason",
    blurb: "A Dominican friar who achieved the monumental synthesis of Aristotelian philosophy with Christian theology. Where Augustine had relied on Plato, Aquinas argued that Aristotle's methods — empirical observation, logical demonstration, natural teleology — were fully compatible with faith. His Summa Theologiae, left unfinished at his death, remains the most systematic work of philosophical theology ever attempted.",
    fuller: `Aquinas' fundamental project is to show that faith and reason are complementary, not competing, paths to truth. Some truths (God's existence, the natural law) are accessible to reason alone; others (the Trinity, the Incarnation) require revelation. But they can never truly conflict, since both originate in God.

His Five Ways — five arguments for God's existence — proceed from observable features of the world (motion, causation, contingency, degrees of perfection, teleological order) to a necessary first cause. These are not deductive proofs from self-evident premises but arguments from common experience meant to show that theism is rationally well-grounded.

In metaphysics, Aquinas develops the real distinction between essence and existence (esse). In every created thing, what it is (essence) is distinct from the fact that it is (existence). Only in God are essence and existence identical — God is subsistent being itself (ipsum esse subsistens). This makes God radically different from everything else: not the biggest thing in the universe but the ground of being itself.

His natural law ethics holds that moral law is grounded in human nature and discoverable by reason. The first precept — 'good is to be done and pursued, and evil is to be avoided' — is self-evident. From it, we derive more specific moral norms by examining what genuinely fulfills human nature. This tradition remains the basis of Catholic moral theology and has influenced secular natural law theory.`,
    subtopics: [
      { name: "Five Ways", desc: "Five a posteriori arguments for God's existence — from motion, causation, contingency, gradation, and teleology." },
      { name: "Essence & Existence", desc: "The real distinction in created beings; God as ipsum esse subsistens; the analogy of being." },
      { name: "Natural Law", desc: "Moral law grounded in human nature, discoverable by reason, participating in God's eternal law." },
      { name: "Faith & Reason", desc: "The complementarity thesis: philosophy and theology cannot conflict since both derive from divine truth." },
    ],
    primarySources: [
      { title: "Summa Theologiae", author: "Thomas Aquinas", note: "The masterwork — systematic treatment of God, creation, human nature, ethics, Christ, and sacraments" },
      { title: "Summa Contra Gentiles", author: "Thomas Aquinas", note: "Philosophical theology addressed to non-Christians — more argumentative than the Summa Theologiae" },
      { title: "On Being and Essence", author: "Thomas Aquinas", note: "Short, dense treatise on the essence/existence distinction — a good entry point" },
    ],
    ideas: [
      { title: "Five Ways", desc: "Five arguments for God's existence: from motion, efficient causation, contingency, gradation, and teleology." },
      { title: "Natural Law", desc: "Moral law is grounded in human nature and discoverable by reason. It participates in God's eternal law." },
      { title: "Essence & Existence", desc: "In all created things, essence (what a thing is) is distinct from existence (that it is). Only in God are they identical." },
      { title: "Faith & Reason", desc: "Philosophy and theology are complementary. Reason can reach certain truths about God; revelation completes the picture." },
    ],
    influences: ["aristotle", "augustine"],
    influenced: ["descartes", "locke"],
  },
  buddha: {
    name: "The Buddha",
    years: "~563–483 BCE",
    sortYear: -563,
    tradition: "eastern",
    tagline: "End of suffering",
    blurb: "Siddhartha Gautama, born a prince in what is now Nepal, renounced his privileged life after encountering old age, sickness, and death. After years of asceticism and meditation, he attained enlightenment under the Bodhi tree and spent the remaining 45 years of his life teaching a 'middle way' between self-indulgence and self-mortification. His core teaching: suffering arises from craving, and the path to liberation is the Eightfold Path.",
    fuller: `The Buddha's teaching (dharma) is organized around the Four Noble Truths, which function like a medical diagnosis: (1) Life involves suffering (dukkha — better translated as 'unsatisfactoriness' or 'dis-ease'); (2) Suffering arises from craving (tanha) and ignorance; (3) Cessation of suffering (nirvana) is possible; (4) The path to cessation is the Noble Eightfold Path (right view, intention, speech, action, livelihood, effort, mindfulness, concentration).

The metaphysical foundation is radical: there is no permanent self (anatta). What we call 'the self' is a constantly changing process of five aggregates (skandhas): form, sensation, perception, mental formations, and consciousness. The illusion of a fixed self is the root of craving and therefore of suffering.

Dependent origination (pratityasamutpada) is the Buddha's account of causation: nothing exists independently; everything arises in dependence on conditions. This twelve-link chain explains how ignorance gives rise to suffering in a beginningless cycle of rebirth (samsara). Understanding this chain — really seeing it, not just intellectually grasping it — is what constitutes enlightenment.

The Buddha's influence extends far beyond religion. His psychology of suffering anticipated insights in cognitive therapy; his analysis of the self resonates with Hume's bundle theory and contemporary neuroscience; his emphasis on direct investigation of experience parallels phenomenology. Schopenhauer was the first major Western philosopher to engage seriously with Buddhist ideas.`,
    subtopics: [
      { name: "Four Noble Truths", desc: "The diagnostic framework: dukkha, its origin in craving, its cessation, and the path to cessation." },
      { name: "Anatta & the Five Aggregates", desc: "The no-self doctrine — what we call 'self' is a process of form, sensation, perception, formations, consciousness." },
      { name: "Dependent Origination", desc: "The twelve-link chain of causation: ignorance → formations → consciousness → ... → suffering → ignorance." },
      { name: "Buddhist Ethics & the Eightfold Path", desc: "Right view, intention, speech, action, livelihood, effort, mindfulness, concentration." },
    ],
    primarySources: [
      { title: "Dhammapada", author: "Traditional", note: "Poetic anthology of the Buddha's sayings — the most accessible entry point" },
      { title: "Majjhima Nikaya (Middle Length Discourses)", author: "Pali Canon", note: "152 suttas covering the full range of the Buddha's teaching" },
      { title: "What the Buddha Taught", author: "Walpola Rahula", note: "The standard modern introduction — clear, concise, authoritative" },
    ],
    ideas: [
      { title: "Four Noble Truths", desc: "Life involves suffering (dukkha). Suffering arises from craving (tanha). Cessation is possible. The Eightfold Path leads there." },
      { title: "Anatta (No-Self)", desc: "There is no permanent, unchanging self. What we call 'self' is a constantly changing process of five aggregates (skandhas)." },
      { title: "Dependent Origination", desc: "Nothing exists independently. Everything arises in dependence on conditions — a chain of causation without beginning or end." },
      { title: "Middle Way", desc: "Avoid extremes of self-indulgence and self-mortification. The path to liberation is balanced, moderate, and disciplined." },
    ],
    influences: [],
    influenced: ["schopenhauer"],
  },
  descartes: {
    name: "Descartes",
    years: "1596–1650",
    sortYear: 1596,
    tradition: "rationalist",
    tagline: "Cogito ergo sum",
    blurb: "The 'father of modern philosophy' who broke with the Scholastic tradition by starting from scratch — doubting everything that could possibly be doubted until he found one indubitable truth: 'I think, therefore I am.' From this foundation he attempted to rebuild all of knowledge. His mind-body dualism created the problem that has dominated philosophy of mind ever since.",
    fuller: `Descartes' Meditations on First Philosophy (1641) is arguably the most influential philosophical text of the modern period. Its method of radical doubt strips away every belief that can possibly be questioned: the senses deceive; I might be dreaming; an evil demon might be feeding me false experiences. What survives? The cogito — even if I'm being deceived, I must exist as a thinking thing in order to be deceived.

From this foundation, Descartes rebuilds knowledge in stages. First, he argues that God exists (via versions of the ontological and cosmological arguments) and is no deceiver. Therefore, our faculty of clear and distinct perception is reliable when properly used. This grounds knowledge of mathematics, the external world, and the laws of nature.

The famous mind-body dualism distinguishes two substances: res cogitans (thinking substance — mind) and res extensa (extended substance — body). The mind is non-spatial, indivisible, and directly known through introspection. The body is spatial, divisible, and known through sense perception. How these radically different substances interact became the central problem of Cartesian philosophy, provoking responses from Spinoza, Leibniz, Malebranche, and many others.

Descartes was also a major scientist and mathematician: he invented analytic geometry (the Cartesian coordinate system), developed a mechanistic physics, and contributed to optics and physiology. His philosophical method is inseparable from his scientific ambition — the goal was always a unified system of knowledge as certain as mathematics.`,
    subtopics: [
      { name: "Method of Doubt", desc: "Systematic doubt of senses, dreams, the evil demon hypothesis — stripping away everything uncertain." },
      { name: "The Cogito", desc: "The one indubitable truth: the existence of the thinking self. Foundation for rebuilding knowledge." },
      { name: "Mind-Body Problem", desc: "Substance dualism, the interaction problem, the pineal gland hypothesis, Princess Elisabeth's objection." },
      { name: "Cartesian Science", desc: "Analytic geometry, mechanistic physics, vortex theory, the method of clear and distinct ideas in science." },
    ],
    primarySources: [
      { title: "Meditations on First Philosophy", author: "Descartes", note: "The foundational text of modern philosophy — six meditations from doubt to reconstruction" },
      { title: "Discourse on the Method", author: "Descartes", note: "Autobiographical introduction to his philosophical method — more accessible than the Meditations" },
      { title: "Principles of Philosophy", author: "Descartes", note: "The systematic treatise: metaphysics, physics, and the Cartesian worldview" },
      { title: "Correspondence with Princess Elisabeth", author: "Descartes", note: "Elisabeth's devastating objections to dualism and Descartes' strained replies" },
    ],
    ideas: [
      { title: "Methodical Doubt", desc: "Strip away every belief that can possibly be doubted — the senses, the external world, even mathematics — to find an indubitable foundation." },
      { title: "Cogito", desc: "'I think, therefore I am.' Even if deceived by a demon, the very act of doubting proves the existence of a thinking subject." },
      { title: "Mind-Body Dualism", desc: "Mind (res cogitans) and body (res extensa) are fundamentally different substances. The mind is non-physical and indivisible." },
      { title: "Clear & Distinct Ideas", desc: "Whatever is perceived clearly and distinctly is true. This criterion bootstraps knowledge from the cogito outward." },
    ],
    influences: ["plato", "augustine", "aquinas"],
    influenced: ["spinoza", "leibniz", "locke", "kant"],
  },
  spinoza: {
    name: "Spinoza",
    years: "1632–1677",
    sortYear: 1632,
    tradition: "rationalist",
    tagline: "God or Nature",
    blurb: "Excommunicated from the Amsterdam Jewish community at 23 for his radical ideas, Spinoza developed the most rigorously systematic philosophy since Aristotle. His Ethics, written in geometric style (definitions, axioms, propositions, proofs), argues that God and Nature are one and the same substance, that free will is an illusion, and that liberation comes through understanding the necessity of all things.",
    fuller: `Spinoza's Ethics (published posthumously in 1677) begins with the most radical move in modern philosophy: there is only one substance — God or Nature (Deus sive Natura). This substance has infinite attributes, of which we know two: thought and extension. Everything that exists — every mind, every body, every event — is a mode (modification) of this single substance. There is no transcendent creator; God is the immanent cause of all things.

This substance monism has stunning consequences. Mind and body are not separate substances but the same thing conceived under different attributes (the 'dual aspect' theory). Free will is an illusion: everything follows necessarily from God's nature. 'Freedom' properly understood is not the absence of determination but the capacity to act from one's own nature rather than from external causes.

Spinoza's ethics follows from his metaphysics. Each being's essence is its conatus — its striving to persist and increase its power of acting. 'Good' and 'bad' are not objective features of the world but refer to what aids or hinders this striving. The passions (passive emotions like fear, hatred, envy) arise from inadequate ideas — confused, partial understanding. The intellectual love of God — understanding all things sub specie aeternitatis (under the aspect of eternity) — transforms passive emotion into active understanding, and this is blessedness.

Spinoza's influence resurged dramatically in the 19th century (Hegel, the German Romantics) and again in the 20th (Deleuze). Einstein famously said he believed in 'Spinoza's God.' His political philosophy, developed in the Theological-Political Treatise, was among the earliest modern defenses of democratic governance and freedom of thought.`,
    subtopics: [
      { name: "Substance Monism", desc: "One substance, infinite attributes, modes as modifications — the metaphysical foundation of the Ethics." },
      { name: "Conatus & the Emotions", desc: "Each being's striving to persist, the theory of affects, the transition from passion to action." },
      { name: "Freedom & Necessity", desc: "Determinism, the illusion of free will, freedom as self-determination rather than indetermination." },
      { name: "Political Philosophy", desc: "The Theological-Political Treatise: freedom of thought, democratic governance, biblical criticism." },
    ],
    primarySources: [
      { title: "Ethics", author: "Spinoza", note: "Written in geometric order (definitions, axioms, propositions) — the most rigorous work in modern philosophy" },
      { title: "Theological-Political Treatise", author: "Spinoza", note: "Freedom of thought, biblical criticism, the foundations of the liberal state" },
      { title: "Treatise on the Emendation of the Intellect", author: "Spinoza", note: "Early, unfinished work on method — how to achieve adequate knowledge" },
    ],
    ideas: [
      { title: "Substance Monism", desc: "There is only one substance — God/Nature (Deus sive Natura). Everything that exists is a mode (modification) of this single substance." },
      { title: "Conatus", desc: "Every being strives to persist in its own existence. This striving (conatus) is the essence of each thing." },
      { title: "Determinism", desc: "Everything follows necessarily from God's nature. Free will is an illusion born of ignorance of causes." },
      { title: "Three Kinds of Knowledge", desc: "Imagination (confused), reason (adequate ideas of common properties), and intuition (grasping things sub specie aeternitatis)." },
    ],
    influences: ["descartes", "stoics"],
    influenced: ["hegel", "deleuze"],
  },
  leibniz: {
    name: "Leibniz",
    years: "1646–1716",
    sortYear: 1646,
    tradition: "rationalist",
    tagline: "Best of all possible worlds",
    blurb: "A polymath who independently invented calculus, pioneered binary arithmetic, and built one of the first mechanical calculators. Philosophically, Leibniz proposed that reality consists of infinite 'monads' — simple, windowless substances that mirror the entire universe from their unique perspectives — all pre-harmonized by God to create the best of all possible worlds.",
    fuller: `Leibniz's monadology is one of the most original and strange metaphysical systems ever devised. Rejecting both Cartesian dualism and Spinozist monism, Leibniz argues that reality consists of infinitely many simple, indivisible, immaterial substances called monads. Each monad is 'windowless' — it has no causal interaction with any other monad. Yet each mirrors the entire universe from its own unique perspective, with varying degrees of clarity.

How can non-interacting substances produce the appearance of a causally interconnected world? Through pre-established harmony: God, in creating the monads, programmed each one so that its internal states would unfold in perfect synchrony with every other, like perfectly synchronized clocks. What we experience as causation is really just correlation.

The principle of sufficient reason — nothing exists without a reason why it exists and is as it is rather than otherwise — drives Leibniz's argument for God's existence and for this being the best of all possible worlds. God surveyed all logically possible worlds and chose to create the one that maximizes perfection (the greatest variety of phenomena governed by the simplest laws). Voltaire's Candide famously satirized this optimism, but the underlying logic is more subtle than the satire suggests.

Leibniz's other contributions are staggering: the calculus, binary arithmetic, symbolic logic (anticipating Frege by two centuries), the concept of possible worlds (now central to modal logic), contributions to physics (vis viva, the precursor to kinetic energy), and pioneering work in what we'd now call information theory.`,
    subtopics: [
      { name: "Monadology", desc: "Simple, windowless substances, perception and appetition, the hierarchy of monads, confusion and clarity." },
      { name: "Pre-established Harmony", desc: "God's coordination of non-interacting monads — the solution to mind-body interaction and causation." },
      { name: "Principle of Sufficient Reason", desc: "Nothing is without a reason — the foundation of Leibniz's rationalism and his argument for God." },
      { name: "Possible Worlds & Optimism", desc: "God chose the best possible world — maximum perfection, minimum laws. The logic behind Voltaire's target." },
    ],
    primarySources: [
      { title: "Monadology", author: "Leibniz", note: "90 short paragraphs laying out the entire system — dense but readable" },
      { title: "Discourse on Metaphysics", author: "Leibniz", note: "Earlier, more accessible statement of his core metaphysical views" },
      { title: "Theodicy", author: "Leibniz", note: "The defense of God's goodness in light of evil — 'best of all possible worlds'" },
      { title: "New Essays on Human Understanding", author: "Leibniz", note: "Point-by-point response to Locke's Essay — rationalism vs. empiricism" },
    ],
    ideas: [
      { title: "Monads", desc: "Reality consists of simple, indivisible, windowless monads — each a unique mirror of the universe from its own perspective." },
      { title: "Pre-established Harmony", desc: "Monads don't interact causally. God pre-programmed them to unfold in perfect synchrony, like synchronized clocks." },
      { title: "Best Possible World", desc: "God chose to create this world from infinite possibilities because it maximizes perfection (variety + order)." },
      { title: "Principle of Sufficient Reason", desc: "Nothing exists without a reason. Every truth can, in principle, be explained." },
    ],
    influences: ["descartes"],
    influenced: ["kant", "hegel"],
  },
  locke: {
    name: "John Locke",
    years: "1632–1704",
    sortYear: 1632,
    tradition: "empiricist",
    tagline: "Tabula rasa",
    blurb: "The founder of British empiricism and a father of political liberalism. Locke argued that the mind at birth is a blank slate — all ideas come from experience, not innate knowledge. His political philosophy — government by consent, natural rights to life, liberty, and property — directly shaped the American and French Revolutions.",
    fuller: `Locke's Essay Concerning Human Understanding (1689) launches the empiricist tradition by attacking innate ideas. Against Descartes and the rationalists, Locke argues that the mind at birth is a tabula rasa (blank slate). All ideas derive from experience: either from sensation (external experience of objects) or reflection (internal awareness of our own mental operations).

Ideas are either simple (received passively from experience and incapable of further analysis) or complex (actively constructed by the mind from simple ideas through combination, comparison, and abstraction). Locke distinguishes primary qualities (solidity, extension, motion, number — which are in objects themselves) from secondary qualities (color, taste, smell — which are powers in objects to produce experiences in us).

His account of personal identity is revolutionary: identity is constituted not by the continuity of an immaterial soul or a physical body, but by continuity of consciousness — specifically memory. 'I' am the same person as the child who had my memories, regardless of whether the underlying substance has changed. This relocates identity from metaphysics to psychology.

Locke's Two Treatises of Government argue that political authority derives from the consent of the governed, that individuals have natural rights to life, liberty, and property, and that a government that violates these rights forfeits its legitimacy. These ideas were not merely theoretical — Jefferson drew on Locke directly when writing the Declaration of Independence.`,
    subtopics: [
      { name: "Empiricism & Ideas", desc: "Tabula rasa, simple and complex ideas, sensation and reflection, the attack on innate ideas." },
      { name: "Primary & Secondary Qualities", desc: "What's really in the object vs. what's in the perceiver — and the philosophical problems this distinction creates." },
      { name: "Personal Identity", desc: "Identity as continuity of consciousness — the memory theory and its famous thought experiments." },
      { name: "Political Liberalism", desc: "Natural rights, consent of the governed, property theory, the right of revolution." },
    ],
    primarySources: [
      { title: "An Essay Concerning Human Understanding", author: "Locke", note: "The foundation of empiricism — 700+ pages, but Book II on ideas is the heart" },
      { title: "Two Treatises of Government", author: "Locke", note: "Against divine right (First Treatise) and for natural rights and consent (Second Treatise)" },
      { title: "A Letter Concerning Toleration", author: "Locke", note: "The argument for religious tolerance and separation of church and state" },
    ],
    ideas: [
      { title: "Tabula Rasa", desc: "The mind at birth is a blank slate. All ideas come from experience — either sensation (external) or reflection (internal)." },
      { title: "Primary vs. Secondary Qualities", desc: "Primary qualities (extension, motion) are in objects. Secondary qualities (color, taste) are in our minds." },
      { title: "Personal Identity", desc: "Identity is constituted by continuity of consciousness (memory), not substance. You are your remembered experiences." },
      { title: "Social Contract & Natural Rights", desc: "Government is legitimate only by consent of the governed. Humans have natural rights to life, liberty, and property." },
    ],
    influences: ["descartes", "aquinas"],
    influenced: ["hume", "berkeley", "kant", "mill"],
  },
  berkeley: {
    name: "Berkeley",
    years: "1685–1753",
    sortYear: 1685,
    tradition: "empiricist",
    tagline: "To be is to be perceived",
    blurb: "An Irish bishop who took empiricism to its radical conclusion: if all we know are our ideas (as Locke argued), then the notion of a material world existing independently of perception is incoherent. 'Esse est percipi' — to be is to be perceived. Physical objects are nothing but collections of ideas in minds, sustained in existence by God's perpetual perception.",
    fuller: `Berkeley's immaterialism (which he preferred to call 'idealism') follows from a ruthless application of Locke's own principles. If everything we know comes from experience, and experience consists of ideas, then what grounds the belief in a 'material substance' lurking behind our ideas? Locke's own distinction between primary and secondary qualities collapses: we perceive extension and shape just as much through ideas as we perceive color and taste. There is no coherent notion of matter independent of perception.

The result: 'physical objects' are nothing but stable, coherent collections of ideas. The table exists when I perceive it. But what about when I leave the room? Berkeley's answer: God perpetually perceives everything, sustaining objects in existence. Far from being a skeptical conclusion, Berkeley saw this as a proof of God's existence and constant providential activity.

Berkeley also mounted a devastating critique of abstract ideas. Locke held that we form abstract general ideas (the idea of 'triangle in general,' for instance). Berkeley argues this is impossible: every idea is particular. Abstraction is just selective attention — considering certain features of a particular idea while ignoring others.

Though often treated as a philosophical curiosity, Berkeley's arguments against material substance are remarkably difficult to refute on empiricist grounds. His influence on Hume (who saw Berkeley's move as clearing the way for an even more radical skepticism) and on 20th-century phenomenalism is substantial.`,
    subtopics: [
      { name: "Immaterialism", desc: "The denial of material substance — objects as collections of ideas, esse est percipi." },
      { name: "God as Perceiver", desc: "God's perpetual perception sustains the existence of objects when no finite mind perceives them." },
      { name: "Critique of Abstract Ideas", desc: "Against Locke: we cannot form genuinely abstract ideas. Every idea is particular." },
    ],
    primarySources: [
      { title: "A Treatise Concerning the Principles of Human Knowledge", author: "Berkeley", note: "The main statement of immaterialism — short and surprisingly readable" },
      { title: "Three Dialogues between Hylas and Philonous", author: "Berkeley", note: "The same arguments in accessible dialogue form — the best entry point" },
    ],
    ideas: [
      { title: "Immaterialism", desc: "Material substance doesn't exist. 'Physical' objects are collections of ideas in minds. Esse est percipi — to be is to be perceived." },
      { title: "God as Guarantor", desc: "Objects continue to exist when unperceived because God perpetually perceives everything." },
      { title: "Critique of Abstract Ideas", desc: "We cannot form genuinely abstract ideas. Every idea is particular; abstraction is just selective attention." },
    ],
    influences: ["locke"],
    influenced: ["hume"],
  },
  hume: {
    name: "David Hume",
    years: "1711–1776",
    sortYear: 1711,
    tradition: "empiricist",
    tagline: "Radical skepticism",
    blurb: "The most important philosopher in the English language — and he knew it. Hume pushed empiricism to its logical extremes, demolishing our confidence in causation, the self, induction, and the rational basis of morality. Kant said Hume 'awakened him from his dogmatic slumber.' His cool, ironic prose masks arguments that remain as devastating today as in the 18th century.",
    fuller: `Hume's Treatise of Human Nature (1739) and its later reworkings (the two Enquiries) constitute the most thorough application of empiricist principles to the full range of philosophical questions. His method is simple: trace every idea back to the impression (sense experience) from which it derives. If no impression can be found, the idea is confused or meaningless.

This produces devastating results. Causation: we never perceive causal power or necessary connection; all we see is constant conjunction (one event regularly followed by another). Our belief in causation is a psychological habit, not a rational insight. The self: introspection reveals only a bundle of perceptions in constant flux — there is no underlying 'I' that has these perceptions. Induction: we cannot rationally justify the inference from past to future; the principle that 'the future will resemble the past' is itself an inductive inference, and thus circular.

In ethics, Hume drives a wedge between facts and values (the is-ought problem). You cannot derive moral conclusions from purely factual premises. Morality is grounded not in reason but in sentiment — specifically, in the natural human capacity for sympathy and the social utility of moral conventions. 'Reason is, and ought only to be, the slave of the passions.'

Hume's skepticism is not nihilistic but therapeutic. We cannot live as skeptics — nature compels us to believe in causation, the external world, and the self. But philosophical reflection reveals these beliefs to be habits, not knowledge. This makes us properly humble about our cognitive powers while freeing us to investigate the actual mechanisms of human thought.`,
    subtopics: [
      { name: "Problem of Induction", desc: "We cannot rationally justify inductive inference — the future resembling the past is itself an inductive assumption." },
      { name: "Causation & Custom", desc: "No perception of necessary connection — just constant conjunction. Causal belief is psychological habit." },
      { name: "Bundle Theory of Self", desc: "No enduring self — only a stream of perceptions. The 'self' is a useful fiction the mind constructs." },
      { name: "Moral Sentimentalism", desc: "Morality grounded in feeling, not reason. The is-ought distinction, sympathy, and the social utility of virtues." },
    ],
    primarySources: [
      { title: "A Treatise of Human Nature", author: "Hume", note: "The full system — brilliant but dense. Books I (understanding) and II (passions) are the core" },
      { title: "An Enquiry Concerning Human Understanding", author: "Hume", note: "The accessible rewrite of Treatise Book I — the best entry point" },
      { title: "An Enquiry Concerning the Principles of Morals", author: "Hume", note: "Hume's own favorite work — moral philosophy grounded in sentiment" },
      { title: "Dialogues Concerning Natural Religion", author: "Hume", note: "Devastating critique of the argument from design — published posthumously" },
    ],
    ideas: [
      { title: "Problem of Induction", desc: "We cannot rationally justify the belief that the future will resemble the past. Causal inference rests on habit, not reason." },
      { title: "Bundle Theory of Self", desc: "There is no enduring self — only a bundle of perceptions in constant flux. The 'self' is a useful fiction." },
      { title: "Is-Ought Problem", desc: "You cannot derive moral conclusions (ought) from factual premises (is). This 'guillotine' separates facts from values." },
      { title: "Causation as Custom", desc: "We never perceive causal power itself — only constant conjunction. Causation is a mental habit projected onto experience." },
    ],
    influences: ["locke", "berkeley"],
    influenced: ["kant", "mill", "russell", "wittgenstein"],
  },
  kant: {
    name: "Immanuel Kant",
    years: "1724–1804",
    sortYear: 1724,
    tradition: "german_idealism",
    tagline: "Critique of Pure Reason",
    blurb: "Kant achieved what may be philosophy's greatest synthesis: rescuing knowledge from Hume's skepticism without retreating to rationalist dogmatism. His 'Copernican revolution' proposed that the mind doesn't passively receive experience but actively structures it through built-in categories. He then derived a universal moral law — the categorical imperative — from pure reason alone. Almost everything in philosophy after 1781 is either building on Kant or reacting against him.",
    fuller: `The Critique of Pure Reason (1781/1787) addresses a question Hume made urgent: how is knowledge possible? Hume showed that experience alone cannot ground knowledge of causation, substance, or the self. The rationalists claimed knowledge independent of experience but couldn't validate their metaphysical claims. Kant's solution: the mind imposes certain structures (the forms of intuition — space and time — and twelve categories of the understanding, including causality) on raw experience. Knowledge results from the combination of sensory input and these a priori structures.

This means we can have genuine knowledge — but only of phenomena (things as they appear to us, structured by our cognitive apparatus). We can never know things-in-themselves (noumena) — reality as it is independently of our minds. This is transcendental idealism: the objects of experience are mind-dependent in their form, though not in their matter.

The Critique of Practical Reason extends this framework to ethics. Since morality cannot be grounded in experience (which yields only contingent, particular facts), it must be grounded in pure practical reason. The categorical imperative — 'Act only according to that maxim which you could will to be a universal law' — is the fundamental principle. This yields duties that hold for all rational beings regardless of desires, circumstances, or consequences. The humanity formula — 'Treat humanity never merely as a means, but always also as an end' — captures the core of Kantian respect for persons.

Kant's third Critique, on judgment, addresses aesthetics and teleology — how we experience beauty and purposiveness in nature. It bridges the theoretical and practical domains through the idea of reflective judgment, and its account of the sublime and of artistic genius has been deeply influential.`,
    subtopics: [
      { name: "Transcendental Idealism", desc: "Phenomena vs. noumena, the forms of intuition, the categories, the synthetic a priori." },
      { name: "Moral Philosophy", desc: "The categorical imperative, autonomy, duty, the kingdom of ends, the postulates of practical reason." },
      { name: "Aesthetics & Teleology", desc: "The third Critique: beauty, the sublime, reflective judgment, purposiveness without purpose." },
      { name: "The Copernican Revolution", desc: "Objects conform to our knowledge, not vice versa — the mind's active role in constituting experience." },
    ],
    primarySources: [
      { title: "Critique of Pure Reason", author: "Kant", note: "The foundation — notoriously difficult but indispensable. Start with the Prefaces and Introduction" },
      { title: "Groundwork of the Metaphysics of Morals", author: "Kant", note: "The accessible entry point for Kantian ethics — short, clear, powerful" },
      { title: "Critique of Practical Reason", author: "Kant", note: "The full system of moral philosophy — freedom, the moral law, the highest good" },
      { title: "Critique of the Power of Judgment", author: "Kant", note: "Aesthetics, teleology, and the bridge between theoretical and practical reason" },
      { title: "Prolegomena to Any Future Metaphysics", author: "Kant", note: "Kant's own 'accessible version' of the first Critique — a useful companion" },
    ],
    ideas: [
      { title: "Transcendental Idealism", desc: "We never know things-in-themselves (noumena). Experience is structured by the mind's own categories — space, time, causality — yielding phenomena." },
      { title: "Synthetic A Priori", desc: "Some knowledge is both informative (synthetic) and independent of experience (a priori). Mathematics and causality are examples." },
      { title: "Categorical Imperative", desc: "Act only according to maxims you could will to be universal laws. Treat humanity never merely as means, but always also as ends." },
      { title: "Copernican Revolution", desc: "Objects conform to our knowledge, not the reverse. The mind actively structures experience rather than passively receiving it." },
    ],
    influences: ["descartes", "hume", "leibniz", "locke", "stoics"],
    influenced: ["hegel", "schopenhauer", "nietzsche", "husserl", "rawls"],
  },
  hegel: {
    name: "Hegel",
    years: "1770–1831",
    sortYear: 1770,
    tradition: "german_idealism",
    tagline: "Dialectic & Spirit",
    blurb: "The most ambitious system-builder since Aristotle. Hegel argued that reality is the progressive self-realization of Spirit (Geist) through a dialectical process of contradiction and resolution. History, art, religion, and philosophy are all stages in Spirit's journey toward absolute self-knowledge. Maddening, obscure, and possibly the most influential philosopher of the 19th century.",
    fuller: `Hegel's philosophy is notoriously difficult, but its core idea is relatively simple: reality is not a static structure but a dynamic process of development through contradiction. Every concept, institution, or stage of consciousness contains internal tensions that drive it to negate itself and produce something new — which in turn contains its own tensions. This is the dialectic (often simplified as thesis → antithesis → synthesis, though Hegel rarely uses these terms).

The Phenomenology of Spirit (1807) traces consciousness's journey from naive sense-certainty to absolute knowledge, passing through stages like self-consciousness, reason, spirit, and religion. The famous master-slave dialectic shows how self-consciousness requires recognition by another, and how the slave (who transforms nature through labor) ultimately achieves a richer self-knowledge than the master.

The Logic (1812-16) develops the dialectical structure of pure thought — from Being and Nothing through Essence to the Concept. This is not formal logic but ontological logic: the self-developing structure of reality itself. 'The rational is the real, and the real is the rational.'

Hegel's philosophy of history sees world history as the progressive realization of freedom. Each civilization embodies a particular stage of Spirit's self-knowledge: the Oriental world (one is free — the despot), the Greek and Roman world (some are free), and the Germanic world (all are free — universal freedom through rational institutions). Marx, Kierkegaard, and the existentialists all define themselves largely in reaction to Hegel.`,
    subtopics: [
      { name: "Dialectic", desc: "Development through contradiction — thesis/antithesis/synthesis, Aufhebung (sublation), determinate negation." },
      { name: "Phenomenology of Spirit", desc: "Consciousness's journey to absolute knowledge — sense-certainty, master-slave, unhappy consciousness, spirit." },
      { name: "Philosophy of History", desc: "History as the progressive realization of freedom — Spirit working through civilizations." },
      { name: "Absolute Idealism", desc: "Reality is the self-development of Spirit/Mind. 'The rational is the real, and the real is the rational.'" },
    ],
    primarySources: [
      { title: "Phenomenology of Spirit", author: "Hegel", note: "The dramatic masterwork — start with the Preface and master-slave dialectic (ch. IV)" },
      { title: "Science of Logic", author: "Hegel", note: "The pure dialectic of thought — extraordinarily difficult but fundamental" },
      { title: "Philosophy of Right", author: "Hegel", note: "Political philosophy: property, morality, ethical life, the state" },
      { title: "Lectures on the Philosophy of History", author: "Hegel", note: "The most accessible Hegel — history as freedom's self-realization" },
    ],
    ideas: [
      { title: "Dialectic", desc: "Reality develops through contradiction: thesis → antithesis → synthesis. Each stage is negated and preserved (aufgehoben) in the next." },
      { title: "Absolute Spirit (Geist)", desc: "History is Spirit's progressive self-realization through art, religion, and philosophy. Freedom is the goal of world history." },
      { title: "Master-Slave Dialectic", desc: "Self-consciousness requires recognition by another. The master-slave relation paradoxically elevates the slave, who achieves self-knowledge through labor." },
      { title: "The Rational is Real", desc: "What is rational is actual, and what is actual is rational. Reality has an inherent logical structure." },
    ],
    influences: ["kant", "spinoza", "aristotle", "leibniz"],
    influenced: ["marx", "kierkegaard", "heidegger", "sartre"],
  },
  schopenhauer: {
    name: "Schopenhauer",
    years: "1788–1860",
    sortYear: 1788,
    tradition: "german_idealism",
    tagline: "Will & suffering",
    blurb: "Kant's self-appointed heir and Hegel's bitter rival. Schopenhauer identified the thing-in-itself as a blind, purposeless striving — the Will — that manifests as all phenomena. Life is suffering because desire is endless and satisfaction fleeting. The only escapes: aesthetic contemplation (temporary) and denial of the will (permanent). The first major Western philosopher to engage seriously with Indian thought.",
    fuller: `Schopenhauer's The World as Will and Representation (1818/1844) takes Kant's distinction between phenomena and the thing-in-itself and gives it dramatic content. The phenomenal world — the world as representation — is structured by the forms of space, time, and causality (the 'principle of sufficient reason'). But behind this veil, the thing-in-itself is the Will: a blind, purposeless, insatiable striving that manifests as everything from gravity to sexual desire.

This metaphysics generates a thoroughgoing pessimism. The Will drives all living beings to crave ceaselessly. Satisfaction is momentary and immediately gives way to new desire or boredom. Life thus oscillates between suffering and tedium, with pleasure being merely the temporary cessation of pain. The world is 'the worst of all possible worlds' — a deliberate inversion of Leibniz.

Schopenhauer identifies two modes of escape. Art — especially music, which he regarded as a direct expression of the Will itself — temporarily suspends willing by making us 'pure subjects of knowing.' We lose ourselves in aesthetic contemplation and are freed from desire. But this is fleeting. The only permanent escape is the denial of the will-to-live: a turning away from desire and individuality that Schopenhauer finds in asceticism, compassion, and the mystical traditions of Christianity, Hinduism, and Buddhism.

His influence on Nietzsche (who both absorbed and reacted against him), Wagner, Freud (the unconscious), Wittgenstein, and Thomas Mann is profound. His clear, vigorous prose makes him one of the most readable of the great philosophers.`,
    subtopics: [
      { name: "The Will", desc: "The thing-in-itself as blind, purposeless striving — manifesting as all phenomena from gravity to desire." },
      { name: "Pessimism", desc: "Life as oscillation between suffering and boredom. The impossibility of lasting satisfaction." },
      { name: "Aesthetics & Music", desc: "Art as temporary suspension of the Will. Music as the Will's direct expression, not mere representation." },
      { name: "Eastern Influences", desc: "Hindu and Buddhist resonances: maya, the denial of the will-to-live, compassion as metaphysical insight." },
    ],
    primarySources: [
      { title: "The World as Will and Representation", author: "Schopenhauer", note: "The complete system — Vol. I is the argument, Vol. II is elaboration. Start with Vol. I" },
      { title: "On the Fourfold Root of the Principle of Sufficient Reason", author: "Schopenhauer", note: "Schopenhauer's dissertation — the epistemological foundation" },
      { title: "Essays and Aphorisms", author: "Schopenhauer", note: "Penguin anthology of his shorter writings — witty, accessible, caustic" },
    ],
    ideas: [
      { title: "Will to Live", desc: "The thing-in-itself is a blind, purposeless striving — the Will. All of nature, including us, is its manifestation." },
      { title: "Pessimism", desc: "Desire is endless suffering. Satisfaction is fleeting and immediately births new desire. Life oscillates between pain and boredom." },
      { title: "Aesthetic Contemplation", desc: "Art temporarily suspends the Will. In aesthetic experience, we become 'pure subjects of knowing,' freed from desire." },
      { title: "Eastern Synthesis", desc: "Drew deeply from Hindu and Buddhist thought. Salvation lies in denial of the will-to-live — a resignation linked to asceticism and compassion." },
    ],
    influences: ["kant"],
    influenced: ["nietzsche", "wittgenstein", "freud"],
  },
  kierkegaard: {
    name: "Kierkegaard",
    years: "1813–1855",
    sortYear: 1813,
    tradition: "existentialism",
    tagline: "Leap of faith",
    blurb: "The father of existentialism wrote under a dizzying array of pseudonyms, each representing a different existential standpoint. Against Hegel's all-encompassing system, Kierkegaard insisted that existence cannot be systematized — it must be lived. The individual, standing before God in anxiety and trembling, must make a 'leap of faith' that no rational system can ground.",
    fuller: `Kierkegaard's authorship is uniquely indirect. Works like Either/Or, Fear and Trembling, and The Concept of Anxiety are written under pseudonyms that embody different existential stances — the aesthete, the ethicist, the knight of faith — allowing Kierkegaard to explore each position from within rather than pronouncing on them from above.

His three stages of existence — aesthetic, ethical, and religious — describe qualitatively different modes of being. The aesthetic lives for pleasure, novelty, and the interesting; the ethical commits to universal moral duty; the religious stands alone before God in a commitment that may require suspending the ethical (as in Abraham's willingness to sacrifice Isaac). The transitions between stages are not rational progressions but leaps — discontinuous, passionate, individual choices.

Anxiety (Angst) is central: it arises not from any particular threat but from freedom itself — the vertigo of infinite possibility. Kierkegaard describes it as 'the dizziness of freedom.' It is both the danger and the precondition of authentic selfhood.

His attack on Hegel is relentless: the system swallows the individual into abstraction; it confuses logical necessity with existential reality; it offers a view from nowhere when what matters is the passionate, situated, particular life of this individual. 'The crowd is untruth' — truth is subjectivity, not objective doctrine but the inwardness with which one relates to one's own existence.`,
    subtopics: [
      { name: "Three Stages of Existence", desc: "Aesthetic, ethical, religious — and the qualitative leaps between them." },
      { name: "Anxiety & Despair", desc: "Anxiety as the dizziness of freedom; despair as the failure to be a self. The Sickness Unto Death." },
      { name: "The Leap of Faith", desc: "Abraham and Isaac, the teleological suspension of the ethical, the knight of faith." },
      { name: "Indirect Communication", desc: "The pseudonymous authorship, irony, the problem of communicating existential truth." },
    ],
    primarySources: [
      { title: "Fear and Trembling", author: "Kierkegaard (as Johannes de Silentio)", note: "Abraham's sacrifice, the knight of faith — short, gripping, foundational" },
      { title: "Either/Or", author: "Kierkegaard (as Victor Eremita, et al.)", note: "The aesthetic vs. ethical life — includes 'The Seducer's Diary' and Judge Wilhelm's letters" },
      { title: "The Concept of Anxiety", author: "Kierkegaard (as Vigilius Haufniensis)", note: "Anxiety as the presupposition of sin and freedom — dense but rewarding" },
      { title: "The Sickness Unto Death", author: "Kierkegaard (as Anti-Climacus)", note: "Despair analyzed in all its forms — the failure to be a self before God" },
    ],
    ideas: [
      { title: "Three Stages of Existence", desc: "The aesthetic (pleasure), ethical (duty), and religious (faith) stages. Each requires a qualitative leap, not rational transition." },
      { title: "Anxiety & Dread", desc: "Anxiety arises from freedom itself — the dizzying awareness of infinite possibility. It is the precondition for authentic selfhood." },
      { title: "Subjective Truth", desc: "Truth is subjectivity. What matters is not objective doctrine but the passion and inwardness with which one relates to existence." },
      { title: "Critique of Hegel", desc: "Hegel's system swallows the individual into abstraction. Existence cannot be systematized — it must be lived." },
    ],
    influences: ["hegel"],
    influenced: ["heidegger", "sartre", "camus"],
  },
  nietzsche: {
    name: "Nietzsche",
    years: "1844–1900",
    sortYear: 1844,
    tradition: "existentialism",
    tagline: "Will to Power",
    blurb: "The philosopher with the hammer — Nietzsche diagnosed the death of God, traced morality's origins to resentment and power, and called for the creation of new values by those strong enough to affirm life in all its suffering. Wildly misappropriated by Nazis, he was in fact a fierce individualist, anti-nationalist, and enemy of anti-Semitism. His aphoristic, literary style makes him the most quotable and most misquoted philosopher.",
    fuller: `Nietzsche's thought defies systematic summary — he deliberately wrote in aphorisms, parables, and polemics to resist reduction to doctrine. But several themes persist across his work.

The death of God is not a theological claim but a cultural diagnosis: modern Western civilization has undermined its own foundations. Christian morality, which grounded European values for millennia, rests on a God that educated Europeans can no longer believe in. The consequences — nihilism, the loss of meaning, the collapse of absolute values — are the central problem of modernity.

The genealogy of morals traces the origins of moral concepts. 'Good' originally meant noble, powerful, life-affirming. The 'slave revolt in morality' — driven by resentment (ressentiment) — inverted these values: weakness became virtue, suffering became holy, power became evil. Christianity is the fullest expression of this transvaluation.

The will to power is not (as commonly misread) a desire for political domination but the fundamental drive of all life toward self-expression, self-overcoming, and enhancement. The Übermensch (overman) is not a tyrant but one who creates new values in a godless world — who affirms life including its suffering. Eternal recurrence is the ultimate test: could you will to live your exact life, in every detail, infinitely many times?

Nietzsche's influence is vast: existentialism, postmodernism, Foucault's genealogy, Freudian psychology, literary modernism, and contemporary debates about value creation all owe fundamental debts to him.`,
    subtopics: [
      { name: "Death of God & Nihilism", desc: "The cultural crisis of modernity: the loss of absolute values and the challenge of creating meaning without transcendent foundations." },
      { name: "Genealogy of Morals", desc: "Master and slave morality, ressentiment, the priestly caste, the transvaluation of values." },
      { name: "Will to Power", desc: "The fundamental drive of life — not domination but self-overcoming, expression, and enhancement." },
      { name: "Eternal Recurrence & Amor Fati", desc: "The thought experiment: could you affirm living this exact life infinitely? Love of fate as the highest affirmation." },
    ],
    primarySources: [
      { title: "On the Genealogy of Morality", author: "Nietzsche", note: "Three essays on the origins of moral concepts — his most sustained argument" },
      { title: "Beyond Good and Evil", author: "Nietzsche", note: "Prelude to the Genealogy — aphoristic, wide-ranging critique of philosophical prejudices" },
      { title: "Thus Spoke Zarathustra", author: "Nietzsche", note: "The literary-philosophical masterwork — the Übermensch, eternal recurrence, the death of God" },
      { title: "The Gay Science", author: "Nietzsche", note: "Contains the 'madman' parable and the first statement of eternal recurrence" },
      { title: "Twilight of the Idols", author: "Nietzsche", note: "Late summary of his thought — 'philosophizing with a hammer'" },
    ],
    ideas: [
      { title: "Will to Power", desc: "The fundamental drive in all life is not survival or pleasure, but the expression and enhancement of power — creative self-overcoming." },
      { title: "Death of God", desc: "Modern culture has killed God — the foundation of Western morality. We must confront the resulting nihilism and create new values." },
      { title: "Eternal Recurrence", desc: "Imagine living your exact life infinitely. Can you affirm it? This thought-experiment is the ultimate test of amor fati — love of fate." },
      { title: "Genealogy of Morals", desc: "Morality has a history. 'Good/evil' replaced 'good/bad' through a 'slave revolt' — resentment reframed weakness as virtue." },
      { title: "Übermensch", desc: "The overman creates their own values in a godless world. Not a tyrant, but one who achieves authentic self-mastery." },
    ],
    influences: ["schopenhauer", "kant"],
    influenced: ["heidegger", "sartre", "foucault", "deleuze", "camus"],
  },
  marx: {
    name: "Karl Marx",
    years: "1818–1883",
    sortYear: 1818,
    tradition: "political",
    tagline: "Historical materialism",
    blurb: "Turned Hegel upside down: it's not ideas but material conditions — economics, class structure, modes of production — that drive history. Marx analyzed capitalism as a system that alienates workers from their labor and inevitably generates the contradictions that will destroy it. Whatever one thinks of his political legacy, his analysis of how economic structures shape culture, ideology, and consciousness remains indispensable.",
    fuller: `Marx's philosophical contribution is the materialist conception of history. Where Hegel saw history driven by the self-development of Spirit, Marx argued that the 'real foundation' of society is its economic structure — the forces of production (technology, labor power) and the relations of production (property relations, class structure). The cultural, political, legal, and ideological 'superstructure' arises from and reflects this economic base.

The key dynamic is class struggle. In every epoch, the class that owns the means of production exploits the class that labors. Capitalism's specific form of exploitation is the extraction of surplus value: workers produce more value than they receive in wages, and the difference is profit. This is not a moral accusation but a structural analysis of how the system functions.

Alienation is the existential consequence. Under capitalism, workers are alienated from their labor (it belongs to the capitalist), from the product of their labor (likewise), from other workers (competition), and from their own human nature (species-being — the capacity for free, creative, conscious activity). Work becomes a mere means to survival rather than an expression of human powers.

Marx's later economic works (Capital) develop these ideas into a comprehensive critique of political economy. His influence extends far beyond politics: sociology (Weber, Durkheim respond to Marx), cultural theory (Gramsci, the Frankfurt School, Althusser), postcolonial theory, and philosophy (Sartre, Foucault, contemporary analytic Marxism) are all deeply indebted to his framework.`,
    subtopics: [
      { name: "Historical Materialism", desc: "Base and superstructure, forces and relations of production, the mode of production as the driver of history." },
      { name: "Alienation", desc: "The four forms of alienation under capitalism — from labor, product, other workers, and species-being." },
      { name: "Surplus Value & Exploitation", desc: "The extraction of surplus value as the mechanism of capitalist profit — structural, not individual, exploitation." },
      { name: "Ideology", desc: "The ruling ideas of any age are the ideas of the ruling class. Ideology as mystification of material interests." },
    ],
    primarySources: [
      { title: "The Communist Manifesto", author: "Marx & Engels", note: "The most famous political pamphlet ever written — class struggle, historical materialism in miniature" },
      { title: "Economic and Philosophic Manuscripts of 1844", author: "Marx", note: "The early Marx on alienation — philosophical, humanistic, Hegelian" },
      { title: "Capital, Volume I", author: "Marx", note: "The mature critique of political economy — commodity fetishism, surplus value, the working day" },
      { title: "The German Ideology", author: "Marx & Engels", note: "The clearest statement of historical materialism and the critique of ideology" },
    ],
    ideas: [
      { title: "Historical Materialism", desc: "History is driven by material conditions and class struggle, not ideas. The economic base determines the cultural/political superstructure." },
      { title: "Alienation", desc: "Under capitalism, workers are alienated from their labor, its products, other workers, and their own human nature (species-being)." },
      { title: "Commodity Fetishism", desc: "Social relations between people appear as relations between things. The market obscures the human labor embodied in commodities." },
      { title: "Dialectical Materialism", desc: "Hegel's dialectic turned right-side up: contradictions in material conditions (not Spirit) drive revolutionary historical change." },
    ],
    influences: ["hegel"],
    influenced: ["sartre", "foucault", "rawls"],
  },
  husserl: {
    name: "Husserl",
    years: "1859–1938",
    sortYear: 1859,
    tradition: "continental",
    tagline: "To the things themselves",
    blurb: "The founder of phenomenology — the rigorous study of the structures of consciousness as experienced from the first-person perspective. Husserl's rallying cry, 'To the things themselves!' demanded that philosophy set aside theoretical assumptions and describe what actually shows up in experience. His method of 'bracketing' (epochē) influenced virtually all 20th-century Continental philosophy.",
    fuller: `Husserl's phenomenology begins with a bold methodological move: the phenomenological reduction (epochē). Instead of asking whether the external world really exists (the traditional epistemological question), we 'bracket' that question — suspend judgment about the existence of the external world — and focus on describing the structures of experience as they appear to consciousness.

The fundamental discovery is intentionality: consciousness is always consciousness of something. Every mental act — perceiving, imagining, remembering, judging — has an object (its 'intentional correlate'). Even hallucinations and fantasies are about something. This structure of directedness is not something added to experience but is constitutive of it.

Through systematic phenomenological description, Husserl identifies the structures that make experience possible: the temporal flow of consciousness (retention, primal impression, protention), the distinction between noesis (the act of consciousness) and noema (the meant object as meant), the role of horizons (the background of implicit meanings that accompany every experience), and the constitution of intersubjectivity (how we experience other minds).

In his later work, Husserl developed the concept of the Lebenswelt (lifeworld) — the pre-theoretical, everyday world of lived experience that science abstracts from and presupposes. The crisis of European sciences, he argued, stems from forgetting this foundation. Phenomenology's task is to recover it. His influence on Heidegger, Sartre, Merleau-Ponty, and Derrida is decisive.`,
    subtopics: [
      { name: "Phenomenological Reduction", desc: "The epochē: bracketing the natural attitude, suspending existential commitments to describe pure experience." },
      { name: "Intentionality", desc: "Consciousness as always directed toward an object — noesis/noema, horizons, constitution." },
      { name: "Time-Consciousness", desc: "Retention, primal impression, protention — the temporal flow that structures all experience." },
      { name: "The Lifeworld", desc: "The pre-theoretical world of everyday experience that science presupposes — the Crisis of European Sciences." },
    ],
    primarySources: [
      { title: "Cartesian Meditations", author: "Husserl", note: "The most accessible introduction to phenomenology — five meditations, clear structure" },
      { title: "Ideas Pertaining to a Pure Phenomenology (Ideas I)", author: "Husserl", note: "The systematic statement: the reduction, noesis/noema, regional ontologies" },
      { title: "The Crisis of European Sciences", author: "Husserl", note: "Late work on the lifeworld, the crisis of scientism, and the task of philosophy" },
      { title: "Logical Investigations", author: "Husserl", note: "The founding text — six investigations into meaning, intentionality, and the refutation of psychologism" },
    ],
    ideas: [
      { title: "Phenomenological Reduction", desc: "Bracket (epochē) all assumptions about the external world. Describe the structures of consciousness as they appear." },
      { title: "Intentionality", desc: "Consciousness is always consciousness of something. Every mental act has an object — even in imagination or hallucination." },
      { title: "Lifeworld (Lebenswelt)", desc: "Science abstracts from the pre-theoretical, lived world of everyday experience. Philosophy must recover this foundation." },
    ],
    influences: ["kant", "descartes"],
    influenced: ["heidegger", "sartre", "merleau_ponty"],
  },
  heidegger: {
    name: "Heidegger",
    years: "1889–1976",
    sortYear: 1889,
    tradition: "continental",
    tagline: "Being-in-the-world",
    blurb: "The question that drives all of Heidegger's thought: what does it mean to be? His masterwork Being and Time reframes human existence as Dasein — the being that cares about its own being — always already embedded in a world of meaning, falling into conformity ('the They'), yet capable of authentic existence through confronting its own mortality. His Nazi involvement remains an unresolved stain.",
    fuller: `Being and Time (1927) asks the most fundamental question in philosophy: what is the meaning of Being (Sein)? Not 'what exists?' (which is about beings/entities) but 'what does it mean for anything to be at all?' This 'ontological difference' between Being and beings is Heidegger's central theme.

The approach is through Dasein — human existence, the being for whom its own Being is an issue. Dasein is not a subject observing a world of objects but is always already Being-in-the-world: embedded in a web of practical involvements, social relations, and meaningful contexts. We don't first encounter bare objects and then assign them meaning; we encounter hammers as ready-to-hand (zuhanden) — as equipment for doing something, within a context of purposes.

Dasein is also Being-with (Mitsein) — always already with others. But this sociality has a dark side: das Man ('the They' or 'the One'), the anonymous public norm that dictates how one 'should' think, feel, and act. Inauthenticity is the default mode — losing oneself in what 'they' say and do.

Authenticity becomes possible through anxiety (Angst) and Being-toward-death. Anxiety — unlike fear, which has a specific object — reveals the groundlessness of existence. Death, as my ownmost possibility, is the one thing no one else can do for me. Confronting it 'individualizes' Dasein and opens the possibility of owning one's existence rather than drifting in the They.

Heidegger's later thought turns from Dasein to Being itself, exploring how Being reveals and conceals itself in different historical epochs — from the ancient Greek experience of physis to the modern technological 'enframing' (Gestell) that reduces everything to standing-reserve.`,
    subtopics: [
      { name: "Dasein & Being-in-the-World", desc: "Human existence as care (Sorge), thrownness, projection, falling, readiness-to-hand." },
      { name: "Authenticity & das Man", desc: "The They, idle talk, curiosity, ambiguity — and the possibility of owning one's existence." },
      { name: "Being-toward-Death", desc: "Death as the ownmost, non-relational, certain, indefinite possibility — the key to authenticity." },
      { name: "The Later Heidegger", desc: "The turn (Kehre), technology as Gestell, the fourfold (earth, sky, mortals, divinities), poetic dwelling." },
    ],
    primarySources: [
      { title: "Being and Time", author: "Heidegger", note: "The masterwork — Division I is relatively accessible; Division II gets harder. Stambaugh translation recommended" },
      { title: "The Question Concerning Technology", author: "Heidegger", note: "The later Heidegger's most important essay — technology as a way of revealing" },
      { title: "What Is Metaphysics?", author: "Heidegger", note: "Short lecture on nothing, anxiety, and the question of Being — good entry point" },
      { title: "The Origin of the Work of Art", author: "Heidegger", note: "Art as the setting-to-work of truth — earth and world, the strife of concealing and revealing" },
    ],
    ideas: [
      { title: "Dasein", desc: "Human existence (Dasein) is unique: it is the being for whom its own Being is an issue. We don't just exist — we care about existing." },
      { title: "Being-in-the-World", desc: "We are not detached subjects observing objects. We are always already embedded in a world of meaning, equipment, and concern." },
      { title: "Authenticity vs. Das Man", desc: "Everyday existence is inauthentic — we lose ourselves in 'the They' (das Man). Authenticity means owning one's finitude and possibilities." },
      { title: "Being-toward-Death", desc: "Death is the possibility that makes all other possibilities possible. Confronting mortality individualizes us and enables authentic existence." },
    ],
    influences: ["husserl", "kierkegaard", "nietzsche", "hegel"],
    influenced: ["sartre", "foucault", "derrida", "gadamer"],
  },
  sartre: {
    name: "Sartre",
    years: "1905–1980",
    sortYear: 1905,
    tradition: "existentialism",
    tagline: "Existence precedes essence",
    blurb: "The most public intellectual of the 20th century — philosopher, novelist, playwright, activist. Sartre's existentialism holds that for humans, existence precedes essence: there is no predetermined human nature, no God to define us, no script to follow. We are 'condemned to be free' — radically responsible for everything we make of ourselves. His concept of 'bad faith' names our pervasive tendency to deny this terrifying freedom.",
    fuller: `Sartre's Being and Nothingness (1943) develops a phenomenological ontology centered on the distinction between being-in-itself (être-en-soi) and being-for-itself (être-pour-soi). Being-in-itself is the mode of existence of things — solid, complete, identical with itself. Being-for-itself is the mode of consciousness — characterized by nothingness, since consciousness is always what it is not and is not what it is. Consciousness exists as a perpetual project, a 'lack' that can never achieve the solidity of in-itself without ceasing to be conscious.

Radical freedom follows: since consciousness is nothingness (not a thing with fixed properties), it cannot be determined by the past, by character, or by circumstances. In every moment we choose — even 'not choosing' is a choice. Bad faith (mauvaise foi) is the attempt to deny this freedom, either by treating oneself as a thing determined by nature or role ('I'm just a waiter'), or by treating oneself as pure, unconditioned freedom (denying the facticity of one's situation).

Being-for-others introduces the third ontological dimension. The Other's gaze objectifies me — turns me from a free subject into an object with fixed properties ('coward,' 'hero,' 'attractive'). 'Hell is other people' (from No Exit) doesn't mean others are cruel but that their gaze fixes my identity from outside, threatening my freedom.

In his later work (Critique of Dialectical Reason), Sartre attempted to synthesize existentialism with Marxism, arguing that Marxism is 'the unsurpassable philosophy of our time' but that it needs existentialism's account of individual freedom and consciousness to avoid reducing humans to passive products of history.`,
    subtopics: [
      { name: "Being-in-itself & Being-for-itself", desc: "The two modes of being: solid thingness vs. the nothingness of consciousness." },
      { name: "Radical Freedom & Bad Faith", desc: "Absolute freedom, radical responsibility, and the pervasive self-deception of denying them." },
      { name: "Being-for-Others", desc: "The Look, objectification, shame, desire — how the Other's gaze threatens and constitutes my freedom." },
      { name: "Existentialism & Marxism", desc: "The later synthesis: individual freedom within historical and material conditions." },
    ],
    primarySources: [
      { title: "Being and Nothingness", author: "Sartre", note: "The philosophical masterwork — the waiter, the woman on a date, the Look. Dense but gripping" },
      { title: "Existentialism Is a Humanism", author: "Sartre", note: "The accessible lecture: existence precedes essence, radical freedom, engagement" },
      { title: "Nausea", author: "Sartre", note: "The novel — Roquentin's confrontation with the absurd contingency of existence" },
      { title: "No Exit", author: "Sartre", note: "The play — three people, one room, 'Hell is other people'" },
    ],
    ideas: [
      { title: "Radical Freedom", desc: "We are 'condemned to be free.' There is no human nature — we are what we make of ourselves through choices." },
      { title: "Bad Faith", desc: "Self-deception about our freedom. Pretending we have no choice ('I had to do it') or reducing ourselves to fixed identities." },
      { title: "Being-for-Others", desc: "The Other's gaze objectifies me. 'Hell is other people' — not because they're cruel, but because they fix my identity from outside." },
      { title: "Existence Precedes Essence", desc: "For humans, there is no predetermined nature. We exist first, then define ourselves through action." },
    ],
    influences: ["heidegger", "husserl", "hegel", "marx", "kierkegaard", "nietzsche"],
    influenced: ["camus", "beauvoir", "foucault"],
  },
  camus: {
    name: "Camus",
    years: "1913–1960",
    sortYear: 1913,
    tradition: "existentialism",
    tagline: "The Absurd",
    blurb: "Nobel Prize-winning novelist and essayist who insisted he was not an existentialist. Camus' philosophy centers on the Absurd — the collision between our desperate need for meaning and the universe's indifferent silence. His answer: neither suicide nor religious 'leaping' but revolt — living fully and defiantly in the face of meaninglessness. 'One must imagine Sisyphus happy.'",
    fuller: `The Myth of Sisyphus (1942) poses what Camus calls 'the only truly serious philosophical problem': suicide. If life is meaningless, why not end it? Camus' answer requires first understanding the Absurd, which is not a property of the world or of human beings but of the relation between them — the confrontation between our need for meaning, unity, and rationality, and the world's stubborn silence.

Three responses to the Absurd are rejected: physical suicide (eliminating one term of the confrontation), philosophical suicide (eliminating the other through a 'leap of faith' to God, reason, or ideology — Camus accuses Kierkegaard, Husserl, and others of this), and nihilism (denying that the confrontation matters). The correct response is revolt: maintaining the tension, living without hope of resolution, extracting maximum passion and freedom from the awareness that nothing ultimately matters.

The Rebel (1951) extends the analysis from metaphysical to political revolt, tracing the history of rebellion from Prometheus to 20th-century revolutions. Camus argues that authentic revolt contains its own limit — it affirms a shared human dignity and refuses to become the tyranny it opposes. This argument led to his famous break with Sartre, who sided with revolutionary violence.

Camus' literary works — The Stranger, The Plague, The Fall — embody these philosophical themes in concrete, embodied narrative. Meursault's indifference, Dr. Rieux's solidarity in plague-stricken Oran, Clamence's corrosive self-examination are all explorations of how to live in an absurd world.`,
    subtopics: [
      { name: "The Absurd", desc: "Not in the world or in us, but in the collision between human need for meaning and the universe's silence." },
      { name: "Revolt & Limits", desc: "Living defiantly without hope or despair. The rebel's affirmation of human dignity and refusal of tyranny." },
      { name: "Against 'Philosophical Suicide'", desc: "Kierkegaard's leap, Husserl's reason, political ideology — all evasions of the absurd confrontation." },
      { name: "Camus vs. Sartre", desc: "The break over revolutionary violence, political commitment, and the limits of revolt." },
    ],
    primarySources: [
      { title: "The Myth of Sisyphus", author: "Camus", note: "The philosophical essay: the absurd, its consequences, and the image of Sisyphus" },
      { title: "The Stranger", author: "Camus", note: "The novel — Meursault's radical indifference and the absurdity of social convention" },
      { title: "The Plague", author: "Camus", note: "Solidarity and human dignity in the face of meaningless suffering — Oran under plague" },
      { title: "The Rebel", author: "Camus", note: "History of revolt from metaphysical to political — the argument that broke with Sartre" },
    ],
    ideas: [
      { title: "The Absurd", desc: "The collision between our desperate need for meaning and the universe's silent indifference. Neither side can be eliminated." },
      { title: "Revolt", desc: "The proper response to absurdity is revolt — living fully in defiance, without hope of resolution. 'One must imagine Sisyphus happy.'" },
      { title: "Against Philosophical Suicide", desc: "Both physical suicide and 'leaping' to religion or ideology are evasions. Maintain the tension — live with the absurd." },
    ],
    influences: ["nietzsche", "kierkegaard", "sartre"],
    influenced: [],
  },
  beauvoir: {
    name: "Simone de Beauvoir",
    years: "1908–1986",
    sortYear: 1908,
    tradition: "existentialism",
    tagline: "One is not born a woman",
    blurb: "Philosopher, novelist, and feminist theorist whose The Second Sex is the founding text of modern feminism. Beauvoir applied existentialist philosophy to the situation of women, arguing that 'one is not born, but rather becomes, a woman' — gender is constructed through social situation, not biology. Her Ethics of Ambiguity developed an existentialist ethics more systematic than Sartre's.",
    fuller: `Beauvoir's The Second Sex (1949) applies and extends existentialist categories to analyze the oppression of women. The central claim: throughout history, woman has been constructed as 'the Other' — defined not by her own projects and freedom but in relation to man (as object to his subject, as immanence to his transcendence). 'One is not born, but rather becomes, a woman' — femininity is not a biological given but a social construction enforced through education, custom, economic dependence, and cultural mythology.

Her concept of situated freedom refines Sartre's radical freedom in crucial ways. Freedom is always exercised within a concrete situation — embodied, historical, social. Oppression doesn't eliminate freedom (as Sartre's early work implied) but severely constrains its exercise. The oppressed can still choose, but their choices are systematically limited, distorted, and punished. This makes oppression a genuine philosophical problem, not just a failure of individual will.

The Ethics of Ambiguity (1947) develops what Sartre never quite managed: a coherent existentialist ethics. The fundamental ambiguity of human existence — we are both free subjects and situated objects, both individual and social — cannot be resolved but must be embraced. Genuine ethical action requires willing one's own freedom while also willing the freedom of others, since my freedom is intertwined with theirs.

Beauvoir's novels (She Came to Stay, The Mandarins) and memoirs explore these themes in lived, narrative form. Her influence extends beyond philosophy to feminist theory, gender studies, and political thought.`,
    subtopics: [
      { name: "The Second Sex", desc: "Woman as Other, the social construction of gender, biology vs. situation, myths of femininity." },
      { name: "Situated Freedom", desc: "Freedom within concrete constraints — oppression as a genuine limitation, not mere excuse." },
      { name: "Ethics of Ambiguity", desc: "Existentialist ethics: embracing the tension between freedom and facticity, willing one's own and others' freedom." },
      { name: "Existentialist Feminism", desc: "The application of existentialist categories to gender analysis — transcendence, immanence, the Look, bad faith." },
    ],
    primarySources: [
      { title: "The Second Sex", author: "Beauvoir", note: "The founding text of modern feminism — 'one is not born, but rather becomes, a woman'" },
      { title: "The Ethics of Ambiguity", author: "Beauvoir", note: "The most coherent existentialist ethics — short, clear, powerful" },
      { title: "She Came to Stay", author: "Beauvoir", note: "The novel of the Other's consciousness — jealousy, freedom, destruction" },
      { title: "Memoirs of a Dutiful Daughter", author: "Beauvoir", note: "Autobiography tracing the formation of an existentialist consciousness" },
    ],
    ideas: [
      { title: "The Second Sex", desc: "Woman has been constructed as 'the Other' — defined in relation to man. Gender is not biology but situation." },
      { title: "Situated Freedom", desc: "Freedom is always exercised within a concrete situation. Oppression doesn't eliminate freedom but constrains its exercise." },
      { title: "Ethics of Ambiguity", desc: "Human existence is fundamentally ambiguous — we are both free subjects and embodied objects. Morality must embrace this tension." },
    ],
    influences: ["sartre"],
    influenced: ["foucault"],
  },
  wittgenstein: {
    name: "Wittgenstein",
    years: "1889–1951",
    sortYear: 1889,
    tradition: "analytic",
    tagline: "Language games",
    blurb: "Perhaps the only philosopher to produce two revolutionary philosophies in one lifetime — and then reject the first. The early Wittgenstein (Tractatus) held that language pictures reality; the late Wittgenstein (Philosophical Investigations) dismantled this, arguing that meaning is use, determined by the 'language games' we play. His conclusion: most philosophical problems are linguistic confusions that need dissolving, not solving.",
    fuller: `The Tractatus Logico-Philosophicus (1921) presents a picture theory of meaning: meaningful propositions share a logical form with the facts they represent, like a picture shares spatial form with what it depicts. The limits of language are the limits of the world. What cannot be said (ethics, aesthetics, the mystical) can only be 'shown' — and we must remain silent about it. 'Whereof one cannot speak, thereof one must be silent.'

The Philosophical Investigations (posthumous, 1953) dismantles the Tractatus root and branch. Meaning is not a matter of picturing facts but of use within 'language games' — social practices governed by shared rules. 'Don't ask for the meaning, ask for the use.' The concept of a language game replaces the idea of a single logical structure underlying all language with a family of overlapping activities.

The private language argument challenges the very coherence of a purely private inner life. If meaning requires public criteria for correct and incorrect use, then a 'language' known only to one person — describing private sensations accessible only to the speaker — is impossible. There can be no private rule-following. This has profound implications for the philosophy of mind.

Wittgenstein's therapeutic conception of philosophy holds that philosophical problems are not genuine theoretical problems but confusions arising from the bewitchment of our intelligence by language. Philosophy's task is not to produce theories but to achieve clarity — to show the fly the way out of the fly-bottle. Once confusion is dissolved, the philosophical problem simply disappears.`,
    subtopics: [
      { name: "Picture Theory (Tractatus)", desc: "Language as picture, logical form, the limits of language, the mystical. 'Whereof one cannot speak...'" },
      { name: "Language Games (Investigations)", desc: "Meaning as use, family resemblance, rule-following, the dissolution of the Tractatus." },
      { name: "Private Language Argument", desc: "The impossibility of a purely private language — meaning requires public criteria." },
      { name: "Therapeutic Philosophy", desc: "Philosophy as therapy: dissolving rather than solving problems, showing the fly the way out of the fly-bottle." },
    ],
    primarySources: [
      { title: "Tractatus Logico-Philosophicus", author: "Wittgenstein", note: "The early masterwork — 75 pages of numbered propositions. Read alongside a commentary" },
      { title: "Philosophical Investigations", author: "Wittgenstein", note: "The late masterwork — aphoristic, conversational, endlessly rereadable" },
      { title: "On Certainty", author: "Wittgenstein", note: "Late notes on knowledge, doubt, and the 'hinge propositions' we cannot question" },
      { title: "The Blue and Brown Books", author: "Wittgenstein", note: "Lecture notes — the most accessible bridge between the two philosophies" },
    ],
    ideas: [
      { title: "Picture Theory (early)", desc: "Language depicts reality by sharing logical form with facts. Propositions are pictures of possible states of affairs." },
      { title: "Language Games (late)", desc: "Meaning is use. Words get their meaning from the 'language games' — social practices — in which they function." },
      { title: "Private Language Argument", desc: "A purely private language is impossible. Meaning requires public criteria — rules that can be followed or broken." },
      { title: "Therapeutic Philosophy", desc: "Philosophical problems are linguistic confusions. Philosophy should dissolve, not solve, problems by clarifying language." },
    ],
    influences: ["hume", "schopenhauer", "russell"],
    influenced: ["russell"],
  },
  russell: {
    name: "Bertrand Russell",
    years: "1872–1970",
    sortYear: 1872,
    tradition: "analytic",
    tagline: "Logic & language",
    blurb: "Co-author (with Whitehead) of Principia Mathematica, Nobel laureate in literature, peace activist, and public intellectual extraordinaire. Russell helped found analytic philosophy by insisting that logical analysis could dissolve age-old metaphysical puzzles. His theory of descriptions showed how language misleads us into positing nonexistent entities, and his paradox forced a revolution in the foundations of mathematics.",
    fuller: `Russell's philosophical contribution centers on the conviction that the new mathematical logic (developed by Frege, Peano, and Russell himself) provides the key to solving philosophical problems. Philosophical analysis means translating unclear expressions into the precise notation of symbolic logic, thereby revealing their true logical form.

The theory of definite descriptions (1905) is the paradigm case. 'The present King of France is bald' seems to be about a nonexistent entity. Russell showed that the grammatical form misleads: the sentence is really a conjunction of three claims (there exists a King of France, there is at most one, and he is bald), which is straightforwardly false. No mysterious nonexistent objects needed.

Logical atomism holds that the world consists of atomic facts — simple, independent states of affairs — and that every meaningful proposition can be analyzed into elementary propositions that correspond to these facts. This program ran into severe difficulties (which Wittgenstein's Tractatus both developed and undermined), but it established the analytic method that dominated English-language philosophy for a century.

Russell's paradox (1901) — the set of all sets that don't contain themselves both does and doesn't contain itself — devastated Frege's attempt to ground mathematics in logic and led to the monumental Principia Mathematica (with Whitehead), which rebuilt the foundations using type theory. The philosophical implications — about self-reference, hierarchy, and the limits of formalization — continue to resonate.`,
    subtopics: [
      { name: "Logical Atomism", desc: "The world as atomic facts, elementary propositions, logical analysis as the method of philosophy." },
      { name: "Theory of Descriptions", desc: "The analysis of definite descriptions — dissolving puzzles about nonexistent entities through logical form." },
      { name: "Russell's Paradox", desc: "The set-theoretic paradox that destroyed naive set theory and forced the reconstruction of mathematical foundations." },
      { name: "Principia Mathematica", desc: "The monumental (with Whitehead) attempt to derive all mathematics from logic — type theory, the logicist program." },
    ],
    primarySources: [
      { title: "The Problems of Philosophy", author: "Russell", note: "The most accessible introduction to philosophy ever written — 100 pages of clarity" },
      { title: "'On Denoting'", author: "Russell", note: "The 1905 paper: the theory of descriptions. Arguably the most important paper in analytic philosophy" },
      { title: "The Philosophy of Logical Atomism", author: "Russell", note: "Lectures laying out his mature metaphysics — the analytic program in full" },
      { title: "A History of Western Philosophy", author: "Russell", note: "Opinionated, witty, not always fair — but a classic survey and a pleasure to read" },
    ],
    ideas: [
      { title: "Logical Atomism", desc: "The world consists of atomic facts. Complex propositions can be analyzed into elementary ones corresponding to these facts." },
      { title: "Theory of Descriptions", desc: "Definite descriptions ('the present King of France') are not names but quantified expressions, dissolving puzzles about non-existent entities." },
      { title: "Russell's Paradox", desc: "The set of all sets that don't contain themselves both does and doesn't contain itself — devastating Frege's foundations of mathematics." },
    ],
    influences: ["hume"],
    influenced: ["wittgenstein"],
  },
  foucault: {
    name: "Foucault",
    years: "1926–1984",
    sortYear: 1926,
    tradition: "continental",
    tagline: "Power/Knowledge",
    blurb: "Foucault transformed how we think about power, knowledge, and the self. Through meticulous historical studies of madness, prisons, sexuality, and medicine, he showed that what we take to be natural and timeless — 'mental illness,' 'the criminal,' 'sexuality' — are historically contingent constructions serving specific power interests. Power is not possessed but exercised, not repressive but productive: it creates the very subjects it controls.",
    fuller: `Foucault's method evolved through three phases, though all share the conviction that what appears natural, inevitable, and universal is actually historical, contingent, and constructed.

The archaeological phase (The Order of Things, The Archaeology of Knowledge) analyzes the deep structures — epistemes — that govern what counts as knowledge in a given epoch. The Renaissance, Classical, and Modern periods each have fundamentally different rules for what can be thought and said. Knowledge doesn't progress linearly; it undergoes radical discontinuities.

The genealogical phase (Discipline and Punish, The History of Sexuality Vol. 1) — inspired by Nietzsche — traces the concrete historical emergence of institutions and practices. Discipline and Punish shows how modern punishment shifted from spectacular public torture to invisible surveillance and normalization (the Panopticon). Power is not merely repressive but productive: it produces 'docile bodies,' knowledge, and the very categories ('the delinquent,' 'the homosexual') through which we understand ourselves.

The late phase (History of Sexuality Vols. 2-3, lectures on 'technologies of the self') turns from how power shapes subjects to how individuals actively constitute themselves through ethical practices — diet, exercise, sexual conduct, truth-telling. This 'care of the self' draws on ancient Greek and Roman models and opens space for freedom within power relations.

Foucault's influence extends across disciplines: literary theory, gender studies, postcolonial studies, sociology, criminology, public health, and philosophy all bear his mark.`,
    subtopics: [
      { name: "Power/Knowledge", desc: "The inseparability of power and knowledge — every truth-claim exercises power, every power relation produces truth." },
      { name: "Genealogy", desc: "Nietzsche-inspired historical method: tracing contingent origins of what seems natural." },
      { name: "Disciplinary Society", desc: "The Panopticon, surveillance, normalization, examination — how modern institutions produce docile bodies." },
      { name: "Technologies of the Self", desc: "Late Foucault: how individuals shape themselves through ethical practices — care of the self, truth-telling." },
    ],
    primarySources: [
      { title: "Discipline and Punish", author: "Foucault", note: "The birth of the prison — surveillance, normalization, the Panopticon. His most accessible book" },
      { title: "The History of Sexuality, Volume 1", author: "Foucault", note: "Against the repressive hypothesis: power produces sexuality rather than repressing it" },
      { title: "The Order of Things", author: "Foucault", note: "The archaeological masterwork: epistemes, the 'death of man,' discontinuity" },
      { title: "The Courage of Truth (lectures)", author: "Foucault", note: "Late lectures on parrhesia (truth-telling) — philosophy as a way of life" },
    ],
    ideas: [
      { title: "Power/Knowledge", desc: "Power and knowledge are inseparable. Every claim to knowledge is also an exercise of power; power produces the 'truths' we live by." },
      { title: "Genealogy", desc: "Trace the contingent historical origins of what seems natural — madness, sexuality, criminality — to reveal power's operations." },
      { title: "Disciplinary Society", desc: "Modern institutions (prisons, schools, hospitals) produce 'docile bodies' through surveillance, normalization, and examination." },
      { title: "Technologies of the Self", desc: "Late Foucault explored how individuals shape themselves through ethical practices — not just how power shapes them." },
    ],
    influences: ["nietzsche", "heidegger", "marx", "sartre"],
    influenced: ["derrida", "deleuze"],
  },
  derrida: {
    name: "Derrida",
    years: "1930–2004",
    sortYear: 1930,
    tradition: "continental",
    tagline: "Deconstruction",
    blurb: "The philosopher of deconstruction — a method of reading that shows how texts undermine their own assumptions. Every binary opposition (speech/writing, presence/absence, nature/culture) privileges one term while secretly depending on the other. Meaning is never fully present but always deferred through a chain of differences. Celebrated and vilified in equal measure, Derrida transformed literary theory, philosophy, and the humanities.",
    fuller: `Deconstruction is not destruction but a close reading practice that reveals how texts' own logic subverts their explicit claims. Derrida typically identifies a binary opposition that structures a text (speech/writing, inside/outside, literal/metaphorical), shows that the privileged term depends on what it excludes, and demonstrates that the hierarchy cannot be maintained on the text's own terms.

The key concept is différance (with an 'a') — a neologism combining 'to differ' and 'to defer.' Meaning is produced by differences between signs (the letter 'b' means what it means by differing from 'd,' 'p,' etc.), and it is perpetually deferred — every sign refers to other signs, which refer to others, in an endless chain. There is no 'transcendental signified' — no meaning that is simply present to itself, independent of the play of signification.

'There is nothing outside the text' (il n'y a pas de hors-texte) is perhaps the most misunderstood sentence in recent philosophy. It does not mean that only books exist, but that everything we encounter is always already mediated by systems of signification and interpretation — there is no raw, pre-interpreted access to 'reality itself.'

Of Grammatology (1967) demonstrates that the Western philosophical tradition has systematically privileged speech over writing (logocentrism/phonocentrism), treating speech as the immediate presence of thought and writing as its degraded copy. Derrida shows this hierarchy is untenable: the characteristics attributed to writing (absence, repetition, materiality) are already operative in speech.`,
    subtopics: [
      { name: "Deconstruction", desc: "The practice of showing how texts' own logic subverts their explicit hierarchies and assumptions." },
      { name: "Différance", desc: "Meaning as perpetually differing and deferred — no transcendental signified, no full presence." },
      { name: "Logocentrism", desc: "The Western privileging of speech over writing, presence over absence — and its deconstruction." },
      { name: "Ethics of Hospitality", desc: "Later Derrida: the impossible demand of unconditional hospitality, justice, and the 'democracy to come.'" },
    ],
    primarySources: [
      { title: "Of Grammatology", author: "Derrida", note: "The founding text of deconstruction — logocentrism, supplementarity, the trace" },
      { title: "Writing and Difference", author: "Derrida", note: "Essays including 'Structure, Sign, and Play' — the essay that launched poststructuralism" },
      { title: "'Signature Event Context'", author: "Derrida", note: "On iterability, context, and the impossibility of saturated meaning — led to the Austin/Searle debate" },
      { title: "Specters of Marx", author: "Derrida", note: "Later Derrida on justice, haunting, and the persistence of Marx after communism's fall" },
    ],
    ideas: [
      { title: "Deconstruction", desc: "Texts undermine their own logic. Every binary opposition (speech/writing, presence/absence) privileges one term while depending on the other." },
      { title: "Différance", desc: "Meaning is always deferred and differing. No sign is self-present; meaning arises from the play of differences, never fully arriving." },
      { title: "There is Nothing Outside the Text", desc: "Not that only texts exist, but that everything we encounter is mediated by systems of signification and interpretation." },
    ],
    influences: ["heidegger", "husserl"],
    influenced: [],
  },
  deleuze: {
    name: "Deleuze",
    years: "1925–1995",
    sortYear: 1925,
    tradition: "continental",
    tagline: "Difference & becoming",
    blurb: "A philosopher of radical difference, creative becoming, and joyful affirmation. Deleuze rejected the Western tradition's obsession with identity and representation in favor of pure difference, rhizomatic networks, and the creative production of the new. His collaborations with Félix Guattari (Anti-Oedipus, A Thousand Plateaus) are among the wildest and most inventive philosophical texts of the 20th century.",
    fuller: `Deleuze's central philosophical claim is that difference is primary — not derived from identity, not a relation between pre-existing terms, but the productive force from which identities, resemblances, and categories emerge. Western metaphysics from Plato onward has subordinated difference to identity (the Forms, essences, categories). Deleuze reverses this: reality is a field of intensive differences, flows, and becomings, and the stable 'things' we perceive are secondary effects.

The concept of the rhizome (developed with Guattari) replaces the tree (hierarchical, centered, vertical) as the model for knowledge and reality. A rhizome is horizontal, non-hierarchical, with multiple entry points and no center — like grass rather than an oak. Any point can connect to any other. This model applies to thought, culture, nature, and politics.

Deterritorialization is the process by which established structures (territories) break apart and new assemblages form. Capitalism is the great deterritorializer — it breaks down all traditional codes and relations — but it simultaneously reterritorializes on new axes (property, the state, the nuclear family). Deleuze and Guattari analyze desire not as lack (Freud/Lacan) but as productive force: 'desiring-machines' that produce reality.

Deleuze's work on cinema, painting, and literature is equally significant. His studies of Proust, Kafka, Bacon, and the cinema develop new concepts (the time-image, the logic of sensation, minor literature) that have transformed their respective fields.`,
    subtopics: [
      { name: "Difference in Itself", desc: "Difference as primary, not derived from identity — intensive differences, virtual multiplicities." },
      { name: "Rhizome & Assemblage", desc: "Non-hierarchical networks, heterogeneous connections, deterritorialization/reterritorialization." },
      { name: "Desire as Production", desc: "Against Freud/Lacan: desire as productive force, desiring-machines, schizoanalysis." },
      { name: "Philosophy as Concept-Creation", desc: "The philosopher creates new concepts on a 'plane of immanence' — not discovery but invention." },
    ],
    primarySources: [
      { title: "Difference and Repetition", author: "Deleuze", note: "The solo masterwork: difference, repetition, the virtual, the image of thought" },
      { title: "A Thousand Plateaus", author: "Deleuze & Guattari", note: "The rhizome, the body without organs, nomadology — philosophy as adventure" },
      { title: "Anti-Oedipus", author: "Deleuze & Guattari", note: "Desire as production, schizoanalysis vs. psychoanalysis, capitalism and schizophrenia" },
      { title: "What Is Philosophy?", author: "Deleuze & Guattari", note: "Philosophy as concept-creation on a plane of immanence — the late summary" },
    ],
    ideas: [
      { title: "Difference in Itself", desc: "Difference is primary, not derived from identity. Reality is a field of intensive differences, not fixed substances." },
      { title: "Rhizome", desc: "Knowledge is not a tree (hierarchical) but a rhizome — a horizontal, non-hierarchical network with multiple entry points and no center." },
      { title: "Deterritorialization", desc: "Forces of change constantly break apart established structures (territories) and create new assemblages — in culture, thought, and desire." },
    ],
    influences: ["spinoza", "nietzsche", "foucault"],
    influenced: [],
  },
  mill: {
    name: "J.S. Mill",
    years: "1806–1873",
    sortYear: 1806,
    tradition: "empiricist",
    tagline: "Greatest happiness",
    blurb: "The most important liberal thinker of the 19th century. Mill refined utilitarianism (inherited from his father and Bentham), argued for qualitative distinctions among pleasures, and wrote the definitive defense of free speech and individual liberty. His On Liberty remains the cornerstone of liberal political philosophy.",
    fuller: `Mill's utilitarianism refines Bentham's crude hedonistic calculus. Where Bentham held that 'pushpin is as good as poetry' if the pleasure is equal, Mill introduces a qualitative distinction: 'It is better to be Socrates dissatisfied than a fool satisfied.' Intellectual and moral pleasures are not merely more intense but qualitatively superior to bodily pleasures, as judged by those who have experienced both.

The harm principle, articulated in On Liberty (1859), states that the only legitimate reason to restrict individual liberty is to prevent harm to others. Self-regarding actions — however foolish, unhealthy, or offensive others find them — are sovereign. This applies to freedom of thought, speech, lifestyle, and association. Even wrong opinions deserve protection because silencing them assumes infallibility; truth emerges only from free debate.

Mill's System of Logic develops a comprehensive empiricist epistemology and philosophy of science. His methods of experimental inquiry (the methods of agreement, difference, concomitant variation, and residues) remain influential in scientific methodology. He also contributed importantly to economics (Principles of Political Economy) and was an early advocate for women's suffrage (The Subjection of Women).`,
    subtopics: [
      { name: "Utilitarianism", desc: "The greatest happiness principle refined: qualitative pleasures, competent judges, rule vs. act utilitarianism." },
      { name: "On Liberty & Free Speech", desc: "The harm principle, the marketplace of ideas, individuality, protection of dissent." },
      { name: "Philosophy of Science", desc: "The System of Logic: induction, the methods of experimental inquiry, the uniformity of nature." },
      { name: "Feminism", desc: "The Subjection of Women: an early philosophical argument for gender equality and women's suffrage." },
    ],
    primarySources: [
      { title: "On Liberty", author: "Mill", note: "The definitive defense of individual freedom and free speech — short, clear, powerful" },
      { title: "Utilitarianism", author: "Mill", note: "The refined version: higher and lower pleasures, the proof of utility, justice" },
      { title: "The Subjection of Women", author: "Mill", note: "Philosophical argument for gender equality — remarkably ahead of its time" },
      { title: "Autobiography", author: "Mill", note: "His extraordinary education, mental crisis, and recovery — a fascinating intellectual life" },
    ],
    ideas: [
      { title: "Utilitarianism", desc: "Actions are right insofar as they promote happiness — the greatest happiness of the greatest number." },
      { title: "Higher & Lower Pleasures", desc: "It is better to be Socrates dissatisfied than a fool satisfied. Intellectual pleasures are qualitatively superior to bodily ones." },
      { title: "Harm Principle", desc: "The only legitimate reason to restrict individual liberty is to prevent harm to others. Self-regarding actions are sovereign." },
      { title: "On Liberty", desc: "Free speech and individuality are essential for truth-seeking and human flourishing. Silencing dissent assumes infallibility." },
    ],
    influences: ["hume", "locke"],
    influenced: ["rawls"],
  },
  rawls: {
    name: "John Rawls",
    years: "1921–2002",
    sortYear: 1921,
    tradition: "political",
    tagline: "Justice as fairness",
    blurb: "Revived political philosophy from its mid-20th-century slumber with A Theory of Justice (1971), which asked: what principles would rational people choose to govern their society if they didn't know their place in it? Behind this 'veil of ignorance,' Rawls argued, they would choose equal basic liberties and a system where inequalities benefit the least advantaged. The most influential work of political philosophy since Mill.",
    fuller: `A Theory of Justice (1971) develops justice as fairness through the device of the original position. Imagine rational agents choosing the basic principles of their society from behind a 'veil of ignorance' — they don't know their race, sex, class, talents, religion, or conception of the good. What would they choose?

Rawls argues they would choose two principles, in lexical order: (1) Equal basic liberties for all (freedom of speech, conscience, association, etc.) — this takes priority. (2) Social and economic inequalities are permitted only if they are (a) attached to offices open to all under fair equality of opportunity, and (b) to the greatest benefit of the least advantaged members of society (the difference principle).

The difference principle is the most distinctive and controversial element. It doesn't require equality of outcomes; it requires that any inequality must work to improve the absolute position of the worst-off. A system with some inequality is just if (and only if) removing that inequality would make the worst-off even worse off.

Political Liberalism (1993) revised the theory in response to the 'fact of reasonable pluralism' — the reality that people in a just society will hold fundamentally different comprehensive doctrines (religious, philosophical, moral). Justice as fairness, Rawls argues, can be the subject of an 'overlapping consensus' among these doctrines without requiring anyone to abandon their deeper commitments.`,
    subtopics: [
      { name: "Original Position & Veil of Ignorance", desc: "The thought experiment: choosing principles without knowing your place in society." },
      { name: "Two Principles of Justice", desc: "Equal basic liberties (first priority) and the difference principle (inequalities must benefit the worst-off)." },
      { name: "Political Liberalism", desc: "Justice as the subject of overlapping consensus among reasonable comprehensive doctrines." },
      { name: "Reflective Equilibrium", desc: "The method: adjusting principles and considered judgments until they cohere." },
    ],
    primarySources: [
      { title: "A Theory of Justice", author: "Rawls", note: "The masterwork — the original position, the two principles, the difference principle" },
      { title: "Political Liberalism", author: "Rawls", note: "The revision: overlapping consensus, reasonable pluralism, public reason" },
      { title: "Justice as Fairness: A Restatement", author: "Rawls", note: "The final, accessible summary of the whole theory" },
      { title: "The Law of Peoples", author: "Rawls", note: "Extension to international justice — controversial but important" },
    ],
    ideas: [
      { title: "Veil of Ignorance", desc: "Design society's basic structure as if you didn't know your place in it — your class, talents, race, or conception of the good." },
      { title: "Two Principles of Justice", desc: "1) Equal basic liberties for all. 2) Inequalities are just only if they benefit the least advantaged (difference principle)." },
      { title: "Original Position", desc: "A thought experiment: rational agents behind the veil of ignorance would choose principles that protect the worst-off." },
    ],
    influences: ["kant", "mill", "marx"],
    influenced: [],
  },
  merleau_ponty: {
    name: "Merleau-Ponty",
    years: "1908–1961",
    sortYear: 1908,
    tradition: "continental",
    tagline: "Embodied perception",
    blurb: "The philosopher of the body. Where Descartes split mind from body and Sartre identified consciousness with nothingness, Merleau-Ponty insisted that all thought, perception, and meaning are rooted in our bodily engagement with the world. The 'lived body' is not a machine we pilot but the very medium through which we have a world at all.",
    fuller: `Merleau-Ponty's Phenomenology of Perception (1945) challenges both empiricism and intellectualism — the view that perception is a mosaic of sense-data assembled by the brain, and the view that it's constituted by acts of consciousness. Both miss the primacy of the lived body (le corps vécu) as the subject of perception.

Perception is not a matter of receiving data and then interpreting it. We perceive meaningful wholes immediately — a face, a threatening gesture, a comfortable room — through our bodily orientation in the world. The body has its own kind of intelligence: motor intentionality, body schema, habitual knowledge that is neither explicit thought nor mere reflex. A pianist doesn't think about which fingers to move; the music is 'in the hands.'

The concept of the body schema challenges the Cartesian split: the body is not an object I have but a lived perspective I am. It is both subject (experiencing) and object (experienced by others), both interior and exterior. This ambiguity is not a problem to be solved but the fundamental structure of existence.

In his later, unfinished work The Visible and the Invisible, Merleau-Ponty developed the concept of 'flesh' (la chair) — not a substance but the shared texture of being that makes perception possible. My body is made of the same 'stuff' as the world it perceives, like a fold in a single fabric. Touching and being touched are aspects of one reversibility — my left hand touches my right, which feels itself being touched.`,
    subtopics: [
      { name: "Embodied Perception", desc: "Perception as bodily engagement, not mental construction — the primacy of the lived body." },
      { name: "Motor Intentionality & Body Schema", desc: "The body's own intelligence: skilled action, habit, the body as lived perspective." },
      { name: "The Flesh", desc: "Late ontology: the reversibility of touching/touched, the shared texture of perceiver and perceived." },
      { name: "Critiques of Empiricism & Intellectualism", desc: "Both miss the pre-reflective, embodied character of perception — the Phenomenology of Perception's argument." },
    ],
    primarySources: [
      { title: "Phenomenology of Perception", author: "Merleau-Ponty", note: "The masterwork: the body, perception, space, expression, freedom — Landes translation recommended" },
      { title: "The Visible and the Invisible", author: "Merleau-Ponty", note: "The unfinished late work: flesh, reversibility, the chiasm, a new ontology" },
      { title: "The World of Perception", author: "Merleau-Ponty", note: "Radio lectures — the most accessible introduction to his thought" },
      { title: "'Eye and Mind'", author: "Merleau-Ponty", note: "Late essay on painting, vision, and ontology — short, beautiful, and deep" },
    ],
    ideas: [
      { title: "Embodied Cognition", desc: "Consciousness is not disembodied thought. Perception, meaning, and understanding are rooted in the lived body's engagement with the world." },
      { title: "Phenomenology of Perception", desc: "Perception is primary and pre-reflective. We don't first sense data then interpret — we perceive meaningful wholes immediately." },
      { title: "Flesh of the World", desc: "Subject and object are intertwined like two sides of a hand touching itself. The 'flesh' is the shared texture of being." },
    ],
    influences: ["husserl"],
    influenced: [],
  },
  gadamer: {
    name: "Gadamer",
    years: "1900–2002",
    sortYear: 1900,
    tradition: "continental",
    tagline: "Fusion of horizons",
    blurb: "The great philosopher of interpretation (hermeneutics). Gadamer argued that understanding is never neutral or objective — we always interpret from within a tradition, carrying 'prejudices' (pre-judgments) that are not obstacles but conditions of understanding. When we understand a text or another person, our horizon of meaning merges with theirs in a 'fusion of horizons.'",
    fuller: `Truth and Method (1960) challenges the Enlightenment ideal of unprejudiced, objective understanding. Against method-driven social science (which models itself on natural science), Gadamer argues that the human sciences (Geisteswissenschaften) require a fundamentally different approach — one that acknowledges the interpreter's historical situatedness.

The hermeneutic circle is central: we can understand a part (a sentence, an event) only in relation to the whole (the text, the historical context), and the whole only through its parts. Understanding is therefore never complete but always moving between part and whole, constantly revising our grasp of each.

Prejudice (Vorurteil — literally 'pre-judgment') is rehabilitated against the Enlightenment's 'prejudice against prejudice.' We cannot step outside our historical situation to achieve a view from nowhere. Our pre-judgments — formed by tradition, education, and experience — are not barriers to understanding but its very condition. Some prejudices are enabling; others are distorting. The task is not to eliminate prejudice but to put it at risk — to remain open to the text's capacity to challenge and transform our assumptions.

The fusion of horizons (Horizontverschmelzung) occurs when understanding succeeds: the interpreter's horizon merges with the horizon of the text or interlocutor. Neither is abandoned; both are transformed. This model of understanding as dialogue — where I am genuinely willing to discover that the other might be right — has implications far beyond textual interpretation: for cross-cultural understanding, ethical deliberation, and the practice of philosophy itself.`,
    subtopics: [
      { name: "Hermeneutic Circle", desc: "Part and whole, anticipation of completeness, the constant movement between levels of understanding." },
      { name: "Prejudice & Tradition", desc: "Rehabilitation of prejudice as enabling, the authority of tradition, effective-historical consciousness." },
      { name: "Fusion of Horizons", desc: "Understanding as the merging of interpreter's and text's horizons — dialogue, transformation, openness." },
      { name: "Application", desc: "Understanding always involves applying the text to one's own situation — as in legal and theological interpretation." },
    ],
    primarySources: [
      { title: "Truth and Method", author: "Gadamer", note: "The masterwork: the hermeneutic circle, prejudice, fusion of horizons, the limits of method" },
      { title: "Philosophical Hermeneutics", author: "Gadamer", note: "Collection of essays — more accessible entry points than Truth and Method" },
      { title: "'The Universality of the Hermeneutical Problem'", author: "Gadamer", note: "Short, clear essay on the scope of hermeneutics — understanding as the fundamental human mode of being" },
    ],
    ideas: [
      { title: "Hermeneutic Circle", desc: "Understanding moves circularly between part and whole. You can't understand a sentence without the text, or the text without its sentences." },
      { title: "Fusion of Horizons", desc: "Understanding occurs when the interpreter's horizon merges with the text's. Neither is abandoned — both are transformed." },
      { title: "Prejudice as Productive", desc: "Pre-judgments (Vorurteile) are not obstacles but conditions of understanding. We always interpret from within a tradition." },
    ],
    influences: ["heidegger"],
    influenced: [],
  },
  luther: {
    name: "Martin Luther",
    years: "1483–1546",
    sortYear: 1483,
    tradition: "medieval",
    tagline: "Sola fide, sola scriptura",
    blurb: "The Augustinian monk whose 95 Theses sparked the Protestant Reformation. Luther radicalized Augustine's doctrine of grace: salvation comes through faith alone (sola fide), not works; authority rests in Scripture alone (sola scriptura), not the Pope. His theological revolt reshaped Christianity, European politics, and the relationship between individual conscience and institutional authority.",
    fuller: `Luther's philosophical significance lies in his radicalization of key Augustinian themes and their political consequences. The doctrine of justification by faith alone holds that humans are so corrupted by sin that no amount of good works can merit salvation — only God's grace, received through faith, can save. This directly challenged the Catholic economy of salvation (indulgences, sacraments, clerical mediation).

Sola scriptura — Scripture as the sole ultimate authority in matters of faith — undermined the Pope's and councils' claims to interpretive authority. Every believer could, in principle, read and interpret Scripture for themselves ('the priesthood of all believers'). This democratization of religious authority had enormous political consequences, contributing to individualism, literacy, and eventually to liberal political thought.

Luther's 'Two Kingdoms' doctrine distinguished the spiritual kingdom (governed by the Gospel) from the temporal kingdom (governed by law and the sword). This separation of religious and political authority, while Luther himself remained conservative in politics, planted seeds that would grow into the modern secular state and the separation of church and state.

His influence on subsequent philosophy is indirect but profound: Kierkegaard drew on Luther's emphasis on individual faith against institutional religion; Hegel saw the Reformation as a crucial stage in Spirit's realization of freedom; and the broader cultural effects of Protestantism (Weber's thesis about capitalism, the emphasis on individual conscience) shaped the context within which modern philosophy developed.`,
    subtopics: [
      { name: "Justification by Faith", desc: "Sola fide: salvation through grace received by faith alone, not human merit or works." },
      { name: "Sola Scriptura", desc: "Scripture as sole authority — the priesthood of all believers and the democratization of interpretation." },
      { name: "Two Kingdoms", desc: "The spiritual and temporal kingdoms — seeds of church-state separation and secular governance." },
      { name: "The Bondage of the Will", desc: "Against Erasmus: the will is enslaved to sin. Only divine grace can liberate it. Freedom is an illusion." },
    ],
    primarySources: [
      { title: "The 95 Theses", author: "Luther", note: "The document that sparked the Reformation — a critique of indulgences and papal authority" },
      { title: "The Bondage of the Will", author: "Luther", note: "Against Erasmus on free will — Luther's most philosophically rigorous work" },
      { title: "On the Freedom of a Christian", author: "Luther", note: "Short treatise on faith, freedom, and the Christian life — accessible and foundational" },
    ],
    ideas: [
      { title: "Sola Fide", desc: "Justification by faith alone — human works cannot merit salvation; only divine grace received through faith." },
      { title: "Sola Scriptura", desc: "Scripture alone is the ultimate authority. The priesthood of all believers can interpret it without clerical mediation." },
      { title: "Bondage of the Will", desc: "Against Erasmus: the human will is enslaved by sin. Only God's grace can liberate it — free will is an illusion." },
    ],
    influences: ["augustine"],
    influenced: [],
  },
  freud: {
    name: "Sigmund Freud",
    years: "1856–1939",
    sortYear: 1856,
    tradition: "continental",
    tagline: "The unconscious",
    blurb: "Not a philosopher by profession, but one whose ideas transformed philosophy, culture, and self-understanding. Freud's central claim: much of mental life is unconscious — driven by repressed desires, childhood experiences, and instinctual forces inaccessible to introspection. The ego is not master in its own house. His influence on existentialism, critical theory, and continental philosophy is immense.",
    fuller: `Freud's philosophical significance extends beyond clinical psychoanalysis. His fundamental contribution is the concept of the dynamic unconscious — not merely 'things we're not currently thinking about' but a domain of actively repressed wishes, memories, and impulses that powerfully shape conscious thought, emotion, and behavior while remaining inaccessible to direct introspection.

The topographic model (conscious, preconscious, unconscious) and the structural model (id, ego, superego) provide frameworks for understanding psychic conflict. The ego mediates between the id's instinctual demands, the superego's moral prohibitions, and external reality — employing defense mechanisms (repression, projection, sublimation, rationalization) to manage the resulting anxiety.

The theory of the drives — initially a contrast between self-preservative and sexual drives, later reformulated as Eros (life/love/connection) and Thanatos (death/aggression/destruction) — provides a quasi-philosophical account of the fundamental forces driving human existence. Civilization itself, Freud argued in Civilization and Its Discontents, requires the renunciation of instinctual satisfaction, generating perpetual discontent.

Freud's impact on philosophy is pervasive: Sartre engaged critically with the unconscious (arguing it involves bad faith); the Frankfurt School (Marcuse, Adorno) synthesized Freud with Marx; Lacan reread Freud through structuralist linguistics; Deleuze and Guattari mounted a radical critique. The very concept of the unconscious has become indispensable to how we think about human motivation, self-knowledge, and the limits of rational self-mastery.`,
    subtopics: [
      { name: "The Unconscious", desc: "Dynamic repression, defense mechanisms, the return of the repressed, the limits of self-transparency." },
      { name: "The Structural Model", desc: "Id, ego, superego — psychic conflict and the ego's mediating role." },
      { name: "Drive Theory", desc: "Eros and Thanatos, libido, sublimation, the pleasure principle and beyond." },
      { name: "Civilization & Discontent", desc: "The price of civilization: instinctual renunciation, guilt, and the permanent tension between individual desire and social order." },
    ],
    primarySources: [
      { title: "The Interpretation of Dreams", author: "Freud", note: "The foundational work: dream-work, wish-fulfillment, the royal road to the unconscious" },
      { title: "Civilization and Its Discontents", author: "Freud", note: "Short, accessible masterwork on the conflict between individual desire and social order" },
      { title: "Beyond the Pleasure Principle", author: "Freud", note: "The controversial introduction of the death drive — repetition compulsion, Eros and Thanatos" },
      { title: "Introductory Lectures on Psycho-Analysis", author: "Freud", note: "The most accessible overview of the whole psychoanalytic system" },
    ],
    ideas: [
      { title: "The Unconscious", desc: "Much of mental life is driven by repressed desires and instinctual forces inaccessible to introspection. The ego is not master in its own house." },
      { title: "Id, Ego, Superego", desc: "The structural model of the psyche: instinctual drives (id), rational mediation (ego), and internalized moral authority (superego)." },
      { title: "Repression & Defense", desc: "Unacceptable wishes are repressed but continue to influence behavior through dreams, slips, symptoms, and neurosis." },
    ],
    influences: ["schopenhauer"],
    influenced: [],
  },
  einstein: {
    name: "Albert Einstein",
    years: "1879–1955",
    sortYear: 1879,
    tradition: "analytic",
    tagline: "Spacetime & relativity",
    blurb: "Though primarily a physicist, Einstein's theories of relativity had profound philosophical implications for our understanding of space, time, causality, and the nature of physical reality. His debates with Bohr about quantum mechanics, his belief in 'Spinoza's God,' and his reflections on determinism and realism make him a significant figure in the philosophy of science.",
    fuller: `Einstein's philosophical significance lies in how his physical theories forced revisions of fundamental metaphysical concepts. Special relativity (1905) demolished absolute simultaneity: whether two distant events are simultaneous depends on the observer's state of motion. This undermined the Newtonian picture of a single, absolute time flowing uniformly throughout the universe and raised deep questions about the nature of time that philosophers continue to debate.

General relativity (1915) went further: gravity is not a force but the curvature of spacetime caused by mass-energy. Space and time are not a fixed stage on which events occur but dynamic participants in physical processes. This has implications for the philosophy of space and time (substantivalism vs. relationism), the nature of scientific explanation, and the relationship between mathematics and physical reality.

Einstein's philosophical commitments — scientific realism (physical theories describe mind-independent reality), determinism, and a form of Spinozistic pantheism — shaped his famous resistance to quantum mechanics. His debates with Bohr, the EPR paradox, and his conviction that 'God does not play dice' are not merely scientific but deeply philosophical: they concern the nature of reality, the meaning of probability, and whether physics aims at description or mere prediction.

He explicitly acknowledged Spinoza as his philosophical inspiration: 'I believe in Spinoza's God, who reveals himself in the lawful harmony of all that exists, but not in a God who concerns himself with the fate and doings of mankind.'`,
    subtopics: [
      { name: "Relativity & Spacetime", desc: "Absolute simultaneity dissolved, spacetime as dynamic, the philosophical implications of general relativity." },
      { name: "Realism & Determinism", desc: "Einstein's commitment to physical realism and determinism — 'God does not play dice.'" },
      { name: "The Bohr-Einstein Debates", desc: "Quantum mechanics, EPR, and the philosophical question: does physics describe reality or just predict observations?" },
      { name: "Spinoza's God", desc: "Einstein's philosophical theology: the lawful harmony of nature, not a personal God." },
    ],
    primarySources: [
      { title: "Relativity: The Special and General Theory", author: "Einstein", note: "Einstein's own popular account — remarkably clear and still useful" },
      { title: "'On the Electrodynamics of Moving Bodies'", author: "Einstein", note: "The 1905 special relativity paper — readable and foundational" },
      { title: "Ideas and Opinions", author: "Einstein", note: "Collected essays on science, philosophy, politics — reveals the thinker behind the theories" },
      { title: "The Born-Einstein Letters", author: "Einstein & Born", note: "Correspondence revealing Einstein's philosophical views on quantum mechanics" },
    ],
    ideas: [
      { title: "Relativity of Simultaneity", desc: "Whether two events are simultaneous depends on the observer's motion — there is no absolute 'now.'" },
      { title: "Spacetime", desc: "Space and time are not separate absolutes but a unified, dynamic fabric curved by mass-energy." },
      { title: "Scientific Realism", desc: "Physics describes mind-independent reality. Einstein resisted instrumentalist readings of quantum mechanics." },
    ],
    influences: ["spinoza"],
    influenced: [],
  },
};

// ─── CONNECTION LABELS ─────────────────────────────────────────
const CONNECTION_LABELS = {
  "socrates→plato": "teacher of",
  "socrates→aristotle": "indirect influence via Plato",
  "socrates→stoics": "ethical foundations",
  "plato→aristotle": "teacher of; later rejected",
  "plato→plotinus": "direct ancestor of Neoplatonism",
  "plato→augustine": "via Neoplatonism",
  "plato→descartes": "innate ideas, rationalism",
  "aristotle→aquinas": "massive reintegration",
  "aristotle→stoics": "logic, ethics, physics",
  "aristotle→hegel": "teleology, system-building",
  "plotinus→augustine": "large influence on theology",
  "augustine→aquinas": "theological foundations",
  "augustine→luther": "grace, original sin",
  "augustine→descartes": "interiority, doubt",
  "aquinas→descartes": "scholastic backdrop",
  "aquinas→locke": "natural law tradition",
  "descartes→spinoza": "substance metaphysics",
  "descartes→leibniz": "rationalist framework",
  "descartes→locke": "provoked empiricist reply",
  "descartes→kant": "rationalist background",
  "stoics→spinoza": "determinism, ethics of reason",
  "stoics→kant": "duty, rational autonomy",
  "spinoza→hegel": "substance monism → Spirit",
  "spinoza→deleuze": "immanence, affirmation",
  "spinoza→einstein": "philosophical theology",
  "leibniz→kant": "rationalist foundations",
  "leibniz→hegel": "dialectical logic",
  "locke→hume": "empiricist foundations",
  "locke→berkeley": "provoked immaterialism",
  "locke→kant": "empiricist challenge",
  "locke→mill": "liberal political tradition",
  "berkeley→hume": "radicalized empiricism",
  "hume→kant": "'awakened from dogmatic slumber'",
  "hume→mill": "empiricist ethics, induction",
  "hume→russell": "empiricism, skepticism",
  "hume→wittgenstein": "skepticism about metaphysics",
  "kant→hegel": "transformed and transcended",
  "kant→schopenhauer": "thing-in-itself → the Will",
  "kant→nietzsche": "moral philosophy (to be overcome)",
  "kant→husserl": "transcendental method",
  "kant→rawls": "moral universalism",
  "hegel→marx": "dialectic materialized",
  "hegel→kierkegaard": "provoked existentialist revolt",
  "hegel→heidegger": "ontology, history, Spirit",
  "hegel→sartre": "dialectic, negation, freedom",
  "schopenhauer→nietzsche": "will, pessimism (to be overcome)",
  "schopenhauer→wittgenstein": "mysticism, silence",
  "schopenhauer→freud": "the unconscious will",
  "buddha→schopenhauer": "suffering, no-self, renunciation",
  "kierkegaard→heidegger": "anxiety, authenticity, existence",
  "kierkegaard→sartre": "existential choice, dread",
  "kierkegaard→camus": "absurdity, the leap",
  "nietzsche→heidegger": "nihilism, overcoming metaphysics",
  "nietzsche→sartre": "freedom, self-creation",
  "nietzsche→foucault": "genealogy, power",
  "nietzsche→deleuze": "will to power, eternal return",
  "nietzsche→camus": "nihilism, affirmation",
  "marx→sartre": "existentialist Marxism",
  "marx→foucault": "power, ideology, critique",
  "marx→rawls": "distributive justice",
  "husserl→heidegger": "student of; radicalized",
  "husserl→sartre": "phenomenological method",
  "husserl→merleau_ponty": "embodied phenomenology",
  "heidegger→sartre": "Dasein → being-for-itself",
  "heidegger→foucault": "history of Being → genealogy",
  "heidegger→derrida": "destruction → deconstruction",
  "heidegger→gadamer": "hermeneutic ontology",
  "sartre→camus": "existentialist milieu",
  "sartre→beauvoir": "existentialist foundations",
  "sartre→foucault": "engagement, freedom",
  "beauvoir→foucault": "situated subject, power",
  "foucault→derrida": "poststructuralist milieu",
  "foucault→deleuze": "power, desire, critique",
  "russell→wittgenstein": "teacher of; later challenged by",
  "wittgenstein→russell": "Tractatus influenced",
  "hume→wittgenstein": "skepticism, anti-metaphysics",
  "schopenhauer→wittgenstein": "the mystical, limits of language",
  "mill→rawls": "utilitarian backdrop",
  "kant→husserl": "transcendental philosophy",
};

// ─── BUILD CONNECTIONS ─────────────────────────────────────────
const CONNECTIONS = [];
Object.entries(PHILOSOPHERS).forEach(([id, p]) => {
  p.influenced.forEach((targetId) => {
    if (PHILOSOPHERS[targetId]) {
      const key = `${id}→${targetId}`;
      CONNECTIONS.push({ from: id, to: targetId, label: CONNECTION_LABELS[key] || "influenced" });
    }
  });
});

// ─── CHRONOLOGICAL LAYOUT ──────────────────────────────────────
const ERAS = [
  { label: "Ancient", startYear: -600, endYear: 100, color: "rgba(194,120,92,0.06)", border: "rgba(194,120,92,0.18)" },
  { label: "Late Antiquity & Medieval", startYear: 100, endYear: 1500, color: "rgba(123,107,138,0.06)", border: "rgba(123,107,138,0.18)" },
  { label: "Early Modern", startYear: 1500, endYear: 1750, color: "rgba(74,124,111,0.06)", border: "rgba(74,124,111,0.18)" },
  { label: "19th Century", startYear: 1750, endYear: 1900, color: "rgba(140,107,74,0.06)", border: "rgba(140,107,74,0.18)" },
  { label: "20th Century", startYear: 1900, endYear: 2010, color: "rgba(155,77,90,0.06)", border: "rgba(155,77,90,0.18)" },
];

function yearToY(sortYear) {
  const minYear = -600;
  const maxYear = 2010;
  const topPad = 60;
  const bottomPad = 60;
  const totalHeight = 3200;
  return topPad + ((sortYear - minYear) / (maxYear - minYear)) * (totalHeight - topPad - bottomPad);
}

// Assign x positions by tradition to create horizontal spread
const TRADITION_X = {
  eastern: 80,
  ancient: 220,
  medieval: 400,
  rationalist: 260,
  empiricist: 540,
  german_idealism: 380,
  existentialism: 180,
  continental: 600,
  analytic: 750,
  pragmatism: 680,
  political: 500,
};

// Assign positions
Object.entries(PHILOSOPHERS).forEach(([id, p]) => {
  p.y = yearToY(p.sortYear);
  p.x = TRADITION_X[p.tradition] || 400;
});

// Resolve collisions with jitter
const positioned = Object.entries(PHILOSOPHERS).map(([id, p]) => ({ id, x: p.x, y: p.y }));
for (let i = 0; i < positioned.length; i++) {
  for (let j = i + 1; j < positioned.length; j++) {
    const a = positioned[i], b = positioned[j];
    const dx = a.x - b.x, dy = a.y - b.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 70) {
      const pa = PHILOSOPHERS[a.id], pb = PHILOSOPHERS[b.id];
      pa.x += 40;
      pb.x -= 40;
      a.x = pa.x;
      b.x = pb.x;
    }
  }
}

const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 3300;

// ─── MAIN COMPONENT ───────────────────────────────────────────
function PhilosophyExplorer() {
  const [selected, setSelected] = useState(null);
  const [expandedIdea, setExpandedIdea] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [filterTradition, setFilterTradition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [detailLevel, setDetailLevel] = useState(0); // 0=blurb, 1=fuller, 2=subtopics, 3=sources
  const scrollRef = useRef(null);

  const NODE_R = 28;

  const filteredPhilosophers = useMemo(() =>
    Object.entries(PHILOSOPHERS).filter(([id, p]) => {
      if (filterTradition && p.tradition !== filterTradition) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.ideas.some((i) => i.title.toLowerCase().includes(q))
        );
      }
      return true;
    }), [filterTradition, searchQuery]);

  const filteredIds = useMemo(() => new Set(filteredPhilosophers.map(([id]) => id)), [filteredPhilosophers]);

  const getConnectedIds = useCallback((id) => {
    if (!id) return new Set();
    const p = PHILOSOPHERS[id];
    return new Set([id, ...p.influences, ...p.influenced]);
  }, []);

  const connectedToSelected = selected ? getConnectedIds(selected) : null;
  const connectedToHovered = hoveredNode ? getConnectedIds(hoveredNode) : null;

  const getNodeOpacity = (id) => {
    if (!filteredIds.has(id)) return 0;
    if (hoveredNode) return connectedToHovered.has(id) ? 1 : 0.12;
    if (selected) return connectedToSelected.has(id) ? 1 : 0.2;
    return 1;
  };

  const getConnectionOpacity = (from, to) => {
    if (!filteredIds.has(from) || !filteredIds.has(to)) return 0;
    if (hoveredNode) return (connectedToHovered.has(from) && connectedToHovered.has(to)) ? 0.8 : 0.03;
    if (selected) return (connectedToSelected.has(from) && connectedToSelected.has(to)) ? 0.7 : 0.04;
    return 0.1;
  };

  const phil = selected ? PHILOSOPHERS[selected] : null;
  const trad = phil ? TRADITIONS[phil.tradition] : null;

  const scrollToNode = (id) => {
    const p = PHILOSOPHERS[id];
    if (p && scrollRef.current) {
      const containerRect = scrollRef.current.getBoundingClientRect();
      const targetY = p.y - containerRect.height / 3;
      scrollRef.current.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", fontFamily: "'Crimson Pro', 'Georgia', serif", background: "#0A0A0C", color: "#E8E4DF", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet" />

      {/* ── LEFT: Scrollable Timeline ────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Top bar */}
        <div style={{ padding: "12px 16px", display: "flex", gap: 10, alignItems: "center", background: "#0A0A0C", borderBottom: "1px solid rgba(255,255,255,0.06)", flexWrap: "wrap", zIndex: 10, flexShrink: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: "0.05em", color: "#C2A67A", marginRight: 8 }}>
            PHILOSOPHIA
          </div>
          <input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px", color: "#E8E4DF", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", width: 160, outline: "none" }}
          />
          <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <button
              onClick={() => setFilterTradition(null)}
              style={{ padding: "3px 8px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.1)", background: !filterTradition ? "rgba(194,166,122,0.25)" : "transparent", color: !filterTradition ? "#C2A67A" : "#666", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", cursor: "pointer", letterSpacing: "0.04em" }}
            >ALL</button>
            {Object.entries(TRADITIONS).map(([key, t]) => (
              <button
                key={key}
                onClick={() => setFilterTradition(filterTradition === key ? null : key)}
                style={{ padding: "3px 8px", borderRadius: 4, border: `1px solid ${filterTradition === key ? t.color : "rgba(255,255,255,0.06)"}`, background: filterTradition === key ? `${t.color}30` : "transparent", color: filterTradition === key ? t.accent : "#555", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", cursor: "pointer", letterSpacing: "0.04em", whiteSpace: "nowrap" }}
              >{t.label.toUpperCase()}</button>
            ))}
          </div>
        </div>

        {/* Scrollable SVG area */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", overflowX: "hidden", position: "relative" }}>
          {/* Era time axis labels */}
          {ERAS.map((era, i) => {
            const yStart = yearToY(era.startYear);
            const yEnd = yearToY(era.endYear);
            return (
              <div key={i} style={{ position: "absolute", left: 0, top: yStart, height: yEnd - yStart, width: "100%", background: era.color, borderTop: `1px solid ${era.border}`, pointerEvents: "none", zIndex: 0 }}>
                <div style={{ position: "sticky", top: 0, padding: "6px 10px", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: era.border.replace("0.18", "0.6"), letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {era.label}
                </div>
              </div>
            );
          })}

          <svg width="100%" height={CANVAS_HEIGHT} style={{ position: "relative", zIndex: 1 }}>
            <defs>
              <marker id="arrowhead" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
                <polygon points="0 0, 7 2.5, 0 5" fill="rgba(255,255,255,0.2)" />
              </marker>
              {Object.entries(TRADITIONS).map(([key, t]) => (
                <radialGradient key={key} id={`glow-${key}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={t.color} stopOpacity="0.45" />
                  <stop offset="100%" stopColor={t.color} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            {/* Connections */}
            {CONNECTIONS.map(({ from, to, label }, i) => {
              const pf = PHILOSOPHERS[from];
              const pt = PHILOSOPHERS[to];
              const opacity = getConnectionOpacity(from, to);
              if (opacity === 0) return null;
              const dx = pt.x - pf.x;
              const dy = pt.y - pf.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist === 0) return null;
              const nx = dx / dist;
              const ny = dy / dist;
              const sx = pf.x + nx * NODE_R;
              const sy = pf.y + ny * NODE_R;
              const ex = pt.x - nx * (NODE_R + 6);
              const ey = pt.y - ny * (NODE_R + 6);
              const curvature = Math.min(0.15, 40 / dist);
              const mx = (sx + ex) / 2 + (ny * dist * curvature);
              const my = (sy + ey) / 2 - (nx * dist * curvature);
              const isHighlighted = (selected && (from === selected || to === selected)) || (hoveredNode && (from === hoveredNode || to === hoveredNode));
              const midX = (sx + 2 * mx + ex) / 4;
              const midY = (sy + 2 * my + ey) / 4;

              return (
                <g key={i} style={{ transition: "opacity 0.3s" }} opacity={opacity}>
                  <path
                    d={`M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`}
                    fill="none"
                    stroke={isHighlighted ? TRADITIONS[pf.tradition].color : "rgba(255,255,255,0.25)"}
                    strokeWidth={isHighlighted ? 1.8 : 0.8}
                    strokeDasharray={isHighlighted ? "none" : "3 3"}
                    markerEnd="url(#arrowhead)"
                  />
                  {isHighlighted && label && (
                    <text
                      x={midX}
                      y={midY - 6}
                      textAnchor="middle"
                      fill={TRADITIONS[pf.tradition].accent}
                      fontSize={9}
                      fontFamily="'JetBrains Mono', monospace"
                      opacity={0.8}
                      style={{ pointerEvents: "none" }}
                    >
                      {label}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {Object.entries(PHILOSOPHERS).map(([id, p]) => {
              const t = TRADITIONS[p.tradition];
              const opacity = getNodeOpacity(id);
              if (opacity === 0) return null;
              const isSelected = selected === id;
              const isHovered = hoveredNode === id;
              const scale = isSelected ? 1.12 : isHovered ? 1.06 : 1;
              return (
                <g
                  key={id}
                  className="node-group"
                  transform={`translate(${p.x}, ${p.y}) scale(${scale})`}
                  onClick={(e) => { e.stopPropagation(); setSelected(isSelected ? null : id); setExpandedIdea(null); setDetailLevel(0); scrollToNode(id); }}
                  onMouseEnter={() => setHoveredNode(id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ cursor: "pointer", opacity, transition: "opacity 0.3s" }}
                >
                  <circle r={NODE_R * 2} fill={`url(#glow-${p.tradition})`} opacity={isSelected ? 0.7 : isHovered ? 0.4 : 0.15} />
                  <circle r={NODE_R} fill="#0A0A0C" stroke={t.color} strokeWidth={isSelected ? 2.5 : 1.2} />
                  <circle r={NODE_R - 3} fill={`${t.color}15`} />
                  <text textAnchor="middle" dy="0.35em" fill={t.accent} fontSize={p.name.length > 12 ? 9 : 11} fontWeight="600" fontFamily="'Crimson Pro', serif" letterSpacing="0.04em">
                    {p.name.split(/[\s-]/).map((w) => w[0]).join("").slice(0, 3)}
                  </text>
                  <text textAnchor="middle" y={NODE_R + 13} fill="#888" fontSize={9.5} fontFamily="'Crimson Pro', serif" fontWeight="400">
                    {p.name}
                  </text>
                  <text textAnchor="middle" y={NODE_R + 25} fill="#555" fontSize={8} fontFamily="'JetBrains Mono', monospace">
                    {p.years}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Hint */}
          {!selected && (
            <div style={{ position: "sticky", bottom: 16, textAlign: "center", pointerEvents: "none", zIndex: 5 }}>
              <div style={{ display: "inline-block", background: "rgba(10,10,12,0.88)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "8px 18px", fontSize: 12, color: "#666", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.03em", backdropFilter: "blur(8px)" }}>
                Click a philosopher to explore · Scroll down through time
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── RIGHT: Detail Panel ──────────────────────────── */}
      <div style={{
        width: selected ? 420 : 0,
        minWidth: selected ? 420 : 0,
        transition: "width 0.35s ease, min-width 0.35s ease",
        overflow: "hidden",
        borderLeft: selected ? "1px solid rgba(255,255,255,0.06)" : "none",
        background: "linear-gradient(135deg, #111114 0%, #0A0A0C 100%)",
      }}>
        {phil && trad && (
          <div style={{ padding: "24px 22px", height: "100vh", overflowY: "auto", boxSizing: "border-box" }}>

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: trad.color, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
                  {trad.label}
                </div>
                <h2 style={{ margin: 0, fontSize: 26, fontWeight: 300, letterSpacing: "0.01em", color: "#F0ECE6" }}>
                  {phil.name}
                </h2>
                <div style={{ fontSize: 13, color: "#666", marginTop: 3, fontStyle: "italic" }}>
                  {phil.years}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{ background: "none", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, color: "#888", width: 26, height: 26, cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
              >✕</button>
            </div>

            {/* Tagline */}
            <div style={{ padding: "8px 12px", background: `${trad.color}10`, border: `1px solid ${trad.color}25`, borderRadius: 8, marginBottom: 20, fontSize: 14, fontStyle: "italic", color: trad.accent, letterSpacing: "0.02em" }}>
              "{phil.tagline}"
            </div>

            {/* ── Depth Level Tabs ── */}
            <div style={{ display: "flex", gap: 0, marginBottom: 20, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              {["Overview", "Deep Dive", "Subtopics", "Sources"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setDetailLevel(i)}
                  style={{
                    flex: 1,
                    padding: "7px 4px",
                    background: detailLevel === i ? `${trad.color}20` : "rgba(255,255,255,0.02)",
                    border: "none",
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    color: detailLevel === i ? trad.accent : "#666",
                    fontSize: 10,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                  }}
                >{label}</button>
              ))}
            </div>

            {/* ── Level 0: Overview (blurb + key ideas) ── */}
            {detailLevel === 0 && (
              <>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: "#B0ACA5", marginBottom: 24, letterSpacing: "0.01em" }}>
                  {phil.blurb}
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 10, textTransform: "uppercase" }}>
                    Key Ideas
                  </div>
                  {phil.ideas.map((idea, i) => {
                    const isExp = expandedIdea === i;
                    return (
                      <div
                        key={i}
                        onClick={() => setExpandedIdea(isExp ? null : i)}
                        style={{ padding: "9px 12px", marginBottom: 5, background: isExp ? `${trad.color}12` : "rgba(255,255,255,0.02)", border: `1px solid ${isExp ? trad.color + "35" : "rgba(255,255,255,0.04)"}`, borderRadius: 7, cursor: "pointer", transition: "all 0.2s" }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ fontSize: 13, fontWeight: 500, color: isExp ? trad.accent : "#C8C4BE" }}>{idea.title}</div>
                          <div style={{ fontSize: 10, color: "#555", transform: isExp ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>▸</div>
                        </div>
                        {isExp && (
                          <div style={{ marginTop: 8, fontSize: 12.5, lineHeight: 1.7, color: "#A09B94" }}>
                            {idea.desc}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* ── Level 1: Deep Dive (fuller write-up) ── */}
            {detailLevel === 1 && (
              <div style={{ fontSize: 13.5, lineHeight: 1.85, color: "#B0ACA5", letterSpacing: "0.01em" }}>
                {(phil.fuller || phil.blurb).split("\n\n").map((para, i) => (
                  <p key={i} style={{ margin: "0 0 16px 0" }}>{para}</p>
                ))}
              </div>
            )}

            {/* ── Level 2: Subtopics ── */}
            {detailLevel === 2 && (
              <div>
                <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase" }}>
                  Subtopics & Branches
                </div>
                {(phil.subtopics || []).map((sub, i) => (
                  <div key={i} style={{ padding: "12px 14px", marginBottom: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8 }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: trad.accent, marginBottom: 6 }}>{sub.name}</div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.75, color: "#A09B94" }}>{sub.desc}</div>
                  </div>
                ))}
                {(!phil.subtopics || phil.subtopics.length === 0) && (
                  <div style={{ fontSize: 13, color: "#555", fontStyle: "italic" }}>No subtopics available yet.</div>
                )}
              </div>
            )}

            {/* ── Level 3: Primary Sources ── */}
            {detailLevel === 3 && (
              <div>
                <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase" }}>
                  Primary Sources & Recommended Reading
                </div>
                {(phil.primarySources || []).map((src, i) => (
                  <div key={i} style={{ padding: "12px 14px", marginBottom: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#D0CBC4", marginBottom: 2 }}>
                      <span style={{ fontStyle: "italic" }}>{src.title}</span>
                    </div>
                    <div style={{ fontSize: 11, color: trad.color, marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>
                      {src.author}
                    </div>
                    <div style={{ fontSize: 12, lineHeight: 1.65, color: "#908B84" }}>
                      {src.note}
                    </div>
                  </div>
                ))}
                {(!phil.primarySources || phil.primarySources.length === 0) && (
                  <div style={{ fontSize: 13, color: "#555", fontStyle: "italic" }}>No sources listed yet.</div>
                )}
              </div>
            )}

            {/* ── Connections (always visible) ── */}
            <div style={{ marginTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
              {phil.influences.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 8, textTransform: "uppercase" }}>
                    Influenced by
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {phil.influences.map((id) => {
                      const inf = PHILOSOPHERS[id];
                      if (!inf) return null;
                      const it = TRADITIONS[inf.tradition];
                      const connKey = `${id}→${selected}`;
                      const connLabel = CONNECTION_LABELS[connKey];
                      return (
                        <button
                          key={id}
                          onClick={(e) => { e.stopPropagation(); setSelected(id); setExpandedIdea(null); setDetailLevel(0); scrollToNode(id); }}
                          title={connLabel || "influenced"}
                          style={{ padding: "4px 10px", borderRadius: 16, border: `1px solid ${it.color}40`, background: `${it.color}10`, color: it.accent, fontSize: 11, cursor: "pointer", fontFamily: "'Crimson Pro', serif", letterSpacing: "0.02em", transition: "all 0.2s" }}
                          onMouseEnter={(e) => { e.target.style.background = `${it.color}25`; }}
                          onMouseLeave={(e) => { e.target.style.background = `${it.color}10`; }}
                        >{inf.name}</button>
                      );
                    })}
                  </div>
                </div>
              )}

              {phil.influenced.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 8, textTransform: "uppercase" }}>
                    Influenced
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {phil.influenced.map((id) => {
                      const inf = PHILOSOPHERS[id];
                      if (!inf) return null;
                      const it = TRADITIONS[inf.tradition];
                      const connKey = `${selected}→${id}`;
                      const connLabel = CONNECTION_LABELS[connKey];
                      return (
                        <button
                          key={id}
                          onClick={(e) => { e.stopPropagation(); setSelected(id); setExpandedIdea(null); setDetailLevel(0); scrollToNode(id); }}
                          title={connLabel || "influenced"}
                          style={{ padding: "4px 10px", borderRadius: 16, border: `1px solid ${it.color}40`, background: `${it.color}10`, color: it.accent, fontSize: 11, cursor: "pointer", fontFamily: "'Crimson Pro', serif", letterSpacing: "0.02em", transition: "all 0.2s" }}
                          onMouseEnter={(e) => { e.target.style.background = `${it.color}25`; }}
                          onMouseLeave={(e) => { e.target.style.background = `${it.color}10`; }}
                        >{inf.name}</button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Tradition badge */}
            <div style={{ marginTop: 16, padding: "12px 14px", background: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: trad.color }} />
                <span style={{ fontSize: 13, color: trad.accent }}>{trad.label}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PhilosophyExplorer;
