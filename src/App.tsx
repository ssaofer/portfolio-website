import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { graphicProjects, projects, type Project, videoProjects } from "./data/projects";

type View = "universe" | "video" | "graphic" | "about" | "contact" | "detail";

const navigation: { label: string; view: View; position: string }[] = [
  { label: "VIDEO", view: "video", position: "node-video" }, { label: "GRAPHIC", view: "graphic", position: "node-graphic" },
  { label: "PROJECTS", view: "graphic", position: "node-projects" }, { label: "ABOUT", view: "about", position: "node-about" }, { label: "CONTACT", view: "contact", position: "node-contact" },
];

function ProjectTile({ project, onSelect, index }: { project: Project; onSelect: (p: Project) => void; index: number }) {
  return <button className={`project-tile tile-${index % 3}`} onClick={() => onSelect(project)}>
    <div className="project-media">{project.type === "video" ? <video src={project.video} muted preload="metadata" /> : <img src={project.thumbnail} alt={project.title} loading="lazy" />}{project.type === "video" && <span className="play"><Play size={16} fill="currentColor" /></span>}</div>
    <span className="mono">{String(index + 1).padStart(2, "0")} / {project.category}</span><strong>{project.title}</strong><ArrowUpRight size={18} />
  </button>;
}

export default function App() {
  const [view, setView] = useState<View>("universe"); const [selected, setSelected] = useState<Project | null>(null); const [ready, setReady] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setReady(true), 650); return () => clearTimeout(timer); }, []);
  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);
  const show = (next: View) => { setView(next); setSelected(null); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const select = (project: Project) => { setSelected(project); setView("detail"); window.scrollTo(0, 0); };
  if (!ready) return <div className="loader"><div><p className="mono">FANGYU.EXE</p><h1>LOADING<br />DIGITAL UNIVERSE...</h1><span>01 / INITIALIZING &nbsp; 02 / LOADING VISUALS &nbsp; 03 / ENTERING SPACE</span></div></div>;
  return <main className={`app view-${view}`}>
    <header><button className="brand" onClick={() => show("universe")}>FANGYU.EXE</button><div className="header-meta mono">LIU FANGYU <i /> CREATIVE PORTFOLIO</div><button className="sound mono">SOUND OFF</button></header>
    {view === "universe" && <section className="universe">
      <div className="grid" /><div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="hero-copy"><p className="eyebrow">VIDEO / GRAPHIC / CREATIVE</p><h1>FANGYU<span>.EXE</span></h1><p>A LITTLE UNIVERSE<br />OF MY IDEAS.</p></div>
      <div className="scene" aria-label="Interactive portfolio universe"><div className="ring ring-a" /><div className="ring ring-b" /><div className="ring ring-c" /><div className="pearl"><div className="pearl-shine" /></div><div className="spark s1">✦</div><div className="spark s2">✦</div>
        {navigation.map(n => <button key={n.label} className={`nav-node ${n.position}`} onClick={() => show(n.view)}><span>{n.label}</span><b>↗</b></button>)}</div>
      <p className="orbit-instruction mono">DRAG TO ORBIT <span>↓</span> SELECT A DESTINATION</p><button className="explore" onClick={() => show("video")}>EXPLORE <ArrowDownRight size={18} /></button>
    </section>}
    {(view === "video" || view === "graphic") && <section className="gallery"><div className="gallery-head"><button className="back mono" onClick={() => show("universe")}><ArrowLeft size={16} /> BACK TO UNIVERSE</button><p className="eyebrow">{view === "video" ? "MOVING IMAGE / SELECTED WORKS" : "DIGITAL EDITORIAL / SELECTED WORKS"}</p><h2>{view === "video" ? "VIDEO<br />ORBIT" : "GRAPHIC<br />FIELD"}</h2><p className="gallery-intro">A selected collection of {view === "video" ? "moving-image experiments" : "visual explorations"}.<br />Select a floating work to enter its case.</p></div><div className={`project-grid ${view}`}>{(view === "video" ? videoProjects : graphicProjects).map((p, i) => <ProjectTile key={p.id} project={p} onSelect={select} index={i} />)}</div></section>}
    {view === "about" && <section className="text-page"><button className="back mono" onClick={() => show("universe")}><ArrowLeft size={16} /> BACK TO UNIVERSE</button><p className="eyebrow">ABOUT ME / 01</p><h2>THE PERSON<br />BEHIND THE<br /><em>SCREEN.</em></h2><div className="about-grid"><p className="intro">LIU FANGYU<br /><br />VIDEO / GRAPHIC / CREATIVE / AI</p><p>[ADD BIO]<br /><br />[ADD EXPERIENCE]<br /><br />[ADD EDUCATION]</p><div className="formula"><span>STORYTELLING</span><span>VISUAL THINKING</span><span>BRAND SENSIBILITY</span><span>AI EXPLORATION</span><span>CREATIVE CURIOSITY</span></div></div></section>}
    {view === "contact" && <section className="text-page contact"><button className="back mono" onClick={() => show("universe")}><ArrowLeft size={16} /> BACK TO UNIVERSE</button><p className="eyebrow">CONTACT / 05</p><h2>LET'S CREATE<br /><em>SOMETHING.</em></h2><div className="contact-list"><a href="mailto:hello@example.com">EMAIL <ArrowUpRight /></a><a href="#placeholder">XIAOHONGSHU / INSTAGRAM <ArrowUpRight /></a><a href="#placeholder">BEHANCE / LINKEDIN <ArrowUpRight /></a></div></section>}
    {view === "detail" && selected && <section className="detail"><button className="back mono" onClick={() => show(selected.type === "video" ? "video" : "graphic")}><ArrowLeft size={16} /> BACK TO {selected.type.toUpperCase()} FIELD</button><div className="detail-heading"><p className="eyebrow">PROJECT {String(projects.indexOf(selected) + 1).padStart(2,"0")} / {selected.category}</p><h2>{selected.title}</h2><p>{selected.year}</p></div><div className="detail-info"><div><span>ROLE</span><p>{selected.role.join(" / ")}</p></div><div><span>TOOLS</span><p>{selected.tools.join(" / ")}</p></div><div><span>DESCRIPTION</span><p>{selected.description}</p></div></div>{selected.type === "video" ? <video className="detail-video" src={selected.video} controls preload="metadata" /> : <div className="detail-images">{selected.images.map(image => <img key={image} src={image} alt={selected.title} />)}</div>}<div className="detail-nav"><button onClick={() => show("universe")}>BACK TO UNIVERSE</button><button onClick={() => { const i = (projects.indexOf(selected) + 1) % projects.length; select(projects[i]); }}>NEXT PROJECT <ArrowRight size={17} /></button></div></section>}
    <div className="cursor-orb" />
  </main>;
}
