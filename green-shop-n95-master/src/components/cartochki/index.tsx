import React from "react";

interface CardProps {
  title: string;
  text: string;
  img: string;
}

const PlantCard: React.FC<CardProps> = ({ title, text, img }) => {
  return (
    <div className="flex items-center gap-6 bg-white shadow rounded-xl p-6">
      <img
        src={img}
        alt="plant"
        className="w-40 h-40 object-contain"
      />

      <div>
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>

        <p className="text-gray-600 mb-4">
          {text}
        </p>

        <a
          href=""
          className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Find More →
        </a>
      </div>
    </div>
  );
};

const PlantCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <PlantCard
        title="SUMMER CACTUS & SUCCULENTS"
        text="We are an online plant shop offering a wide range of cheap and trendy plants"
        img="https://green-shop-otabek.vercel.app/assets/1-Bhbx3ro7.png"
      />

      <PlantCard
        title="STYLING TRENDS & MUCH MORE"
        text="We are an online plant shop offering a wide range of cheap and trendy plants"
        img="https://green-shop-otabek.vercel.app/assets/2-6x9mMEaU.png"
      />
    </div>
  );
};

export default PlantCards;
