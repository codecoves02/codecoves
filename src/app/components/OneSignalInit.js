'use client';

import { useEffect } from 'react';

export default function OneSignalInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
      await OneSignal.init({
        appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
        notifyButton: { enable: true },
        allowLocalhostAsSecureOrigin: true,
        promptOptions: {
          slidedown: {
            prompts: [
              {
                type: 'push',
                autoPrompt: true,
                text: {
                  actionMessage: 'Stay updated with the latest news and offers from CodeCoves!',
                  acceptButton: 'Allow',
                  cancelButton: 'No Thanks',
                },
                delay: {
                  pageViews: 1,
                  timeDelay: 3,
                },
              },
            ],
          },
        },
      });
    });

    const script = document.createElement('script');
    script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
