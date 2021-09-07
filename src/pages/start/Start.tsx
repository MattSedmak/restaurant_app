import { useEffect, useState } from "react";
import GdprPopup from "../../components/gdpr/GdprPopup";
import '../../components/gdpr/gdprPopup.css';

export const Start = () => {
  const [gdprPopup, setGdprPopup] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('data') === null) {
      setTimeout(() => {
        setGdprPopup(true);
      }, 1000);
    }  
  }, [])

  const closeGdprPopup = () => {
    localStorage.setItem('data', 'GDPR')
    setGdprPopup(false);
  }

  return (
    <div>
      <GdprPopup
        showPopup={gdprPopup}
        closePopup={closeGdprPopup}
      />
    </div>
  );
};
