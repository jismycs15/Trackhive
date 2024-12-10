import React, { useState } from "react";
import './FileInward.css'

function FileInward() {
    const [formData, setFormData] = useState({});

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Process the form data
        console.log("Form Data Submitted:", formData);
    }

    return (
    
        <div className="outer-div">

            <h3 className="header">File Inward</h3>
            
            <form onSubmit={handleSubmit} className="for">
                {/* first row */}
                <div className="main-div">
                    <div className="First-div">
                        <label>
                            FileName:
                        </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="email"
                            placeholder="Filename"
                        />
                    </div>
                    <div className="First-div">
                        <label>
                            Issue Date:
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="email"
                        />
                    </div>
                    <div className="First-div">
                        <label>
                            Expiry Date:
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="email"
                        />
                    </div>
                    <div className="First-div">
                        <label for="dropdown">Type of Field:</label>
                        <select id="dropdown" name="field" onChange={handleChange}
                            className="emailselect">
                            <option value="option1">--Select--</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
                 {/* second row */}
                 <div className="main-div">
                    <div className="First-div">
                    <label for="dropdown">Company</label>
                        <select id="dropdown" name="field" onChange={handleChange}
                            className="emailselect">
                            <option value="option1">--Select--</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div className="First-div">
                    <label for="dropdown">Department</label>
                        <select id="dropdown" name="field" onChange={handleChange}
                            className="emailselect">
                            <option value="option1">--Select--</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div className="First-div">
                    <label for="dropdown">Username</label>
                        <select id="dropdown" name="field" onChange={handleChange}
                            className="emailselect">
                            <option value="option1">--Select--</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div className="First-div">
                        <label for="dropdown">Crown storage</label>
                        <select id="dropdown" name="field" onChange={handleChange}
                            className="emailselect">
                            <option value="option1">--Select--</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
                 {/* Third row */}
                 <div className="main-div">
                    <div className="First-div">
                    <label for="dropdown">scan</label>
                        <select id="dropdown" name="field" onChange={handleChange}
                            className="emailselect">
                            <option value="option1">--Select--</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div className="First-div">
                    <label for="dropdown">File Holding Tenure</label>
                        <select id="dropdown" name="field" onChange={handleChange}
                            className="emailselect">
                            <option value="option1">--Select--</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div className="First-div">
                    <label for="dropdown">Issue Year</label>
                        <select id="dropdown" name="field" onChange={handleChange}
                            className="emailselect">
                            <option value="option1">--Select--</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div className="First-div">
                    <label>
                            Location:
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="email"
                            placeholder="Select location"
                        />
                    </div>
                    
                </div>
                <div className="button"> 
                <button>Save</button> 
                <button>Reset</button>
                <button>Draft</button>
                <button>Close & Update</button>
                <button>Back</button>
                </div>
            </form>
        </div>

    );
}

export default FileInward;
