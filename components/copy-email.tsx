'use client';

import { useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("");
  const clickTimer = useRef<number | null>(null);
  const statusTimer = useRef<number | null>(null);

  const showStatus = (message: string) => {
    setStatus(message);
    if (statusTimer.current) window.clearTimeout(statusTimer.current);
    statusTimer.current = window.setTimeout(() => setStatus(""), 2600);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      showStatus("Copied — double-click to email");
    } catch {
      showStatus("Select to copy — double-click to email");
    }
  };

  const openMail = () => {
    if (clickTimer.current) window.clearTimeout(clickTimer.current);
    clickTimer.current = null;
    showStatus("Opening mail app…");
    window.location.href = `mailto:${email}`;
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (clickTimer.current) window.clearTimeout(clickTimer.current);
    clickTimer.current = window.setTimeout(() => {
      clickTimer.current = null;
      void copyEmail();
    }, 240);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openMail();
    }
  };

  return (
    <span className="email-control">
      <a
        href={`mailto:${email}`}
        className="contact-email"
        onClick={handleClick}
        onDoubleClick={(event) => {
          event.preventDefault();
          openMail();
        }}
        onKeyDown={handleKeyDown}
        title="Click to copy. Double-click to open your mail app."
      >
        {email}
      </a>
      {status && <span className="email-status" role="status">{status}</span>}
    </span>
  );
}
