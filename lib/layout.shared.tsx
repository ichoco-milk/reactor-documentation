import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img 
            src="/logo-with-text.svg" 
            alt={appName}
            style={{ height: '32px', width: 'auto' }}
          />
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}