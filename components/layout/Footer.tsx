'use client';

import Link from 'next/link';

import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="py-8 text-white" style={{ backgroundColor: 'var(--footer-color)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <span className="font-serif text-2xl font-semibold">Thanh Huyền Beauty</span>
            <p className="mt-1 text-sm opacity-80">Spa chăm sóc da chuyên nghiệp</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/#home" className="opacity-80 transition hover:opacity-100">
              Trang chủ
            </Link>
            <Link href="/#about" className="opacity-80 transition hover:opacity-100">
              Giới thiệu
            </Link>
            <Link href="/#services" className="opacity-80 transition hover:opacity-100">
              Dịch vụ
            </Link>
            <Link href="/#pricing" className="opacity-80 transition hover:opacity-100">
              Bảng giá
            </Link>
            <Link href="/blog" className="opacity-80 transition hover:opacity-100">
              Blog
            </Link>
            <Link href="/#contact" className="opacity-80 transition hover:opacity-100">
              Liên hệ
            </Link>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <div className="mb-4 text-sm opacity-80 md:mb-0">
            © {new Date().getFullYear()} Thanh Huyền Beauty. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com/thanhhuyenbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition hover:opacity-100"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com/thanhhuyenbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition hover:opacity-100"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://tiktok.com/@thanhhuyenbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition hover:opacity-100"
              aria-label="TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://zalo.me/thanhhuyenbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition hover:opacity-100"
              aria-label="Zalo"
            >
              <span className="text-xs">Zalo</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
