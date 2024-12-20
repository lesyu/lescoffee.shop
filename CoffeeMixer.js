import React, { useState } from 'react';
import axios from 'axios';

function CoffeeMixer() {
    const [form, setForm] = useState({
        beanType: '',
        milkAmount: '',
        preparationMethod: '',
        milkType: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/coffee-mixer', form)
            .then(response => alert('調配成功！'))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>咖啡豆類別:</label>
            <input type="text" name="beanType" value={form.beanType} onChange={handleChange} required />
            
            <label>牛奶份量:</label>
            <input type="number" name="milkAmount" value={form.milkAmount} onChange={handleChange} required />
            
            <label>製作方式:</label>
            <input type="text" name="preparationMethod" value={form.preparationMethod} onChange={handleChange} required />
            
            <label>牛奶種類:</label>
            <input type="text" name="milkType" value={form.milkType} onChange={handleChange} required />
            
            <button type="submit">調配咖啡</button>
        </form>
    );
}

export default CoffeeMixer; 