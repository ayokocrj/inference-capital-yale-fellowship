import React, { useRef, useEffect } from 'react';

// Advanced High-Performance Canvas for Neural Graphs and Radiation Waves
export const AdvancedNeuralCanvas = ({ isDarkSection = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Fallback to window dimensions if offsetWidth is 0 (prevents bug where nodes are trapped)
    let width = canvas.width = canvas.offsetWidth || window.innerWidth;
    let height = canvas.height = canvas.offsetHeight || window.innerHeight;

    const particles = [];
    const particleCount = 150; 
    const connectionDistance = 140;

    const nodeBaseColor = isDarkSection ? '0, 229, 255' : '10, 25, 47';
    const waveColor1 = isDarkSection ? 'rgba(0, 229, 255, 0.05)' : 'rgba(0, 82, 204, 0.03)';
    const waveColor2 = isDarkSection ? 'rgba(128, 90, 255, 0.03)' : 'rgba(10, 25, 47, 0.02)';

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 1.5 + 0.5
      });
    }

    let time = 0;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      time += 0.005; 
      ctx.clearRect(0, 0, width, height);

      // --- 1. DRAW RADIATION WAVES ---
      ctx.beginPath();
      for (let x = 0; x <= width; x += 20) {
        const y = height / 2 + Math.sin(x * 0.008 + time * 2) * 150 + Math.cos(x * 0.015 - time) * 80;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = waveColor1;
      ctx.lineWidth = 80;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      ctx.beginPath();
      for (let x = 0; x <= width; x += 20) {
        const y = height / 2 + Math.cos(x * 0.01 - time * 1.5) * 200 + Math.sin(x * 0.005 + time) * 100;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = waveColor2;
      ctx.lineWidth = 120;
      ctx.stroke();


      // --- 2. DRAW NEURAL GRAPH ---
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeBaseColor}, 0.8)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let distSq = dx * dx + dy * dy;

          if (distSq < connectionDistance * connectionDistance) {
            let dist = Math.sqrt(distSq);
            let opacity = 1 - (dist / connectionDistance);
            
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${nodeBaseColor}, ${opacity * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    render();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [isDarkSection]);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />;
};

// Premium Dense Neural Network Internal Structure Visualization (Deterministic Inference Version)
export const DenseNeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      const w = (parent?.clientWidth || window.innerWidth);
      const h = (parent?.clientHeight || 500);
      
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    resizeCanvas();
    
    const layersCount = [25, 45, 30, 40, 20]; 
    const nodes = layersCount.map(count => Array.from({length: count}).map(() => ({
      baseRadius: 2.5
    })));

    const numPackets = 120;
    const packets = [];
    for (let i = 0; i < numPackets; i++) {
      const path = [];
      for (let l = 0; l < layersCount.length; l++) {
        path.push(Math.floor(Math.random() * layersCount[l]));
      }
      packets.push({
        path,
        timeOffset: Math.random() * 0.8 - 0.4
      });
    }

    let time = 0;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      time += 0.02;
      
      const cycleLength = layersCount.length + 2;
      const activeLayer = time % cycleLength;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, width, height);

      const xPadding = 15;
      const drawWidth = width - xPadding * 2;
      const layerSpacing = drawWidth / (layersCount.length - 1);
      
      const yPadding = 40;
      const drawHeight = height - yPadding * 2;
      
      // 1. Draw Connections (Synapses)
      ctx.globalCompositeOperation = 'screen';
      
      for (let l = 0; l < layersCount.length - 1; l++) {
        const layerA = nodes[l];
        const layerB = nodes[l+1];
        
        const xA = xPadding + l * layerSpacing;
        const xB = xPadding + (l + 1) * layerSpacing;
        
        const ySpacingA = drawHeight / (layerA.length - 1 || 1);
        const ySpacingB = drawHeight / (layerB.length - 1 || 1);

        const distanceToSignal = Math.abs(activeLayer - (l + 0.5));
        const signalStrength = Math.max(0, 1 - distanceToSignal * 1.5); 

        for (let i = 0; i < layerA.length; i++) {
          const yA = yPadding + i * ySpacingA + (layerA.length === 1 ? drawHeight/2 : 0);
          
          for (let j = 0; j < layerB.length; j++) {
            const yB = yPadding + j * ySpacingB + (layerB.length === 1 ? drawHeight/2 : 0);
            
            const dist = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
            const maxDist = Math.sqrt(Math.pow(layerSpacing, 2) + Math.pow(drawHeight, 2));
            const distFactor = 1 - Math.pow(dist / maxDist, 2);

            let opacity = 0.01 * distFactor;
            
            if (signalStrength > 0) {
              opacity += (0.2 * signalStrength * distFactor);
            }

            if (opacity > 0.005) {
              ctx.beginPath();
              ctx.moveTo(xA, yA);
              ctx.lineTo(xB, yB); 
              
              const grad = ctx.createLinearGradient(xA, yA, xB, yB);
              grad.addColorStop(0, `rgba(0, 229, 255, ${opacity * 0.3})`);
              grad.addColorStop(0.5, `rgba(255, 255, 255, ${opacity})`);
              grad.addColorStop(1, `rgba(0, 229, 255, ${opacity * 0.3})`); 
              
              ctx.strokeStyle = grad;
              ctx.lineWidth = opacity > 0.1 ? 1.2 : 0.5;
              ctx.stroke();
            }
          }
        }
      }

      // 2. Draw Traveling Data Packets
      ctx.globalCompositeOperation = 'screen';
      packets.forEach(p => {
        const pTime = activeLayer + p.timeOffset;
        
        if (pTime >= 0 && pTime <= layersCount.length - 1) {
          const lA = Math.floor(pTime);
          const lB = Math.ceil(pTime);
          const t = pTime - lA;
          
          if (lA >= 0 && lB < layersCount.length) {
            const nodeA = p.path[lA];
            const nodeB = p.path[lB];
            
            const xA = xPadding + lA * layerSpacing;
            const xB = xPadding + lB * layerSpacing;
            
            const ySpacingA = drawHeight / (layersCount[lA] - 1 || 1);
            const ySpacingB = drawHeight / (layersCount[lB] - 1 || 1);
            
            const yA = yPadding + nodeA * ySpacingA + (layersCount[lA] === 1 ? drawHeight/2 : 0);
            const yB = yPadding + nodeB * ySpacingB + (layersCount[lB] === 1 ? drawHeight/2 : 0);
            
            const currX = xA + (xB - xA) * t;
            const currY = yA + (yB - yA) * t;
            
            let alpha = 1;
            if (pTime < 0.2) alpha = pTime / 0.2;
            if (pTime > layersCount.length - 1.2) alpha = (layersCount.length - 1 - pTime) / 0.2;

            ctx.beginPath();
            ctx.arc(currX, currY, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(0, 229, 255, ${alpha})`;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      });

      // 3. Draw Nodes
      ctx.globalCompositeOperation = 'source-over';
      for (let l = 0; l < layersCount.length; l++) {
        const layer = nodes[l];
        const x = xPadding + l * layerSpacing;
        const ySpacing = drawHeight / (layer.length - 1 || 1);
        
        const distanceToSignal = Math.abs(activeLayer - l);
        const pulse = Math.max(0, 1 - distanceToSignal * 2); 
        
        for (let i = 0; i < layer.length; i++) {
          const y = yPadding + i * ySpacing + (layer.length === 1 ? drawHeight/2 : 0);
          const node = layer[i];
          
          ctx.beginPath();
          ctx.arc(x, y, node.baseRadius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(10, 25, 47, 1)'; 
          ctx.fill();
          
          ctx.strokeStyle = `rgba(0, 229, 255, ${0.4 + pulse * 0.6})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          if (pulse > 0.1) {
             ctx.beginPath();
             ctx.arc(x, y, node.baseRadius * 0.6, 0, Math.PI * 2);
             ctx.fillStyle = `rgba(0, 229, 255, ${pulse})`;
             ctx.fill();
          }
        }
      }
    };

    render();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ display: 'block', position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
};
