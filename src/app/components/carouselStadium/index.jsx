// components/Carousel.js
"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./carousel.module.css";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const carouselRef = useRef(null);

    // Número de slides visíveis por vez
    const visibleSlides = 1;

    // Número total de posições únicas no carrossel
    const totalItems = items.length;

    // Duplica os itens para criar efeito de loop infinito
    const extendedItems = [...items, ...items.slice(0, visibleSlides)];

    // Função para navegar para um slide específico
    const goToSlide = (index) => {
        if (isAnimating) return;

        setIsAnimating(true);

        // Normaliza o índice para que fique dentro dos limites do array original
        let normalizedIndex = index;

        if (index >= totalItems) {
            normalizedIndex = 0;
        } else if (index < 0) {
            normalizedIndex = totalItems - 1;
        }

        setCurrentIndex(normalizedIndex);

        // Desativa a animação após a transição
        setTimeout(() => {
            setIsAnimating(false);
        }, 500); // Igual à duração da transição CSS
    };

    // Move apenas um card por vez
    const nextSlide = () => {
        goToSlide(currentIndex + 1);
    };

    // Move apenas um card por vez
    const prevSlide = () => {
        goToSlide(currentIndex - 1);
    };

    // Reset para a primeira posição quando chegamos ao final
    useEffect(() => {
        if (currentIndex >= totalItems) {
            // Usando setTimeout para permitir que a animação termine
            setTimeout(() => {
                // Desativa a transição temporariamente para um reset instantâneo
                if (carouselRef.current) {
                    carouselRef.current.style.transition = "none";
                    setCurrentIndex(0);

                    // Força um reflow para aplicar a mudança antes de reativar a transição
                    void carouselRef.current.offsetWidth;

                    // Reativa a transição
                    carouselRef.current.style.transition = "transform 0.5s ease";
                }
            }, 500);
        }
    }, [currentIndex, totalItems]);

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
                    {extendedItems.map((item, index) => (
                        <div key={`${item.id}-${index}`} className={styles.carouselItem}>
                            <div className={styles.carouselCard}>
                                <div className={styles.cardImageContainer}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className={styles.cardImage}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.tituloCard}> 
                                    <h3 className={styles.cardTitle}>{item.name}</h3>
                                    </div>
                                    <p className={styles.cardDescription}>Localização: 📍{item.location} </p>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.cardDate}>Capacidade: 👥{item.capacity} </span>
                                    </div>
                                </div>
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
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.paginationDot} ${currentIndex === index ? styles.activeDot : ""
                            }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir para o slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;