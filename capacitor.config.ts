import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tertis.myapp',
  appName: 'kiosk-app',
  webDir: 'dist/kioskApp/browser',
  android: {
    // Keep the WebView edge-to-edge so the kiosk fills every pixel.
    backgroundColor: '#000000',
  },
  plugins: {
    StatusBar: {
      style: 'Dark',
      backgroundColor: '#000000',
      overlaysWebView: false,
    },
  },
};

export default config;
