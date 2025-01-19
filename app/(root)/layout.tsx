import Header from '@/components/shared/header';

type RootLayoutProps = unknown;

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='w-full flex-1'>{children}</main>
    </div>
  );
}
