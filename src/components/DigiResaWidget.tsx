import React, { useEffect } from 'react';
import { useConfig } from '../hooks/useConfig';

export default function DigiResaWidget() {
  const { config } = useConfig();

  useEffect(() => {
    // Remove any existing widgets to prevent duplicates
    const existingWidget = document.getElementById('digiresa-widget');
    if (existingWidget) {
      existingWidget.remove();
    }
    const existingContainer = document.getElementById('digiresa-iframe-container');
    if (existingContainer) {
      existingContainer.remove();
    }

    // Create the widget container first
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'digiresa-widget';
    document.body.appendChild(widgetContainer);

    const script = document.createElement('script');
    script.innerHTML = `
    (function() {
      const theme = '${config.theme}';
      const settings = {
        buttonColor: theme === 'cubain' ? '#7f1d1d' : '#b45d6e',
        buttonTitle: 'Réserver votre table',
        position: 'right',
        borderRadius: 16,
        iframeWidth: 26,
        iframeHeight: 58,
        iframeUrl: 'https://app.digiresa.com/reserver/cunik?q=modal',
        icon: 'heart',
        iconColor: '#ffffff',
        buttonTextColor: '#ffffff'
      };
      const icons = {
        coffee: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 66.651 66.651">
          <defs>
            <clipPath id="clip-path">
              <rect width="66.651" height="66.651" fill="none"/>
            </clipPath>
          </defs>
          <g clip-path="url(#clip-path)">
            <path d="M51.036,22.156a5.558,5.558,0,0,0-5.257-5.805h-1.4v2.68a1.631,1.631,0,1,1-3.262,0v-2.68H34.3v2.68a1.631,1.631,0,1,1-3.262,0v-2.68H24.377v2.68a1.631,1.631,0,1,1-3.262,0v-2.68H19.556A5.558,5.558,0,0,0,14.3,22.156V24.35l36.737.106Z" transform="translate(0.658 0.752)" fill="#ffffff"/>
            <path d="M12.2,66.65H54.448a12.2,12.2,0,0,0,12.2-12.2V12.2A12.2,12.2,0,0,0,54.448,0H12.2A12.2,12.2,0,0,0,0,12.2V54.447a12.2,12.2,0,0,0,12.2,12.2m-.509-43.741a8.817,8.817,0,0,1,8.52-9.068h1.559V11.828a1.631,1.631,0,0,1,3.262,0v2.012h6.659V11.828a1.632,1.632,0,0,1,3.264,0v2.012h6.816V11.828a1.631,1.631,0,0,1,3.262,0v2.012h1.4a8.817,8.817,0,0,1,8.52,9.068V46.19a6.712,6.712,0,0,1-6.693,6.73H18.389A6.712,6.712,0,0,1,11.7,46.19V26.843h.022c0-.04-.023-.074-.023-.115Z" transform="translate(0 0)" fill="#ffffff"/>
          </g>
        </svg>\`,
        heart: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 44.57 44.572">
          <defs>
            <clipPath id="clip-path-heart">
              <rect width="44.57" height="44.572" fill="none"/>
            </clipPath>
          </defs>
          <g clip-path="url(#clip-path-heart)">
            <path d="M27.875,35.372l-7.016-7.745-9.846,3.506L16.025,11.2l16.862,4.24ZM36.139,0H8.431A8.432,8.432,0,0,0,0,8.432V36.139a8.432,8.432,0,0,0,8.431,8.432H36.139a8.432,8.432,0,0,0,8.431-8.432V8.432A8.432,8.432,0,0,0,36.139,0" fill="#ffffff"/>
          </g>
        </svg>\`,
        star: \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.5 5.8 21 7 14 2 9.3 9 8.5 12 2"></polygon>
        </svg>\`
      };
      const chosenIcon = icons[settings.icon] || '';
      const widgetBtn = document.createElement('div');
      widgetBtn.id = 'digiresa-widget-btn';
      widgetBtn.innerHTML = \`
        <div id="widget-header" style="display: flex; align-items: center; gap: 5px;">
          <span style="display: inline-flex; align-items: center; background-size: 25px; margin-right: 5px;">\${chosenIcon}</span>
          <h2>\${settings.buttonTitle}</h2>
        </div>
        <span style="margin-left: 5px;">+</span>
      \`;
      widgetBtn.addEventListener('click', function() {
        document.getElementById('digiresa-iframe-container').classList.add('show');
      });
      document.getElementById('digiresa-widget').appendChild(widgetBtn);
      const iframeContainer = document.createElement('div');
      iframeContainer.id = 'digiresa-iframe-container';
      iframeContainer.innerHTML = \`
        <button id="digiresa-iframe-close">&times;</button>
        <iframe src="\${settings.iframeUrl}"></iframe>
      \`;
      document.body.appendChild(iframeContainer);
      document.getElementById('digiresa-iframe-close').addEventListener('click', function() {
        iframeContainer.classList.remove('show');
      });
    })();
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const container = document.getElementById('digiresa-iframe-container');
      if (container) {
        document.body.removeChild(container);
      }
      const widget = document.getElementById('digiresa-widget');
      if (widget) {
        document.body.removeChild(widget);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          .w-5 { width: 1.5rem; }
          .h-5 { height: 1.5rem; }
          /* Container global du widget */
          #digiresa-widget {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 9999;
            font-family: Arial, sans-serif;
          }
          /* Bouton du widget */
          #digiresa-widget-btn {
            max-width: 261px;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            background-color: ${config.theme === 'cubain' ? '#7f1d1d' : '#b45d6e'};
            color: #ffffff;
            padding: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          #digiresa-widget-btn h2 {
            margin: 0;
            font-size: 14px;
            font-weight: 600;
            font-family: Arial, sans-serif;
            color: #ffffff;
          }
          /* Container de l'iframe */
          #digiresa-iframe-container {
            position: fixed;
            right: 15px;
            bottom: 20px;
            width: 26%;
            min-width: 364px;
            height: 77vh;
            background-color: #fff;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            border-radius: 16px;
            overflow: hidden;
            transform: translateY(100%);
            transition: transform 0.5s cubic-bezier(0.25,0.8,0.25,1), opacity 0.5s ease;
            opacity: 0;
            z-index: 10000;
          }
          #digiresa-iframe-container.show {
            transform: translateY(0);
            opacity: 1;
          }
          #digiresa-iframe-container iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
          /* Bouton de fermeture de l'iframe */
          #digiresa-iframe-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: ${config.theme === 'cubain' ? '#7f1d1d' : '#b45d6e'};
            color: #ffffff;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            font-size: 20px;
            cursor: pointer;
            z-index: 101;
            line-height: 1;
            font-weight: 400;
          }
          @media (max-width: 768px) {
            #digiresa-iframe-container {
              height: 75vh !important;
            }
          }
        `}
      </style>
    </>
  );
}