import { Button } from '@/components/ui/button';

type RootHomePageProps = unknown;

const RootHomePage = () => {
  return (
    <main className='relative flex h-screen items-center justify-center'>
      <div className='w-full'>
        <video
          src={'/images/Video-compress.mp4'}
          autoPlay
          muted
          loop
          className='w-full'
        />
      </div>
      <div className='absolute flex h-60 flex-col items-center justify-between text-2xl font-semibold text-stone-300'>
        <h1>
          {/* cspell:disable */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          mollitia.
        </h1>
        <Button
          variant='secondary'
          className='w-fit border-2 bg-white/30 backdrop-blur-sm'
        >
          Explore More
        </Button>
      </div>
    </main>
  );
};

export default RootHomePage;
