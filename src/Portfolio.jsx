export default function Portfolio() {
  const images = [
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025..jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.2.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.3.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.4.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.5.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.6.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.7.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.8.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.9.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.10.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.11.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.12.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.13.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.14.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.15.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.16.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.17.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.18.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.19.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.20.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.21.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.22.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.23.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.24.jpg",
    "/images/Aya-Zaki-Architecture-Designer-Portfolio-025.25.jpg",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      {images.map((img, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={img}
            alt={`portfolio-${index}`}
            className="w-full h-64 object-cover hover:scale-105 transition"
          />
        </div>
      ))}
    </div>
  );
}