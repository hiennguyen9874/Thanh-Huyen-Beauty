'use client';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ContactInfoItemProps {
  icon: IconDefinition;
  title: string;
  children: React.ReactNode;
}

const ContactInfoItem = ({ icon, title, children }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start">
      <div
        className="mr-4 flex h-10 w-10 items-center justify-center rounded-full"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <FontAwesomeIcon icon={icon} style={{ color: 'var(--text-primary-dark)' }} />
      </div>
      <div>
        <h4 className="font-medium text-gray-700">{title}</h4>
        {children}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--tertiary)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4 inline-block font-serif text-3xl font-bold">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Hãy đến và trải nghiệm không gian thư giãn cùng dịch vụ chăm sóc da chuyên nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <div
              className="rounded-xl p-8 shadow-sm"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              <h3
                className="mb-6 font-serif text-xl font-semibold"
                style={{ color: 'var(--primary-dark)' }}
              >
                Thông Tin Liên Hệ
              </h3>

              <div className="space-y-6">
                <ContactInfoItem icon={faMapMarkerAlt} title="Địa chỉ">
                  <p className="text-gray-600">
                    86 Đường số 6, Phường Linh Trung, Thành phố Thủ Đức
                  </p>
                </ContactInfoItem>

                <ContactInfoItem icon={faPhoneAlt} title="Điện thoại">
                  <a
                    href="tel:+84901234567"
                    className="text-gray-600 hover:text-opacity-70 transition"
                  >
                    090 123 4567
                  </a>
                </ContactInfoItem>

                <ContactInfoItem icon={faEnvelope} title="Email">
                  <a
                    href="mailto:info@thanhhuyenbeauty.com"
                    className="text-gray-600 hover:text-opacity-70 transition"
                  >
                    info@thanhhuyenbeauty.com
                  </a>
                </ContactInfoItem>

                <ContactInfoItem icon={faClock} title="Giờ mở cửa">
                  <p className="text-gray-600">
                    Thứ 2 - Thứ 7: 9:00 - 21:00
                    <br />
                    Chủ Nhật: 9:00 - 18:00
                  </p>
                </ContactInfoItem>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 font-medium text-gray-700">Kết nối với chúng tôi</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/thanhhuyenbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--text-primary-dark)',
                    }}
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://instagram.com/thanhhuyenbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--text-primary-dark)',
                    }}
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://tiktok.com/@thanhhuyenbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--text-primary-dark)',
                    }}
                    aria-label="TikTok"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                  <a
                    href="https://zalo.me/thanhhuyenbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--text-primary-dark)',
                    }}
                    aria-label="Zalo"
                  >
                    <span className="text-xs font-medium">Zalo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="h-full overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231239159416!2d106.7926643152608!3d10.869755892258794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1628683680000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="min-h-[400px]"
                title="Thanh Huyền Beauty location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
