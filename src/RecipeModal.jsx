import React from "react";
import "./RecipeModal.css";

const RecipeModal = ({ recipe, onClose }) => {
    // Convert instructions string into bullet points
    const steps = recipe.strInstructions
        ? recipe.strInstructions
            .split(".")
            .filter(step => step.trim() !== "")
        : [];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✖</button>

                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h2>{recipe.strMeal}</h2>

                <h3 className="steps-title">🧾 Cooking Steps</h3>

                <ul className="steps-list">
                    {steps.map((step, index) => (
                        <li key={index}>{step.trim()}.</li>
                    ))}
                    {steps.length === 0 ? (
                        <p className="no-steps">
                            ⚠️ Recipe instructions not available.
                        </p>
                    ) : (
                        <ul className="steps-list">
                            {steps.map((step, index) => (
                                <li key={index}>{step.trim()}.</li>
                            ))}
                        </ul>
                    )}

                </ul>
            </div>
        </div>
    );
};

export default RecipeModal;
