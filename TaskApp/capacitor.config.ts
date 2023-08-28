import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'task-app',
  webDir: 'dist/task-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
