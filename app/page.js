'use client'

import { useState, useEffect } from 'react'
import phrasesData from '@/data/japanese-phrases-data.json'
import './styles.css'

export default function JapanesePhrases() {
  const [favorites, setFavorites] = useState([])
  const [showingFavorites, setShowingFavorites] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('light')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('restaurant')

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('jp-favorites') || '[]')
    const savedTheme = localStorage.getItem('jp-theme') || 'light'
    setFavorites(savedFavorites)
    setCurrentTheme(savedTheme)
    
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    setCurrentTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme === 'dark' ? 'dark' : '')
    localStorage.setItem('jp-theme', newTheme)
  }

  const toggleFavorites = () => {
    setShowingFavorites(!showingFavorites)
    if (!showingFavorites) {
      setSearchQuery('')
    }
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
    setShowingFavorites(false)
    setSearchQuery('')
  }

  const toggleFavorite = (jp, en) => {
    const key = `${jp}|${en}`
    const index = favorites.indexOf(key)
    let newFavorites
    
    if (index > -1) {
      newFavorites = favorites.filter((_, i) => i !== index)
      showToast('Removed from favorites')
    } else {
      newFavorites = [...favorites, key]
      showToast('Added to favorites')
    }
    
    setFavorites(newFavorites)
    localStorage.setItem('jp-favorites', JSON.stringify(newFavorites))
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const playAudio = (text, e) => {
    e.stopPropagation()
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ja-JP'
      utterance.rate = 0.8
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(utterance)
    }
  }

  const showToast = (message) => {
    const toast = document.getElementById('toast')
    if (toast) {
      toast.textContent = message
      toast.classList.add('show')
      setTimeout(() => toast.classList.remove('show'), 2000)
    }
  }

  const isFavorited = (jp, en) => {
    const key = `${jp}|${en}`
    return favorites.includes(key)
  }

  const PhraseCard = ({ jp, en, note }) => {
    const [copied, setCopied] = useState(false)
    
    const handleCopy = () => {
      const cleanJp = jp.replace(/（[^）]*）/g, '')
      copyToClipboard(cleanJp)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }

    const matchesSearch = () => {
      if (!searchQuery) return true
      const query = searchQuery.toLowerCase()
      return jp.toLowerCase().includes(query) || en.toLowerCase().includes(query)
    }

    if (!matchesSearch()) return null

    const cleanJpForAudio = jp.replace(/（[^）]*）/g, '')

    return (
      <div className={`phrase-card ${copied ? 'copied' : ''}`} onClick={handleCopy}>
        <div className="phrase-top">
          <div className="phrase-content">
            <div className="japanese">{jp}</div>
            <div className="english">{en}</div>
            {note && <div className="note">{note}</div>}
          </div>
          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
            <button 
              className="audio-btn"
              onClick={(e) => playAudio(cleanJpForAudio, e)}
              aria-label="Play audio"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </button>
            <button 
              className={`favorite-btn ${isFavorited(jp, en) ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                toggleFavorite(jp, en)
              }}
              aria-label="Favorite"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }

  const VocabCard = ({ jp, en }) => {
    const [copied, setCopied] = useState(false)
    
    const handleCopy = () => {
      const cleanJp = jp.replace(/（[^）]*）/g, '')
      copyToClipboard(cleanJp)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }

    const matchesSearch = () => {
      if (!searchQuery) return true
      const query = searchQuery.toLowerCase()
      return jp.toLowerCase().includes(query) || en.toLowerCase().includes(query)
    }

    if (!matchesSearch()) return null

    const cleanJpForAudio = jp.replace(/（[^）]*）/g, '')

    return (
      <div className={`vocab-card ${copied ? 'copied' : ''}`} onClick={handleCopy}>
        <div className="vocab-content">
          <div className="vocab-jp">{jp}</div>
          <div className="vocab-en">{en}</div>
        </div>
        <div className="vocab-actions">
          <button 
            className="audio-btn"
            onClick={(e) => playAudio(cleanJpForAudio, e)}
            aria-label="Play audio"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          </button>
          <button 
            className={`favorite-btn ${isFavorited(jp, en) ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              toggleFavorite(jp, en)
            }}
            aria-label="Favorite"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    )
  }

  const CounterCard = ({ num, jp }) => {
    const playCounterAudio = (e) => {
      e.stopPropagation()
      const cleanJp = jp.replace(/（[^）]*）/g, '')
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(cleanJp)
        utterance.lang = 'ja-JP'
        utterance.rate = 0.8
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(utterance)
      }
    }

    return (
      <div className="counter-card" onClick={playCounterAudio} style={{ cursor: 'pointer' }}>
        <div className="counter-num">{num}</div>
        <div className="counter-jp">{jp}</div>
      </div>
    )
  }

  // Helper function to format category names for display
  const formatCategoryTitle = (key) => {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">
            <div className="logo-mark">語</div>
            <div className="logo-text">日本語</div>
          </div>
          <div className="header-actions">
            <button 
              className={`icon-btn ${showingFavorites ? 'active' : ''}`}
              onClick={toggleFavorites}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button className="icon-btn" onClick={toggleTheme}>
              <svg style={{ display: currentTheme === 'dark' ? 'none' : 'block' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg style={{ display: currentTheme === 'dark' ? 'block' : 'none' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="search-container">
        <div className="search-wrapper">
          <div className="search-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <input
            type="text"
            id="search"
            placeholder="Search phrases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {!showingFavorites && (
        <div className="tabs-container">
          <div className="tabs">
            {['restaurant', 'shopping', 'conversation', 'counters', 'vocab', 'useful'].map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="content">
        {showingFavorites && (
          <div className="section active">
            {favorites.length === 0 ? (
              <div className="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <p>No favorites yet.<br />Tap the heart on any phrase to save it here.</p>
              </div>
            ) : (
              <div>
                {favorites.map((fav) => {
                  const [jp, en] = fav.split('|')
                  return <PhraseCard key={fav} jp={jp} en={en} />
                })}
              </div>
            )}
          </div>
        )}

        {/* RESTAURANT SECTION */}
        <div className={`section ${activeTab === 'restaurant' && !showingFavorites ? 'active' : ''}`}>
          {Object.entries(phrasesData.restaurant).map(([categoryKey, phrases]) => (
            <div className="category" key={categoryKey}>
              <div className="category-header">
                <span className="category-title">{formatCategoryTitle(categoryKey)}</span>
              </div>
              {phrases.map((phrase, index) => (
                <PhraseCard key={index} {...phrase} />
              ))}
            </div>
          ))}
        </div>

        {/* SHOPPING SECTION */}
        <div className={`section ${activeTab === 'shopping' && !showingFavorites ? 'active' : ''}`}>
          {Object.entries(phrasesData.shopping).map(([categoryKey, phrases]) => (
            <div className="category" key={categoryKey}>
              <div className="category-header">
                <span className="category-title">{formatCategoryTitle(categoryKey)}</span>
              </div>
              {phrases.map((phrase, index) => (
                <PhraseCard key={index} {...phrase} />
              ))}
            </div>
          ))}
        </div>

        {/* CONVERSATION SECTION */}
        <div className={`section ${activeTab === 'conversation' && !showingFavorites ? 'active' : ''}`}>
          {Object.entries(phrasesData.conversation).map(([categoryKey, phrases]) => (
            <div className="category" key={categoryKey}>
              <div className="category-header">
                <span className="category-title">{formatCategoryTitle(categoryKey)}</span>
              </div>
              {phrases.map((phrase, index) => (
                <PhraseCard key={index} {...phrase} />
              ))}
            </div>
          ))}
        </div>

        {/* COUNTERS SECTION */}
        <div className={`section ${activeTab === 'counters' && !showingFavorites ? 'active' : ''}`}>
          <div className="category">
            <div className="category-header">
              <span className="category-title">General Objects (〜つ)</span>
            </div>
            <div className="tip-box">
              <div className="tip-text">
                Use these for general objects. Click to hear pronunciation!
              </div>
            </div>
            <div className="counter-grid">
              {phrasesData.counters.general_objects.map((counter, index) => (
                <CounterCard key={index} {...counter} />
              ))}
            </div>
          </div>

          <div className="category">
            <div className="category-header">
              <span className="category-title">People (〜人（にん）)</span>
            </div>
            <div className="counter-grid">
              {phrasesData.counters.people.map((counter, index) => (
                <CounterCard key={index} {...counter} />
              ))}
            </div>
          </div>

          <div className="category">
            <div className="category-header">
              <span className="category-title">Flat Objects (〜枚（まい）)</span>
            </div>
            <div className="tip-box">
              <div className="tip-text">For paper, tickets, plates, shirts, etc.</div>
            </div>
            <div className="counter-grid">
              {phrasesData.counters.flat_objects.map((counter, index) => (
                <CounterCard key={index} {...counter} />
              ))}
            </div>
          </div>

          <div className="category">
            <div className="category-header">
              <span className="category-title">Long Objects (〜本（ほん）)</span>
            </div>
            <div className="tip-box">
              <div className="tip-text">For bottles, pens, umbrellas, trees, etc.</div>
            </div>
            <div className="counter-grid">
              {phrasesData.counters.long_objects.map((counter, index) => (
                <CounterCard key={index} {...counter} />
              ))}
            </div>
          </div>

          <div className="category">
            <div className="category-header">
              <span className="category-title">Bound Objects (〜冊（さつ）)</span>
            </div>
            <div className="tip-box">
              <div className="tip-text">For books, magazines, notebooks, etc.</div>
            </div>
            <div className="counter-grid">
              {phrasesData.counters.bound_objects.map((counter, index) => (
                <CounterCard key={index} {...counter} />
              ))}
            </div>
          </div>
        </div>

        {/* VOCAB SECTION */}
        <div className={`section ${activeTab === 'vocab' && !showingFavorites ? 'active' : ''}`}>
          {Object.entries(phrasesData.vocab).map(([categoryKey, vocabList]) => (
            <div className="category" key={categoryKey}>
              <div className="category-header">
                <span className="category-title">{formatCategoryTitle(categoryKey)}</span>
              </div>
              {vocabList.map((vocab, index) => (
                <VocabCard key={index} {...vocab} />
              ))}
            </div>
          ))}
        </div>

        {/* USEFUL SECTION */}
        <div className={`section ${activeTab === 'useful' && !showingFavorites ? 'active' : ''}`}>
          {Object.entries(phrasesData.useful).map(([categoryKey, items]) => {
            const isVocabStyle = items.length > 0 && items[0].jp && items[0].en && !items[0].note && categoryKey !== 'emergency' && categoryKey !== 'transportation' && categoryKey !== 'accommodation';
            
            return (
              <div className="category" key={categoryKey}>
                <div className="category-header">
                  <span className="category-title">{formatCategoryTitle(categoryKey)}</span>
                </div>
                {isVocabStyle ? (
                  items.map((item, index) => (
                    <VocabCard key={index} {...item} />
                  ))
                ) : (
                  items.map((item, index) => (
                    <PhraseCard key={index} {...item} />
                  ))
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div id="toast" className="toast"></div>
    </>
  )
}
