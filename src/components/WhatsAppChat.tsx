'use client';

import React, { useState, useEffect, useCallback, useMemo, CSSProperties } from 'react';
import { ChatSettings, ChatStorage } from '@/types/chat';

const CHAT_SETTINGS: ChatSettings = {
  // Settings extracted from the HTML's ht_ctc_chat_data span:
  number: "", 
  pre_filled: "", 
  dis_m: "show",
  dis_d: "show",
  se: 150,
  ani: "no-animation",
  url_target_d: "_blank",
  g_init: "default",
  no_number: "No WhatsApp Number Found!",
};

const getDeviceType = (): 'yes' | 'no' => {
  if (typeof window === 'undefined') return 'no';
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || window.screen.width <= 1025) ? 'yes' : 'no';
};

export default function WhatsAppChat(): React.ReactElement {
  const isMobile = useMemo<boolean>(() => getDeviceType() === 'yes', []);
  const [isChatVisible, setIsChatVisible] = useState<boolean>(false);
  const [isGreetingsOpen, setIsGreetingsOpen] = useState<boolean>(false);
  const [storage, setStorage] = useState<ChatStorage>({});

  // --- Storage Handlers ---
  const loadStorage = useCallback((): ChatStorage => {
    if (typeof localStorage === 'undefined') return {};
    try {
      const stored = localStorage.getItem("ht_ctc_storage");
      const parsed: ChatStorage = stored ? JSON.parse(stored) : {};
      setStorage(parsed);
      return parsed;
    } catch (e) {
      return {};
    }
  }, []);

  const setStorageItem = useCallback(<K extends keyof ChatStorage>(key: K, value: ChatStorage[K]) => {
    if (typeof localStorage === 'undefined') return;
    const newStorage = { ...storage, [key]: value };
    setStorage(newStorage);
    localStorage.setItem("ht_ctc_storage", JSON.stringify(newStorage));
  }, [storage]);

  // --- Greetings State Handlers (Based on d(), h(), l() in app.js) ---
  const openGreetings = useCallback((action: 'open' | 'init' | 'user_opened' = 'open') => {
    setIsGreetingsOpen(true);
    setStorageItem("g_action", action);
    if (action === "user_opened") setStorageItem("g_user_action", action);
  }, [setStorageItem]);

  const closeGreetings = useCallback((action: 'close' | 'user_closed' | 'chat_clicked' = 'close') => {
    setIsGreetingsOpen(false);
    setStorageItem("g_action", action);
    if (action === "user_closed") setStorageItem("g_user_action", action);
  }, [setStorageItem]);

  const toggleGreetings = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (isGreetingsOpen) {
      closeGreetings("user_closed");
    } else {
      openGreetings("user_opened");
    }
  }, [isGreetingsOpen, openGreetings, closeGreetings]);

  // --- Core Action: Open WhatsApp (Based on y() in app.js) ---
  const handleChatLinkClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    closeGreetings("chat_clicked");
    
    setTimeout(() => {
      const { number, pre_filled, no_number, url_target_d } = CHAT_SETTINGS;
      if (!number) {
        alert(no_number); // Simulates original alert
        return;
      }

      const preFilledText = encodeURIComponent(
        pre_filled.replace(/\[url]/gi, window.location.href)
      );
      let url = `https://wa.me/${number}?text=${preFilledText}`;
      let target: string = url_target_d || '_blank';

      if (isMobile) {
        // Mobile best practice usually dictates _self for a better experience
        target = '_self'; 
      }

      window.open(url, target);
    }, 500);

  }, [isMobile, closeGreetings]);

  // --- Initialization (Based on useEffect in React, mimicking jQuery ready/display) ---
  useEffect(() => {
    const stored = loadStorage();
    const deviceDisplay = isMobile ? CHAT_SETTINGS.dis_m : CHAT_SETTINGS.dis_d;

    // Show button with delay ('se' speed)
    if (deviceDisplay === 'show') {
      setTimeout(() => setIsChatVisible(true), CHAT_SETTINGS.se);
    }

    // Initial Greetings open logic
    if (CHAT_SETTINGS.g_init && stored.g_user_action !== "user_closed") {
      if (CHAT_SETTINGS.g_init === "default" && !isMobile) {
        openGreetings("init");
      } else if (CHAT_SETTINGS.g_init === "open") {
        openGreetings("init");
      }
    }
  }, [isMobile, loadStorage, openGreetings]);
  
  // --- Styling ---
  const chatButtonStyles: CSSProperties = {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
    zIndex: 99999999,
    display: isChatVisible ? 'block' : 'none',
    cursor: 'pointer',
  };

  const greetingsBoxStyle: CSSProperties = {
    position: 'fixed',
    bottom: '75px',
    right: '15px',
    zIndex: 100000004,
    maxWidth: '300px',
    backgroundColor: 'white',
    padding: '11px',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: isGreetingsOpen ? 'block' : 'none',
  };

  return (
    <>
      {/* Greetings Box */}
      <div className="ht_ctc_chat_greetings_box" style={greetingsBoxStyle}>
        <button 
          className="ctc_greetings_close_btn" 
          onClick={toggleGreetings}
          style={{ position: 'absolute', top: '5px', right: '5px', background: 'transparent', border: 'none', fontSize: '18px', cursor: 'pointer' }}
        >
          &times;
        </button>
        <p>Ready to launch your aviation career?</p>
        <button 
          className="ht_ctc_chat_greetings_box_link" 
          onClick={handleChatLinkClick} 
          style={{ padding: '8px 15px', backgroundColor: '#046bd2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
        >
          Start Chatting
        </button>
      </div>

      {/* Main Chat Button */}
      <div 
        className={`ht-ctc ht-ctc-chat ctc-analytics style-2 ${CHAT_SETTINGS.ani}`} 
        id="ht-ctc-chat" 
        style={chatButtonStyles}
        onClick={toggleGreetings}
      >
        <div className="ht_ctc_style ht_ctc_chat_style">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="ctc-analytics ctc_s_2">
            <p className="ctc-analytics ctc_cta ctc_cta_stick ht-ctc-cta ht-ctc-cta-hover" style={{ display: 'none' }}>WhatsApp us</p>
            {/* Full SVG content needs to be included here */}
            <svg width="50px" height="50px" viewBox="0 0 1024 1024">
                {/* SVG contents omitted for response brevity */}
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}