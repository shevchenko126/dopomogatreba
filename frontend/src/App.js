//import './App.css';
import FreshRecommendedAds from './components/contentBlocks/FreshRecommendedAds';
import SignInFeature from './components/contentBlocks/08_SignIn_Feature';
import PaymentDetails from './components/contentBlocks/PaymentDetails';

const paymentDetails = {
  accountPlan: 'Premium',
  planPrice: 40
}

function App() {
  return (
    <div className="App">
      {/* <FreshRecommendedAds /> */}
      <PaymentDetails props={paymentDetails}/>
      {/* <SignInFeature /> */}
    </div>
  );
}

export default App;
