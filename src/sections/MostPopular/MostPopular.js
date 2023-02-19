import "./MostPopular.css";
import {Card} from '../../components/index'
import popular_01 from '../../assets/images/popular-01.jpg';
import popular_02 from '../../assets/images/popular-02.jpg';
import popular_03 from '../../assets/images/popular-03.jpg';
import popular_04 from '../../assets/images/popular-04.jpg';
const MostPopular = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="section-header">
          <h4>Most Popular</h4>
        </div>
            <div className="most-popular-items">
            <Card title="Fortnite" category="Sandbox" rate="3.8" download="2.3M" image={popular_01}/>
            <Card title="Pubg"  category="stream-x" rate="8.8" download="5.3M" image={popular_02}/>
            <Card title="Dota2" category="legandry" rate="5.8" download="6.3M" image={popular_03}/>
            <Card title="CS-Go" category="battle s" rate="3.5" download="3.3M" image={popular_04}/>
            <Card title="Fortnite" category="Sandbox" rate="3.8" download="2.3M" image={popular_01}/>
            <Card title="Pubg"  category="stream-x" rate="8.8" download="5.3M" image={popular_02}/>
            <Card title="Dota2" category="legandry" rate="5.8" download="6.3M" image={popular_03}/>
            <Card title="CS-Go" category="battle s" rate="3.5" download="3.3M" image={popular_04}/>
           
            </div >
      </div>
    </>
  );
};

export default MostPopular;
