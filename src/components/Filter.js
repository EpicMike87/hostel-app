import React from 'react';

const Filter = ({
  showCafe,
  showPub,
  showParking,
  showBicycleStorage,
  setShowCafe,
  setShowPub,
  setShowParking,
  setShowBicycleStorage,
}) => {
  const handleCafeChange = () => {
    setShowCafe(!showCafe);
  };

  const handlePubChange = () => {
    setShowPub(!showPub);
  };

  const handleParkingChange = () => {
    setShowParking(!showParking);
  };

  const handleBicycleChange = () => {
    setShowBicycleStorage(!showBicycleStorage);
  };

  return (
    <div>
        Only show hostels with...
      <div>
        <label>
          <input type="checkbox" checked={showCafe} onChange={handleCafeChange} />
          Cafe <img src="/icons/mug-saucer-solid.svg" alt="Cafe Icon" />
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={showPub} onChange={handlePubChange} />
          Pub <img src="/icons/beer-mug-empty-solid.svg" alt="Pub Icon" />
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={showParking} onChange={handleParkingChange} />
          Parking <img src="/icons/square-parking-solid.svg" alt="Parking Icon" />
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={showBicycleStorage}onChange={handleBicycleChange} />
          Bicycle Storage <img src="/icons/bicycle-solid.svg" alt="Parking Icon" />
        </label>
      </div>
    </div>
  );
};

export default Filter;
