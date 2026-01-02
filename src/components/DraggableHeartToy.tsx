import { useState, useRef, useEffect } from 'react';
import Heart from '../imports/Heart';
import HandGesture from '../imports/75';

interface Position {
  x: number;
  y: number;
  id: number;
}

interface BurstHeart {
  x: number;
  y: number;
  angle: number;
  distance: number;
  id: number;
}


export function DraggableHeartToy() {
  const [isDragging, setIsDragging] = useState(false);
  const [heartPosition, setHeartPosition] = useState({ x: 48, y: 280 });
  const [trail, setTrail] = useState<Position[]>([]);
  const [burstHearts, setBurstHearts] = useState<BurstHeart[]>([]);
  const [isResetting, setIsResetting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const trailIdRef = useRef(0);
  const lastTrailPositionRef = useRef({ x: 0, y: 0 });
  const dragStartTimeRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartTimeRef.current = Date.now();
    lastTrailPositionRef.current = { x: e.clientX, y: e.clientY };
    setHasInteracted(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const x = e.clientX;
    const y = e.clientY;
    
    setHeartPosition({ x: x - 12, y: y - 12 });

   
    const dx = x - lastTrailPositionRef.current.x;
    const dy = y - lastTrailPositionRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 15) {
      setTrail(prev => [...prev, { x: x - 10, y: y - 10, id: trailIdRef.current++ }]);
      lastTrailPositionRef.current = { x, y };
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);

    
    const dragDuration = Date.now() - dragStartTimeRef.current;
    if (dragDuration > 100 && trail.length > 0) {
      createBurst();
    }

    
    setTimeout(() => {
      setIsResetting(true);
      setTimeout(() => {
        setTrail([]);
        setBurstHearts([]);
        setHeartPosition({ x: 48, y: 280 });
        setIsResetting(false);
      }, 600);
    }, 900);
  };

  const createBurst = () => {
    const burstCount = 24;
    const newBurstHearts: BurstHeart[] = [];

    for (let i = 0; i < burstCount; i++) {
      const angle = (Math.PI * 2 * i) / burstCount;
      const ringVariation = Math.random() * 0.3 + 0.85; // 0.85-1.15
      const distance = (120 + Math.random() * 80) * ringVariation;
      
      newBurstHearts.push({
        x: heartPosition.x + 12,
        y: heartPosition.y + 12,
        angle,
        distance,
        id: i
      });
    }

    setBurstHearts(newBurstHearts);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, trail.length]);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50"
      style={{ userSelect: 'none' }}
    >
      
      {trail.map((pos, index) => (
        <div
          key={pos.id}
          className="absolute"
          style={{
            left: pos.x,
            top: pos.y,
            width: '20px',
            height: '20px',
            opacity: isResetting ? 0 : 0.65 - (index / trail.length) * 0.2,
            transition: isResetting ? 'opacity 600ms ease-out' : 'none',
            pointerEvents: 'none'
          }}
        >
          <Heart />
        </div>
      ))}

    
      {burstHearts.map((heart) => {
        const targetX = heart.x + Math.cos(heart.angle) * heart.distance;
        const targetY = heart.y + Math.sin(heart.angle) * heart.distance;

        return (
          <div
            key={heart.id}
            className="absolute"
            style={{
              left: heart.x - 10,
              top: heart.y - 10,
              width: '20px',
              height: '20px',
              transform: `translate(${targetX - heart.x}px, ${targetY - heart.y}px) scale(0.8)`,
              opacity: isResetting ? 0 : 0.85,
              transition: isResetting 
                ? 'opacity 600ms ease-out' 
                : 'transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 800ms ease-out',
              pointerEvents: 'none'
            }}
          >
            <Heart />
          </div>
        );
      })}

      
      {!hasInteracted && (
        <div
          className="absolute flex items-center gap-2"
          style={{
            left: heartPosition.x - 36,
            top: heartPosition.y + 48,
            opacity: isResetting ? 0 : 1,
            transition: hasInteracted ? 'opacity 350ms ease-out' : 'left 400ms ease-out, top 400ms ease-out',
            pointerEvents: 'none',
            animation: 'gentle-float 3s ease-in-out infinite',
            zIndex: 1
          }}
        >
          <div 
            style={{
              width: '32px',
              height: '32px',
              opacity: 0.75
            }}
          >
            <HandGesture />
          </div>
          <span 
            className="font-['Inter',sans-serif] text-[13px] text-[#2a2a2a]"
            style={{
              letterSpacing: '0.01em',
              opacity: 0.8
            }}
          >
            Drag me
          </span>
        </div>
      )}

      
      <div
        className="absolute cursor-grab active:cursor-grabbing"
        style={{
          left: heartPosition.x,
          top: heartPosition.y,
          width: '24px',
          height: '24px',
          pointerEvents: 'auto',
          opacity: isResetting ? 0 : 1,
          transition: isResetting ? 'all 400ms ease-out' : isDragging ? 'none' : 'left 400ms ease-out, top 400ms ease-out, opacity 400ms ease-out',
          zIndex: 2
        }}
        onMouseDown={handleMouseDown}
      >
        <Heart />
      </div>
    </div>
  );
}