import React from 'react';

export default function BodySVG({ layers, selectedPoint, onPointClick, gender, view }) {
  const showLayer = (name) => layers[name];

  const pointColors = {
    GB20: '#00d4ff', ST11: '#a78bfa', LI15: '#fbbf24', GB21: '#f87171',
    LI11: '#34d399', PC6: '#60a5fa', CV17: '#fb923c', BL23: '#f87171',
    GB30: '#4ade80', ST36: '#fbbf24', KD3: '#818cf8',
  };

  const allPoints = [
    { id: 'GB20', cx: 100, cy: 52, label: 'GB20' },
    { id: 'ST11', cx: 88, cy: 72, label: 'ST11' },
    { id: 'LI15', cx: 56, cy: 88, label: 'LI15' },
    { id: 'LI15R', cx: 144, cy: 88, label: 'LI15', pointId: 'LI15' },
    { id: 'GB21', cx: 80, cy: 82, label: 'GB21' },
    { id: 'GB21R', cx: 120, cy: 82, label: 'GB21', pointId: 'GB21' },
    { id: 'LI11', cx: 36, cy: 175, label: 'LI11' },
    { id: 'LI11R', cx: 164, cy: 175, label: 'LI11', pointId: 'LI11' },
    { id: 'PC6', cx: 34, cy: 236, label: 'PC6' },
    { id: 'CV17', cx: 100, cy: 118, label: 'CV17' },
    { id: 'BL23', cx: 87, cy: 178, label: 'BL23' },
    { id: 'BL23R', cx: 113, cy: 178, label: 'BL23', pointId: 'BL23' },
    { id: 'GB30', cx: 68, cy: 218, label: 'GB30' },
    { id: 'ST36', cx: 70, cy: 385, label: 'ST36' },
    { id: 'ST36R', cx: 130, cy: 385, label: 'ST36', pointId: 'ST36' },
    { id: 'KD3', cx: 60, cy: 462, label: 'KD3' },
  ];

  return (
    <svg
      viewBox="0 0 200 520"
      style={{ width: '100%', height: '100%', maxHeight: '560px' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="skinM" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#d4956a" />
          <stop offset="100%" stopColor="#a0714f" />
        </radialGradient>
        <radialGradient id="skinF" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#e8a882" />
          <stop offset="100%" stopColor="#c07858" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softglow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ========== BODY SILHOUETTE ========== */}
      <g id="body-base">
        {/* Head */}
        <ellipse cx="100" cy="37" rx="26" ry="30"
          fill={`url(#skin${gender === 'female' ? 'F' : 'M'})`}
          stroke="#7a5030" strokeWidth="1" />

        {/* Hair (female) */}
        {gender === 'female' && (
          <>
            <ellipse cx="100" cy="18" rx="26" ry="14" fill="#4a2c0a" />
            <ellipse cx="76" cy="30" rx="8" ry="18" fill="#4a2c0a" />
            <ellipse cx="124" cy="30" rx="8" ry="18" fill="#4a2c0a" />
          </>
        )}

        {/* Neck */}
        <rect x="90" y="63" width="20" height="18" rx="4"
          fill={gender === 'female' ? '#c88060' : '#b07040'}
          stroke="#7a5030" strokeWidth="0.8" />

        {/* Torso */}
        <path d="M66,79 Q58,98 57,130 Q56,168 60,192 L140,192 Q144,168 143,130 Q142,98 134,79 Z"
          fill={`url(#skin${gender === 'female' ? 'F' : 'M'})`}
          stroke="#7a5030" strokeWidth="1" />

        {/* Female chest */}
        {gender === 'female' && (
          <>
            <ellipse cx="86" cy="108" rx="14" ry="12" fill="#d8906a" opacity="0.7" />
            <ellipse cx="114" cy="108" rx="14" ry="12" fill="#d8906a" opacity="0.7" />
          </>
        )}

        {/* Shoulders */}
        <ellipse cx="57" cy="94" rx="15" ry="11"
          fill={gender === 'female' ? '#c88060' : '#b07040'} stroke="#7a5030" strokeWidth="0.7" />
        <ellipse cx="143" cy="94" rx="15" ry="11"
          fill={gender === 'female' ? '#c88060' : '#b07040'} stroke="#7a5030" strokeWidth="0.7" />

        {/* Left Upper Arm */}
        <path d="M44,91 Q34,112 30,145 Q28,163 32,178 Q37,180 41,178 Q45,163 47,145 Q51,114 57,97 Z"
          fill={gender === 'female' ? '#c88060' : '#b07040'} stroke="#7a5030" strokeWidth="0.7" />
        {/* Right Upper Arm */}
        <path d="M156,91 Q166,112 170,145 Q172,163 168,178 Q163,180 159,178 Q155,163 153,145 Q149,114 143,97 Z"
          fill={gender === 'female' ? '#c88060' : '#b07040'} stroke="#7a5030" strokeWidth="0.7" />

        {/* Left Forearm */}
        <path d="M31,178 Q27,200 27,224 Q27,240 31,248 Q35,250 39,248 Q43,240 43,224 Q43,200 40,178 Z"
          fill={gender === 'female' ? '#d09070' : '#b87848'} stroke="#7a5030" strokeWidth="0.7" />
        {/* Right Forearm */}
        <path d="M169,178 Q173,200 173,224 Q173,240 169,248 Q165,250 161,248 Q157,240 157,224 Q157,200 160,178 Z"
          fill={gender === 'female' ? '#d09070' : '#b87848'} stroke="#7a5030" strokeWidth="0.7" />

        {/* Hands */}
        <ellipse cx="35" cy="254" rx="9" ry="11" fill={gender === 'female' ? '#d8a080' : '#c09060'} stroke="#7a5030" strokeWidth="0.6" />
        <ellipse cx="165" cy="254" rx="9" ry="11" fill={gender === 'female' ? '#d8a080' : '#c09060'} stroke="#7a5030" strokeWidth="0.6" />

        {/* Pelvis */}
        <path d="M63,190 Q58,212 60,232 L140,232 Q142,212 137,190 Z"
          fill={gender === 'female' ? '#c88060' : '#b07040'} stroke="#7a5030" strokeWidth="0.8" />

        {/* Female wider hips */}
        {gender === 'female' && (
          <>
            <ellipse cx="66" cy="215" rx="12" ry="18" fill="#c88060" opacity="0.5" />
            <ellipse cx="134" cy="215" rx="12" ry="18" fill="#c88060" opacity="0.5" />
          </>
        )}

        {/* Thighs */}
        <path d="M63,230 Q57,260 57,300 Q57,338 59,358 Q64,362 72,360 Q79,358 81,355 Q83,335 83,300 Q83,260 81,230 Z"
          fill={gender === 'female' ? '#c88060' : '#b07040'} stroke="#7a5030" strokeWidth="0.7" />
        <path d="M137,230 Q143,260 143,300 Q143,338 141,358 Q136,362 128,360 Q121,358 119,355 Q117,335 117,300 Q117,260 119,230 Z"
          fill={gender === 'female' ? '#c88060' : '#b07040'} stroke="#7a5030" strokeWidth="0.7" />

        {/* Knees */}
        <ellipse cx="70" cy="363" rx="13" ry="11" fill={gender === 'female' ? '#d09070' : '#b87848'} stroke="#7a5030" strokeWidth="0.6" />
        <ellipse cx="130" cy="363" rx="13" ry="11" fill={gender === 'female' ? '#d09070' : '#b87848'} stroke="#7a5030" strokeWidth="0.6" />

        {/* Shins */}
        <path d="M59,372 Q56,405 56,440 Q56,458 60,468 Q65,470 71,468 Q75,458 75,440 Q75,405 73,372 Z"
          fill={gender === 'female' ? '#c88060' : '#b07040'} stroke="#7a5030" strokeWidth="0.7" />
        <path d="M141,372 Q144,405 144,440 Q144,458 140,468 Q135,470 129,468 Q125,458 125,440 Q125,405 127,372 Z"
          fill={gender === 'female' ? '#c88060' : '#b07040'} stroke="#7a5030" strokeWidth="0.7" />

        {/* Feet */}
        <ellipse cx="65" cy="476" rx="13" ry="8" fill={gender === 'female' ? '#d09070' : '#b87848'} stroke="#7a5030" strokeWidth="0.6" />
        <ellipse cx="135" cy="476" rx="13" ry="8" fill={gender === 'female' ? '#d09070' : '#b87848'} stroke="#7a5030" strokeWidth="0.6" />
      </g>

      {/* ========== SKELETON ========== */}
      {showLayer('skeleton') && (
        <g id="skeleton" opacity="0.9">
          {/* Skull outline */}
          <ellipse cx="100" cy="35" rx="20" ry="24" fill="none" stroke="#e8d5b0" strokeWidth="1.5" />
          <ellipse cx="100" cy="52" rx="14" ry="8" fill="none" stroke="#e8d5b0" strokeWidth="1" />
          {/* Spine */}
          {[72, 83, 93, 103, 113, 123, 133, 143, 153, 163, 173, 183].map((y, i) => (
            <rect key={i} x="97" y={y} width="6" height="6" rx="1" fill="#e8d5b0" opacity="0.8" />
          ))}
          {/* Clavicle */}
          <path d="M78,76 Q89,80 100,79 Q111,80 122,76" fill="none" stroke="#e8d5b0" strokeWidth="2" strokeLinecap="round" />
          {/* Rib cage */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ellipse key={i} cx="100" cy={108 + i * 10} rx={30 - i * 1.5} ry="6"
              fill="none" stroke="#e8d5b0" strokeWidth="1.2" opacity={0.7 - i * 0.08} />
          ))}
          {/* Sternum */}
          <line x1="100" y1="84" x2="100" y2="158" stroke="#e8d5b0" strokeWidth="2" />
          {/* Pelvis */}
          <path d="M70,200 Q66,218 68,228 Q84,234 100,234 Q116,234 132,228 Q134,218 130,200" fill="none" stroke="#e8d5b0" strokeWidth="1.5" />
          <path d="M70,200 Q78,210 100,212 Q122,210 130,200" fill="none" stroke="#e8d5b0" strokeWidth="1" opacity="0.6" />
          {/* Humerus L/R */}
          <line x1="49" y1="95" x2="38" y2="174" stroke="#e8d5b0" strokeWidth="2" strokeLinecap="round" />
          <line x1="151" y1="95" x2="162" y2="174" stroke="#e8d5b0" strokeWidth="2" strokeLinecap="round" />
          {/* Radius/Ulna L */}
          <line x1="36" y1="178" x2="32" y2="248" stroke="#e8d5b0" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="40" y1="178" x2="38" y2="248" stroke="#e8d5b0" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
          {/* Radius/Ulna R */}
          <line x1="164" y1="178" x2="168" y2="248" stroke="#e8d5b0" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="160" y1="178" x2="162" y2="248" stroke="#e8d5b0" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
          {/* Femur L/R */}
          <line x1="76" y1="232" x2="70" y2="358" stroke="#e8d5b0" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="124" y1="232" x2="130" y2="358" stroke="#e8d5b0" strokeWidth="2.5" strokeLinecap="round" />
          {/* Patella L/R */}
          <circle cx="70" cy="364" r="5" fill="none" stroke="#e8d5b0" strokeWidth="1.5" />
          <circle cx="130" cy="364" r="5" fill="none" stroke="#e8d5b0" strokeWidth="1.5" />
          {/* Tibia L */}
          <line x1="68" y1="374" x2="64" y2="468" stroke="#e8d5b0" strokeWidth="2" strokeLinecap="round" />
          <line x1="73" y1="374" x2="70" y2="468" stroke="#e8d5b0" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          {/* Tibia R */}
          <line x1="132" y1="374" x2="136" y2="468" stroke="#e8d5b0" strokeWidth="2" strokeLinecap="round" />
          <line x1="127" y1="374" x2="130" y2="468" stroke="#e8d5b0" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          {/* Bone labels */}
          <text x="126" y="37" fill="#e8d5b0" fontSize="5" fontFamily="monospace">גולגולת</text>
          <text x="126" y="80" fill="#e8d5b0" fontSize="4.5" fontFamily="monospace">כלביקולה</text>
          <text x="126" y="125" fill="#e8d5b0" fontSize="4.5" fontFamily="monospace">בית חזה</text>
          <text x="20" y="155" fill="#e8d5b0" fontSize="4.5" fontFamily="monospace">הומרוס</text>
          <text x="16" y="218" fill="#e8d5b0" fontSize="4.5" fontFamily="monospace">רדיוס/אולנה</text>
          <text x="126" y="210" fill="#e8d5b0" fontSize="4.5" fontFamily="monospace">אגן</text>
          <text x="50" y="295" fill="#e8d5b0" fontSize="4.5" fontFamily="monospace">פמור</text>
          <text x="50" y="420" fill="#e8d5b0" fontSize="4.5" fontFamily="monospace">טיביה</text>
        </g>
      )}

      {/* ========== MUSCLES ========== */}
      {showLayer('muscles') && (
        <g id="muscles" opacity="0.85">
          {/* Pectorals */}
          <path d="M70,88 Q85,102 100,104 Q115,102 130,88 Q118,80 100,82 Q82,80 70,88 Z"
            fill="#ff7744" opacity="0.7" />
          {/* Deltoids */}
          <ellipse cx="57" cy="95" rx="13" ry="10" fill="#ff6633" opacity="0.7" />
          <ellipse cx="143" cy="95" rx="13" ry="10" fill="#ff6633" opacity="0.7" />
          {/* Biceps */}
          <path d="M38,105 Q30,128 33,155" fill="none" stroke="#ff8855" strokeWidth="9" strokeLinecap="round" opacity="0.6" />
          <path d="M162,105 Q170,128 167,155" fill="none" stroke="#ff8855" strokeWidth="9" strokeLinecap="round" opacity="0.6" />
          {/* Abs */}
          {[[88,108],[102,108],[88,122],[102,122],[88,136],[102,136]].map(([x,y],i) => (
            <rect key={i} x={x} y={y} width="10" height="10" rx="3" fill="#ff9966" opacity="0.65" />
          ))}
          {/* Obliques */}
          <path d="M68,105 Q63,130 65,155 Q70,165 76,168" fill="none" stroke="#ff8844" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
          <path d="M132,105 Q137,130 135,155 Q130,165 124,168" fill="none" stroke="#ff8844" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
          {/* Quads */}
          <path d="M65,235 Q59,275 59,315 Q59,340 63,358 Q70,362 78,358 Q82,335 82,315 Q82,275 79,235 Z"
            fill="#ff8855" opacity="0.6" />
          <path d="M135,235 Q141,275 141,315 Q141,340 137,358 Q130,362 122,358 Q118,335 118,315 Q118,275 121,235 Z"
            fill="#ff8855" opacity="0.6" />
          {/* Calves */}
          <ellipse cx="65" cy="415" rx="9" ry="26" fill="#ff7744" opacity="0.6" />
          <ellipse cx="135" cy="415" rx="9" ry="26" fill="#ff7744" opacity="0.6" />
          {/* Forearms */}
          <path d="M33,182 Q29,212 30,240" fill="none" stroke="#ff9966" strokeWidth="7" strokeLinecap="round" opacity="0.5" />
          <path d="M167,182 Q171,212 170,240" fill="none" stroke="#ff9966" strokeWidth="7" strokeLinecap="round" opacity="0.5" />
          {/* Labels */}
          <text x="100" y="96" fill="#ffcc99" fontSize="5" textAnchor="middle" fontFamily="sans-serif">שריר חזה (Pectoralis)</text>
          <text x="57" y="91" fill="#ffcc99" fontSize="4" textAnchor="middle" fontFamily="sans-serif">דלטואיד</text>
          <text x="96" y="122" fill="#ffcc99" fontSize="4" textAnchor="middle" fontFamily="sans-serif">שרירי בטן</text>
          <text x="24" y="130" fill="#ffcc99" fontSize="4" textAnchor="end" fontFamily="sans-serif">ביצפס</text>
          <text x="60" y="298" fill="#ffcc99" fontSize="4.5" textAnchor="middle" fontFamily="sans-serif">קואדריצפס</text>
          <text x="60" y="415" fill="#ffcc99" fontSize="4.5" textAnchor="middle" fontFamily="sans-serif">שוק</text>
        </g>
      )}

      {/* ========== ARTERIES ========== */}
      {showLayer('arteries') && (
        <g id="arteries" filter="url(#softglow)">
          {/* Carotid */}
          <line x1="94" y1="63" x2="92" y2="80" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="106" y1="63" x2="108" y2="80" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
          {/* Aortic arch */}
          <path d="M100,87 Q96,100 98,110 Q100,130 100,192" stroke="#dc2626" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Subclavian L */}
          <path d="M98,90 Q86,87 72,94 Q58,103 46,118" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Subclavian R */}
          <path d="M102,90 Q114,87 128,94 Q142,103 154,118" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Brachial L */}
          <line x1="42" y1="120" x2="36" y2="174" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round" />
          {/* Brachial R */}
          <line x1="158" y1="120" x2="164" y2="174" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round" />
          {/* Radial/Ulnar L */}
          <line x1="34" y1="178" x2="31" y2="246" stroke="#fca5a5" strokeWidth="1.3" />
          <line x1="38" y1="178" x2="36" y2="246" stroke="#f87171" strokeWidth="1" />
          {/* Radial/Ulnar R */}
          <line x1="166" y1="178" x2="169" y2="246" stroke="#fca5a5" strokeWidth="1.3" />
          <line x1="162" y1="178" x2="164" y2="246" stroke="#f87171" strokeWidth="1" />
          {/* Iliac L/R */}
          <path d="M99,193 Q88,208 78,230" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M101,193 Q112,208 122,230" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Femoral L/R */}
          <line x1="76" y1="232" x2="72" y2="354" stroke="#f87171" strokeWidth="2" />
          <line x1="124" y1="232" x2="128" y2="354" stroke="#f87171" strokeWidth="2" />
          {/* Popliteal */}
          <line x1="71" y1="357" x2="69" y2="374" stroke="#fca5a5" strokeWidth="1.8" />
          <line x1="129" y1="357" x2="131" y2="374" stroke="#fca5a5" strokeWidth="1.8" />
          {/* Tibial */}
          <line x1="67" y1="378" x2="64" y2="464" stroke="#fca5a5" strokeWidth="1.5" />
          <line x1="133" y1="378" x2="136" y2="464" stroke="#fca5a5" strokeWidth="1.5" />
          {/* Labels */}
          <text x="112" y="68" fill="#fca5a5" fontSize="4.5" fontFamily="sans-serif">קרוטיד</text>
          <text x="106" y="128" fill="#fca5a5" fontSize="4.5" fontFamily="sans-serif">אאורטה</text>
          <text x="22" y="148" fill="#fca5a5" fontSize="4" fontFamily="sans-serif">ברכיאלי</text>
          <text x="12" y="216" fill="#fca5a5" fontSize="4" fontFamily="sans-serif">רדיאלי/אולנרי</text>
          <text x="83" y="292" fill="#fca5a5" fontSize="4.5" fontFamily="sans-serif">פמורלי</text>
          <text x="50" y="438" fill="#fca5a5" fontSize="4.5" fontFamily="sans-serif">טיביאלי</text>
        </g>
      )}

      {/* ========== VEINS ========== */}
      {showLayer('veins') && (
        <g id="veins" filter="url(#softglow)">
          {/* Jugular */}
          <line x1="91" y1="62" x2="89" y2="80" stroke="#6b9fff" strokeWidth="2" strokeDasharray="3,1.5" strokeLinecap="round" />
          <line x1="109" y1="62" x2="111" y2="80" stroke="#6b9fff" strokeWidth="2" strokeDasharray="3,1.5" strokeLinecap="round" />
          {/* Superior vena cava */}
          <line x1="99" y1="85" x2="99" y2="118" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="4,2" />
          {/* Inferior vena cava */}
          <line x1="101" y1="120" x2="101" y2="192" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,2" />
          {/* Cephalic L */}
          <path d="M43,115 Q40,143 37,174" stroke="#6b9fff" strokeWidth="1.5" fill="none" strokeDasharray="3,1.5" />
          {/* Cephalic R */}
          <path d="M157,115 Q160,143 163,174" stroke="#6b9fff" strokeWidth="1.5" fill="none" strokeDasharray="3,1.5" />
          {/* Basilic L */}
          <path d="M47,115 Q45,140 44,174" stroke="#93c5fd" strokeWidth="1.2" fill="none" strokeDasharray="2,1.5" />
          {/* Basilic R */}
          <path d="M153,115 Q155,140 156,174" stroke="#93c5fd" strokeWidth="1.2" fill="none" strokeDasharray="2,1.5" />
          {/* Great Saphenous L/R */}
          <line x1="75" y1="235" x2="73" y2="464" stroke="#6b9fff" strokeWidth="1.5" strokeDasharray="3,1.5" />
          <line x1="125" y1="235" x2="127" y2="464" stroke="#6b9fff" strokeWidth="1.5" strokeDasharray="3,1.5" />
          {/* Femoral vein */}
          <line x1="79" y1="235" x2="77" y2="354" stroke="#3b82f6" strokeWidth="1.8" strokeDasharray="3,1.5" />
          <line x1="121" y1="235" x2="123" y2="354" stroke="#3b82f6" strokeWidth="1.8" strokeDasharray="3,1.5" />
          {/* Labels */}
          <text x="114" y="72" fill="#93c5fd" fontSize="4.5" fontFamily="sans-serif">ג׳וגולר</text>
          <text x="105" y="98" fill="#93c5fd" fontSize="4.5" fontFamily="sans-serif">ורידי קבה</text>
          <text x="16" y="150" fill="#93c5fd" fontSize="4" fontFamily="sans-serif">צפלי</text>
          <text x="82" y="350" fill="#93c5fd" fontSize="4.5" fontFamily="sans-serif">סאפנוס</text>
          <text x="82" y="300" fill="#93c5fd" fontSize="4.5" fontFamily="sans-serif">פמורלי</text>
        </g>
      )}

      {/* ========== NERVES ========== */}
      {showLayer('nerves') && (
        <g id="nerves" filter="url(#softglow)">
          {/* Spinal cord */}
          <path d="M99.5,68 L99.5,190" stroke="#d9f99d" strokeWidth="1.8" strokeDasharray="3,1.5" />
          {/* Brachial plexus L */}
          <path d="M92,74 Q80,80 70,90 Q56,102 46,118" stroke="#a3e635" strokeWidth="1.3" fill="none" strokeDasharray="4,2" />
          {/* Brachial plexus R */}
          <path d="M108,74 Q120,80 130,90 Q144,102 154,118" stroke="#a3e635" strokeWidth="1.3" fill="none" strokeDasharray="4,2" />
          {/* Radial nerve L */}
          <path d="M46,120 Q38,145 34,180" stroke="#bef264" strokeWidth="1" fill="none" strokeDasharray="3,2" />
          {/* Median/Ulnar L */}
          <path d="M40,176 Q37,208 36,246" stroke="#a3e635" strokeWidth="0.9" fill="none" strokeDasharray="2,1.5" />
          <path d="M43,176 Q41,208 39,246" stroke="#d9f99d" strokeWidth="0.8" fill="none" strokeDasharray="2,1" />
          {/* Radial nerve R */}
          <path d="M154,120 Q162,145 166,180" stroke="#bef264" strokeWidth="1" fill="none" strokeDasharray="3,2" />
          {/* Sciatic L/R */}
          <line x1="84" y1="234" x2="78" y2="358" stroke="#a3e635" strokeWidth="1.5" strokeDasharray="4,2" />
          <line x1="116" y1="234" x2="122" y2="358" stroke="#a3e635" strokeWidth="1.5" strokeDasharray="4,2" />
          {/* Peroneal/Tibial L */}
          <line x1="76" y1="362" x2="70" y2="464" stroke="#bef264" strokeWidth="1.2" strokeDasharray="3,2" />
          <line x1="79" y1="362" x2="74" y2="464" stroke="#d9f99d" strokeWidth="0.9" strokeDasharray="2,1.5" />
          {/* Peroneal/Tibial R */}
          <line x1="124" y1="362" x2="130" y2="464" stroke="#bef264" strokeWidth="1.2" strokeDasharray="3,2" />
          <line x1="121" y1="362" x2="126" y2="464" stroke="#d9f99d" strokeWidth="0.9" strokeDasharray="2,1.5" />
          {/* Labels */}
          <text x="46" y="78" fill="#d9f99d" fontSize="4.5" fontFamily="sans-serif">פלקסוס ברכיאלי</text>
          <text x="104" y="100" fill="#d9f99d" fontSize="4" fontFamily="sans-serif">חוט שדרה</text>
          <text x="17" y="132" fill="#d9f99d" fontSize="4" fontFamily="sans-serif">רדיאלי</text>
          <text x="14" y="215" fill="#d9f99d" fontSize="4" fontFamily="sans-serif">אולנר/מדיאני</text>
          <text x="58" y="296" fill="#d9f99d" fontSize="4.5" fontFamily="sans-serif">סיאטי</text>
          <text x="50" y="430" fill="#d9f99d" fontSize="4.5" fontFamily="sans-serif">פרונאלי</text>
        </g>
      )}

      {/* ========== PRESSURE POINTS ========== */}
      {showLayer('points') && allPoints.map(pt => {
        const pointId = pt.pointId || pt.id;
        const col = pointColors[pointId] || '#00d4ff';
        const isSelected = selectedPoint === pointId;
        return (
          <g
            key={pt.id}
            onClick={() => onPointClick(pointId)}
            style={{ cursor: 'pointer' }}
          >
            {/* Pulse ring */}
            <circle cx={pt.cx} cy={pt.cy} r={isSelected ? 14 : 11}
              fill="none" stroke={col} strokeWidth="1" opacity="0.35">
              <animate attributeName="r" values={`${isSelected ? 12 : 9};${isSelected ? 18 : 14};${isSelected ? 12 : 9}`}
                dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Main dot */}
            <circle cx={pt.cx} cy={pt.cy} r={isSelected ? 9 : 7}
              fill={isSelected ? col : `${col}44`}
              stroke={col} strokeWidth={isSelected ? 2 : 1.5} />
            {/* Label */}
            <text x={pt.cx} y={pt.cy + 3} fill={isSelected ? '#000' : col}
              fontSize="4" textAnchor="middle" fontFamily="monospace" fontWeight="700">
              {pt.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
