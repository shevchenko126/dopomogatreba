//import './App.css';
import FreshRecommendedAds from './components/contentBlocks/FreshRecommendedAds';
import SignInFeature from './components/contentBlocks/08_SignIn_Feature';
import Description from './components/contentBlocks/Description';

let description = [
  {
    header: 'Descriptions',
    content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,`
  },
  {
    header: 'Features',
    content: [
      '128GB internal memory with 8GB RAM',
      'Fingerprint (under diaplay, optical), accelerometr.',
      'Android 11, Funtouch 11.1 Operating System',
      'Glass front, plastic frame, plastic back',
      'LED flash, HDR, panorama',
      'Li-Po 4000 mAh, non-removable battery',
      'Fast charging 33W, 63% in 30 min (advertised)',
      '1 Year international warranty'
    ]
  }
]

function App() {
  return (
    <div className="App">
      {/* <FreshRecommendedAds />
      <SignInFeature /> */}
        <Description props={description} />
    </div>
  );
}

export default App;
