import React from "react";

interface ImageCardProps {
  image: {
    id: number;
    webformatURL: string;
    largeImageURL: string;
    tags: string;
    user: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.webformatURL} alt={image.tags} />

      <div className="image-info" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p>Photo by <span>{image.user}</span></p>
        
        {/* Download icon button - small and placed next to author name */}
        <a 
          href={image.largeImageURL} 
          download 
          target="_blank" 
          rel="noopener noreferrer" 
          className="download-btn"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ImageCard;