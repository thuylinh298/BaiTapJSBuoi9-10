'use strict'
function checkInput(inputValue, messageElement) {
    if (inputValue) {
        getEle(messageElement).innerHTML = '';
        return true
    }
    else {
        getEle(messageElement).style.display = 'block'
        getEle(messageElement).innerHTML = 'Vui lòng nhập thông tin!'
        return false
    }
}

/* --- */

function validateAccount(inputValue, messageElement, maxlength) {
    getEle(messageElement).style.display = 'block'

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Vui lòng nhập tài khoản nhân viên!'
        return false
    }
    else {
        if (inputValue.length <= maxlength) {
            getEle(messageElement).innerHTML = '';
            return true
        }
        else {
            getEle(messageElement).innerHTML = `Tên tài khoản chứa tối đa ${maxlength} ký tự`
            return false
        }
    }
}

/* --- */

function validateName(inputValue, messageElement) {
    var letters = /^[\p{L} ]+$/u;

    getEle(messageElement).style.display = 'block'

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Vui lòng nhập tên nhân viên!'
        return false
    }
    else {
        if (removeAscent(inputValue).match(letters)) {
            getEle(messageElement).innerHTML = '';
            return true
        }
        else {
            getEle(messageElement).innerHTML = 'Tên nhân viên phải là chữ';
            return false
        }
    }
}

/* --- */

function validateEmail(inputValue, messageElement) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    getEle(messageElement).style.display = 'block'

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Vui lòng nhập email!'
        return false
    }
    else {
        if (inputValue.match(emailFormat)) {
            getEle(messageElement).innerHTML = '';
            return true
        }
        else {
            getEle(messageElement).innerHTML = 'Email không hợp lệ!';
            return false
        }
    }
}

/* --- */

function validatePass(inputValue, messageElement, minlength, maxlength) {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/

    getEle(messageElement).style.display = 'block'

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Vui lòng nhập mật khẩu!'
        return false
    }
    else {
        if (inputValue.match(decimal)) {
            getEle(messageElement).innerHTML = '';
            return true
        }
        else {
            getEle(messageElement).innerHTML = `Mật khẩu có độ dài từ ${minlength} đến ${maxlength}, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt`;
            return false
        }
    }
}

/* --- */

function validateDate(inputValue, messageElement) {
    getEle(messageElement).style.display = 'block'

    var dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;
    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Vui lòng nhập ngày bắt đầu làm!'
        return false
    }
    else {
        if (inputValue.match(dateformat)) {
            var operator = inputValue.split('/');
  
            var datePart = [];
            if (operator.length > 1) {
                datePart = operator;
            }

            var month = parseInt(datePart[0]);
            var day = parseInt(datePart[1]);
            var year = parseInt(datePart[2]);

            var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (month == 1 || month > 2) {
                if (day > ListofDays[month - 1]) {
                    return false;
                }
                else if (month == 2) {
                    var leapYear = false;
                    if ((!(year % 4) && year % 100) || !(year % 400))
                        leapYear = true;
                    if ((leapYear == false) && (day >= 29)) return false;
                    else
                        if ((leapYear == true) && (day > 29)) {
                            getEle(messageElement).innerHTML = 'Ngày tháng không hợp lệ! Nhập theo tháng/ngày/năm';
                            return false;
                        }
                }
            }
            getEle(messageElement).innerHTML = '';
            return true
        }
        else {
            getEle(messageElement).innerHTML = 'Ngày tháng không hợp lệ! Nhập theo tháng/ngày/năm';
            return false;
        }
    }
}

/* --- */

function validatePay(inputValue, messageElement, min, max) {
    getEle(messageElement).style.display = 'block'

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Vui lòng nhập lương nhân viên!'
        return false
    }
    else if (inputValue != '' && inputValue >= min && inputValue <= max) {
        getEle(messageElement).innerHTML = '';
        return true
    }
    else if (inputValue != '' && (inputValue < min || inputValue > max)) {
        getEle(messageElement).innerHTML = `Khoảng lương cơ bản từ ${min.toLocaleString()} đến ${max.toLocaleString()}`;
        return false
    }
}

/* --- */

function validatePosition(inputValue, messageElement) {
    if (inputValue) {
        getEle(messageElement).innerHTML = '';
        return true
    }
    else {
        getEle(messageElement).style.display = 'block'
        getEle(messageElement).innerHTML = 'Vui lòng chọn chức vụ nhân viên!'
        return false
    }
}

/* --- */

function validateWorkHours(inputValue, messageElement, min, max) {

    getEle(messageElement).style.display = 'block'

    if (inputValue == '') {
        getEle(messageElement).innerHTML = 'Vui lòng nhập số giờ làm của nhân viên!'
        return false
    }
    else {
        if (inputValue >= min && inputValue <= max) {
            getEle(messageElement).innerHTML = '';
            return true
        }
        else {
            getEle(messageElement).innerHTML = `Số giờ làm trong tháng từ ${min} đến ${max} giờ`;
            return false
        }
    }
}

