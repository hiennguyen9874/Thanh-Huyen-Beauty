export interface BlogPost {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
    category: 'Chăm sóc da',
    date: '15/06/2023',
    title: '5 Sai Lầm Khi Trị Mụn Tại Nhà',
    excerpt:
      'Những thói quen tưởng chừng vô hại nhưng lại khiến tình trạng mụn trở nên tồi tệ hơn.',
    slug: '5-sai-lam-khi-tri-mun-tai-nha',
    content: `
      Trị mụn tại nhà là một phương pháp phổ biến nhưng nhiều người thường mắc phải những sai lầm có thể khiến tình trạng mụn trở nên tồi tệ hơn. Dưới đây là 5 sai lầm phổ biến cần tránh:

      1. Nặn mụn không đúng cách
      Đây là sai lầm phổ biến nhất khi trị mụn tại nhà. Nặn mụn không đúng cách có thể gây viêm nhiễm, để lại sẹo và khiến mụn lan rộng hơn.

      2. Sử dụng quá nhiều sản phẩm trị mụn
      Việc sử dụng nhiều sản phẩm trị mụn cùng lúc có thể gây kích ứng da và làm tình trạng mụn trở nên tồi tệ hơn.

      3. Không chống nắng
      Nhiều người quên rằng kem chống nắng rất quan trọng trong quá trình trị mụn. Ánh nắng có thể làm sẹo mụn đậm màu hơn.

      4. Rửa mặt quá nhiều lần
      Rửa mặt quá nhiều có thể làm mất đi lớp dầu tự nhiên của da, khiến da tiết dầu nhiều hơn và dẫn đến mụn.

      5. Thiếu kiên nhẫn
      Trị mụn cần thời gian và sự kiên nhẫn. Thay đổi sản phẩm liên tục có thể khiến da bị kích ứng và mụn càng nhiều hơn.
    `,
  },
  {
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed7d3fd',
    category: 'Chống lão hóa',
    date: '02/06/2023',
    title: 'Bí Quyết Trẻ Hóa Da Sau Tuổi 30',
    excerpt: 'Các bước chăm sóc da cơ bản nhưng hiệu quả để làm chậm quá trình lão hóa.',
    slug: 'bi-quyet-tre-hoa-da-sau-tuoi-30',
    content: `
      Sau tuổi 30, làn da bắt đầu có những dấu hiệu lão hóa rõ rệt. Tuy nhiên, với những bí quyết chăm sóc đúng cách, bạn vẫn có thể duy trì làn da trẻ trung và khỏe mạnh.

      1. Chống nắng mỗi ngày
      Sử dụng kem chống nắng SPF 30 trở lên mỗi ngày, kể cả khi ở trong nhà.

      2. Sử dụng retinol
      Retinol là thành phần chống lão hóa hiệu quả, giúp kích thích sản sinh collagen.

      3. Cung cấp đủ ẩm
      Sử dụng kem dưỡng ẩm phù hợp để duy trì độ ẩm cho da.

      4. Bổ sung collagen
      Uống collagen và bổ sung thực phẩm giàu protein để hỗ trợ da từ bên trong.

      5. Massage mặt thường xuyên
      Massage mặt giúp cải thiện tuần hoàn máu và làm săn chắc da.
    `,
  },
  {
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
    category: 'Dưỡng trắng',
    date: '20/05/2023',
    title: 'Cách Dưỡng Trắng Da An Toàn Mùa Hè',
    excerpt:
      'Bật mí các nguyên liệu thiên nhiên giúp dưỡng trắng da hiệu quả mà không gây kích ứng.',
    slug: 'cach-duong-trang-da-an-toan-mua-he',
    content: `
      Mùa hè là thời điểm làn da dễ bị sạm đen do tác động của ánh nắng mặt trời. Dưới đây là những cách dưỡng trắng da an toàn và hiệu quả:

      1. Sử dụng kem chống nắng
      Đây là bước quan trọng nhất để bảo vệ da khỏi sạm đen.

      2. Đắp mặt nạ thiên nhiên
      Sử dụng các nguyên liệu như sữa chua, mật ong, bột nghệ để làm mặt nạ dưỡng trắng.

      3. Uống đủ nước
      Giữ cho cơ thể đủ nước giúp da luôn căng mịn và sáng khỏe.

      4. Ăn nhiều rau xanh
      Bổ sung vitamin C và các chất chống oxy hóa từ rau xanh.

      5. Tránh ra nắng giữa trưa
      Hạn chế tiếp xúc với ánh nắng mặt trời từ 10h đến 16h.
    `,
  },
];
