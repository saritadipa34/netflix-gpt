export  const CheckValidData = (email,password) => {
const isEmailValid = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/.test(email);
const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

if(!isEmailValid) return "This email is not valid";
if(!isPasswordValid) return "This Password is not valid";

return null;
}