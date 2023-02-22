import './MidOne.css';

const SubMidOne = ({text1, text2, text3, text4}) => {
    return (
        
              <div style={{height:'75px',border:"1px solid #ccc", paddingBottom:'5px'}}>
                <div style={{height: '100%', padding: '5px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between',height:'50%'}}>
                    <p className='boldText'>{text1}</p>
                    <p>{text2}</p>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between',height:'50%'}}>
                    <p>{text3}</p>
                    <p className='boldText'>{text4}</p>
                  </div>
                </div>
              
        </div>
    );
};

export default SubMidOne;