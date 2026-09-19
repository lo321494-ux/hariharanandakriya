import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png.asset.json";

export function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("fhky-intro-seen")) return;
    setVisible(true);
    const timer = window.setTimeout(() => dismiss(), 2800);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    window.sessionStorage.setItem("fhky-intro-seen", "true");
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 650);
  };

  if (!visible) return null;

  return (
    <div className={`intro-splash ${leaving ? "intro-splash--leaving" : ""}`} role="dialog" aria-label="Fundación Hariharananda Kriya Yoga">
      <div className="intro-halo" aria-hidden="true" />
      <div className="intro-mark">
        <img src={logo.url} alt="Fundación Hariharananda Kriya Yoga" />
        <p>Fundación Hariharananda</p>
        <span>Kriya Yoga</span>
      </div>
      <Button variant="ghost" onClick={dismiss} className="intro-enter">
        Entrar
      </Button>
    </div>
  );
}