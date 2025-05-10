import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Thanh Huyền Beauty - Spa Chăm Sóc Da Chuyên Nghiệp';
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(to bottom, #f7e8d8, #ffffff)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
        }}
      >
        <div
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 72,
            background: 'linear-gradient(to right, #d6a863, #886a3a)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 30,
          }}
        >
          Thanh Huyền Beauty
        </div>
        <div
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: 36,
            textAlign: 'center',
            color: '#5d4037',
            marginBottom: 40,
            maxWidth: '70%',
          }}
        >
          Spa Chăm Sóc Da Chuyên Nghiệp
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
