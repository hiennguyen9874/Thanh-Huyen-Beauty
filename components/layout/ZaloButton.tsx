import Image from 'next/image';

import { siteConfig } from '@/config/site';

const ZaloButton = () => {
  return (
    <a
      href={siteConfig.social.zalo}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] shadow-lg transition-transform hover:scale-110 focus:outline-none"
      aria-label="Chat với chúng tôi trên Zalo"
    >
      <Image src="/zalo-icon.svg" alt="Zalo Icon" width={32} height={32} className="h-8 w-8" />
    </a>
  );
};

export default ZaloButton;
