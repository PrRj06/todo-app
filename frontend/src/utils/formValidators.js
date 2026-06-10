export const validatePassword = (password) => {
    let error = "";

    if (!password.trim()) {
        error = "Password cannot be empty";
    } else if (password.length < 8) {
        error = "Password should be at least 8 characters long.";
    } else if (!/[A-Z]/.test(password)) {
        error = "Password should contain at least 1 uppercase character.";
    } else if (!/[a-z]/.test(password)) {
        error = "Password should contain at least 1 lowercase character.";
    } else if (!/[0-9]/.test(password)) {
        error = "Password should contain at least 1 digit.";
    } else if (!/[!@#&?]/.test(password)) {
        error = "Password should contain at least 1 special character.";
    }

    return error;
};

export const validateLoginPassword = (password) => {
    let error = "";

    if (!password.trim()) {
        error = "Password cannot be empty.";
    }

    return error;
};

export const validateEmail = (email) => {
    let error = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
        error = "Email cannot be empty.";
    } else if (!emailPattern.test(email)) {
        error = "Email should be in this format example@xyz.com.";
    }

    return error;
};

export const validateName = (name) => {
    let error = "";

    if (!name.trim()) {
        error = "Name cannot be empty.";
    } else if (name.trim().length < 2) {
        error = "Name should contain at least 2 characters.";
    }

    return error;
};