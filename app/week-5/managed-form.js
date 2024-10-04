"use client"

export default function RegistrationForm(){

    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event);
    }

    return(
        <form onSubmit={handleSubmit} className="bg-slate-200 p-5">
            <div>
                <label>Full Name:</label>
                <input type="text" name="fname" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="reg_mail" />
            </div>
            <div>
                <label>Birth Date:</label>
                <input type="date" />
            </div>
            <div>
                <label>Subscription Type:</label>
                <select>
                    <option value="free">Free Plan</option>
                    <option value="basic">Basic Plan</option>
                    <option value="premium">Premium Plan</option>
                </select>
            </div>
            <div>
                <label>Message:</label>
                <textarea></textarea>
            </div>

            <div>
                <button>Submit Registration</button>
            </div>
        </form>
    );
}