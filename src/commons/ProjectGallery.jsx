import { useState } from "react";
import asset from "../utils/asset";

export default function ProjectGallery({ slides = [] }) {
    const [index, setIndex] = useState(0);

    if (!slides.length) return null;

    const current = slides[index];
    const hasMany = slides.length > 1;

    const goPrev = () => {
        setIndex((i) => (i - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        setIndex((i) => (i + 1) % slides.length);
    };

    return (
        <div className="proj-gallery">
            {hasMany && (
                <button
                    type="button"
                    className="proj-nav proj-nav--prev"
                    onClick={goPrev}
                    aria-label="Previous slide"
                >
                    ‹
                </button>
            )}

            <div className="proj-gallery-image">
                <img
                    src={asset(current.image)}
                    alt={current.title || "Project screenshot"}
                />
            </div>

            <div className="proj-gallery-text">
                {current.title && <h4 className="proj-slide-title">{current.title}</h4>}
                {/* Typewriter for the slide text */}
                <p data-ty className="proj-slide-text">
                    {current.text}
                </p>

                {hasMany && (
                    <p className="proj-gallery-counter">
                        {index + 1} / {slides.length}
                    </p>
                )}
            </div>

            {hasMany && (
                <button
                    type="button"
                    className="proj-nav proj-nav--next"
                    onClick={goNext}
                    aria-label="Next slide"
                >
                    ›
                </button>
            )}
        </div>
    );
}