export default function Quotes_Form() {
    return (
        <form id="form-quote">
            <div id="form-name">
                <label htmlFor="name">* Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div id="form-contact">
                <label htmlFor="email">* Email:</label>
                <label htmlFor="phone">Phone:</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
                <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" />
            </div>
            <h3>Vehicle Information</h3>
            <div id="form-vehicle">
                <label htmlFor="year">* Year:</label>
                <label htmlFor="make">* Make:</label>
                <label htmlFor="model">* Model:</label>
                <input type="number" id="year" name="year" placeholder="2024" required />
                <input type="text" id="make" name="make" placeholder="Toyota" required />
                <input type="text" id="model" name="model" placeholder="Camry" required />
            </div>
            <div id="form-service">
                <label htmlFor="service">* Service:</label>
                <select id="service" aria-placeholder="Select a Service" name="service" required>
                    <option value="full-car">Full Car Tint</option>
                    <option value="front-windows-onnly">Front Windows Only</option>
                    <option value="back-windows-only">Back Windows Only</option>
                    <option value="windshield">Windshield Tint</option>
                    <option value="ceramic">Ceramic Tint</option>
                    <option value="carbon">Carbon Tint</option>
                    <option value="tint-removal">Tint Removal</option>
                </select>
            </div>
            <div id="form-message">
                <label htmlFor="message" >Additional Details:</label>
                <textarea id="message" name="message" placeholder="Any specific preferencnes or questions?"></textarea>
            </div>
            <button type="submit">Get A Free Quote</button>
        </form>
    );
}