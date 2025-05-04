
export const ValidateForm=(name,email,password)=>{

    const validName= /^[A-Z][a-z]+(?:[-' ][A-Z][a-z]+)*$/i.test(name);
    const validEmail=/^(?=[a-z0-9._%+-]*\d)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i.test(email);
    const validPassword=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if(!validName) return "Name is not valid";
    if(!validEmail) return "Email is not valid";
    if(!validPassword) return "Password is not valid";

    return null;
}

export const ValidateEmail=(emailId)=>{
   const validEmailAddress=/^(?=[a-z0-9._%+-]*\d)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i.test(emailId);
    if(!validEmailAddress) return "Email is not valid";
    return null; 
}