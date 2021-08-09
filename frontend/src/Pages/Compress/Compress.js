import ImageUploader from '../../Components/ImageUploader/ImageUploader';
import './Compress.scss';
import { useState } from 'react';

const Compress = () => {
  const [quality, setQuality] = useState(75);

  const sameSettingsHandler = () =>{

  }

  const differentSettingsHandler = () =>{

  }
  return (
    <div className="compress py-5">
      <div className="row">
        <div className="col-md-6">
          <h4>Advanced Options:</h4>
          <label>Quality:</label>
          <div className="d-flex justify-content-between align-items-center w-100">
            <input
              className="quality-range mr-3"
              type="range"
              max="100"
              min="0"
              step="1"
              onChange={(e) => {
                setQuality(e.target.value);
              }}
              value={quality}
            />
            <div className="input-group">
              <input
                type="nnumber"
                max="100"
                min="0"
                className="quality-input form-control"
                value={quality}
                onChange={(e) => {
                  setQuality(e.target.value);
                }}
              />
              <div className="input-group-append">
                <span className="input-group-text">%</span>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p>
              You can use the same settings for all images or choose different
              settings for each image.
            </p>
            <button
              className="btn btn-primary mr-2"
              onClick={sameSettingsHandler}>
              Same Settings
            </button>
            <button
              className="btn btn-secondary mr-2"
              onClick={differentSettingsHandler}>
              Different Settings
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <ImageUploader />
        </div>
      </div>
    </div>
  );
}
 
export default Compress;