
'use client';

import { useState, useEffect } from 'react';
import styles from './helperGetViewportSize.module.css';

export default function ViewPortSize() {
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });

  
useEffect(() => {
    // Nur im Client ausführen
    let width: number;
    let height: number;
    if (typeof window !== 'undefined') {
      // Handler für das Resize-Ereignis
      function handleResize() {
        // Fensterbreite und -höhe setzen
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Event-Listener hinzufügen
      window.addEventListener('resize', handleResize);

      // Initial die Fenstergröße setzen
      handleResize();

      // Event-Listener bei Aufräumarbeiten entfernen
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Deine Komponente mit der Viewport-Größe
  return (
    <div className={styles.showMe}>
      Viewport-Breite: {windowSize.width}px
      <br />
      Viewport-Höhe: {windowSize.height}px
    </div>
  );
}