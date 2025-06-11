"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./carousel.module.css";

export default function CarouselStadium({ team }) {
  // Cria array de imagens válidas
  const images = [team.stadiumImage1, team.stadiumImage2, team.stadiumImage3].filter(Boolean);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  // Número de slides visíveis por vez
  const visibleSlides = 1;

  // Número total de imagens
  const totalImages = images.length;

  // Função para navegar para um slide específico
  const goToSlide = (index) => {
    if (isAnimating) return;

    setIsAnimating(true);

    let normalizedIndex = index;

    if (index >= totalImages) {
      normalizedIndex = 0;
    } else if (index < 0) {
      normalizedIndex = totalImages - 1;
    }

    setCurrentIndex(normalizedIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Próximo slide
  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  // Slide anterior
  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  // Reset para a primeira posição quando chegamos ao final
  useEffect(() => {
    if (currentIndex >= totalImages) {
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = "none";
          setCurrentIndex(0);
          void carouselRef.current.offsetWidth;
          carouselRef.current.style.transition = "transform 0.5s ease";
        }
      }, 500);
    }
  }, [currentIndex, totalImages]);

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.carouselButton} ${styles.prevButton}`}
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div className={styles.carouselWrapper}>
        <div
          ref={carouselRef}
          className={styles.carouselInner}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
          }}
        >
          {images.map((img, idx) => (
            <div key={idx} className={styles.carouselItem}>
              <div className={styles.cardImageContainer}>
                <img src={img} alt={team.stadiumName} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardDescription}>
                  Estádio: {team.stadiumName}
                </p>
                <p className={styles.cardDescription}>
                  Localização: 📍{team.stadiumLocation}
                </p>
                <span className={styles.cardDate}>
                  Capacidade: 👥{team.stadiumCapacity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.carouselButton} ${styles.nextButton}`}
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Indicadores de paginação (bolinhas) */}
      <div className={styles.pagination}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationDot} ${
              currentIndex === index ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}