import { useEffect, useState } from 'react';
import { Progress } from '@mantine/core';

export function ScrollProgress() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextValue = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setValue(Math.round(nextValue * 10) / 10);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <Progress value={value} size={2} radius={0} color="blue" className="scroll-progress" aria-label="Reading progress" />;
}
