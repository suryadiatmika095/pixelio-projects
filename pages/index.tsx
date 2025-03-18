import { useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
}

interface HomeProps {
  images: Image[];
}

export default function Home({ images }: HomeProps) {
  const [searchResults, setSearchResults] = useState<Image[]>(images);

  return (
    <div className="container">
      <h1 className="title">Pixelio Gallery</h1>
      
      {/* Search Bar */}
      <SearchBar setSearchResults={setSearchResults} />

      {/* Grid Gambar */}
      <div className="gallery">
        {searchResults.length > 0 ? (
          searchResults.map((image) => <ImageCard key={image.id} image={image} />)
        ) : (
          <p className="no-results">No images found</p>
        )}
      </div>

      {/* Tambahkan Footer */}
      <Footer />
    </div>
  );
}

// Server Side Rendering (SSR)
export const getServerSideProps: GetServerSideProps = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;

  if (!API_KEY) {
    return {
      props: {
        images: [],
      },
    };
  }

  try {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo`);
    return {
      props: {
        images: response.data.hits || [],
      },
    };
  } catch (error) {
    console.error("Error fetching images:", error);
    return {
      props: {
        images: [],
      },
    };
  }
};
