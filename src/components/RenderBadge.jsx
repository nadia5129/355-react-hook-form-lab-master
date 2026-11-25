import { useEffect, useRef } from "react";

function RenderBadge() {
  const count = useRef(0);
  const counted = useRef(null);
  const label = useRef(null);
  const thisRender = {};

  useEffect(() => {
    if (counted.current === thisRender) return;
    counted.current = thisRender;
    count.current += 1;
    label.current.textContent = `renders: ${count.current}`;
  });

  return <span className="render-badge" ref={label} />;
}

export default RenderBadge;
