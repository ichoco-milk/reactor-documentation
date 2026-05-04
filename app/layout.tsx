import { RootProvider } from 'fumadocs-ui/provider/next';
import SearchDialog from '@/components/search';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Reactor - Docs',
  icons: {
    icon: '/logo.svg',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            SearchDialog,
          }}>
          {children}</RootProvider>
      </body>
    </html>
  );
}
