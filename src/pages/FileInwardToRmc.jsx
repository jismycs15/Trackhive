import React, { useState } from "react";
import './FileInwardToRmc.css';
import HomeIcon from '@mui/icons-material/Home';


function FileInwardToRmc() {
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
            <div className="header">
                <div>
                    <span>File Send To RMC</span>
                </div>
                <span><HomeIcon /></span>
                <span>-File Send to RMC</span>
            </div>

            <form onSubmit={handleSubmit} className="form">
                {/* First row */}
                <div className="main-div">
                    <div className="First-div">
                        <label htmlFor="filename">File Number </label>
                        <input
                            type="text"
                            id="filename"
                            name="filename"
                            onChange={handleChange}
                            className="email"
                        />
                    </div>
                    <div className="First-div">
                        <label htmlFor="issueDate">File Barcode</label>
                        <input
                            type="text"
                            id="issueDate"
                            name="issueDate"
                            onChange={handleChange}
                            className="email"
                        />
                    </div>
                    <div className="First-div">
                        <label htmlFor="expiryDate">Carton Barcode</label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            onChange={handleChange}
                            className="email"
                        />
                    </div>
                    <div className="First-div">
                        <label htmlFor="issueDate">Download Pending File</label>
                        <button className="email">Download CSV</button>
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

export default FileInwardToRmc;
