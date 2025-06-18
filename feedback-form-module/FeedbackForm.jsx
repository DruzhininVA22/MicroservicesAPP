import React, { useState } from 'react';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    usability_score: 3,
    speed_score: 3,
    satisfaction: null,
    effort_score: 4,
    suggestion: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? e.target.checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/feedback/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) alert("Спасибо за обратную связь!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Обратная связь</h3>
      <label>Удобство интерфейса (1-5):</label>
      <input type="number" name="usability_score" min="1" max="5" value={formData.usability_score} onChange={handleChange} />

      <label>Скорость выполнения задач (1-5):</label>
      <input type="number" name="speed_score" min="1" max="5" value={formData.speed_score} onChange={handleChange} />

      <label>Вы довольны системой? (да/нет):</label>
      <select name="satisfaction" value={formData.satisfaction} onChange={handleChange}>
        <option value="">Выберите</option>
        <option value="true">Да</option>
        <option value="false">Нет</option>
      </select>

      <label>Сложность выполнения задачи (1-7):</label>
      <input type="number" name="effort_score" min="1" max="7" value={formData.effort_score} onChange={handleChange} />

      <label>Ваши предложения:</label>
      <textarea name="suggestion" value={formData.suggestion} onChange={handleChange}></textarea>

      <label>Email (необязательно):</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <button type="submit">Отправить</button>
    </form>
  );
}

export default FeedbackForm;
