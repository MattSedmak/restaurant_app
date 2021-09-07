import '../gdpr/gdprPopup.css';
import '../gdpr/GdprPopupStyle';
import { PopupButtons, PopupMain } from '../gdpr/GdprPopupStyle';

interface IGdprPopup {
    showPopup: boolean;
    closePopup: () => void;
} 

const GdprPopup = (props: IGdprPopup) => {

    const showHideClassName = props.showPopup
    ? 'popup display-popup'
    : 'popup remove-popup';

    return (
        <div className={showHideClassName}>
            <PopupMain>
                <h5>Angående GDPR och personlig information</h5>
                <p>Vi värnar om din personliga integritet 
                    och det är därför viktigt att du kan känna dig 
                    trygg när det handlar om hanteringen av dina personuppgifter. 
                    Vi är öppna med hur dina personuppgifter hanteras och 
                    vi följer gällande lagar, regler och riktlinjer kring dataskydd. 
                    Du kan även känna dig trygg med att vi inte säljer dina personuppgifter 
                    vidare till andra företag.
                    </p>
                    <PopupButtons>
                    <button onClick={props.closePopup}>Godkänn</button>
                    <a href="https://www.imy.se/verksamhet/dataskydd/" 
                    target="_blank" 
                    rel="noopener noreferrer">Läs mer...</a>
                    </PopupButtons>
            </PopupMain>   
        </div>
    )
}

export default GdprPopup
