// Encyclopedia data extracted from philosophia_encyclopedia.jsx

const PHILOSOPHERS = {
  socrates: {
    name: "Socrates", years: "470–399 BCE", tradition: "Ancient Greek",
    bio: `Socrates left no writings. Everything we know comes through others — primarily Plato, but also Xenophon and Aristophanes. He spent his life in Athens, engaging citizens in philosophical dialogue in the agora, the gymnasia, and at private gatherings.

His method — the elenchus — proceeds by asking interlocutors to define a concept (justice, courage, piety), then exposing contradictions in their answers through further questioning. The goal is not to establish Socrates' own doctrine but to reveal that the interlocutor's confident beliefs are incoherent. This is why Socrates insisted he was the wisest man in Athens: he alone knew that he did not know.

The Delphic oracle declared no one wiser than Socrates. He interpreted this not as flattery but as a mission: to test others' claims to wisdom and expose pretenders. This made him enormously unpopular with Athens' political and intellectual establishment.

In 399 BCE, Socrates was tried on charges of impiety and corrupting the youth. He was convicted and sentenced to death by drinking hemlock. In Plato's account, he refused opportunities to escape, arguing that a citizen who has benefited from the city's laws must accept its judgments, even unjust ones.

His legacy is paradoxical: the man who claimed to know nothing became the founding figure of Western philosophy. His insistence that the unexamined life is not worth living, that virtue is knowledge, and that it is better to suffer injustice than to commit it established the moral seriousness that philosophy has claimed ever since.`,
    keyIdeas: ["Socratic method (elenchus)", "Intellectual humility ('I know that I know nothing')", "Virtue as knowledge", "The examined life", "No one does wrong willingly"],
    keyWorks: ["(No writings — known through Plato's dialogues, especially Apology, Euthyphro, Crito, Phaedo)"],
    appears: ["metaphysics.ontology.substance", "ethics.normative.virtue_ethics", "epistemology.foundations.rationalism"],
  },
  plato: {
    name: "Plato", years: "428–348 BCE", tradition: "Ancient Greek",
    bio: `Plato was born into Athenian aristocracy and might have pursued a political career had the execution of his mentor Socrates not turned him decisively toward philosophy. He founded the Academy in Athens around 387 BCE — the first institution of higher learning in the Western world, which endured for nearly nine centuries.

Plato's dialogues are among the most influential works in human intellectual history. The early dialogues (Euthyphro, Apology, Crito) depict Socrates interrogating conventional beliefs. The middle dialogues (Republic, Phaedo, Symposium, Phaedrus) develop Plato's own metaphysics: the Theory of Forms. The late dialogues (Parmenides, Theaetetus, Sophist, Timaeus) subject his own earlier views to rigorous critique.

The Theory of Forms holds that the physical world is an imperfect, changing copy of an eternal, immutable realm of ideal Forms — Beauty, Justice, the Good, Equality. Particular beautiful things participate in the Form of Beauty but fall short of it. True knowledge is of the Forms, not of the sensory world. The Allegory of the Cave in Republic Book VII dramatizes this: prisoners chained in a cave mistake shadows on the wall for reality. Philosophy is the painful ascent from shadow to sunlight — from opinion to knowledge.

The Republic also contains Plato's political philosophy: the ideal state mirrors the tripartite soul (reason, spirit, appetite) with three classes (philosopher-kings, guardians, producers). Justice is each part performing its proper function. Only those who have grasped the Form of the Good are fit to rule.

Plato's influence is incalculable. Whitehead famously said that all of Western philosophy is "a series of footnotes to Plato." His impact extends through Neoplatonism, Christian theology, Renaissance humanism, and into modern debates about abstract objects, moral realism, and the nature of knowledge.`,
    keyIdeas: ["Theory of Forms", "Allegory of the Cave", "Tripartite soul (reason, spirit, appetite)", "Philosopher-kings", "Recollection (anamnesis)", "Participation and imitation"],
    keyWorks: ["Republic (~380 BCE)", "Phaedo (~380 BCE)", "Symposium (~385 BCE)", "Timaeus (~360 BCE)", "Theaetetus (~369 BCE)", "Parmenides (~370 BCE)"],
    appears: ["metaphysics.ontology.universals", "epistemology.foundations.rationalism", "aesthetics.beauty.beauty_judgment", "political.justice.social_contract"],
  },
  aristotle: {
    name: "Aristotle", years: "384–322 BCE", tradition: "Ancient Greek",
    bio: `Aristotle studied at Plato's Academy for twenty years, then tutored the young Alexander the Great, and finally founded his own school, the Lyceum, in Athens. His surviving works — likely lecture notes rather than polished treatises — cover logic, metaphysics, physics, biology, ethics, politics, rhetoric, and poetics. No thinker has ever ranged so widely with such depth.

Where Plato looked upward to transcendent Forms, Aristotle looked around at the natural world. His metaphysics grounds form in matter: forms don't exist separately but are always embodied in particular substances. This hylomorphism — the doctrine that every substance is a composite of matter (hyle) and form (morphe) — replaced Plato's two-world picture with a single world of formed matter.

His doctrine of the four causes asks four questions about anything: What is it made of (material cause)? What is its structure or essence (formal cause)? What brought it into being (efficient cause)? What is it for (final cause or telos)? The final cause is paramount: nature, like craft, is purposive. An acorn's telos is to become an oak.

In ethics, Aristotle developed virtue theory: the good life (eudaimonia) consists in the excellent exercise of distinctively human capacities, especially reason. Virtues are stable character traits — courage, temperance, justice, practical wisdom — acquired through habituation and hitting the mean between extremes.

His logic, organized in the Organon, founded the discipline of formal reasoning. The syllogism — "All A are B; all B are C; therefore all A are C" — was the dominant framework for valid inference for two thousand years, until Frege's revolution in the nineteenth century.

Aristotle's influence on medieval Islamic and Christian philosophy (especially through Aquinas) was so profound that he was known simply as "The Philosopher."`,
    keyIdeas: ["Hylomorphism (matter and form)", "Four causes (material, formal, efficient, final)", "Virtue ethics and eudaimonia", "The doctrine of the mean", "Formal logic and the syllogism", "Categories of being", "Potentiality and actuality"],
    keyWorks: ["Metaphysics (~350 BCE)", "Nicomachean Ethics (~340 BCE)", "Physics (~350 BCE)", "De Anima (~350 BCE)", "Politics (~350 BCE)", "Organon (~350 BCE)"],
    appears: ["metaphysics.ontology.substance", "metaphysics.ontology.universals", "ethics.normative.virtue_ethics", "logic.formal.classical"],
  },
  descartes: {
    name: "René Descartes", years: "1596–1650", tradition: "Rationalism",
    bio: `Descartes is often called the father of modern philosophy. Trained by Jesuits at La Flèche, he spent much of his adult life in the Dutch Republic, seeking the solitude necessary for his philosophical and scientific work.

His Meditations on First Philosophy (1641) begins with the most radical doubt in philosophical history. Descartes resolves to reject any belief that can possibly be doubted. The senses sometimes deceive — perhaps always. Perhaps there is no external world. Perhaps an omnipotent evil demon is feeding him false experiences. Can anything survive this onslaught?

Yes: the cogito. "I think, therefore I am" (Cogito ergo sum). Even if the demon deceives him about everything else, the very act of doubting proves the existence of a thinking subject. From this Archimedean point, Descartes rebuilds knowledge: he establishes God's existence (via the ontological and trademark arguments), uses God's perfection to guarantee that clear and distinct ideas are true, and thereby validates the deliverances of reason and (carefully) the senses.

His metaphysics is dualist: mind (res cogitans) and body (res extensa) are fundamentally different substances. The mind is unextended, indivisible, and thinking. The body is extended, divisible, and non-thinking. This clean separation enabled the mechanical philosophy of nature — bodies obey mathematical laws without purpose or consciousness — but created the mind-body problem: how can two utterly different substances interact?

Princess Elisabeth of Bohemia pressed Descartes on this in their remarkable correspondence. His answers (invoking the pineal gland as the point of interaction) were recognized even by his followers as inadequate.

Descartes also made foundational contributions to mathematics (Cartesian coordinates, analytic geometry) and optics. His vision of a unified science grounded in mathematical certainty shaped the entire trajectory of modern thought.`,
    keyIdeas: ["Methodical doubt", "Cogito ergo sum", "Mind-body dualism (res cogitans / res extensa)", "Clear and distinct ideas", "The evil demon hypothesis", "Foundationalism"],
    keyWorks: ["Meditations on First Philosophy (1641)", "Discourse on the Method (1637)", "Principles of Philosophy (1644)", "Rules for the Direction of the Mind (1628)"],
    appears: ["metaphysics.ontology.substance", "metaphysics.mind_body.dualism", "epistemology.foundations.rationalism", "epistemology.problems.skepticism"],
  },
  spinoza: {
    name: "Baruch Spinoza", years: "1632–1677", tradition: "Rationalism",
    bio: `Spinoza was born into Amsterdam's Portuguese-Jewish community and excommunicated (cherem) at age 23 for heterodox views. He spent the rest of his life grinding lenses and writing philosophy, living in austere independence.

His Ethics (1677, published posthumously) is one of philosophy's most ambitious works, presented in geometric form — definitions, axioms, propositions, demonstrations — modeled on Euclid. Its argument is relentless.

There is only one substance: God or Nature (Deus sive Natura). A substance, by definition, is what exists through itself and is conceived through itself. Since a substance with infinite attributes cannot be limited by anything outside it, and since two substances cannot share an attribute, there can be only one substance. Everything else — minds, bodies, rocks, stars — is a mode (modification) of this single substance, understood through two of its infinite attributes: Thought and Extension.

This has dramatic consequences. God is not a transcendent creator but nature itself, understood in its infinite totality. There is no personal God, no providence, no free will. Everything follows necessarily from God's nature, as the properties of a triangle follow from its definition. Human "freedom" is an illusion born of ignorance of the causes that determine us.

Yet Spinoza offers a path to liberation. Through reason, we can understand our affects (emotions) and their causes, transforming passive passions into active understanding. The highest state — the intellectual love of God (amor Dei intellectualis) — is the mind's intuitive grasp of all things as necessary expressions of infinite substance, experienced sub specie aeternitatis (under the aspect of eternity). This is blessedness: not the elimination of emotion but its transformation through understanding.

Spinoza was called by Novalis "the God-intoxicated man" and by others the most dangerous atheist in Europe. His influence runs through Goethe, Hegel, Einstein, Deleuze, and contemporary debates about pantheism and determinism.`,
    keyIdeas: ["Substance monism (God or Nature)", "Conatus (striving to persist in being)", "Determinism and the illusion of free will", "Three kinds of knowledge", "Amor Dei intellectualis", "Parallelism of mind and body"],
    keyWorks: ["Ethics (1677)", "Theological-Political Treatise (1670)", "Treatise on the Emendation of the Intellect (1677)"],
    appears: ["metaphysics.ontology.substance", "metaphysics.ontology.free_will", "metaphysics.mind_body.dualism"],
  },
  kant: {
    name: "Immanuel Kant", years: "1724–1804", tradition: "German Idealism",
    bio: `Kant spent his entire life in Königsberg, East Prussia. His daily walks were so punctual that neighbors set their clocks by him. This provincial regularity masked one of the most revolutionary minds in history.

Kant's "critical philosophy" was provoked by Hume's skepticism about causation, which "awakened him from his dogmatic slumber." The result was the Critique of Pure Reason (1781/1787), which attempted nothing less than a complete inventory of the mind's contribution to experience.

Kant's "Copernican revolution" inverts the assumed relationship between mind and world: instead of the mind conforming to objects, objects conform to the mind's own structures. Space and time are not features of things-in-themselves but forms of sensibility — the mind's way of organizing experience. The twelve categories of the understanding (including causality, substance, and unity) are not derived from experience but are the conditions that make experience possible.

This yields transcendental idealism: we can know phenomena (things as they appear to us, structured by our cognitive apparatus) but never noumena (things as they are in themselves). Science is possible because the mind legislates the laws of nature — but metaphysical knowledge of God, the soul, and the cosmos as wholes is not, because these exceed possible experience.

In ethics, Kant grounded morality in pure reason. The categorical imperative demands: act only on maxims you could will to be universal laws. Treat humanity, in yourself or in others, always as an end and never merely as a means. Moral worth lies not in consequences but in acting from duty — from respect for the moral law itself.

Kant's three Critiques (Pure Reason, Practical Reason, Judgment) constitute one of the most systematic philosophical achievements ever. Almost every subsequent philosopher in the Western tradition has had to define themselves in relation to Kant.`,
    keyIdeas: ["Transcendental idealism (phenomena vs. noumena)", "Synthetic a priori knowledge", "The categorical imperative", "The Copernican revolution in philosophy", "Categories of the understanding", "The autonomy of moral reason"],
    keyWorks: ["Critique of Pure Reason (1781)", "Critique of Practical Reason (1788)", "Critique of Judgment (1790)", "Groundwork of the Metaphysics of Morals (1785)", "Prolegomena to Any Future Metaphysics (1783)"],
    appears: ["metaphysics.ontology.free_will", "epistemology.foundations.rationalism", "ethics.normative.deontology", "aesthetics.beauty.beauty_judgment"],
  },
  hume: {
    name: "David Hume", years: "1711–1776", tradition: "Empiricism",
    bio: `Hume was born in Edinburgh and wrote his masterpiece, A Treatise of Human Nature, before he was thirty — only to see it, as he said, "fall dead-born from the press." His later works, including the Enquiries and the Dialogues Concerning Natural Religion (published posthumously), were more successful, but the Treatise remains his most radical and systematic work.

Hume's empiricism is rigorous to the point of destructiveness. All mental contents are either impressions (vivid sensory experiences) or ideas (faint copies of impressions). Any idea that cannot be traced to a corresponding impression is meaningless. Applying this test, Hume dismantles one metaphysical concept after another.

Causation: We never observe a necessary connection between cause and effect — only constant conjunction (one event regularly following another). The idea of causal "power" or "necessity" is projected by the mind through habit and custom, not discovered in the world.

The self: Introspection reveals no enduring self — only a bundle of fleeting perceptions. Personal identity is a fiction the mind constructs from the smooth succession of related experiences.

Induction: We cannot rationally justify the inference from observed to unobserved cases. The belief that the future will resemble the past rests on habit, not reason — and any argument for induction must itself assume induction.

In ethics, Hume argued that reason alone cannot motivate action; only passions (desires, emotions) can. Moral judgments express sentiments of approval or disapproval, not rational truths. "Reason is, and ought only to be, the slave of the passions." His is-ought distinction — that you cannot derive moral conclusions from factual premises — remains foundational in metaethics.

Hume was also one of history's great prose stylists, a noted historian, and a man of remarkable personal warmth. He died with cheerful equanimity, having never found evidence for an afterlife and seeing no reason to pretend otherwise.`,
    keyIdeas: ["Problem of induction", "Bundle theory of the self", "Is-ought problem (Hume's guillotine)", "Causation as custom and habit", "Impressions and ideas", "Reason as slave of the passions"],
    keyWorks: ["A Treatise of Human Nature (1739–40)", "An Enquiry Concerning Human Understanding (1748)", "An Enquiry Concerning the Principles of Morals (1751)", "Dialogues Concerning Natural Religion (1779)"],
    appears: ["epistemology.foundations.empiricism", "epistemology.problems.skepticism", "metaphysics.causation.causation_theories", "ethics.metaethics.moral_realism"],
  },
  locke: {
    name: "John Locke", years: "1632–1704", tradition: "Empiricism",
    bio: `Locke's Essay Concerning Human Understanding (1689) is the founding text of British empiricism. Against the rationalists' innate ideas, Locke argued that the mind at birth is a tabula rasa — a white paper, void of all characters. All ideas derive from two sources: sensation (the five senses) and reflection (the mind's awareness of its own operations).

Simple ideas (red, cold, sweet) are received passively. Complex ideas (substance, causation, justice) are actively constructed by the mind through combination, comparison, and abstraction. Locke distinguishes primary qualities (extension, solidity, motion — genuinely in objects) from secondary qualities (color, taste, sound — produced in us by the object's primary qualities). This distinction would be challenged by Berkeley and radicalized by Hume.

On personal identity, Locke broke with tradition: identity over time is constituted not by a persisting soul-substance but by continuity of consciousness — specifically, memory. You are the same person as your childhood self insofar as you can remember being that child. This had radical implications for moral and legal responsibility.

Locke's political philosophy, developed in the Two Treatises of Government, was equally influential. Humans in the state of nature possess natural rights to life, liberty, and property. Government is legitimate only by the consent of the governed and exists to protect these pre-existing rights. If it fails — if it becomes tyrannical — the people retain a right of revolution. This directly shaped the American and French revolutions.

Locke also wrote influentially on toleration, education, and the reasonableness of Christianity. He is a pivotal figure in the development of liberalism, constitutionalism, and the empiricist tradition.`,
    keyIdeas: ["Tabula rasa (blank slate)", "Primary vs. secondary qualities", "Personal identity as continuity of consciousness", "Natural rights (life, liberty, property)", "Government by consent", "Simple and complex ideas"],
    keyWorks: ["Essay Concerning Human Understanding (1689)", "Two Treatises of Government (1689)", "A Letter Concerning Toleration (1689)"],
    appears: ["epistemology.foundations.empiricism", "epistemology.foundations.perception", "political.justice.social_contract", "metaphysics.ontology.substance"],
  },
  hegel: {
    name: "G.W.F. Hegel", years: "1770–1831", tradition: "German Idealism",
    bio: `Hegel's philosophy is the most ambitious systematic enterprise since Aristotle. His Phenomenology of Spirit (1807), Science of Logic (1812–16), and Encyclopedia of the Philosophical Sciences attempt to demonstrate that all of reality — nature, history, art, religion, philosophy — is the self-development of Absolute Spirit (Geist).

The dialectical method drives this development: every concept or historical formation contains internal contradictions that propel it beyond itself. The standard (if oversimplified) schema is thesis → antithesis → synthesis, though Hegel himself rarely uses these terms. The operative concept is Aufhebung — a German word meaning simultaneously to cancel, to preserve, and to elevate. Each stage negates the previous one but preserves its truth at a higher level.

The Phenomenology traces consciousness's journey from naive sense-certainty through self-consciousness, reason, spirit, religion, and finally absolute knowing. The famous master-slave dialectic shows how self-consciousness requires recognition by another: the master depends on the slave for recognition, while the slave, through labor, achieves genuine self-knowledge and ultimately surpasses the master.

For Hegel, "the rational is the real, and the real is the rational." This doesn't mean everything that exists is good — it means reality has an inherent logical structure that philosophy can articulate. History is the progress of the consciousness of freedom: the ancient East knew that one (the despot) is free; Greece and Rome knew that some are free; the modern world knows that all are free.

Hegel's influence splits into left and right. The right Hegelians saw his philosophy as justifying the Prussian state and Christian theology. The left Hegelians — Marx, Feuerbach, the Young Hegelians — turned his dialectic against its conservative conclusions. Marx "stood Hegel on his head," replacing Spirit with material conditions as the engine of history.`,
    keyIdeas: ["Dialectic (thesis-antithesis-synthesis / Aufhebung)", "Absolute Spirit (Geist)", "Master-slave dialectic", "The rational is the real", "History as progress of freedom", "Determinate negation"],
    keyWorks: ["Phenomenology of Spirit (1807)", "Science of Logic (1812–16)", "Philosophy of Right (1820)", "Encyclopedia of the Philosophical Sciences (1817–30)"],
    appears: ["metaphysics.ontology.substance", "political.justice.social_contract", "ethics.normative.virtue_ethics"],
  },
  nietzsche: {
    name: "Friedrich Nietzsche", years: "1844–1900", tradition: "Existentialism / Continental",
    bio: `Nietzsche was appointed professor of classical philology at Basel at the astonishing age of 24, but poor health forced his early retirement. He spent the next decade wandering Europe, writing the works that would transform philosophy, in near-total obscurity. In January 1889, he collapsed in Turin, embracing a horse being beaten in the street, and spent the last eleven years of his life in madness.

His early work, The Birth of Tragedy (1872), distinguished two principles in Greek art: the Apollonian (order, individuation, beautiful form) and the Dionysian (chaos, dissolution, ecstatic intoxication). Greek tragedy achieved greatness by wedding both; Socratic rationalism killed tragedy by insisting on intelligibility.

In his middle period (Human, All Too Human; Daybreak; The Gay Science), Nietzsche developed his "philosophy with a hammer" — a genealogical method that traces ideas, values, and institutions back to their all-too-human origins in power, resentment, and physiological condition.

The Gay Science announces the death of God — not as a theological argument but as a cultural diagnosis: the foundations of Western morality, meaning, and truth have collapsed. The question is what comes next. The Übermensch (overman) is Nietzsche's answer: one who creates new values rather than inheriting old ones. The eternal recurrence — could you affirm living your exact life infinitely? — is the test of whether you have achieved amor fati, love of fate.

On the Genealogy of Morals (1887) traces the origin of "good and evil" to a "slave revolt in morality": the weak (slaves, the priestly class), unable to take direct action against the strong, revalued weakness as virtue and strength as vice. Resentment (ressentiment) — the impotent hatred of the powerful by the powerless — is the hidden engine of Christian morality.

The will to power, often misunderstood, is not a desire for political domination but the fundamental drive of all life toward self-expression, growth, and creative overcoming. Nietzsche's influence pervades existentialism, postmodernism, psychology (Freud acknowledged his debt), and literature.`,
    keyIdeas: ["Will to power", "Death of God", "Eternal recurrence", "Übermensch (overman)", "Genealogy of morals / slave revolt in morality", "Amor fati", "Apollonian and Dionysian"],
    keyWorks: ["Thus Spoke Zarathustra (1883–85)", "Beyond Good and Evil (1886)", "On the Genealogy of Morals (1887)", "The Gay Science (1882)", "The Birth of Tragedy (1872)", "Twilight of the Idols (1889)"],
    appears: ["ethics.metaethics.moral_realism", "metaphysics.ontology.free_will"],
  },
  wittgenstein: {
    name: "Ludwig Wittgenstein", years: "1889–1951", tradition: "Analytic",
    bio: `Wittgenstein is unique in having produced two revolutionary philosophies in one lifetime — and the second was a systematic rejection of the first.

Born into one of Vienna's wealthiest families, he studied engineering before becoming obsessed with the foundations of logic. He went to Cambridge to study with Russell, fought in World War I, and wrote the Tractatus Logico-Philosophicus (1921) in the trenches and a POW camp.

The Tractatus presents a picture theory of language: propositions are logical pictures of possible states of affairs. Language has a fixed logical structure that mirrors the structure of reality. The limits of language are the limits of the world. What cannot be said — ethics, aesthetics, the mystical — must be passed over in silence. Wittgenstein believed he had solved all the problems of philosophy and left Cambridge to become a schoolteacher and later an architect.

He returned in 1929, increasingly dissatisfied with the Tractatus. The Philosophical Investigations (published posthumously, 1953) dismantles his earlier work. Language does not have a single essence; it consists of innumerable "language games" — social practices governed by rules that vary by context. Meaning is not a picture-relation between words and objects; meaning is use. The meaning of a word is its use in the language.

The private language argument challenges the coherence of a language only one person could understand. If meaning requires rules, and rules require the possibility of following them correctly or incorrectly, then a purely private language — with no public criterion of correctness — is impossible. This has enormous implications for philosophy of mind: if inner experience cannot ground a private language, then our talk of sensations, thoughts, and mental states must be publicly constituted.

Wittgenstein's therapeutic conception of philosophy holds that philosophical problems are not real problems but confusions generated by the bewitchment of intelligence by language. Philosophy should dissolve, not solve, these confusions.`,
    keyIdeas: ["Picture theory of language (early)", "Language games (late)", "Meaning as use", "Private language argument", "Family resemblance", "Therapeutic philosophy", "Showing vs. saying"],
    keyWorks: ["Tractatus Logico-Philosophicus (1921)", "Philosophical Investigations (1953)", "On Certainty (1969)", "The Blue and Brown Books (1958)"],
    appears: ["logic.meaning.reference", "logic.formal.classical", "aesthetics.art.definition"],
  },
  heidegger: {
    name: "Martin Heidegger", years: "1889–1976", tradition: "Continental / Phenomenology",
    bio: `Heidegger's Being and Time (1927) is one of the most important and difficult works of twentieth-century philosophy. Its central question is deceptively simple: What is the meaning of Being? Not "what exists?" but "what does it mean for something to be?"

Heidegger argued that Western philosophy since Plato had "forgotten" this question, treating Being as an obvious given rather than the deepest mystery. His approach proceeds through an analysis of the one entity for whom Being is an issue: Dasein (literally "being-there") — human existence.

Dasein is not a detached subject observing a world of objects. It is always already Being-in-the-world — embedded in a web of practical involvements, projects, and concerns. We don't first encounter bare objects and then add meaning; we encounter meaningful equipment (tools, rooms, paths) within a pre-existing totality of significance.

Dasein exists in two basic modes. Inauthenticity: losing oneself in "the They" (das Man) — doing what "one does," thinking what "one thinks," conforming to public norms. Authenticity: owning one's existence as finite, thrown into a situation not of one's choosing, projecting toward one's ownmost possibilities. The key moment is Being-toward-death: confronting mortality as one's ownmost, non-relational, certain, indefinite possibility. This individualizes Dasein and enables authentic existence.

The later Heidegger (after the "turn" or Kehre) moved from Dasein to Being itself, exploring how Being reveals and conceals itself in different historical epochs. Technology, for the later Heidegger, is not merely a set of tools but a way of revealing the world as "standing reserve" (Bestand) — everything reduced to a resource to be optimized. The danger of technology is that it occludes all other ways of encountering being.

Heidegger's legacy is shadowed by his involvement with National Socialism. He joined the Nazi party in 1933 and served as rector of Freiburg University. The extent to which his philosophy is compromised by his politics remains fiercely debated.`,
    keyIdeas: ["Dasein (being-there)", "Being-in-the-world", "Authenticity vs. das Man (the They)", "Being-toward-death", "The question of Being (Seinsfrage)", "The turn (Kehre)", "Technology as Gestell (enframing)"],
    keyWorks: ["Being and Time (1927)", "The Question Concerning Technology (1954)", "Letter on Humanism (1947)", "What Is Metaphysics? (1929)"],
    appears: ["metaphysics.ontology.substance", "epistemology.foundations.perception"],
  },
  sartre: {
    name: "Jean-Paul Sartre", years: "1905–1980", tradition: "Existentialism",
    bio: `Sartre was the most publicly visible philosopher of the twentieth century — novelist, playwright, political activist, and public intellectual. His Being and Nothingness (1943) is the major systematic work of existentialist philosophy.

Sartre distinguishes two modes of being. Being-in-itself (en-soi) is the being of things: solid, self-identical, complete. Being-for-itself (pour-soi) is the being of consciousness: always at a distance from itself, defined by negation ("I am not this chair"), perpetually incomplete.

Human existence is radically free. "Existence precedes essence" — there is no predetermined human nature. You exist first, then define yourself through choices and actions. This freedom is absolute and inescapable: even choosing not to choose is a choice. We are "condemned to be free."

Bad faith (mauvaise foi) is the attempt to deny this freedom. The waiter who performs his role too perfectly, the woman who pretends not to notice a man's sexual advances — both flee their freedom by treating themselves as fixed things. Bad faith is ubiquitous because freedom is terrifying: it means you are wholly responsible for what you are.

Being-for-others introduces the social dimension. The Other's gaze objectifies me — when someone looks at me, I become an object in their world, fixed with a nature I did not choose. "Hell is other people" (from No Exit) — not because others are cruel, but because they freeze my transcendence into a facticity.

In his later work, Critique of Dialectical Reason (1960), Sartre attempted to reconcile existentialism with Marxism, arguing that Marxism is "the unsurpassable philosophy of our time" but needs existentialism to restore the individual agent that structural analysis abstracts away.`,
    keyIdeas: ["Existence precedes essence", "Radical freedom", "Bad faith (mauvaise foi)", "Being-in-itself vs. being-for-itself", "Being-for-others and the gaze", "Nothingness and negation", "Condemned to be free"],
    keyWorks: ["Being and Nothingness (1943)", "Existentialism Is a Humanism (1946)", "Critique of Dialectical Reason (1960)", "No Exit (1944)", "Nausea (1938)"],
    appears: ["metaphysics.ontology.free_will", "ethics.normative.virtue_ethics"],
  },
  mill: {
    name: "John Stuart Mill", years: "1806–1873", tradition: "Empiricism / Liberalism",
    bio: `Mill received a famously intense education from his father, James Mill (a disciple of Bentham): Greek at three, Latin at eight, logic at twelve. He had a mental crisis at twenty, recovered through poetry and Romantic literature, and went on to become the most influential liberal thinker of the nineteenth century.

His Utilitarianism (1863) refined Bentham's hedonistic calculus. Mill introduced a distinction between higher and lower pleasures: intellectual, moral, and aesthetic pleasures are qualitatively superior to merely bodily ones. "It is better to be Socrates dissatisfied than a fool satisfied." A competent judge who has experienced both kinds of pleasure will always prefer the higher.

On Liberty (1859) defends individual freedom with the harm principle: the only legitimate reason for society to restrict an individual's liberty is to prevent harm to others. Self-regarding actions — what you think, say, read, consume, do with your own body — are sovereign. Mill argues for free speech not as an abstract right but on utilitarian grounds: suppressed opinions may be true, may contain partial truth, or may sharpen true opinions through contest.

Mill was also a pioneer of feminist philosophy. The Subjection of Women (1869), co-authored with Harriet Taylor Mill, argued that the legal subordination of women was a relic of brute force masquerading as natural order, and that equality would benefit society as a whole.

In epistemology, Mill championed a thoroughgoing empiricism: even mathematics and logic are ultimately generalizations from experience, not a priori truths. This radical position was challenged by Frege and remains controversial.`,
    keyIdeas: ["Utilitarianism with higher and lower pleasures", "The harm principle", "Defense of free speech and individuality", "Empiricism about mathematics and logic", "Feminist philosophy", "The tyranny of the majority"],
    keyWorks: ["Utilitarianism (1863)", "On Liberty (1859)", "A System of Logic (1843)", "The Subjection of Women (1869)"],
    appears: ["ethics.normative.consequentialism", "political.power.liberty", "epistemology.foundations.empiricism"],
  },
  marx: {
    name: "Karl Marx", years: "1818–1883", tradition: "Political / Continental",
    bio: `Marx's thought begins with Hegel's dialectic, "stood on its head": the driving force of history is not Spirit but material conditions — modes of production, class relations, economic structures. Ideas, laws, religions, and philosophies are part of a superstructure determined by the economic base.

Historical materialism traces human history through stages defined by their mode of production: primitive communism, ancient slave society, feudalism, capitalism, and (projected) socialism and communism. Each stage contains internal contradictions — between forces of production (technology, labor) and relations of production (who owns what) — that eventually generate revolutionary transformation.

Capitalism's central contradiction: it socializes production (workers cooperate in factories) while privatizing ownership (capitalists appropriate the surplus value created by labor). Workers are alienated from their labor (it belongs to the capitalist), from the product of their labor (it's sold for profit, not for use), from other workers (competition replaces solidarity), and from their species-being (their creative, productive human nature).

Commodity fetishism describes how social relations between people appear as relations between things. The market presents commodities as having inherent value, obscuring the human labor that produced them. Money, capital, and markets seem to operate by their own natural laws, when in reality they are human creations that serve particular class interests.

Marx's influence is incalculable — on philosophy, economics, sociology, political movements, and the actual course of twentieth-century history. Whether his predictions about capitalism's collapse were wrong or merely premature remains hotly debated.`,
    keyIdeas: ["Historical materialism", "Alienation", "Commodity fetishism", "Class struggle as the engine of history", "Base and superstructure", "Surplus value and exploitation", "Species-being"],
    keyWorks: ["Capital, Volume I (1867)", "The Communist Manifesto (1848, with Engels)", "Economic and Philosophical Manuscripts (1844)", "The German Ideology (1846)", "Grundrisse (1857–58)"],
    appears: ["political.justice.social_contract", "political.power.liberty"],
  },
  rawls: {
    name: "John Rawls", years: "1921–2002", tradition: "Political Liberalism",
    bio: `Rawls' A Theory of Justice (1971) is the most important work of political philosophy in the twentieth century. It revived social contract theory and set the terms for subsequent debate.

The device is the original position: rational agents choose principles of justice from behind a "veil of ignorance" — not knowing their race, sex, class, talents, conception of the good, or place in society. Rawls argues they would choose two principles: (1) each person has an equal right to the most extensive basic liberties compatible with similar liberties for all; (2) social and economic inequalities are permissible only if they benefit the least advantaged members of society (the difference principle) and are attached to positions open to all under fair equality of opportunity.

The maximin strategy explains the reasoning: behind the veil, you'd maximize the minimum position, because you might end up there. This is not mere risk aversion — it reflects the moral arbitrariness of natural talents and social position. No one deserves their intelligence, family wealth, or country of birth.

Political Liberalism (1993) revised the framework: in a pluralistic society, people hold irreconcilably different comprehensive doctrines (religious, philosophical, moral). The principles of justice must be freestanding — justifiable from within an "overlapping consensus" of reasonable comprehensive doctrines, without relying on any particular one.

Rawls' work provoked responses from every direction: libertarians (Nozick), communitarians (Sandel, MacIntyre, Taylor), feminists (Okin), and global justice theorists (Pogge, Beitz).`,
    keyIdeas: ["The original position and veil of ignorance", "Two principles of justice", "The difference principle", "Justice as fairness", "Political liberalism and overlapping consensus", "Reflective equilibrium"],
    keyWorks: ["A Theory of Justice (1971)", "Political Liberalism (1993)", "Justice as Fairness: A Restatement (2001)", "The Law of Peoples (1999)"],
    appears: ["political.justice.social_contract", "ethics.normative.deontology"],
  },
  foucault: {
    name: "Michel Foucault", years: "1926–1984", tradition: "Continental / Post-structuralism",
    bio: `Foucault's work traces the historical construction of concepts that seem natural: madness, criminality, sexuality, knowledge itself. His method — first "archaeology," then "genealogy" — reveals that the categories through which we understand ourselves are products of specific historical configurations of power and knowledge.

Madness and Civilization (1961) argues that "madness" was constructed through the "great confinement" of the seventeenth century, when the mad, the poor, and the idle were institutionalized together. What counts as insanity is not a timeless medical fact but a shifting boundary drawn by power.

Discipline and Punish (1975) traces the transformation from spectacular public punishment (execution, torture) to the modern disciplinary society of prisons, schools, hospitals, and factories. Bentham's Panopticon — a prison designed so inmates never know when they're being watched — is the architectural metaphor for modern power: surveillance produces "docile bodies" that internalize discipline and regulate themselves.

Power/knowledge is Foucault's central concept: power and knowledge are inseparable. Every claim to knowledge is also an exercise of power (defining what counts as true, normal, sane). And power is productive — it doesn't just repress but creates subjects, identities, and truths. Power is not held by individuals or classes but circulates through networks, institutions, and practices.

The History of Sexuality (1976–84) challenged the "repressive hypothesis" — the idea that sexuality was repressed by Victorian morality and liberated in the twentieth century. In fact, Foucault argues, the Victorian era saw an explosion of discourse about sex: confessional practices, medical categorization, legal regulation. "Sexuality" itself is a modern construct — a way of organizing desire, identity, and truth around the axis of sex.

Late Foucault turned to "technologies of the self" — practices by which individuals shape their own subjectivity. His studies of ancient Greek and Roman "care of the self" (askēsis, parrhēsia) suggested an ethics of self-fashioning distinct from both Christian morality and modern disciplinary norms.`,
    keyIdeas: ["Power/knowledge", "Genealogy and archaeology", "Disciplinary society and the Panopticon", "Biopower and biopolitics", "Discourse and episteme", "Technologies of the self", "The repressive hypothesis"],
    keyWorks: ["Discipline and Punish (1975)", "The History of Sexuality, 3 vols. (1976–84)", "The Order of Things (1966)", "Madness and Civilization (1961)", "The Archaeology of Knowledge (1969)"],
    appears: ["political.power.liberty", "ethics.metaethics.moral_realism"],
  },
  husserl: {
    name: "Edmund Husserl", years: "1859–1938", tradition: "Phenomenology",
    bio: `Husserl founded phenomenology — the systematic study of the structures of consciousness as experienced from the first-person perspective. His rallying cry was "To the things themselves!" (Zu den Sachen selbst!) — meaning: set aside theoretical presuppositions and describe what actually appears to consciousness.

The phenomenological reduction (epochē) is the method: "bracket" all assumptions about whether the objects of experience exist independently of consciousness. What remains is the pure phenomenon — the object as it is given to consciousness. Phenomenology studies the invariant structures of this givenness.

The key discovery is intentionality (inherited from Brentano): every conscious act is directed toward an object. Consciousness is always consciousness of something — a perception is a perception of a tree, a desire is a desire for water. Even hallucinations have intentional objects. This means consciousness is not a container but a relation.

Husserl distinguished noesis (the act of consciousness — perceiving, judging, imagining) from noema (the object as intended — the perceived, the judged, the imagined). Phenomenology studies the correlation between them.

In his later work, especially The Crisis of European Sciences (1936), Husserl introduced the concept of the Lifeworld (Lebenswelt) — the pre-theoretical, everyday world of lived experience that science abstracts from and presupposes. The crisis of European culture, Husserl argued, stems from science's forgetting of its own roots in the lifeworld.`,
    keyIdeas: ["Phenomenological reduction (epochē)", "Intentionality", "Noesis and noema", "The Lifeworld (Lebenswelt)", "Eidetic variation", "Transcendental ego"],
    keyWorks: ["Logical Investigations (1900–01)", "Ideas Pertaining to a Pure Phenomenology (1913)", "Cartesian Meditations (1931)", "The Crisis of European Sciences (1936)"],
    appears: ["epistemology.foundations.perception", "metaphysics.mind_body.consciousness"],
  },
  beauvoir: {
    name: "Simone de Beauvoir", years: "1908–1986", tradition: "Existentialism / Feminism",
    bio: `Beauvoir's The Second Sex (1949) is one of the most influential works of feminist philosophy. Its central claim — "One is not born, but rather becomes, a woman" — distinguishes biological sex from the social construction of femininity.

Drawing on existentialist philosophy, Beauvoir argues that woman has been constructed as "the Other" — defined always in relation to man, who is the default Subject. Man is the essential, woman the inessential. This is not biology but situation: women's subordination is maintained by myths, institutions, education, and economic dependence.

Beauvoir analyzes how the myth of the "eternal feminine" — woman as passive, nurturing, mysterious, immanent — serves to deny women transcendence (the existentialist term for the capacity to project beyond one's given situation into the future through free action). Women are confined to immanence — repetitive domestic labor that produces nothing new.

Her Ethics of Ambiguity (1947) develops an existentialist ethics that takes seriously the ambiguity of human existence: we are simultaneously free subjects and embodied objects, transcendence and facticity. Genuine ethics requires willing one's own freedom and the freedom of others — oppression is wrong because it suppresses transcendence.

Beauvoir's intellectual partnership with Sartre is famous, but her philosophical contributions are increasingly recognized as independent and in some respects superior to his — particularly her attention to embodiment, social situation, and concrete lived experience.`,
    keyIdeas: ["Woman as Other", "One is not born, but becomes, a woman", "Situated freedom", "Transcendence vs. immanence", "The ethics of ambiguity", "Oppression as suppression of transcendence"],
    keyWorks: ["The Second Sex (1949)", "The Ethics of Ambiguity (1947)", "She Came to Stay (1943)", "The Mandarins (1954)"],
    appears: ["ethics.normative.virtue_ethics", "political.power.liberty"],
  },
  leibniz: {
    name: "Gottfried Wilhelm Leibniz", years: "1646–1716", tradition: "Rationalism",
    bio: `Leibniz was perhaps the last universal genius: philosopher, mathematician (he co-invented calculus independently of Newton), logician, diplomat, historian, and engineer. His philosophical system, developed across thousands of letters and short treatises, is among the most inventive in history.

The Monadology (1714) presents his mature metaphysics. Reality consists of infinitely many monads — simple, indivisible substances that are the true atoms of nature. Each monad is "windowless": it has no physical parts and cannot be causally affected by anything external. Yet each monad mirrors the entire universe from its own unique perspective, with varying degrees of clarity.

If monads don't interact, how does the appearance of causation arise? Through God's pre-established harmony: God created all monads to unfold in perfect synchrony, like perfectly coordinated clocks. When my monad "wills" my arm to rise and my arm-monads change accordingly, no causal interaction has occurred — both are following their pre-programmed scripts.

The principle of sufficient reason states that nothing exists without a reason. Why does this world exist rather than some other? Because God, as a perfectly rational being, chose the best of all possible worlds — the one that maximizes variety (perfection) while maintaining order. Voltaire mercilessly satirized this optimism in Candide.

Leibniz also anticipated modern logic and computing: his characteristica universalis envisioned a formal language in which all knowledge could be expressed, and his calculus ratiocinator a machine that could settle all disputes by calculation.`,
    keyIdeas: ["Monads", "Pre-established harmony", "Best of all possible worlds", "Principle of sufficient reason", "Identity of indiscernibles", "Characteristica universalis"],
    keyWorks: ["Monadology (1714)", "Discourse on Metaphysics (1686)", "Theodicy (1710)", "New Essays on Human Understanding (1765)"],
    appears: ["metaphysics.ontology.substance", "epistemology.foundations.rationalism", "metaphysics.mind_body.dualism"],
  },
  kierkegaard: {
    name: "Søren Kierkegaard", years: "1813–1855", tradition: "Existentialism",
    bio: `Kierkegaard is the father of existentialism, though he would have hated the label. Writing in Copenhagen under various pseudonyms — each representing a different existential standpoint — he attacked Hegel's system for swallowing the individual into abstraction.

Either/Or (1843) presents two ways of life: the aesthetic (living for pleasure, novelty, and the avoidance of boredom) and the ethical (living by commitment, duty, and continuity). Neither pseudonym "wins" — the reader must choose. Fear and Trembling (1843) introduces the religious: Abraham's willingness to sacrifice Isaac represents a "teleological suspension of the ethical" — a leap of faith that transcends universal moral law.

Kierkegaard identifies three stages of existence: the aesthetic, the ethical, and the religious. Movement between them is not rational progression (as Hegel would have it) but a qualitative leap — a passionate, non-rational decision that transforms one's entire existence.

The Concept of Anxiety (1844) provides an existential analysis of anxiety (Angst): not fear of any particular thing, but the dizzying awareness of freedom itself — the vertigo of infinite possibility. Anxiety is "the dizziness of freedom." It is simultaneously the precondition for authentic selfhood and the temptation to flee into conformity and self-deception.

Subjectivity is truth — not that facts don't matter, but that existential truths (about how to live, what to commit to, who to be) can only be appropriated through passionate, personal engagement. No amount of objective knowledge can settle the question of how to exist.`,
    keyIdeas: ["Three stages of existence (aesthetic, ethical, religious)", "The leap of faith", "Anxiety as the dizziness of freedom", "Subjectivity is truth", "Critique of Hegelian system", "Indirect communication and pseudonyms"],
    keyWorks: ["Either/Or (1843)", "Fear and Trembling (1843)", "The Concept of Anxiety (1844)", "The Sickness Unto Death (1849)", "Concluding Unscientific Postscript (1846)"],
    appears: ["metaphysics.ontology.free_will", "ethics.normative.virtue_ethics"],
  },
  aquinas: {
    name: "Thomas Aquinas", years: "1225–1274", tradition: "Medieval / Scholasticism",
    bio: `Aquinas achieved the greatest synthesis of Aristotelian philosophy and Christian theology, creating a system so influential that it became the official philosophy of the Catholic Church.

The Summa Theologiae, his masterwork (left unfinished at his death), proceeds by the scholastic method: for each question, he states objections, gives a contrary authority, presents his own position, and replies to each objection. It covers God's existence, nature, and attributes; creation; human nature; ethics; Christ; and the sacraments.

The Five Ways are five arguments for God's existence: from motion (there must be an unmoved mover), from efficient causation (there must be a first cause), from contingency (there must be a necessary being), from gradation (there must be a maximum of perfection), and from teleology (there must be an intelligence directing natural things toward their ends).

Aquinas' ethics is grounded in natural law: moral principles are grounded in human nature and discoverable by reason. The first principle of natural law is "good is to be done and pursued, and evil avoided." Specific precepts derive from this through reflection on human nature and its essential inclinations (self-preservation, reproduction, knowledge, social life).

His metaphysics makes a crucial distinction between essence and existence. In all created things, what a thing is (essence) is distinct from the fact that it is (existence). Only in God are essence and existence identical — God's essence is to exist. This makes God absolutely unique and the source of all other existence.`,
    keyIdeas: ["Five Ways (proofs of God's existence)", "Natural law theory", "Essence vs. existence", "Faith and reason as complementary", "Analogy of being", "The Summa method"],
    keyWorks: ["Summa Theologiae (1265–74)", "Summa Contra Gentiles (1259–65)", "De Ente et Essentia (1256)", "Commentary on Aristotle's Metaphysics"],
    appears: ["metaphysics.ontology.substance", "ethics.normative.deontology", "epistemology.foundations.rationalism"],
  },
  camus: {
    name: "Albert Camus", years: "1913–1960", tradition: "Existentialism / Absurdism",
    bio: `Camus grew up in poverty in French Algeria, lost his father in World War I before he could know him, and became one of the most celebrated writers and thinkers of the twentieth century, winning the Nobel Prize in Literature at 44.

The Myth of Sisyphus (1942) opens with what Camus calls "the only truly serious philosophical problem": suicide. If life is absurd — if the human need for meaning collides with a universe that offers none — should we kill ourselves? Camus says no. But not because life has hidden meaning. Rather, one must acknowledge the absurd and live in defiance of it.

The absurd is not in the world alone, nor in the human mind alone, but in the confrontation between our desperate need for clarity, meaning, and purpose, and the world's unreasonable silence. Three responses are possible: physical suicide (ending the confrontation by ending life), philosophical suicide (escaping through religious or philosophical "leaps" that deny the absurd), or revolt (maintaining the tension, living fully without hope of resolution).

Camus chooses revolt. Sisyphus, condemned to push a boulder up a hill for eternity only to watch it roll back down, is the absurd hero. "One must imagine Sisyphus happy" — not because his task is meaningful but because he owns his fate.

The Rebel (1951) extends the analysis to political revolt: rebellion is born from the encounter with injustice and absurdity, but must be limited by human solidarity. Camus broke with Sartre and the Marxist left over this: revolution that sacrifices present humans for a future utopia becomes murder justified by abstraction.`,
    keyIdeas: ["The Absurd", "Philosophical vs. physical suicide", "Revolt as response to absurdity", "Sisyphus as absurd hero", "Limits of rebellion", "Solidarity over ideology"],
    keyWorks: ["The Myth of Sisyphus (1942)", "The Stranger (1942)", "The Plague (1947)", "The Rebel (1951)", "The Fall (1956)"],
    appears: ["metaphysics.ontology.free_will", "ethics.normative.virtue_ethics"],
  },
  berkeley: {
    name: "George Berkeley", years: "1685–1753", tradition: "Empiricism / Idealism",
    bio: `Berkeley pushed Locke's empiricism to its radical conclusion: if all we ever experience are ideas, then the notion of a material substance existing behind our ideas is both unwarranted and unintelligible. To be is to be perceived (esse est percipi).

Physical objects are nothing more than stable collections of ideas in minds. The table in your room when you leave isn't "material substance" persisting unperceived — it continues to exist because God perpetually perceives everything. Berkeley's idealism was intended not as paradox but as common sense purified of the materialist metaphysics that he saw as leading to atheism and skepticism.

Berkeley also launched a devastating critique of abstract ideas. Locke had claimed we form abstract ideas (like "triangle in general") by mentally stripping away particular features. Berkeley argues this is impossible: every idea is particular. You cannot imagine a triangle that is neither equilateral, isosceles, nor scalene. What we call "abstraction" is really selective attention to particular ideas.`,
    keyIdeas: ["Immaterialism (esse est percipi)", "Critique of abstract ideas", "God as guarantor of continued existence", "Critique of material substance"],
    keyWorks: ["A Treatise Concerning the Principles of Human Knowledge (1710)", "Three Dialogues Between Hylas and Philonous (1713)"],
    appears: ["epistemology.foundations.empiricism", "epistemology.foundations.perception", "metaphysics.ontology.substance"],
  },
  frege: {
    name: "Gottlob Frege", years: "1848–1925", tradition: "Analytic / Logic",
    bio: `Frege is the founder of modern mathematical logic and one of the founders of the analytic tradition in philosophy. His Begriffsschrift (1879) — "concept-script" — created a formal language capable of expressing complex logical structures that Aristotelian syllogistic could not handle: multiple quantifiers, relations, and nested structures.

His philosophical masterwork is the distinction between sense (Sinn) and reference (Bedeutung). "The morning star" and "the evening star" both refer to Venus (same Bedeutung) but present it differently (different Sinn). Sense is the "mode of presentation" of the referent. This distinction explains why "the morning star is the evening star" is informative while "the morning star is the morning star" is trivial — same reference, different senses.

Frege attempted to reduce all of arithmetic to logic (logicism) in his Grundgesetze der Arithmetik. This project was devastated by Russell's paradox (1902): Frege's Basic Law V, which allows the formation of a set for any well-defined property, is inconsistent. The set of all sets that don't contain themselves both does and doesn't contain itself.`,
    keyIdeas: ["Sense (Sinn) and reference (Bedeutung)", "Modern predicate logic", "Logicism (reducing math to logic)", "The concept/object distinction", "Compositionality of meaning"],
    keyWorks: ["Begriffsschrift (1879)", "The Foundations of Arithmetic (1884)", "On Sense and Reference (1892)", "Grundgesetze der Arithmetik (1893/1903)"],
    appears: ["logic.meaning.reference", "logic.formal.classical"],
  },
  russell: {
    name: "Bertrand Russell", years: "1872–1970", tradition: "Analytic",
    bio: `Russell's philosophical career spanned seven decades and touched nearly every area of philosophy. With Whitehead, he wrote Principia Mathematica (1910–13), attempting to derive all mathematics from pure logic. Though Gödel later showed this program could not fully succeed, it transformed the foundations of mathematics and logic.

Russell's theory of descriptions (1905) is one of analytic philosophy's landmark achievements. "The present King of France is bald" seems to be about a non-existent entity. Russell analyzed it as: there exists exactly one present King of France, and he is bald. Since no such entity exists, the statement is simply false — no mysterious non-existent objects required.

His logical atomism holds that the world consists of atomic facts, and that a logically perfect language would mirror this structure: each simple proposition corresponds to an atomic fact, and complex propositions are truth-functions of simple ones.

Russell's paradox — discovered in 1901 — revealed a contradiction in naive set theory and forced a reconstruction of the foundations of mathematics. The set of all sets that don't contain themselves: does it contain itself? If yes, then no; if no, then yes.`,
    keyIdeas: ["Theory of descriptions", "Logical atomism", "Russell's paradox", "Type theory", "Knowledge by acquaintance vs. description"],
    keyWorks: ["Principia Mathematica (1910–13, with Whitehead)", "On Denoting (1905)", "The Problems of Philosophy (1912)", "The Philosophy of Logical Atomism (1918)"],
    appears: ["logic.meaning.reference", "logic.formal.classical", "epistemology.problems.skepticism"],
  },
  schopenhauer: {
    name: "Arthur Schopenhauer", years: "1788–1860", tradition: "German Idealism / Pessimism",
    bio: `Schopenhauer took Kant's thing-in-itself and gave it a name: the Will. The world as we experience it (representation) is structured by space, time, and causality — these are, as Kant showed, contributions of the knowing subject. But the reality behind the veil of representation is a single, blind, purposeless, insatiable striving — the Will to live.

Every manifestation of nature — from gravity to animal instinct to human desire — is the Will objectifying itself at different levels. This yields pessimism: the Will drives us ceaselessly toward goals that, once achieved, produce only momentary satisfaction followed by new desire or boredom. Life oscillates between suffering and tedium.

Aesthetic contemplation offers temporary reprieve: in the experience of beauty (especially music, which Schopenhauer considered a direct expression of the Will), we become "pure subjects of knowing," momentarily freed from the Will's demands. But permanent liberation requires something more radical: the denial of the will-to-live through asceticism, compassion, and renunciation — a path Schopenhauer explicitly linked to Buddhist and Hindu practice.

Schopenhauer was the first major Western philosopher to engage seriously with Eastern thought. His influence on Nietzsche, Wagner, Wittgenstein, Freud, and Beckett was profound.`,
    keyIdeas: ["The Will as thing-in-itself", "World as Will and Representation", "Pessimism (life as suffering)", "Aesthetic contemplation as escape from Will", "Denial of the will-to-live", "Eastern synthesis (Buddhism and Hinduism)"],
    keyWorks: ["The World as Will and Representation (1818/1844)", "On the Basis of Morality (1840)", "Parerga and Paralipomena (1851)"],
    appears: ["metaphysics.ontology.substance", "aesthetics.beauty.beauty_judgment", "metaphysics.mind_body.consciousness"],
  },
  derrida: {
    name: "Jacques Derrida", years: "1930–2004", tradition: "Continental / Post-structuralism",
    bio: `Derrida's deconstruction is not destruction but a careful reading strategy that shows how texts undermine their own apparent logic. Every philosophical text relies on binary oppositions — speech/writing, presence/absence, nature/culture, reason/madness — and privileges one term while subordinating the other. Deconstruction reveals that the privileged term depends on the subordinated one.

Différance (with an 'a') is Derrida's neologism combining "to differ" and "to defer." Meaning is never fully present; it is always deferred through a chain of signifiers, and constituted by differences between signs. No word means anything in isolation — only through its differences from other words. The "transcendental signified" (a meaning that grounds all others and is itself self-present) is a myth.

"There is nothing outside the text" (il n'y a pas de hors-texte) is the most misunderstood claim in recent philosophy. Derrida does not deny that non-textual reality exists. He means that everything we encounter is always already mediated by systems of signification and interpretation — there is no uninterpreted "thing itself" we can access.

Derrida's later work engaged increasingly with ethics and politics: hospitality, friendship, justice, the gift. He argued that genuine justice is always "to come" (à venir) — it exceeds any existing law or calculation. This "messianic" structure (without messianism) opened deconstruction to religious and ethical readings.`,
    keyIdeas: ["Deconstruction", "Différance", "There is nothing outside the text", "Logocentrism and phonocentrism", "Supplement", "Trace", "Justice as 'to come'"],
    keyWorks: ["Of Grammatology (1967)", "Writing and Difference (1967)", "Margins of Philosophy (1972)", "Specters of Marx (1993)"],
    appears: ["logic.meaning.reference"],
  },
  hobbes: {
    name: "Thomas Hobbes", years: "1588–1679", tradition: "Political / Materialism",
    bio: `Hobbes' Leviathan (1651) is the foundational text of modern political philosophy. Written during the English Civil War, it begins from a materialist metaphysics (everything is matter in motion, including thought) and builds toward an absolutist political theory.

In the state of nature — life without government — there is no property, no justice, no injustice. Every person has a natural right to everything, including other people's bodies. Since desires conflict and resources are scarce, the result is a "war of all against all" in which life is "solitary, poor, nasty, brutish, and short."

Rational self-interest drives individuals to covenant with each other, surrendering their natural rights to a sovereign (an individual or assembly) who holds absolute power. The sovereign's authority is nearly unlimited because the alternative — civil war and the return to the state of nature — is always worse. The social contract is irrevocable: once made, citizens cannot reclaim their rights.

Hobbes' materialism was radical for his time: even the mind is material, consisting of motions in the brain caused by external objects pressing on the sense organs. This mechanistic psychology grounded his political philosophy but scandalized his contemporaries.`,
    keyIdeas: ["State of nature as war of all against all", "Social contract and the Leviathan", "Absolute sovereignty", "Materialism and mechanistic psychology", "Natural right to everything"],
    keyWorks: ["Leviathan (1651)", "De Cive (1642)", "De Corpore (1655)"],
    appears: ["political.justice.social_contract"],
  },
  rousseau: {
    name: "Jean-Jacques Rousseau", years: "1712–1778", tradition: "Political / Romanticism",
    bio: `Rousseau's thought is defined by a paradox: "Man is born free, and everywhere he is in chains." Civilization, which was supposed to improve humanity, has corrupted it. The state of nature, for Rousseau (unlike Hobbes), was not a war but a condition of innocent self-sufficiency. Inequality, competition, and amour-propre (the desire for others' esteem) are products of society, not nature.

The Social Contract (1762) attempts to reconcile freedom with political authority. Legitimate government is based on the general will — not the will of all (mere aggregation of private interests) but the genuine common good. Citizens who obey the general will are free because they obey a law they have given themselves. This is "civil freedom" — superior to the "natural freedom" of the state of nature.

Rousseau's Emile (1762) is a treatise on education: children should learn through experience and nature, not rote instruction. His Confessions (1782) pioneered the modern autobiography.

Rousseau's influence on the French Revolution, Romanticism, democratic theory, progressive education, and the politics of authenticity is incalculable. He is both the prophet of participatory democracy and (his critics argue) of totalitarianism — the general will can be used to "force people to be free."`,
    keyIdeas: ["The general will", "Natural goodness corrupted by society", "Amour-propre vs. amour de soi", "Civil freedom through self-legislation", "The noble savage", "Education through nature"],
    keyWorks: ["The Social Contract (1762)", "Discourse on Inequality (1755)", "Emile (1762)", "Confessions (1782)"],
    appears: ["political.justice.social_contract", "political.power.liberty"],
  },
  nozick: {
    name: "Robert Nozick", years: "1938–2002", tradition: "Political / Libertarianism",
    bio: `Nozick's Anarchy, State, and Utopia (1974) is the most powerful philosophical defense of libertarianism and the most direct challenge to Rawls' A Theory of Justice.

Nozick argues that individuals have absolute rights — especially property rights — that constrain what the state may do. The minimal state, limited to protecting against force, theft, fraud, and enforcing contracts, is the most extensive state that can be justified. Any more extensive state — one that redistributes income, provides welfare, or regulates for the common good — necessarily violates individual rights.

His entitlement theory of justice holds that a distribution is just if it arose from just acquisitions and just transfers. Justice is historical, not patterned: it doesn't matter if the resulting distribution is equal, maximizes utility, or benefits the worst-off. What matters is whether people came to hold what they hold through legitimate means.

The Wilt Chamberlain argument is his most famous illustration: if a just initial distribution is rearranged by voluntary transactions (people freely paying to watch Chamberlain play), the result is just — even if it produces great inequality. Any attempt to maintain a particular distributional pattern requires continuous interference with people's free choices.`,
    keyIdeas: ["The minimal state", "Entitlement theory of justice", "Self-ownership", "The Wilt Chamberlain argument", "Side constraints on action"],
    keyWorks: ["Anarchy, State, and Utopia (1974)", "Philosophical Explanations (1981)", "The Examined Life (1989)"],
    appears: ["political.justice.social_contract", "political.power.liberty"],
  },
  singer: {
    name: "Peter Singer", years: "b. 1946", tradition: "Utilitarian / Applied Ethics",
    bio: `Singer is the most influential living utilitarian philosopher and a pioneer of applied ethics. His Animal Liberation (1975) launched the modern animal rights movement by arguing that the capacity for suffering, not species membership, is the morally relevant criterion. Speciesism — privileging human interests simply because they are human — is morally analogous to racism and sexism.

His preference utilitarianism holds that the right action is the one that best satisfies the preferences of all affected beings — including non-human animals. This yields radical conclusions: factory farming is one of the great moral catastrophes in history; affluent people have a strong obligation to donate to effective charities saving lives in extreme poverty; and in some cases, infanticide of severely disabled newborns may be morally permissible.

Singer's "Famine, Affluence, and Morality" (1972) argues that if we can prevent great suffering without sacrificing anything of comparable moral importance, we ought to do so. The distinction between letting die and killing, between charity and duty, largely dissolves under this principle.

His work on effective altruism has shaped a global movement applying evidence and reason to doing the most good possible with available resources.`,
    keyIdeas: ["Animal liberation and anti-speciesism", "Preference utilitarianism", "Effective altruism", "The drowning child analogy", "The expanding circle of moral concern"],
    keyWorks: ["Animal Liberation (1975)", "Practical Ethics (1979)", "The Life You Can Save (2009)", "The Most Good You Can Do (2015)"],
    appears: ["ethics.normative.consequentialism"],
  },
};

// ─── TOPIC ENTRIES DATABASE ──────────────────────────────────
const DATA = {
  metaphysics: {
    label: "Metaphysics", icon: "◆",
    desc: "The study of the fundamental nature of reality — what exists, what it is like, and how it hangs together.",
    subtopics: {
      ontology: {
        label: "Ontology",
        desc: "What exists? What are the basic categories of being?",
        entries: {
          substance: {
            title: "Substance & Being", summary: "What is the most fundamental kind of thing?",
            body: `The concept of substance sits at the heart of Western metaphysics. {Aristotle} defined it as that which is neither said of nor present in a subject — the ultimate subject of predication. His {hylomorphism|concept:hylomorphism} holds that every substance is a composite of matter (hyle) and form (morphe).

{Descartes} radically simplified the picture: exactly two kinds of substance — thinking substance (res cogitans) and extended substance (res extensa). This bifurcation created the {mind-body problem|metaphysics.mind_body.dualism} that haunted subsequent philosophy.

{Spinoza} took the logic of substance to its extreme. If a substance is self-caused and self-explanatory, there can only be one: God or Nature (Deus sive Natura). Everything we encounter is a mode of this single infinite substance.

{Leibniz} rejected both Cartesian {dualism|metaphysics.mind_body.dualism} and Spinozist monism. Reality consists of infinitely many simple substances — {monads|concept:monads} — each a windowless mirror of the universe.

In the twentieth century, {Quine|philosopher:quine} challenged the very notion of substance, arguing that ontological commitments are relative to our best scientific theories. {Heidegger}, from the continental side, argued that the Western obsession with substance had obscured the more fundamental {question of Being|concept:seinsfrage}.`,
            keyThinkers: ["aristotle", "descartes", "spinoza", "leibniz", "heidegger"],
            related: ["metaphysics.ontology.universals", "metaphysics.mind_body.dualism"],
            keyWorks: [{ author: "Aristotle", work: "Metaphysics", year: "~350 BCE" }, { author: "Spinoza", work: "Ethics", year: "1677" }],
          },
          universals: {
            title: "The Problem of Universals", summary: "Do properties like 'redness' or 'justice' exist independently of particular things?",
            body: `When we say two roses are both red, does 'redness' exist as something over and above the particular roses? This is the {problem of universals|concept:universals} — one of the oldest and most persistent in philosophy.

{Plato}'s {Theory of Forms|concept:forms} gives the strongest realist answer: universals exist as perfect, eternal, mind-independent entities in a transcendent realm. Particular red things participate in the Form of Redness.

{Aristotle} rejected the separate existence of Forms but remained a realist: universals exist, but only as instantiated in particular substances. There is no Redness floating free.

Medieval nominalists, especially William of Ockham, denied that universals exist at all. Only particular things exist; 'redness' is just a name (nomen) we apply to similar things.

The debate continues. David Armstrong's scientific realism treats universals as real constituents of states of affairs. Trope theory offers a middle path: each instance of redness is a particular (a 'trope'), and resemblance among tropes explains universality without positing a single shared entity.`,
            keyThinkers: ["plato", "aristotle"],
            related: ["metaphysics.ontology.substance", "epistemology.foundations.rationalism"],
            keyWorks: [{ author: "Plato", work: "Phaedo; Republic", year: "~380 BCE" }, { author: "Armstrong", work: "Universals and Scientific Realism", year: "1978" }],
          },
          free_will: {
            title: "Free Will & Determinism", summary: "Are our choices genuinely free, or determined by prior causes?",
            body: `If every event is caused by prior events, then every human decision was determined before we were born. Can we be free? Can we be morally responsible?

{Hard determinism|concept:hard_determinism} says no: determinism is true and incompatible with {free will|concept:free_will}. {Spinoza} and many modern neuroscientists take this view. The subjective feeling of choice is an illusion produced by ignorance of causes.

{Libertarian free will|concept:libertarian_free_will} (not the political kind) insists we do have genuine, undetermined choices. {Kant} argued that as rational agents, we belong to the noumenal realm where we are free. Agent causation theories hold that persons initiate causal chains without being determined.

{Compatibilism|concept:compatibilism} — the dominant position among contemporary philosophers — argues that free will and determinism are compatible. {Hume} defined liberty as acting according to one's desires without external constraint. Harry Frankfurt refined this: you are free when your first-order desires align with your {second-order desires|concept:second_order_desires}.

P.F. Strawson shifted the debate by arguing that our practices of holding people responsible — resentment, gratitude, moral indignation — are constitutive of what 'free will' means. Whether determinism is metaphysically true is beside the point.`,
            keyThinkers: ["spinoza", "kant", "hume"],
            related: ["metaphysics.causation.causation_theories", "ethics.metaethics.moral_realism"],
            keyWorks: [{ author: "Frankfurt", work: "Freedom of the Will and the Concept of a Person", year: "1971" }, { author: "Strawson", work: "Freedom and Resentment", year: "1962" }],
          },
          existence: {
            title: "Existence & Nothingness", summary: "Why is there something rather than nothing?",
            body: `Leibniz posed what he called "the first question which should rightly be asked": Why is there something rather than nothing? This question sits at the boundary of metaphysics and theology.

{Leibniz} answered with the {principle of sufficient reason|concept:psr}: nothing exists without a reason. The sufficient reason for the world as a whole must lie outside the world — in a necessary being (God) whose essence includes existence.

{Heidegger} treated the question differently. In "What Is Metaphysics?" (1929), he argued that the experience of Angst (anxiety) reveals Nothingness — not as a thing but as the condition against which beings stand out. The question "Why is there something rather than nothing?" is the fundamental question of metaphysics.

{Sartre} developed a phenomenological ontology centered on the distinction between being-in-itself (en-soi) — the solid, self-identical being of objects — and being-for-itself (pour-soi) — the being of consciousness, which is always "nihilating," always at a distance from itself. Consciousness introduces nothingness into the world.

Contemporary cosmology has given the question new urgency. Some physicists argue that "nothing" is unstable — quantum fluctuations in a vacuum can produce something from nothing. But philosophers ask: why these laws? Why a quantum vacuum rather than genuine nothingness?`,
            keyThinkers: ["leibniz", "heidegger", "sartre"],
            related: ["metaphysics.ontology.substance", "metaphysics.causation.causation_theories"],
            keyWorks: [{ author: "Heidegger", work: "What Is Metaphysics?", year: "1929" }, { author: "Sartre", work: "Being and Nothingness", year: "1943" }],
          },
        },
      },
      mind_body: {
        label: "Philosophy of Mind", desc: "What is the mind? How does it relate to the body?",
        entries: {
          dualism: {
            title: "Mind-Body Dualism", summary: "The view that mind and body are fundamentally different kinds of substance.",
            body: `{Descartes}' substance dualism is the classic formulation: the mind (res cogitans) is unextended and thinking; the body (res extensa) is extended and non-thinking. They are really distinct.

But if mind and body are utterly different, how do they interact? This is the {interaction problem|concept:interaction_problem}. Princess Elisabeth of Bohemia pressed {Descartes} on it in their correspondence, and his answers — involving the pineal gland — were widely recognized as inadequate.

{Occasionalism|concept:occasionalism} (Malebranche) solved the problem by denying interaction: God intervenes on every occasion. {Leibniz}'s {pre-established harmony|concept:pre_established_harmony} similarly denied real interaction.

{Property dualism|concept:property_dualism}, a modern weakening, grants that there is only one kind of substance (physical) but insists that mental properties — {consciousness|metaphysics.mind_body.consciousness}, {qualia|concept:qualia}, {intentionality|concept:intentionality} — are genuinely non-physical properties of physical brains. David Chalmers' {zombie argument|concept:zombies} is designed to show that consciousness cannot be explained by physical properties alone.

{Epiphenomenalism|concept:epiphenomenalism} concedes that physical events cause mental events, but denies that mental events cause anything physical. Consciousness is a byproduct — like the steam from a locomotive that does no work.`,
            keyThinkers: ["descartes", "leibniz"],
            related: ["metaphysics.mind_body.physicalism", "metaphysics.mind_body.consciousness", "metaphysics.ontology.substance"],
            keyWorks: [{ author: "Descartes", work: "Meditations on First Philosophy", year: "1641" }, { author: "Chalmers", work: "The Conscious Mind", year: "1996" }],
          },
          physicalism: {
            title: "Physicalism & Materialism", summary: "Everything that exists is physical, including the mind.",
            body: `{Physicalism|concept:physicalism} holds that everything is physical — or, at minimum, supervenes on the physical. There are no non-physical substances, properties, or forces.

{Identity theory|concept:identity_theory} makes the strongest claim: mental states are identical with brain states. Pain just is C-fiber firing. This is a contingent, empirical identity, like 'water is H₂O.'

{Functionalism|concept:functionalism} weakened the identity claim: mental states are defined by their functional roles — causal relations to inputs, outputs, and other mental states. Pain is whatever plays the pain-role. This allows for {multiple realizability|concept:multiple_realizability}: aliens with different biochemistry could have genuine pain.

{Eliminative materialism|concept:eliminativism} (the Churchlands) argues that folk-psychological categories — beliefs, desires, intentions — are part of a radically false theory. As neuroscience matures, these concepts will be eliminated, not reduced.

The {hard problem of consciousness|metaphysics.mind_body.consciousness} (Chalmers) poses the deepest challenge: even if we explain every cognitive function, why is there subjective experience at all? Physicalists respond variously: Daniel Dennett denies the hard problem is real; others pursue {higher-order theories|concept:hot}, {global workspace theory|concept:gwt}, or {integrated information theory|concept:iit}.`,
            keyThinkers: ["hume", "wittgenstein"],
            related: ["metaphysics.mind_body.dualism", "metaphysics.mind_body.consciousness"],
            keyWorks: [{ author: "Putnam", work: "The Nature of Mental States", year: "1967" }, { author: "Dennett", work: "Consciousness Explained", year: "1991" }],
          },
          consciousness: {
            title: "Consciousness", summary: "What is subjective experience, and how does it arise?",
            body: `Consciousness is at once the most familiar thing in the world and the most mysterious. How does electrochemical activity give rise to the felt quality of seeing red or hearing music?

Thomas Nagel's "What Is It Like to Be a Bat?" (1974) crystallized the problem: there is something it is like to be a bat. No amount of objective neuroscience tells you what echolocation feels like from the inside. Subjectivity resists third-person explanation.

Frank Jackson's {knowledge argument|concept:knowledge_argument} uses Mary, a neuroscientist raised in a black-and-white room. She knows everything physical about color vision — but when she sees red for the first time, she learns something new. {Physicalism|metaphysics.mind_body.physicalism}, Jackson concluded, must be incomplete.

{Global Workspace Theory|concept:gwt} (Baars, Dehaene) identifies consciousness with information broadcast widely across the brain. {Integrated Information Theory|concept:iit} (Tononi) identifies consciousness with integrated information (Φ) — implying {panpsychism|concept:panpsychism}.

{Higher-order theories|concept:hot} (Rosenthal, Graziano) argue that a mental state is conscious when it is the object of a higher-order representation. Graziano's {Attention Schema Theory|concept:ast} holds that the brain constructs a simplified model of its own attention processes.

The question remains radically open. Whether consciousness is emergent, intrinsic to matter, or an illusion is one of the deepest unsettled questions in philosophy and science.`,
            keyThinkers: ["descartes", "husserl", "heidegger"],
            related: ["metaphysics.mind_body.physicalism", "metaphysics.mind_body.dualism", "epistemology.foundations.perception"],
            keyWorks: [{ author: "Nagel", work: "What Is It Like to Be a Bat?", year: "1974" }, { author: "Chalmers", work: "Facing Up to the Problem of Consciousness", year: "1995" }, { author: "Tononi", work: "Integrated Information Theory", year: "2004" }],
          },
        },
      },
      causation: {
        label: "Causation & Time", desc: "What is causation? What is time?",
        entries: {
          causation_theories: {
            title: "Theories of Causation", summary: "What does it mean for one event to cause another?",
            body: `{Hume}'s {regularity theory|concept:regularity_theory} holds that causation is nothing but constant conjunction: A causes B means events of type A are always followed by events of type B. We never observe causal "power" — just patterns. The necessity we feel is projected by the mind.

{Counterfactual theories|concept:counterfactual_causation} (David Lewis) define causation in terms of what would have happened otherwise: A caused B means if A hadn't occurred, B wouldn't have occurred either.

{Interventionist theories|concept:interventionism} (Woodward) define causes in terms of manipulation: X causes Y if intervening to change X would change Y. This connects naturally with scientific methodology.

Process theories (Salmon, Dowe) identify causation with the transmission of conserved quantities (energy, momentum) along continuous causal processes.

The problem of {overdetermination|concept:overdetermination} arises when multiple causes are each sufficient. If two assassins simultaneously shoot the target, each shot fatal alone, what caused the death? {Preemption|concept:preemption} cases are even trickier.`,
            keyThinkers: ["hume", "kant"],
            related: ["metaphysics.ontology.free_will", "epistemology.foundations.empiricism"],
            keyWorks: [{ author: "Hume", work: "A Treatise of Human Nature", year: "1739" }, { author: "Lewis", work: "Causation", year: "1973" }],
          },
        },
      },
    },
  },
  epistemology: {
    label: "Epistemology", icon: "◇",
    desc: "The study of knowledge — its nature, sources, scope, and limits.",
    subtopics: {
      foundations: {
        label: "Sources of Knowledge", desc: "Where does knowledge come from?",
        entries: {
          rationalism: {
            title: "Rationalism", summary: "Reason, not experience, is the primary source of knowledge.",
            body: `Rationalists hold that significant knowledge comes from reason alone, independent of sensory experience. The paradigm cases are mathematics and logic.

{Plato}'s doctrine of {recollection|concept:anamnesis} (anamnesis) holds that the soul knew the {Forms|concept:forms} before being embodied. Learning is remembering.

{Descartes} built his entire epistemology on the {cogito|concept:cogito} — a truth reached by pure reason, surviving radical doubt. From this foundation, he derived God's existence and the reliability of {clear and distinct ideas|concept:clear_distinct}.

{Leibniz} distinguished {truths of reason|concept:truths_of_reason} (necessary, knowable a priori) from truths of fact (contingent, known a posteriori). Crucially, he argued for {innate ideas|concept:innate_ideas}: the mind is not a blank slate but a block of marble with veins that predispose it toward certain truths.

{Kant} synthesized rationalism and {empiricism|epistemology.foundations.empiricism}: knowledge requires both concepts (contributed by the mind) and intuitions (contributed by experience). The {categories of the understanding|concept:categories} — causality, substance, unity — are not learned from experience but make experience possible.

Chomsky's nativism provides a modern analogue: the structure of grammar is too complex and universal to be learned from impoverished data. Something like innate linguistic knowledge must be built in.`,
            keyThinkers: ["plato", "descartes", "leibniz", "kant"],
            related: ["epistemology.foundations.empiricism", "metaphysics.ontology.universals"],
            keyWorks: [{ author: "Descartes", work: "Meditations on First Philosophy", year: "1641" }, { author: "Leibniz", work: "New Essays on Human Understanding", year: "1765" }],
          },
          empiricism: {
            title: "Empiricism", summary: "All knowledge derives from sensory experience.",
            body: `Empiricists hold that the mind at birth is a {tabula rasa|concept:tabula_rasa} — a blank slate — and that all substantive knowledge comes through the senses.

{Locke} distinguished two sources of ideas: sensation (external experience) and reflection (the mind's awareness of its own operations). He denied {innate ideas|concept:innate_ideas} by pointing out that children lack the supposedly universal knowledge rationalists claimed was innate.

{Berkeley} pushed empiricism further: if all we ever experience are ideas, what grounds belief in a material world behind them? His {immaterialism|concept:immaterialism} holds that {to be is to be perceived|concept:esse_est_percipi}.

{Hume} radicalized the project. Restricting knowledge to "impressions" and "ideas," he argued that {causation|metaphysics.causation.causation_theories}, the {self|concept:bundle_self}, and the external world cannot be grounded in experience. The {problem of induction|concept:problem_of_induction} — we cannot rationally justify the belief that the future will resemble the past — remains devastating.

{Logical positivism|concept:logical_positivism} (the Vienna Circle) gave empiricism its most rigorous formulation: the meaning of a statement is its method of verification. Any claim not verifiable by observation or true by definition is literally meaningless. Quine later undermined the {analytic-synthetic distinction|concept:analytic_synthetic} that positivism depended on.`,
            keyThinkers: ["locke", "berkeley", "hume"],
            related: ["epistemology.foundations.rationalism", "epistemology.problems.skepticism"],
            keyWorks: [{ author: "Locke", work: "Essay Concerning Human Understanding", year: "1689" }, { author: "Hume", work: "An Enquiry Concerning Human Understanding", year: "1748" }],
          },
          perception: {
            title: "Perception", summary: "How does sensory experience relate to reality?",
            body: `Naive (direct) realism holds that we perceive physical objects directly as they are. But it struggles with illusions and the variability of perception.

{Representationalism|concept:representationalism} (indirect realism) interposes mental representations between perceiver and world. {Locke}'s distinction between {primary qualities|concept:primary_qualities} (in objects: shape, extension) and {secondary qualities|concept:secondary_qualities} (in minds: color, taste) is a form of this. The worry: the {veil of perception|concept:veil_of_perception} problem.

{Phenomenalism|concept:phenomenalism} ({Mill}) tries to dissolve the problem: physical objects just are permanent possibilities of sensation.

{Disjunctivism|concept:disjunctivism} (McDowell) offers a radical alternative: veridical perception and hallucination are fundamentally different kinds of mental state.

{Enactivism|concept:enactivism} (Varela, Thompson, Noë) rejects the framework of internal representations. Perception is not passive reception but active exploration — a skillful bodily engagement with the environment. This connects to {Merleau-Ponty|philosopher:merleau_ponty}'s {phenomenology of perception|concept:phenomenology_perception} and {embodied cognition|concept:embodied_cognition}.`,
            keyThinkers: ["locke", "berkeley", "husserl"],
            related: ["metaphysics.mind_body.consciousness", "epistemology.foundations.empiricism"],
            keyWorks: [{ author: "Noë", work: "Action in Perception", year: "2004" }, { author: "McDowell", work: "Mind and World", year: "1994" }],
          },
        },
      },
      problems: {
        label: "Central Problems", desc: "The great challenges of epistemology.",
        entries: {
          skepticism: {
            title: "Skepticism", summary: "Can we know anything at all?",
            body: `Skepticism questions whether knowledge is possible. Ancient {Pyrrhonism|concept:pyrrhonism} (Sextus Empiricus) practiced suspension of judgment (epochē) on all non-evident matters.

{Descartes} weaponized skepticism methodologically. His {evil demon hypothesis|concept:evil_demon} was designed not to establish skepticism but to find what survives it: the {cogito|concept:cogito}.

The {brain-in-a-vat|concept:brain_in_vat} scenario modernizes {Descartes}: what if you're a brain being fed simulated experiences? Hilary Putnam argued this scenario is self-refuting: if "brain in a vat" means anything different in vat-language, the hypothesis cannot be coherently stated from within.

{Hume}'s {problem of induction|concept:problem_of_induction} is perhaps the most devastating skeptical argument: every justification of induction either begs the question or appeals to induction itself.

{Contextualism|concept:contextualism} (DeRose, Lewis) offers a pragmatic response: the standards for "knowledge" shift with context. In everyday life, you know you have hands. In a philosophy seminar, perhaps you don't. Both can be correct.`,
            keyThinkers: ["descartes", "hume", "russell"],
            related: ["epistemology.foundations.empiricism", "epistemology.foundations.rationalism"],
            keyWorks: [{ author: "Descartes", work: "Meditations", year: "1641" }, { author: "Putnam", work: "Reason, Truth and History", year: "1981" }],
          },
          justification: {
            title: "Justification & Truth", summary: "What makes a belief justified, and what is truth?",
            body: `The classical definition of knowledge — justified true belief — raises the question: what makes a belief justified?

{Foundationalism|concept:foundationalism} holds that some beliefs are self-justifying (basic beliefs) and all others rest on them. For {Descartes}, the {cogito|concept:cogito} was bedrock. For empiricists, foundational beliefs are reports of immediate sensory experience.

{Coherentism|concept:coherentism} denies foundations: beliefs are justified by coherence with other beliefs. Justification is holistic, like mutual support of strands in a web. The worry: a perfectly coherent fairy tale is still false.

{Reliabilism|concept:reliabilism} (Goldman) shifts focus: a belief is justified if produced by a reliable cognitive process — good vision, sound reasoning, properly functioning memory.

{Gettier|concept:gettier_problem}'s 1963 paper shattered the JTB analysis with counterexamples: cases of justified true belief that clearly aren't knowledge, because justification and truth connect only by luck.

As for truth: {correspondence theory|concept:correspondence_truth} says truth is agreement between proposition and reality. {Coherence theory|concept:coherence_truth} says truth is coherence within a belief system. {Pragmatist theory|concept:pragmatist_truth} ({Mill}, James, Dewey) says truth is what works. {Deflationism|concept:deflationism} argues 'true' adds nothing: "Snow is white" is true iff snow is white.`,
            keyThinkers: ["descartes", "hume", "kant"],
            related: ["epistemology.problems.skepticism", "epistemology.foundations.rationalism"],
            keyWorks: [{ author: "Gettier", work: "Is Justified True Belief Knowledge?", year: "1963" }, { author: "Goldman", work: "What Is Justified Belief?", year: "1979" }],
          },
        },
      },
    },
  },
  ethics: {
    label: "Ethics", icon: "◈",
    desc: "How should we live? What makes actions right or wrong?",
    subtopics: {
      normative: {
        label: "Normative Ethics", desc: "Systematic theories of right action.",
        entries: {
          virtue_ethics: {
            title: "Virtue Ethics", summary: "The good life is about character, not rules.",
            body: `Virtue ethics, rooted in {Aristotle}, holds that the fundamental question is not "What should I do?" but "What kind of person should I be?" The focus is on character — stable dispositions (virtues) that enable human flourishing ({eudaimonia|concept:eudaimonia}).

For {Aristotle}, virtues are means between extremes: courage between cowardice and rashness; generosity between miserliness and profligacy. Virtues are acquired through practice. The {phronimos|concept:phronimos} (person of practical wisdom) perceives the right action without relying on abstract rules.

The {Stoics|concept:stoicism} modified virtue ethics: virtue alone is sufficient for happiness. External goods are "preferred indifferents." This radicalizes {Aristotle}, who thought external goods were necessary for the good life.

Modern virtue ethics was revived by Elizabeth Anscombe's "Modern Moral Philosophy" (1958), arguing that rule-based ethics are incoherent without a framework of human nature. Alasdair MacIntyre's After Virtue (1981) argued for recovering the Aristotelian tradition of virtues embedded in social practices.

{Philippa Foot|concept:philippa_foot} developed a naturalistic virtue ethics grounding virtues in facts about human nature, while {Martha Nussbaum|concept:nussbaum} combined Aristotelian virtue theory with the {capability approach|concept:capabilities} to address global justice.`,
            keyThinkers: ["aristotle", "aquinas"],
            related: ["ethics.normative.deontology", "ethics.normative.consequentialism"],
            keyWorks: [{ author: "Aristotle", work: "Nicomachean Ethics", year: "~340 BCE" }, { author: "MacIntyre", work: "After Virtue", year: "1981" }],
          },
          deontology: {
            title: "Deontology", summary: "Morality is about duty and rules, not consequences.",
            body: `Deontological ethics holds that some actions are intrinsically right or wrong, regardless of consequences. The rightness of an action depends on whether it conforms to a moral rule or duty.

{Kant}'s moral philosophy is the paradigm. The {categorical imperative|concept:categorical_imperative}: "Act only according to that maxim by which you can at the same time will that it should become a universal law." Lying is wrong because a universal law of lying is self-contradictory.

{Kant}'s second formulation — treat humanity, in yourself or others, always as an end and never merely as a means — grounds human dignity. Persons have absolute worth as rational agents capable of moral self-legislation.

W.D. Ross offered a pluralistic deontology: multiple {prima facie duties|concept:prima_facie} (fidelity, gratitude, justice, beneficence, non-maleficence) that can conflict. When they do, judgment determines which is most pressing.

{Contractualism|concept:contractualism} (T.M. Scanlon): an action is wrong if it violates principles that no one could reasonably reject as a basis for general agreement. This grounds morality in mutual recognition among persons.

The standard objection: deontology can demand terrible results. Must you tell the murderer where your friend is hiding? {Kant} bit this bullet; most deontologists since have not.`,
            keyThinkers: ["kant", "rawls", "aquinas"],
            related: ["ethics.normative.virtue_ethics", "ethics.normative.consequentialism"],
            keyWorks: [{ author: "Kant", work: "Groundwork of the Metaphysics of Morals", year: "1785" }, { author: "Scanlon", work: "What We Owe to Each Other", year: "1998" }],
          },
          consequentialism: {
            title: "Consequentialism", summary: "Actions are right insofar as they produce good outcomes.",
            body: `{Consequentialism|concept:consequentialism} judges actions solely by their outcomes. The most developed form is {utilitarianism|concept:utilitarianism}.

Jeremy Bentham's hedonistic utilitarianism: the greatest happiness of the greatest number. He proposed a "felicific calculus" to quantify pleasure.

{Mill} refined Bentham: pleasures differ in quality, not just quantity. "It is better to be Socrates dissatisfied than a fool satisfied." Intellectual pleasures are qualitatively superior.

{Act utilitarianism|concept:act_utilitarianism}: in each situation, do whatever maximizes total utility. {Rule utilitarianism|concept:rule_utilitarianism}: follow rules whose general adoption would maximize utility. The distinction matters: act utilitarianism might justify punishing an innocent; rule utilitarianism would not.

{Singer|philosopher:singer}'s {preference utilitarianism|concept:preference_utilitarianism} shifts from pleasure/pain to preference satisfaction, extending moral consideration to all sentient beings — including non-human animals. Factory farming, on this view, is one of the great moral catastrophes of our time.

Derek Parfit's Reasons and Persons (1984) revealed deep paradoxes in consequentialism, including the {repugnant conclusion|concept:repugnant_conclusion}: for any population of very happy people, there is a much larger population of barely-happy people whose total utility is greater.

Standard objections: {utilitarianism|concept:utilitarianism} is too demanding, ignores justice and rights, and requires impossible calculations.`,
            keyThinkers: ["mill", "singer"],
            related: ["ethics.normative.deontology", "ethics.normative.virtue_ethics"],
            keyWorks: [{ author: "Mill", work: "Utilitarianism", year: "1863" }, { author: "Singer", work: "Practical Ethics", year: "1979" }, { author: "Parfit", work: "Reasons and Persons", year: "1984" }],
          },
        },
      },
      metaethics: {
        label: "Metaethics", desc: "What is the nature and status of moral claims?",
        entries: {
          moral_realism: {
            title: "Moral Realism vs. Anti-Realism", summary: "Are moral facts real features of the world?",
            body: `{Moral realism|concept:moral_realism} holds that moral statements express objective truths. "Torture is wrong" is true the way "water is H₂O" is true.

Non-naturalist realism (G.E. Moore, Parfit) insists moral properties are real but {sui generis|concept:sui_generis} — not reducible to natural properties. Moore's {open question argument|concept:open_question}: for any natural property N, it always makes sense to ask "X is N, but is it good?" — showing 'good' is not identical to any natural property.

{Error theory|concept:error_theory} (J.L. Mackie) grants that moral statements purport to describe objective facts — but denies any such facts exist. All moral claims are systematically false. Morality is a useful fiction.

{Expressivism|concept:expressivism} (Ayer, Blackburn, Gibbard) denies moral statements are truth-apt at all. "Torture is wrong" expresses an attitude of disapproval. Simon Blackburn's {quasi-realism|concept:quasi_realism} tries to earn back the trappings of realism within an expressivist framework.

{Constructivism|concept:moral_constructivism} ({Rawls}, Korsgaard) holds that moral facts are constructed by rational agents through idealized procedures of deliberation. Morality is constituted by practical reason itself.

{Nietzsche}'s {genealogy of morals|concept:genealogy} provides a different kind of anti-realism: our moral concepts have historical origins in power, resentment, and social control. Understanding this genealogy doesn't refute morality but transforms our relationship to it.`,
            keyThinkers: ["nietzsche", "kant", "hume"],
            related: ["ethics.normative.deontology", "epistemology.problems.justification"],
            keyWorks: [{ author: "Mackie", work: "Ethics: Inventing Right and Wrong", year: "1977" }, { author: "Parfit", work: "On What Matters", year: "2011" }],
          },
        },
      },
    },
  },
  political: {
    label: "Political Philosophy", icon: "◉",
    desc: "What justifies political authority? How should society be organized?",
    subtopics: {
      justice: {
        label: "Justice & Rights", desc: "What does a just society look like?",
        entries: {
          social_contract: {
            title: "Social Contract Theory", summary: "Political authority rests on agreement among the governed.",
            body: `Social contract theory holds that legitimate political authority derives from a (real or hypothetical) agreement among individuals.

{Hobbes}' Leviathan paints the state of nature as "war of all against all" — life is "solitary, poor, nasty, brutish, and short." Rational self-interest drives surrender of freedoms to an absolute sovereign.

{Locke}'s Second Treatise is more optimistic: people have {natural rights|concept:natural_rights} to life, liberty, and property. Government exists by consent to protect these pre-existing rights. If it fails, {the people have a right to revolution|concept:right_of_revolution}.

{Rousseau}'s Social Contract: "Man is born free, and everywhere he is in chains." The {general will|concept:general_will} — not the aggregate of private interests but the genuine common good — is the basis of legitimate law.

{Rawls}' A Theory of Justice modernized contractualism: rational agents behind a "{veil of ignorance|concept:veil_of_ignorance}" would choose two principles: equal basic liberties for all, and inequalities arranged to benefit the least advantaged ({difference principle|concept:difference_principle}).

{Nozick} countered: a {minimal state|concept:minimal_state} is the only justified state. Any redistribution violates absolute {property rights|concept:property_rights}. Justice is historical — it depends on how holdings were acquired, not their distributional pattern.`,
            keyThinkers: ["hobbes", "locke", "rousseau", "rawls", "nozick"],
            related: ["ethics.normative.deontology", "political.power.liberty"],
            keyWorks: [{ author: "Hobbes", work: "Leviathan", year: "1651" }, { author: "Rawls", work: "A Theory of Justice", year: "1971" }, { author: "Nozick", work: "Anarchy, State, and Utopia", year: "1974" }],
          },
        },
      },
      power: {
        label: "Power & Authority", desc: "Who rules, and by what right?",
        entries: {
          liberty: {
            title: "Freedom & Liberty", summary: "What does it mean to be free?",
            body: `Isaiah Berlin's "Two Concepts of Liberty" (1958) drew the foundational distinction. {Negative liberty|concept:negative_liberty}: freedom from external interference. {Positive liberty|concept:positive_liberty}: freedom to — the capacity for self-mastery and rational self-direction.

{Mill}'s {harm principle|concept:harm_principle} defines the scope of negative liberty: your liberty extends until it harms another. The state should not interfere with self-regarding actions.

{Positive liberty|concept:positive_liberty}, Berlin warned, can become dangerous: if freedom is self-mastery, those who "truly know" what rational self-direction requires may feel justified in forcing others to be "free." {Rousseau}'s {general will|concept:general_will} and {Marx}'s true consciousness can both be weaponized this way.

{Republican liberty|concept:republican_liberty} (Philip Pettit) offers a third concept: freedom as non-domination. You are unfree not when someone interferes with you, but when someone has the capacity to interfere arbitrarily — even if they never exercise it. The slave with a kind master is still unfree.

Amartya Sen and Martha Nussbaum's {capability approach|concept:capabilities}: freedom means what people are actually able to do and be. Formal liberty is empty without substantive capabilities — education, health, political participation.

{Foucault} reframed the question entirely: freedom is not a possession but a practice, always exercised within and against networks of {power/knowledge|concept:power_knowledge}. Power is not merely repressive but productive — it creates the very subjects who then seek liberation.`,
            keyThinkers: ["mill", "rousseau", "marx", "foucault", "rawls", "nozick"],
            related: ["political.justice.social_contract", "ethics.normative.deontology"],
            keyWorks: [{ author: "Berlin", work: "Two Concepts of Liberty", year: "1958" }, { author: "Sen", work: "Development as Freedom", year: "1999" }],
          },
        },
      },
    },
  },
  aesthetics: {
    label: "Aesthetics", icon: "✦",
    desc: "What is beauty? What is art? What is the nature of aesthetic experience?",
    subtopics: {
      beauty: {
        label: "Beauty & Taste", desc: "Is beauty objective, subjective, or something else?",
        entries: {
          beauty_judgment: {
            title: "Judgments of Beauty", summary: "Is beauty in the object or the eye of the beholder?",
            body: `{Plato} treated beauty as an objective {Form|concept:forms} — the most visible and lovable, drawing the soul upward from physical beauty to Beauty itself.

{Hume}'s "Of the Standard of Taste" (1757): beauty is in the sentiment of the observer. Yet the ideal critic, with practice, delicacy, and freedom from prejudice, can identify works of enduring merit.

{Kant}'s Critique of Judgment offers the most influential analysis. Aesthetic judgments are subjective (they express pleasure) yet claim universal agreement. Beauty involves the free play of imagination and understanding. The judgment is "{disinterested|concept:disinterested_pleasure}" — not motivated by desire or utility.

{Schopenhauer} identified aesthetic experience as temporary escape from the {Will|concept:will_to_live}: in contemplation of beauty (especially music), we become "pure subjects of knowing," freed from desire.

Modern debates ask whether beauty is even central to aesthetics. Much modern art aims at the {sublime|concept:sublime}, the disturbing, or the conceptual. Arthur Danto argued that art after Duchamp's urinal is defined by art-world context and theoretical interpretation, not aesthetic properties.`,
            keyThinkers: ["plato", "hume", "kant", "schopenhauer"],
            related: ["aesthetics.art.definition", "epistemology.foundations.perception"],
            keyWorks: [{ author: "Kant", work: "Critique of Judgment", year: "1790" }, { author: "Danto", work: "The Transfiguration of the Commonplace", year: "1981" }],
          },
        },
      },
      art: {
        label: "Philosophy of Art", desc: "What is art?",
        entries: {
          definition: {
            title: "What Is Art?", summary: "The surprisingly difficult question of defining art.",
            body: `The {institutional theory|concept:institutional_theory} (Dickie): an artwork is an artifact upon which the artworld has conferred the status of candidate for appreciation. This explains Duchamp and Warhol but seems circular.

{Wittgenstein}'s influence suggests "art" may be a {family resemblance|concept:family_resemblance} concept — no single set of necessary and sufficient conditions.

Tolstoy defined art by its communicative function: art transmits emotion from artist to audience. R.G. Collingwood distinguished art proper (expression of emotion through imaginative exploration) from craft (skilled production of predetermined results).

The cluster theory (Berys Gaut) proposes that art is defined by a cluster of criteria: aesthetic properties, expressiveness, intellectual challenge, formal complexity, originality, skill, and belonging to a recognized art form. No single criterion is necessary; satisfying enough is sufficient.

{Heidegger}'s "The Origin of the Work of Art" offers a radically different approach: the artwork opens up a "world" (a horizon of meaning) while simultaneously setting forth the "earth" (the opaque, self-concealing materiality that resists complete intelligibility). Art is not representation or expression but a happening of truth.`,
            keyThinkers: ["wittgenstein", "heidegger", "plato", "kant"],
            related: ["aesthetics.beauty.beauty_judgment"],
            keyWorks: [{ author: "Collingwood", work: "The Principles of Art", year: "1938" }, { author: "Heidegger", work: "The Origin of the Work of Art", year: "1950" }],
          },
        },
      },
    },
  },
  logic: {
    label: "Logic & Language", icon: "⬡",
    desc: "The study of valid reasoning and the nature of meaning.",
    subtopics: {
      meaning: {
        label: "Philosophy of Language", desc: "How does language relate to reality?",
        entries: {
          reference: {
            title: "Reference & Meaning", summary: "How do words connect to the world?",
            body: `{Frege}'s distinction between {sense|concept:sinn} (Sinn) and {reference|concept:bedeutung} (Bedeutung) is foundational. "The morning star" and "the evening star" refer to Venus (same Bedeutung) but have different senses — different modes of presentation.

{Russell}'s {theory of descriptions|concept:theory_of_descriptions}: "The present King of France is bald" is not about a non-existent king — it is a complex quantified claim. Since no such entity exists, the sentence is simply false.

Saul Kripke's Naming and Necessity (1980) revolutionized the field. Proper names are not disguised descriptions but {rigid designators|concept:rigid_designators} — they refer to the same individual in every possible world. Names are fixed by an initial "baptism" and transmitted through a causal chain.

The late {Wittgenstein} abandoned his early picture theory for {meaning as use|concept:meaning_as_use}. Words get meaning from the {language games|concept:language_games} — social practices — in which they function.

Quine's "Two Dogmas of Empiricism" challenged the {analytic-synthetic distinction|concept:analytic_synthetic} and argued for the {indeterminacy of translation|concept:indeterminacy_of_translation}: there is no fact of the matter about what a speaker's words mean.

{Derrida}'s {différance|concept:differance} radicalizes the Saussurean insight: meaning is constituted by differences between signs and always deferred through chains of signifiers. No sign is self-present.`,
            keyThinkers: ["frege", "russell", "wittgenstein", "derrida"],
            related: ["logic.formal.classical", "epistemology.problems.justification"],
            keyWorks: [{ author: "Kripke", work: "Naming and Necessity", year: "1980" }, { author: "Quine", work: "Two Dogmas of Empiricism", year: "1951" }],
          },
        },
      },
      formal: {
        label: "Formal Logic", desc: "The structure of valid inference.",
        entries: {
          classical: {
            title: "Classical & Non-Classical Logics", summary: "From Aristotle's syllogisms to modern formal systems.",
            body: `{Aristotle}'s syllogistic was the first formal logic. It dominated for two millennia but could only handle a fragment of valid reasoning.

{Frege}'s Begriffsschrift (1879) created modern predicate logic — quantifiers, variables, truth functions — capable of expressing all of mathematics. This enabled {Russell} and Whitehead's Principia Mathematica.

Gödel's {incompleteness theorems|concept:incompleteness} (1931) shattered the hope of a complete formal foundation for mathematics. Any consistent formal system powerful enough to express arithmetic contains true statements it cannot prove. No such system can prove its own consistency.

Non-classical logics modify or reject classical principles. {Intuitionistic logic|concept:intuitionism} (Brouwer, Heyting) rejects the {law of excluded middle|concept:lem}: a statement is true only if there is a constructive proof. {Paraconsistent logics|concept:paraconsistency} tolerate contradictions without explosion. Many-valued logics add truth values between true and false.

{Modal logic|concept:modal_logic} adds operators for necessity and possibility. Kripke's {possible worlds|concept:possible_worlds} semantics: "necessarily P" means P is true in every possible world. This transformed metaphysics, ethics, and philosophy of language.`,
            keyThinkers: ["aristotle", "frege", "russell", "wittgenstein"],
            related: ["logic.meaning.reference", "epistemology.foundations.rationalism"],
            keyWorks: [{ author: "Frege", work: "Begriffsschrift", year: "1879" }, { author: "Gödel", work: "On Formally Undecidable Propositions", year: "1931" }],
          },
        },
      },
    },
  },
};

export { PHILOSOPHERS, DATA };
