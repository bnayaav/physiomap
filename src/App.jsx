import React, { useState } from 'react';
import BodySVG from './components/BodySVG';
import { PRESSURE_POINTS, LAYERS_CONFIG } from './data/points';
import './App.css';

const PRESSURE_BAR = { עדין: 1, 'עדין-בינוני': 2, 'בינוני': 3, 'בינוני-חזק': 4, חזק: 5, 'עמוק מאוד': 6 };

export default function App() {
  const [layers, setLayers] = useState({
    skeleton: true,
    muscles: false,
    arteries: false,
    veins: false,
    nerves: false,
    points: true,
  });
  const [gender, setGender] = useState('male');
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [notes, setNotes] = useState({});
  const [noteInput, setNoteInput] = useState('');
  const [saved, setSaved] = useState(false);
  const [zoom, setZoom] = useState(1);

  const toggleLayer = (name) => {
    setLayers(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handlePointClick = (id) => {
    setSelectedPoint(id);
    setNoteInput(notes[id] || '');
    setSaved(false);
  };

  const saveNote = () => {
    if (!selectedPoint) return;
    setNotes(prev => ({ ...prev, [selectedPoint]: noteInput }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const point = selectedPoint ? PRESSURE_POINTS[selectedPoint] : null;
  const pressureLevel = point ? (PRESSURE_BAR[point.pressure] || 3) : 0;

  return (
    <div className="app" dir="rtl">
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">⚕</span>
          <span className="logo-text">PhysioMap</span>
          <span className="logo-sub">מפת גוף לפיזיותרפיסט</span>
        </div>
        <div className="patient-row">
          <label>מטופל:</label>
          <input
            className="patient-input"
            type="text"
            placeholder="שם המטופל..."
            value={patientName}
            onChange={e => setPatientName(e.target.value)}
          />
        </div>
      </header>

      <div className="main">
        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="section-title">מגדר</div>
            <div className="toggle-group">
              <button
                className={`toggle-btn ${gender === 'male' ? 'active' : ''}`}
                onClick={() => setGender('male')}
              >♂ גבר</button>
              <button
                className={`toggle-btn ${gender === 'female' ? 'active' : ''}`}
                onClick={() => setGender('female')}
              >♀ אישה</button>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="section-title">מערכות גוף</div>
            {Object.entries(LAYERS_CONFIG).map(([key, cfg]) => (
              <button
                key={key}
                className={`layer-btn ${layers[key] ? 'active' : ''}`}
                onClick={() => toggleLayer(key)}
              >
                <span className="layer-dot" style={{ background: layers[key] ? cfg.color : '#334155' }} />
                <span className="layer-emoji">{cfg.emoji}</span>
                <span className="layer-label">{cfg.label}</span>
                <span className={`layer-check ${layers[key] ? 'on' : ''}`}>{layers[key] ? '✓' : ''}</span>
              </button>
            ))}
          </div>

          <div className="sidebar-section">
            <div className="section-title">נקודות מהירות</div>
            <div className="quick-points">
              {Object.values(PRESSURE_POINTS).map(p => (
                <button
                  key={p.id}
                  className={`quick-pt ${selectedPoint === p.id ? 'active' : ''}`}
                  style={{ '--pt-color': p.color }}
                  onClick={() => handlePointClick(p.id)}
                >
                  {p.id}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* CANVAS */}
        <div className="canvas-area">
          <div className="canvas-bg">
            <div className="zoom-wrap" style={{ transform: `scale(${zoom})`, transformOrigin: 'center top' }}>
              <BodySVG
                layers={layers}
                selectedPoint={selectedPoint}
                onPointClick={handlePointClick}
                gender={gender}
                view="front"
              />
            </div>
          </div>
          <div className="zoom-controls">
            <button className="zoom-btn" onClick={() => setZoom(z => Math.min(z + 0.2, 2.5))}>+</button>
            <span className="zoom-label">{Math.round(zoom * 100)}%</span>
            <button className="zoom-btn" onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))}>−</button>
            <button className="zoom-btn reset" onClick={() => setZoom(1)}>↺</button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <aside className="info-panel">
          {!point ? (
            <div className="empty-state">
              <div className="empty-icon">🎯</div>
              <div className="empty-title">בחר נקודת לחיצה</div>
              <div className="empty-sub">לחץ על עיגול צבעוני<br />בדגם הגוף</div>
              <div className="hint-arrows">↙</div>
            </div>
          ) : (
            <div className="point-info">
              <div className="point-header" style={{ borderColor: point.color }}>
                <div className="point-id" style={{ color: point.color }}>{point.id}</div>
                <div className="point-name-he">{point.nameHe}</div>
                <div className="point-name-en">{point.nameEn}</div>
                <div className="point-system">{point.system}</div>
              </div>

              <div className="info-block">
                <div className="info-block-label">📍 מיקום אנטומי</div>
                <div className="info-block-content">{point.location}</div>
              </div>

              <div className="info-block">
                <div className="info-block-label">🩺 אינדיקציות קליניות</div>
                <div className="info-block-content">{point.usage}</div>
              </div>

              <div className="info-block">
                <div className="info-block-label">✋ טכניקה</div>
                <div className="info-block-content">{point.technique}</div>
              </div>

              <div className="info-row">
                <div className="info-mini">
                  <div className="info-mini-label">⏱ זמן</div>
                  <div className="info-mini-val">{point.duration}</div>
                </div>
                <div className="info-mini">
                  <div className="info-mini-label">💪 עוצמה</div>
                  <div className="info-mini-val">{point.pressure}</div>
                </div>
              </div>

              <div className="pressure-bar-wrap">
                <div className="pressure-bar-label">עוצמת לחיצה</div>
                <div className="pressure-bar">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className={`pressure-seg ${i <= pressureLevel ? 'filled' : ''}`}
                      style={{ background: i <= pressureLevel ? point.color : undefined }} />
                  ))}
                </div>
              </div>

              <div className="tags-row">
                {point.tags.map(t => (
                  <span key={t} className="tag-badge" style={{ borderColor: `${point.color}66`, color: point.color }}>
                    {t}
                  </span>
                ))}
              </div>

              {point.warnings.length > 0 && (
                <div className="warnings">
                  {point.warnings.map(w => (
                    <div key={w} className="warning-item">⚠ {w}</div>
                  ))}
                </div>
              )}

              <div className="notes-section">
                <div className="info-block-label">📝 הערות למטופל</div>
                <textarea
                  className="notes-input"
                  placeholder={`כתוב הסבר למטופל על נקודה ${point.id}...\nלדוגמה: לחץ על הנקודה 30 שניות, 3 פעמים ביום`}
                  value={noteInput}
                  onChange={e => setNoteInput(e.target.value)}
                />
                <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={saveNote}>
                  {saved ? '✅ נשמר!' : '💾 שמור הערה'}
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
