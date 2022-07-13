import React, {useState, useCallback} from 'react';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";



const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameEmail, setUserNameEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkAgree, setCheckAgree] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const togglePassword =useCallback(()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  },[passwordType])

  const confirmTogglePassword =useCallback(()=>{
      if(confirmPasswordType==="password")
      {
        setConfirmPasswordType("text")
        return;
      }
      setConfirmPasswordType("password")
    },[confirmPasswordType]) 

  const fullNameChangeHandler = (event)=>{
    setFullName(event.target.value)
  }
  const userNameChangeHandler = (event)=>{
    setUserName(event.target.value)
  }
  const userNameEmailChangeHandler = (event)=>{
    setUserNameEmail(event.target.value)
  }
  const passwordChangeHandler = (event)=>{
    setPassword(event.target.value)
  }
  const confirmPasswordChangeHandler = (event)=>{
    setConfirmPassword(event.target.value)
  }
  const checkAgreeChangeHandler = ()=>{
    setCheckAgree(!checkAgree);
  }

  const signUpBtnGoogleHandler =(props)=>{
  }
  const signUpBtnFacebookHandler =(props)=>{
  }

  const signUpBtnHandler = (event)=>{
      event.preventDefault();
      if ((fullName.trim().length ===0) || userName.trim().length ===0 || userNameEmail.trim().length ===0 || password.trim().length ===0 || confirmPassword.trim().length===0 || confirmPassword.trim().length===0 || !checkAgree)
          {
          alert('Please, enter the data into the form for submission!');
          return
          }
      setPasswordType("password");
      setConfirmPasswordType("password");
      const signInData = {
        name: fullName,
        user: userName,
        userEmail: userNameEmail,
        pswd: password,
        confPswd:confirmPassword,
        agree: checkAgree
      }
      setFullName('')
      setUserName('')
      setUserNameEmail('')
      setPassword('')
      setConfirmPassword('')
      setCheckAgree(false)
    }
    
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/> 
      <link rel="stylesheet" href="/css/index.css"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"/>


      <script src="https://kit.fontawesome.com/13676e3493.js" crossorigin="anonymous"></script>

      <form className="row align-items-center main-form" onSubmit={signUpBtnHandler}>
      
          <div className="row align-items-center heading p-0">
            <div className="col align-items-center sign-up p-0">Sign Up</div>
            <div className="row align-items-start sign-up-btns">
              <div className="col  sign-up-btn"> 
                <button type="button" className="d-flex justify-content-center align-items-center btn google" onClick={signUpBtnFacebookHandler}>
                  <i className="fab fa-google "></i>
                  Sign up with google</button>
              </div>
              <div className="col sign-up-btn">
                <button type="button" className="d-flex justify-content-center align-items-center btn facebook" onClick={signUpBtnGoogleHandler}>
                  <i className="fab fa-facebook-f justify-content-center"></i>
                  Sign up with Facebook</button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center line-text">
            <div className="row line"></div>
            <div className="row line-paragraph">
              <p className="m-0 p-0 text-center">or Sign up with Email</p>
            </div>
          </div>
          
          <div className="row align-items-start inputs m-0">
            <div className="row align-items-center justify-content-start fullname-username m-0 p-0">
              <div className="col p-0">
                <input type="text" className="form-control input" id="inputFullName" placeholder="Full name" value={fullName} onChange={fullNameChangeHandler} />
              </div>
              <div className="col p-0">
                <input type="text" className="form-control input" id="inputUserName" placeholder="Username" value={userName} onChange={userNameChangeHandler} />
              </div>
            </div>
            <div className="col p-0">
              <input type="text" className="form-control input" id="inputEmail" placeholder="Username or email address" value={userNameEmail} onChange={userNameEmailChangeHandler} />
            </div>

            <div className="col p-0 inputPassword">
              <input type={passwordType} className="form-control input" id="inputPassword" placeholder="Password" onChange={passwordChangeHandler} value={password} />
              <div className="btn-eye-div">
                    <button  type="button" className="btn-eye" onClick={togglePassword}>
                     {passwordType==="password"? 
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                     </svg>
                        :<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                      </svg>  }
                    </button>
              </div>
            </div>
            
            <div className="col p-0 inputPassword">
              <input type={confirmPasswordType} className="form-control input" id="inputConfirmPassword" placeholder="Confirm Password" onChange={confirmPasswordChangeHandler} value={confirmPassword} />
              <div className="btn-eye-div">
                    <button  type="button" className="btn-eye" onClick={confirmTogglePassword}>
                     {confirmPasswordType==="password"? 
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                     </svg>
                        :<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                      </svg>  }
                    </button>
              </div>
            </div>
                     
            <div className="col p-0 ">
              <div className="form-check m-0 d-flex">
                <input className="form-check-input checkbox" checked={checkAgree}  type="checkbox" id="gridCheck" name="agreement" onChange={checkAgreeChangeHandler} value={checkAgree} />
                <label className="form-check-label" htmlFor="gridCheck">
                  I've read and agree with your <a href="#" className="pe-auto">Privacy Policy</a> and <a href="#" className="pe-auto">Terms & Conditions</a>
                </label>
                
              </div>
            </div>
          </div>
          <div className="col p-0">
            <button type="submit" className="btn btn-primary btn-lg d-flex align-items-center justify-content-center">Sign in<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16" >
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg></button>
          </div>
          <div className="col log-in d-flex align-items-center justify-content-center">Don`t have account?<a href="#" className="pe-auto sign-up">Sign Up</a></div>
          
      </form>
    </div>
  );
};

export default SignUpForm;
