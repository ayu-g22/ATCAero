// src/types/chat.ts

/** Defines the structure of the WhatsApp chat settings (from data-settings attribute). */
export interface ChatSettings {
    number: string;
    pre_filled: string;
    dis_m: 'show' | 'hide';
    dis_d: 'show' | 'hide';
    se: number; // Scroll effect animation speed in ms
    ani: string;
    url_target_d: '_blank' | '_self' | 'popup';
    g_init: 'default' | 'open' | 'no';
    no_number: string;
}

/** Defines the structure of the local storage data (ht_ctc_storage). */
export interface ChatStorage {
    g_action?: 'open' | 'close' | 'init' | 'chat_clicked';
    g_user_action?: 'user_opened' | 'user_closed';
    n_badge?: 'stop';
    g_optin?: 'y';
}