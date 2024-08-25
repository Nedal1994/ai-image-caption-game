'use client'

// components/AiImage.tsx
import { useState, useEffect } from 'react';

interface AiData {
  imageUrl: string;
  caption: string;
}

const AiImage = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [caption, setCaption] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAiData = async () => {
      try {
        const response = await fetch('/api/getAiImage');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: AiData = await response.json();
        setImageUrl(data.imageUrl);
        setCaption(data.caption);
      } catch (err) {
        setError('Failed to load image and caption');
      } finally {
        setLoading(false);
      }
    };

    fetchAiData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <img src={imageUrl} alt="AI generated" style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{caption}</p>
    </div>
  );
};

export default AiImage;

