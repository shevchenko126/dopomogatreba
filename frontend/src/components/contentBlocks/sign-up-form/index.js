import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/font-awesome/css/font-awesome.min.css";

const SignUpForm = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />

      <main>
        <section class="main-section">
          <div class="heading">
            <div class="sign-up">
              <h2 class="sign-up-text">Sign Up</h2>
            </div>
            <div class="sign-up-btns">
              <button class="sign-up-btn google">
                <div class="sign-up-icon-btn">
                  <i class="fab fa-google"></i>
                </div>

                <p class="sign-up-btns-text">Sign up with Google</p>
              </button>
              <button class="sign-up-btn facebook">
                <div class="sign-up-icon-btn">
                  <svg
                    class="facebook-logo"
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.6666 20H2.70126V10.1414H0V6.9316H2.70116V4.64762C2.70116 1.9411 3.89588 0 7.85048 0C8.68689 0 10 0.168134 10 0.168134V3.14858H8.6208C7.2155 3.14858 6.66681 3.5749 6.66681 4.75352V6.9316H9.94738L9.65525 10.1414H6.6667L6.6666 20Z"
                      fill="#1877F2"
                    />
                  </svg>
                </div>

                <p class="sign-up-btns-text">Sign up with Facebook</p>
              </button>
            </div>
          </div>
          <div class="sign-in">
            <div class="sign-in-heading">
              <div class="sign-in-line"></div>
              <p class="sign-in-heading">or Sign up with Email</p>
            </div>
          </div>

          <form class="form">
            <div class="full-name-and-user-name">
              <input
                class="input full-name"
                type="text"
                placeholder="Full name"
              />
              <input
                class="input user-name"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="email">
              <input
                class="input email"
                type="email"
                placeholder="Username or email address"
              />
            </div>
            <div class="password">
              <input
                class="input password"
                type="password"
                placeholder="Password"
              />
              <div class="eye-div">
                <div class="eye">
                  <svg
                    class="eye-svg"
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
                      stroke="#191F33"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    class="eye-svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z"
                      stroke="#191F33"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="password">
              <input
                class="input password"
                type="password"
                placeholder="Confirm Password"
              />
              <div class="eye-div">
                <div class="eye">
                  <svg
                    class="eye-svg"
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
                      stroke="#191F33"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    class="eye-svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z"
                      stroke="#191F33"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <label for="checkbox">
              <div class="checkbox-div">
                <input type="checkbox" class="checkbox" id="checkbox" />
                <div class="checkbox-sign"></div>
                <span class="chekbox-description">
                  I`ve read and agree with your{" "}
                  <a class="chekbox-description-ref" href="#">
                    Privacy Policy
                  </a>{" "}
                  and
                  <a class="chekbox-description-ref" href="#">
                    {" "}
                    Terms & Conditions
                  </a>
                </span>
              </div>
            </label>
          </form>
          <button class="log-in-btn">
            <div class="button-sign-in">
              <label class="sign-in-btn-description">sign in</label>
              <div class="arr-div">
                <svg
                  class="hor-arr"
                  width="20"
                  height="2"
                  viewBox="0 0 20 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.75 1H18.25"
                    stroke="white"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  class="vert-arr"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1.25L8.25 8L1.5 14.75"
                    stroke="white"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </button>
          <div class="log-in">
            <p class="log-in-text">Don’t have account?</p>
            <a href="#" class="log-in-ref">
              Sign Up
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUpForm;
