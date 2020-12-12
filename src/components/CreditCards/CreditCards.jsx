import react from 'react';

import './credit-cards.css';

export default function CreditCards () {
    return (
       <div className="cards">
           <div className="cards-box">
                <div className="cards-text">Cards</div>
                <div className="cards-container">
                    <div className="carton"></div>
                    <div className="current-balance">
                        <div className="current-saldo">
                            <h4>2850,75</h4>      
                            <p>Current Balance</p>

                            <h5>1500.50</h5>      
                            <p>income</p>

                            <h6>350</h6>      
                            <p>Outcome</p>
                        </div>
                    </div>
                </div>
                <div className="cards-footer">
                    <div className="status-bar">
                        <span>Limite de pagamento</span>
                        <span><strong>R$ 500,00</strong></span>
                    </div>
                </div>
           </div>
       </div>
    );
};