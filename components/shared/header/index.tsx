import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = unknown;

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/#' className='flex items-center'>
            {/* <Logo className='svg stroke-width-2 fill-[#ffdb51] stroke-1' /> */}
            <Image
              src='/images/logo.svg'
              alt='logo'
              width={72}
              height={72}
              className='svg stroke-popover-foreground'
            />
            <span className='ml-3 hidden text-2xl font-bold text-stone-500 lg:block'>
              {APP_NAME}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
