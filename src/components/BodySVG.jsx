import React from 'react';

export default function BodySVG({ layers, selectedPoint, onPointClick, gender }) {
  const show = (name) => layers[name];
  const isFemale = gender === 'female';

  const allPoints = [
    { id: 'GB20', cx: 100, cy: 50 },
    { id: 'ST11', cx: 90,  cy: 70 },
    { id: 'GB21', cx: 78,  cy: 80 }, { id: 'GB21', cx: 122, cy: 80 },
    { id: 'LI15', cx: 54,  cy: 88 }, { id: 'LI15', cx: 146, cy: 88 },
    { id: 'CV17', cx: 100, cy: 118 },
    { id: 'LI11', cx: 34,  cy: 174 }, { id: 'LI11', cx: 166, cy: 174 },
    { id: 'PC6',  cx: 32,  cy: 234 },
    { id: 'BL23', cx: 88,  cy: 176 }, { id: 'BL23', cx: 112, cy: 176 },
    { id: 'GB30', cx: 66,  cy: 216 }, { id: 'GB30', cx: 134, cy: 216 },
    { id: 'ST36', cx: 68,  cy: 382 }, { id: 'ST36', cx: 132, cy: 382 },
    { id: 'KD3',  cx: 58,  cy: 460 }, { id: 'KD3',  cx: 142, cy: 460 },
  ];

  const POINT_COLORS = {
    GB20:'#00d4ff', ST11:'#a78bfa', GB21:'#f87171', LI15:'#fbbf24',
    CV17:'#fb923c', LI11:'#34d399', PC6:'#60a5fa',  BL23:'#f87171',
    GB30:'#4ade80', ST36:'#fbbf24', KD3:'#818cf8',
  };

  return (
    <svg viewBox="0 0 200 520" style={{ width: '100%', maxHeight: '560px', display: 'block' }}
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="headGrad" cx="42%" cy="35%" r="60%">
          <stop offset="0%" stopColor={isFemale ? '#f0b896' : '#d4895a'} />
          <stop offset="60%" stopColor={isFemale ? '#d4906a' : '#b86a38'} />
          <stop offset="100%" stopColor={isFemale ? '#a86040' : '#8a4820'} />
        </radialGradient>
        <radialGradient id="torsoGrad" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor={isFemale ? '#e8a878' : '#cc7840'} />
          <stop offset="50%" stopColor={isFemale ? '#c8886a' : '#a85830'} />
          <stop offset="100%" stopColor={isFemale ? '#9a5838' : '#7a3818'} />
        </radialGradient>
        <radialGradient id="armGradL" cx="70%" cy="20%" r="70%">
          <stop offset="0%" stopColor={isFemale ? '#e0a080' : '#c87040'} />
          <stop offset="100%" stopColor={isFemale ? '#a06040' : '#804020'} />
        </radialGradient>
        <radialGradient id="armGradR" cx="30%" cy="20%" r="70%">
          <stop offset="0%" stopColor={isFemale ? '#e0a080' : '#c87040'} />
          <stop offset="100%" stopColor={isFemale ? '#a06040' : '#804020'} />
        </radialGradient>
        <radialGradient id="legGradL" cx="65%" cy="15%" r="70%">
          <stop offset="0%" stopColor={isFemale ? '#d89870' : '#c07040'} />
          <stop offset="100%" stopColor={isFemale ? '#9a5838' : '#7a3818'} />
        </radialGradient>
        <radialGradient id="legGradR" cx="35%" cy="15%" r="70%">
          <stop offset="0%" stopColor={isFemale ? '#d89870' : '#c07040'} />
          <stop offset="100%" stopColor={isFemale ? '#9a5838' : '#7a3818'} />
        </radialGradient>
        <radialGradient id="hairGrad" cx="50%" cy="20%" r="70%">
          <stop offset="0%" stopColor={isFemale ? '#5a3010' : '#2a1808'} />
          <stop offset="100%" stopColor={isFemale ? '#3a1a08' : '#180c00'} />
        </radialGradient>
        <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8d8b0" />
          <stop offset="50%" stopColor="#f5ecd0" />
          <stop offset="100%" stopColor="#d0c098" />
        </linearGradient>
        <radialGradient id="muscleRed" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ff9966" />
          <stop offset="100%" stopColor="#cc4422" />
        </radialGradient>
        <radialGradient id="muscleDark" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ff7744" />
          <stop offset="100%" stopColor="#aa3311" />
        </radialGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.5)" />
        </filter>
        <filter id="innerGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g filter="url(#softShadow)">
        {/* HEAD */}
        <ellipse cx="100" cy="36" rx="27" ry="31" fill="url(#headGrad)" />
        <ellipse cx="92" cy="26" rx="12" ry="10" fill="rgba(255,255,255,0.12)" />
        <ellipse cx="100" cy="60" rx="14" ry="5" fill="rgba(0,0,0,0.18)" />
        <ellipse cx="91" cy="38" rx="3.5" ry="2.5" fill="rgba(0,0,0,0.25)" />
        <ellipse cx="109" cy="38" rx="3.5" ry="2.5" fill="rgba(0,0,0,0.25)" />
        <ellipse cx="91" cy="37" rx="2" ry="1.5" fill="rgba(255,255,255,0.6)" />
        <ellipse cx="109" cy="37" rx="2" ry="1.5" fill="rgba(255,255,255,0.6)" />
        <path d="M96,46 Q100,49 104,46" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1" strokeLinecap="round" />
        <path d="M97,43 Q100,44.5 103,43" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
        <ellipse cx="73" cy="37" rx="4" ry="6" fill="url(#headGrad)" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
        <ellipse cx="127" cy="37" rx="4" ry="6" fill="url(#headGrad)" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />

        {/* HAIR */}
        {isFemale ? (
          <>
            <ellipse cx="100" cy="14" rx="27" ry="16" fill="url(#hairGrad)" />
            <path d="M73,20 Q68,35 70,55 Q72,65 76,70" fill="none" stroke="#3a1a08" strokeWidth="6" strokeLinecap="round" />
            <path d="M127,20 Q132,35 130,55 Q128,65 124,70" fill="none" stroke="#3a1a08" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="85" cy="12" rx="10" ry="6" fill="rgba(255,255,255,0.1)" />
          </>
        ) : (
          <path d="M74,22 Q74,10 100,8 Q126,10 126,22 Q118,14 100,13 Q82,14 74,22 Z" fill="url(#hairGrad)" />
        )}

        {/* NECK */}
        <path d="M88,63 Q87,74 88,82 L112,82 Q113,74 112,63 Z" fill="url(#torsoGrad)" />
        <path d="M91,63 Q91,74 91,82" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
        <path d="M109,63 Q109,74 109,82" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />

        {/* TORSO */}
        <path d="M62,78 Q54,100 53,132 Q52,170 56,194 L144,194 Q148,170 147,132 Q146,100 138,78 Z" fill="url(#torsoGrad)" />
        <ellipse cx="88" cy="96" rx="16" ry="12" fill="rgba(255,255,255,0.07)" />
        <ellipse cx="112" cy="96" rx="16" ry="12" fill="rgba(255,255,255,0.07)" />
        <line x1="100" y1="80" x2="100" y2="192" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
        {isFemale && (
          <>
            <ellipse cx="86" cy="108" rx="15" ry="13" fill="rgba(200,130,90,0.5)" />
            <ellipse cx="114" cy="108" rx="15" ry="13" fill="rgba(200,130,90,0.5)" />
            <ellipse cx="82" cy="104" rx="7" ry="5" fill="rgba(255,255,255,0.1)" />
            <ellipse cx="110" cy="104" rx="7" ry="5" fill="rgba(255,255,255,0.1)" />
          </>
        )}

        {/* SHOULDERS */}
        <ellipse cx="54" cy="92" rx="16" ry="13" fill="url(#armGradL)" />
        <ellipse cx="50" cy="88" rx="8" ry="5" fill="rgba(255,255,255,0.1)" />
        <ellipse cx="146" cy="92" rx="16" ry="13" fill="url(#armGradR)" />

        {/* ARMS */}
        <path d="M42,90 Q30,114 28,148 Q26,166 30,180 Q35,183 40,181 Q45,179 46,176 Q48,162 50,148 Q52,118 54,98 Z" fill="url(#armGradL)" />
        <path d="M36,105 Q33,130 34,158" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M158,90 Q170,114 172,148 Q174,166 170,180 Q165,183 160,181 Q155,179 154,176 Q152,162 150,148 Q148,118 146,98 Z" fill="url(#armGradR)" />

        {/* FOREARMS */}
        <path d="M29,180 Q24,204 24,228 Q24,244 28,252 Q33,255 38,253 Q43,251 44,247 Q46,240 46,228 Q46,204 42,180 Z" fill="url(#armGradL)" />
        <path d="M171,180 Q176,204 176,228 Q176,244 172,252 Q167,255 162,253 Q157,251 156,247 Q154,240 154,228 Q154,204 158,180 Z" fill="url(#armGradR)" />

        {/* HANDS */}
        <ellipse cx="35" cy="258" rx="10" ry="13" fill="url(#armGradL)" />
        <ellipse cx="32" cy="253" rx="5" ry="3" fill="rgba(255,255,255,0.1)" />
        <ellipse cx="165" cy="258" rx="10" ry="13" fill="url(#armGradR)" />

        {/* PELVIS */}
        <path d="M60,192 Q54,216 56,234 L144,234 Q146,216 140,192 Z" fill="url(#torsoGrad)" />
        <path d="M60,192 Q66,204 100,208 Q134,204 140,192" stroke="rgba(0,0,0,0.15)" strokeWidth="1" fill="none" />
        {isFemale && (
          <>
            <ellipse cx="62" cy="216" rx="14" ry="20" fill="rgba(200,140,100,0.35)" />
            <ellipse cx="138" cy="216" rx="14" ry="20" fill="rgba(200,140,100,0.35)" />
          </>
        )}

        {/* THIGHS */}
        <path d="M60,232 Q53,264 53,306 Q53,342 55,360 Q61,365 70,363 Q78,361 80,358 Q83,340 83,306 Q83,264 80,232 Z" fill="url(#legGradL)" />
        <path d="M62,250 Q60,300 62,350" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M140,232 Q147,264 147,306 Q147,342 145,360 Q139,365 130,363 Q122,361 120,358 Q117,340 117,306 Q117,264 120,232 Z" fill="url(#legGradR)" />

        {/* KNEES */}
        <ellipse cx="70" cy="364" rx="14" ry="12" fill="url(#legGradL)" />
        <ellipse cx="66" cy="360" rx="6" ry="4" fill="rgba(255,255,255,0.12)" />
        <ellipse cx="130" cy="364" rx="14" ry="12" fill="url(#legGradR)" />

        {/* SHINS */}
        <path d="M57,375 Q53,410 53,446 Q53,464 57,472 Q63,475 70,473 Q75,471 76,468 Q78,460 78,446 Q78,410 76,375 Z" fill="url(#legGradL)" />
        <path d="M143,375 Q147,410 147,446 Q147,464 143,472 Q137,475 130,473 Q125,471 124,468 Q122,460 122,446 Q122,410 124,375 Z" fill="url(#legGradR)" />

        {/* FEET */}
        <path d="M55,472 Q50,476 48,480 Q48,486 54,488 Q62,490 70,488 Q76,486 78,482 Q78,476 74,473 Z" fill="url(#legGradL)" />
        <path d="M145,472 Q150,476 152,480 Q152,486 146,488 Q138,490 130,488 Q124,486 122,482 Q122,476 126,473 Z" fill="url(#legGradR)" />
      </g>

      {/* SKELETON */}
      {show('skeleton') && (
        <g opacity="0.92" filter="url(#innerGlow)">
          <ellipse cx="100" cy="34" rx="21" ry="25" fill="none" stroke="url(#boneGrad)" strokeWidth="1.8" />
          <path d="M86,55 L88,62 M114,55 L112,62" stroke="#d4c090" strokeWidth="1.2" />
          <path d="M88,62 Q100,67 112,62" fill="none" stroke="#d4c090" strokeWidth="1.2" />
          {[72,82,92,102,112,122,132,142,152,162,172,182].map((y, i) => (
            <g key={i}>
              <rect x="97" y={y} width="6" height="7" rx="1.5" fill="url(#boneGrad)" />
              {i > 0 && <line x1="100" y1={y} x2="100" y2={y-3} stroke="#c8b080" strokeWidth="1" />}
            </g>
          ))}
          <path d="M78,76 Q89,80 100,79" fill="none" stroke="url(#boneGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M100,79 Q111,80 122,76" fill="none" stroke="url(#boneGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M100,82 L100,160" stroke="url(#boneGrad)" strokeWidth="3" strokeLinecap="round" />
          {[0,1,2,3,4,5,6].map(i => (
            <g key={i}>
              <path d={`M100,${88+i*10} Q${78-i},${90+i*10} ${68-i},${96+i*10}`} fill="none" stroke="#d4c090" strokeWidth={1.4-i*0.06} opacity={0.82-i*0.07} />
              <path d={`M100,${88+i*10} Q${122+i},${90+i*10} ${132+i},${96+i*10}`} fill="none" stroke="#d4c090" strokeWidth={1.4-i*0.06} opacity={0.82-i*0.07} />
            </g>
          ))}
          <path d="M68,202 Q62,220 64,232 Q82,238 100,238 Q118,238 136,232 Q138,220 132,202" fill="none" stroke="url(#boneGrad)" strokeWidth="1.8" />
          <ellipse cx="84" cy="216" rx="8" ry="10" fill="none" stroke="#d4c090" strokeWidth="1" opacity="0.6" />
          <ellipse cx="116" cy="216" rx="8" ry="10" fill="none" stroke="#d4c090" strokeWidth="1" opacity="0.6" />
          <line x1="47" y1="94" x2="35" y2="177" stroke="url(#boneGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="153" y1="94" x2="165" y2="177" stroke="url(#boneGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="35" cy="178" rx="5" ry="4" fill="#e8d8b0" />
          <ellipse cx="165" cy="178" rx="5" ry="4" fill="#e8d8b0" />
          <line x1="33" y1="182" x2="29" y2="252" stroke="url(#boneGrad)" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="38" y1="182" x2="36" y2="252" stroke="#c8b080" strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
          <line x1="167" y1="182" x2="171" y2="252" stroke="url(#boneGrad)" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="162" y1="182" x2="164" y2="252" stroke="#c8b080" strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
          <line x1="74" y1="234" x2="68" y2="360" stroke="url(#boneGrad)" strokeWidth="3" strokeLinecap="round" />
          <line x1="126" y1="234" x2="132" y2="360" stroke="url(#boneGrad)" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="68" cy="361" rx="7" ry="6" fill="#e8d8b0" />
          <ellipse cx="132" cy="361" rx="7" ry="6" fill="#e8d8b0" />
          <ellipse cx="68" cy="366" rx="5" ry="5" fill="none" stroke="#e8d8b0" strokeWidth="1.5" />
          <ellipse cx="132" cy="366" rx="5" ry="5" fill="none" stroke="#e8d8b0" strokeWidth="1.5" />
          <line x1="66" y1="376" x2="62" y2="470" stroke="url(#boneGrad)" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="72" y1="376" x2="70" y2="470" stroke="#c8b080" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
          <line x1="134" y1="376" x2="138" y2="470" stroke="url(#boneGrad)" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="128" y1="376" x2="130" y2="470" stroke="#c8b080" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
          {[[126,36,'גולגולת'],[126,82,'כלביקולה'],[126,124,'בית חזה'],[16,150,'הומרוס'],[12,215,'רדיוס/אולנה'],[126,218,'אגן'],[46,298,'פמור'],[46,370,'פטלה'],[46,425,'טיביה']].map(([x,y,t],i) => (
            <text key={i} x={x} y={y} fill="#e8d8b0" fontSize="4.5" fontFamily="sans-serif" opacity="0.85">{t}</text>
          ))}
        </g>
      )}

      {/* MUSCLES */}
      {show('muscles') && (
        <g opacity="0.88">
          <path d="M100,70 Q78,78 66,90 Q78,84 100,83 Q122,84 134,90 Q122,78 100,70 Z" fill="url(#muscleRed)" opacity="0.75" />
          <path d="M68,86 Q83,102 100,104 Q117,102 132,86 Q120,78 100,80 Q80,78 68,86 Z" fill="url(#muscleDark)" opacity="0.72" />
          <ellipse cx="54" cy="93" rx="14" ry="11" fill="url(#muscleRed)" opacity="0.72" />
          <ellipse cx="146" cy="93" rx="14" ry="11" fill="url(#muscleRed)" opacity="0.72" />
          <path d="M36,106 Q27,132 30,158" fill="none" stroke="url(#muscleRed)" strokeWidth="11" strokeLinecap="round" opacity="0.65" />
          <path d="M164,106 Q173,132 170,158" fill="none" stroke="url(#muscleRed)" strokeWidth="11" strokeLinecap="round" opacity="0.65" />
          {[[87,108],[101,108],[87,122],[101,122],[87,136],[101,136]].map(([x,y],i) => (
            <rect key={i} x={x} y={y} width="11" height="11" rx="3" fill="url(#muscleDark)" opacity="0.68" />
          ))}
          <path d="M66,104 Q60,132 62,158" fill="none" stroke="#ff8844" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <path d="M134,104 Q140,132 138,158" fill="none" stroke="#ff8844" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <path d="M31,184 Q26,214 28,244" fill="none" stroke="url(#muscleRed)" strokeWidth="8" strokeLinecap="round" opacity="0.58" />
          <path d="M169,184 Q174,214 172,244" fill="none" stroke="url(#muscleRed)" strokeWidth="8" strokeLinecap="round" opacity="0.58" />
          <path d="M62,236 Q56,276 56,318 Q56,342 60,360 Q68,364 76,360 Q82,338 82,318 Q82,276 79,236 Z" fill="url(#muscleRed)" opacity="0.65" />
          <path d="M138,236 Q144,276 144,318 Q144,342 140,360 Q132,364 124,360 Q118,338 118,318 Q118,276 121,236 Z" fill="url(#muscleRed)" opacity="0.65" />
          <ellipse cx="65" cy="416" rx="10" ry="28" fill="url(#muscleDark)" opacity="0.65" />
          <ellipse cx="135" cy="416" rx="10" ry="28" fill="url(#muscleDark)" opacity="0.65" />
          {[[100,96,'שריר חזה','middle'],[57,89,'דלטואיד','middle'],[97,124,'Abs','middle'],[22,134,'ביצפס',null],[62,300,'קואדריצפס','middle'],[64,418,'שוק','middle'],[100,81,'טרפזיוס','middle']].map(([x,y,t,anchor],i) => (
            <text key={i} x={x} y={y} fill="#ffcc99" fontSize="5" fontFamily="sans-serif" textAnchor={anchor||'start'} opacity="0.9">{t}</text>
          ))}
        </g>
      )}

      {/* ARTERIES */}
      {show('arteries') && (
        <g filter="url(#glow)">
          <line x1="93" y1="62" x2="91" y2="80" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
          <line x1="107" y1="62" x2="109" y2="80" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
          <path d="M100,86 Q96,106 98,118 Q100,136 100,194" fill="none" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M98,90 Q84,86 70,94 Q56,104 44,120" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M102,90 Q116,86 130,94 Q144,104 156,120" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="40" y1="122" x2="33" y2="176" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
          <line x1="160" y1="122" x2="167" y2="176" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
          <line x1="31" y1="180" x2="27" y2="252" stroke="#fca5a5" strokeWidth="1.5" />
          <line x1="36" y1="180" x2="34" y2="252" stroke="#f87171" strokeWidth="1.1" />
          <line x1="169" y1="180" x2="173" y2="252" stroke="#fca5a5" strokeWidth="1.5" />
          <line x1="164" y1="180" x2="166" y2="252" stroke="#f87171" strokeWidth="1.1" />
          <path d="M99,196 Q86,212 76,234" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M101,196 Q114,212 124,234" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="74" y1="236" x2="70" y2="358" stroke="#f87171" strokeWidth="2.2" />
          <line x1="126" y1="236" x2="130" y2="358" stroke="#f87171" strokeWidth="2.2" />
          <line x1="65" y1="380" x2="62" y2="468" stroke="#fca5a5" strokeWidth="1.6" />
          <line x1="135" y1="380" x2="138" y2="468" stroke="#fca5a5" strokeWidth="1.6" />
          {[[115,68,'קרוטיד'],[107,132,'אאורטה'],[16,150,'ברכיאלי'],[10,216,'רדיאלי/אולנרי'],[82,300,'פמורלי'],[46,444,'טיביאלי']].map(([x,y,t],i) => (
            <text key={i} x={x} y={y} fill="#fca5a5" fontSize="4.5" fontFamily="sans-serif">{t}</text>
          ))}
        </g>
      )}

      {/* VEINS */}
      {show('veins') && (
        <g>
          <line x1="90" y1="61" x2="88" y2="80" stroke="#5b9eff" strokeWidth="2.2" strokeDasharray="3,1.5" strokeLinecap="round" />
          <line x1="110" y1="61" x2="112" y2="80" stroke="#5b9eff" strokeWidth="2.2" strokeDasharray="3,1.5" strokeLinecap="round" />
          <line x1="99" y1="84" x2="99" y2="120" stroke="#3b82f6" strokeWidth="3" strokeDasharray="4,2" />
          <line x1="101" y1="122" x2="101" y2="194" stroke="#3b82f6" strokeWidth="2.2" strokeDasharray="3,2" />
          <path d="M41,116 Q38,145 35,176" fill="none" stroke="#5b9eff" strokeWidth="1.6" strokeDasharray="3,1.5" />
          <path d="M159,116 Q162,145 165,176" fill="none" stroke="#5b9eff" strokeWidth="1.6" strokeDasharray="3,1.5" />
          <line x1="73" y1="237" x2="71" y2="468" stroke="#5b9eff" strokeWidth="1.6" strokeDasharray="3,1.5" />
          <line x1="127" y1="237" x2="129" y2="468" stroke="#5b9eff" strokeWidth="1.6" strokeDasharray="3,1.5" />
          <line x1="78" y1="237" x2="75" y2="357" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,1.5" />
          <line x1="122" y1="237" x2="125" y2="357" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,1.5" />
          {[[116,72,'ג׳וגולר'],[106,100,'ורידי קבה'],[15,152,'צפלי'],[79,300,'פמורלי'],[79,355,'סאפנוס']].map(([x,y,t],i) => (
            <text key={i} x={x} y={y} fill="#93c5fd" fontSize="4.5" fontFamily="sans-serif">{t}</text>
          ))}
        </g>
      )}

      {/* NERVES */}
      {show('nerves') && (
        <g>
          <path d="M99.5,68 L99.5,194" fill="none" stroke="#ecfccb" strokeWidth="2" strokeDasharray="3,1.5" />
          <path d="M92,74 Q78,80 68,90 Q54,104 44,120" fill="none" stroke="#9ee840" strokeWidth="1.4" strokeDasharray="4,2" />
          <path d="M108,74 Q122,80 132,90 Q146,104 156,120" fill="none" stroke="#9ee840" strokeWidth="1.4" strokeDasharray="4,2" />
          <path d="M44,122 Q36,148 32,182" fill="none" stroke="#bef264" strokeWidth="1.1" strokeDasharray="3,2" />
          <line x1="82" y1="237" x2="76" y2="360" stroke="#9ee840" strokeWidth="1.6" strokeDasharray="4,2" />
          <line x1="118" y1="237" x2="124" y2="360" stroke="#9ee840" strokeWidth="1.6" strokeDasharray="4,2" />
          <line x1="74" y1="364" x2="68" y2="468" stroke="#bef264" strokeWidth="1.3" strokeDasharray="3,2" />
          <line x1="126" y1="364" x2="132" y2="468" stroke="#bef264" strokeWidth="1.3" strokeDasharray="3,2" />
          {[[46,78,'פלקסוס ברכיאלי'],[104,102,'חוט שדרה'],[15,135,'רדיאלי'],[55,300,'סיאטי'],[47,433,'פרונאלי']].map(([x,y,t],i) => (
            <text key={i} x={x} y={y} fill="#d9f99d" fontSize="4.5" fontFamily="sans-serif">{t}</text>
          ))}
        </g>
      )}

      {/* PRESSURE POINTS */}
      {show('points') && allPoints.map((pt, idx) => {
        const col = POINT_COLORS[pt.id] || '#00d4ff';
        const isSel = selectedPoint === pt.id;
        const r = isSel ? 9 : 7;
        return (
          <g key={idx} onClick={() => onPointClick(pt.id)} style={{ cursor: 'pointer' }}>
            <circle cx={pt.cx} cy={pt.cy} r={r + 4} fill="none" stroke={col} strokeWidth="1" opacity="0.3">
              <animate attributeName="r" values={`${r+2};${r+10};${r+2}`} dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx={pt.cx} cy={pt.cy} r={r} fill={isSel ? col : `${col}35`} stroke={col} strokeWidth={isSel ? 2.5 : 1.8} />
            <circle cx={pt.cx - r*0.3} cy={pt.cy - r*0.3} r={r*0.35} fill="rgba(255,255,255,0.4)" />
            <text x={pt.cx} y={pt.cy + 3.5} fill={isSel ? '#000' : col} fontSize="3.8" textAnchor="middle" fontFamily="monospace" fontWeight="700" style={{ pointerEvents: 'none' }}>{pt.id}</text>
          </g>
        );
      })}
    </svg>
  );
}
