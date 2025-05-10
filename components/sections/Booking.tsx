'use client';

import { FormEvent, useState } from 'react';

import Image from 'next/image';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission - this would connect to your API in a real app
    console.warn('Form submitted:', formData);
    alert('Cảm ơn bạn đã đặt lịch. Chúng tôi sẽ liên hệ sớm để xác nhận!');
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      note: '',
    });
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="md:flex">
            <div
              className="flex items-center justify-center p-8 md:w-1/2"
              style={{
                background: 'linear-gradient(to bottom, var(--secondary), var(--primary))',
              }}
            >
              <div className="text-center">
                <h3
                  className="mb-4 font-serif text-2xl font-semibold"
                  style={{ color: 'var(--text-primary-dark)' }}
                >
                  Đặt Lịch Hẹn
                </h3>
                <p className="mb-6 text-gray-600">
                  Điền thông tin để đặt lịch hẹn với chuyên viên của chúng tôi. Chúng tôi sẽ liên hệ
                  xác nhận trong vòng 24h.
                </p>
                <Image
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Booking"
                  className="mx-auto w-full max-w-xs rounded-lg"
                  width={400}
                  height={500}
                />
              </div>
            </div>
            <div className="p-8 md:w-1/2">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                    Họ và tên*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                    placeholder="Nguyễn Văn A"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                    Số điện thoại*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                    placeholder="0901234567"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1 block text-sm font-medium text-gray-700">
                    Dịch vụ quan tâm*
                  </label>
                  <select
                    id="service"
                    className="form-select w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Chọn dịch vụ</option>
                    <option value="trị mụn">Trị mụn chuyên sâu</option>
                    <option value="tái tạo da">Tái tạo da sinh học</option>
                    <option value="chống lão hóa">Chống lão hóa Premium</option>
                    <option value="dưỡng trắng">Dưỡng trắng hoàn hảo</option>
                    <option value="da nhạy cảm">Chăm sóc da nhạy cảm</option>
                    <option value="da dầu">Cân bằng da dầu</option>
                    <option value="khác">Tư vấn dịch vụ khác</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="mb-1 block text-sm font-medium text-gray-700">
                    Ngày hẹn*
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="form-input w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="time" className="mb-1 block text-sm font-medium text-gray-700">
                    Giờ hẹn*
                  </label>
                  <select
                    id="time"
                    className="form-select w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                    required
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="">Chọn khung giờ</option>
                    <option value="9-11">9:00 - 11:00</option>
                    <option value="11-13">11:00 - 13:00</option>
                    <option value="13-15">13:00 - 15:00</option>
                    <option value="15-17">15:00 - 17:00</option>
                    <option value="17-19">17:00 - 19:00</option>
                    <option value="19-21">19:00 - 21:00</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="note" className="mb-1 block text-sm font-medium text-gray-700">
                    Ghi chú
                  </label>
                  <textarea
                    id="note"
                    rows={3}
                    className="form-textarea w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                    placeholder="Tình trạng da hoặc yêu cầu đặc biệt..."
                    value={formData.note}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full rounded-lg px-6 py-3 font-medium transition duration-300"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Gửi yêu cầu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
